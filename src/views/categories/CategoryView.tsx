import { createStyles, makeStyles, Theme } from '@material-ui/core';
import SortIcon from '@material-ui/icons/ArrowUpward';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FilterIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import MaterialTable from 'material-table';
import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddButton from '../../components/AddButton';
import { deleteTransactionCategory as deleteCurrentCategory } from '../../data/actions/transactionCategoryActions';
import TransactionCategoryDTO from '../../data/DTO/TransactionCategoryDTO';
import TransactionType from '../../data/enums/TransactionType';
import { GlobalState } from '../../data/reducers';
import CategoryForm from './CategoryForm';
import ModalDialog from '../../components/ModalDialog';
import GroupingIcon from '@material-ui/icons/KeyboardArrowRight';
import { isPossibleToDeleteTransactionCategory } from '../../services/balanceService';

interface CategoryViewType {
    id: string;
    name: string;
    type: string;
    description: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            maxWidth: '100%'
        }
    }),
);

const CategoryView: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectedID, setSelectedID] = useState<string>("")
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [deleteCategory, setDeleteCategory] = useState<TransactionCategoryDTO | undefined>(undefined);
    const [cantDeleteCategory, setCantDeleteCategory] = useState<boolean>(false);
    const allCategories = useSelector((state: GlobalState) => state.transactionCategories
        .filter(c => c.type !== TransactionType.TransitExpenses && c.type !== TransactionType.TransitIncome)
        .map(el => {
            return {
                id: el.id,
                name: el.name,
                type: TransactionType[el.type],
                description: el.description
            }
        }));
    const onCancel = () => {
        setFormOpen(false);
        setSelectedID("")
    }
    const onDelete = (categoryID: string) => {
        deleteCurrentCategory(categoryID)(dispatch)
        setDeleteCategory(undefined);
    }
    const openForm = () => {
        setFormOpen(true);
    }
    const onAskToDelete = (rowData: TransactionCategoryDTO) => {
        if (isPossibleToDeleteTransactionCategory(rowData.id)) {
            setDeleteCategory(rowData);
        } else {
            setCantDeleteCategory(true);
        }
    }
    return (
        <div className={classes.container}>
            <MaterialTable
                columns={[
                    { field: "type", title: "", defaultGroupOrder: 0 },
                    { field: "name", title: "Name" },
                    { field: "description", title: "Description" }
                ]}
                data={allCategories}
                title="Categories"
                actions={[
                    {
                        icon: () => <EditIcon color="action" />,
                        tooltip: 'Modify Category',
                        onClick: (event, rowData) => {
                            setSelectedID((rowData as CategoryViewType).id)
                            setFormOpen(true)
                        }
                    },
                    {
                        icon: () => <DeleteIcon color="action" />,
                        tooltip: 'Delete Category',
                        onClick: (event, rowData) => {
                            onAskToDelete(rowData as unknown as TransactionCategoryDTO);
                        }
                    },
                ]}
                options={{
                    sorting: true,
                    paging: false,
                    actionsColumnIndex: -1,
                    filtering: true,
                    groupRowSeparator: " "
                }}
                icons={{
                    Filter: forwardRef((props, ref) => <FilterIcon {...props} ref={ref} />),
                    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
                    ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
                    SortArrow: forwardRef((props, ref) => <SortIcon {...props} ref={ref} />),
                    DetailPanel: forwardRef((props, ref) => <GroupingIcon {...props} ref={ref} />)
                }}
            />
            <AddButton onClick={openForm} />
            {formOpen && <CategoryForm
                onCancel={onCancel}
                id={selectedID}
            />}
            {deleteCategory &&
                <ModalDialog
                    title="Delete category"
                    text={`You want to delete Category "${deleteCategory.name}" ?`}
                    onApply={() => onDelete(deleteCategory.id)}
                    onCancel={() => setDeleteCategory(undefined)}
                />}
            {cantDeleteCategory &&
                <ModalDialog
                    title="Delete Category"
                    text={`You cannot delete this category because it is associated with one or more transactions`}
                    onApply={() => setCantDeleteCategory(false)}
                />
            }
        </div>
    )
}

export default CategoryView;