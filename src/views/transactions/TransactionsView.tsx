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
import { deleteTransaction as deleteCurrentTransaction } from '../../data/actions/transactionActions';
import TransactionDTO from '../../data/DTO/TransactionDTO';
import { GlobalState } from '../../data/reducers';
import TransactionForm from './TransactionForm';
import ModalDialog from '../../components/ModalDialog';
import GroupingIcon from '@material-ui/icons/KeyboardArrowRight';
import MultiActions from '../../components/MultiActions';
import MoveMoneyIcon from '@material-ui/icons/SyncAlt';
import TransactionIcon from '@material-ui/icons/Payment';
import MoveTransactionForm from './MoveTransactionForm';
import TransactionType from '../../data/enums/TransactionType';

interface TransactionViewType {
    id: string;
    name: string;
    date: string;
    value: number;
    category: string;
    categoryType: string;
    account: string;
    description: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            maxWidth: '100%'
        }
    }),
);

const TransactionView: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectedID, setSelectedID] = useState<string>("")
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [moveFormOpen, setMoveFormOpen] = useState<boolean>(false);
    const [deleteTransaction, setDeleteTransaction] = useState<TransactionDTO | undefined>(undefined);
    const allTransactions = useSelector((state: GlobalState) => state.transactions.map(el => {
        const foundCategory = state.transactionCategories.find(cat => cat.id === el.transactionCategoryID);
        const foundAccount = state.accounts.find(acc => acc.id === el.accountID);
        return {
            id: el.id,
            name: el.name,
            description: el.description,
            date: el.date,
            value: el.value,
            category: foundCategory ? foundCategory.name : "",
            account: foundAccount ? foundAccount.name : "",
            categoryType: foundCategory ? TransactionType[foundCategory.type] : ""
            
        } as TransactionViewType
    }));
    const onCancel = () => {
        setFormOpen(false);
        setSelectedID("")
    }
    const onDelete = (transactionID: string) => {
        deleteCurrentTransaction(transactionID)(dispatch)
        setDeleteTransaction(undefined);
    }
    const openForm = () => {
        setFormOpen(true);
    }
    const openMoveForm = () => {
        setMoveFormOpen(true)
    }
    return (
        <div className={classes.container}>
            <MaterialTable
                columns={[
                    { field: "categoryType", title: "Category type", defaultGroupOrder: 0 },
                    { field: "category", title: "Category", defaultGroupOrder: 1 },
                    { field: "account", title: "Wallet" },
                    { field: "name", title: "Name" },
                    { field: "value", title: "Type" },
                    { field: "date", title: "Date" },
                    { field: "description", title: "Description"}
                ]}
                data={allTransactions}
                title="Transactions"
                actions={[
                    {
                        icon: () => <EditIcon color="action"/>,
                        tooltip: 'Modify Transaction',
                        onClick: (event, rowData) => {
                            setSelectedID((rowData as TransactionViewType).id)
                            setFormOpen(true)
                        }
                    },
                    {
                        icon: () => <DeleteIcon color="action"/>,
                        tooltip: 'Delete Transaction',
                        onClick: (event, rowData) => {
                            setDeleteTransaction(rowData as unknown as TransactionDTO);
                        }
                    },
                ]}
                options={{ 
                    sorting: true, 
                    paging: false,
                    actionsColumnIndex: -1,
                    filtering: true,
                }}
                icons={{
                    Filter: forwardRef((props, ref) => <FilterIcon {...props} ref={ref} />),
                    Search:forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
                    ResetSearch:forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
                    SortArrow:forwardRef((props, ref) => <SortIcon {...props} ref={ref} />),
                    DetailPanel:forwardRef((props, ref) => <GroupingIcon {...props} ref={ref} />)
                }}
            />
            {/* <AddButton onClick={openForm} /> */}
                <MultiActions 
                    elements={
                        [
                            {
                                name: "Move money",
                                icon: <MoveMoneyIcon/>,
                                action: openMoveForm
                            },
                            {
                                name: "New transaction",
                                icon: <TransactionIcon />,
                                action: openForm
                            }
                        ]
                    }
                />
             {formOpen && <TransactionForm
                onCancel={onCancel}
                id={selectedID}
            />}
            { moveFormOpen && <MoveTransactionForm
                onCancel = {() => setMoveFormOpen(false)}
            />}
            {deleteTransaction &&
                <ModalDialog
                    title="Delete transaction"
                    text={`You want to delete Transaction on "${deleteTransaction.date}" of ${deleteTransaction.value} ?`}
                    onApply={() => onDelete(deleteTransaction.id)}
                    onCancel={() => setDeleteTransaction(undefined)}
                />}
        </div>
    )
}

export default TransactionView;