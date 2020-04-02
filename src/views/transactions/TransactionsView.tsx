import { createStyles, makeStyles, Theme } from '@material-ui/core';
import SortIcon from '@material-ui/icons/ArrowUpward';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FilterIcon from '@material-ui/icons/FilterList';
import GroupingIcon from '@material-ui/icons/KeyboardArrowRight';
import SearchIcon from '@material-ui/icons/Search';
import MaterialTable from 'material-table';
import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddButton from '../../components/AddButton';
import ModalDialog from '../../components/ModalDialog';
import { deleteTransaction as deleteCurrentTransaction } from '../../data/actions/transactionActions';
import TransactionDTO from '../../data/DTO/TransactionDTO';
import TransactionType from '../../data/enums/TransactionType';
import { GlobalState } from '../../data/reducers';
import TransactionFormNew from './form/TransactionForm';
import _ from 'lodash';

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
    const [deleteTransaction, setDeleteTransaction] = useState<TransactionDTO | undefined>(undefined);
    const allTransactions = useSelector((state: GlobalState) => {
        const transitIncomeCategory = state.transactionCategories.find(el => el.type === TransactionType.TransitIncome);
        const transitExpensesCategory = state.transactionCategories.find(el => el.type === TransactionType.TransitExpenses);
        const expensCategoryID = transitExpensesCategory ? transitExpensesCategory.id : "0";
        const incomeCategoryID = transitIncomeCategory ? transitIncomeCategory.id : "0";
        return state.transactions
            .map(el => {
                const foundCategory = state.transactionCategories.find(cat => cat.id === el.transactionCategoryID);
                const foundAccount = state.accounts.find(acc => acc.id === el.accountID);
                const transactionType = el.transactionCategoryID === expensCategoryID || el.transactionCategoryID === incomeCategoryID ? "Transfer between wallets" : (foundCategory ? TransactionType[foundCategory.type] : "")
                return {
                    id: el.id,
                    name: el.name,
                    description: el.description,
                    date: el.date,
                    value: el.value,
                    category: foundCategory ? foundCategory.name : "",
                    account: foundAccount ? foundAccount.name : "",
                    categoryType: transactionType,
                    pairTransactionID: el.pairTransactionID

                } as TransactionViewType
            })
    });
    const onDelete = () => {
        if (!_.isNil(deleteTransaction)) {
            if (!_.isNil(deleteTransaction.pairTransactionID)) {
                deleteCurrentTransaction(deleteTransaction.pairTransactionID)(dispatch)
            }
            deleteCurrentTransaction(deleteTransaction.id)(dispatch)
        }
        setDeleteTransaction(undefined);
    }
    const closeForm = () => {
        setFormOpen(false);
        setSelectedID("");
    }
    const openForm = () => {
        setFormOpen(true)
    }
    return (
        <div className={classes.container}>
            <MaterialTable
                columns={[
                    { field: "categoryType", title: "Category type", defaultGroupOrder: 0 },
                    { field: "category", title: "Category", defaultGroupOrder: 1 },
                    { field: "account", title: "Wallet" },
                    { field: "name", title: "Name" },
                    { field: "value", title: "Value", type: 'currency' },
                    { field: "date", title: "Date" },
                    { field: "description", title: "Description" },
                    { field: "pairTransactionID", hidden: true}
                ]}
                data={allTransactions}
                title="Transactions"
                actions={[
                    {
                        icon: () => <EditIcon color="action" />,
                        tooltip: 'Modify Transaction',
                        onClick: (event, rowData) => {
                            event.stopPropagation();
                            event.preventDefault();
                            setSelectedID((rowData as TransactionViewType).id)
                            setFormOpen(true)
                        }
                    },
                    {
                        icon: () => <DeleteIcon color="action" />,
                        tooltip: 'Delete Transaction',
                        onClick: (event, rowData) => {
                            event.stopPropagation();
                            event.preventDefault();
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
                    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
                    ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
                    SortArrow: forwardRef((props, ref) => <SortIcon {...props} ref={ref} />),
                    DetailPanel: forwardRef((props, ref) => <GroupingIcon {...props} ref={ref} />)
                }}
            />
            <AddButton onClick={openForm} />
            <TransactionFormNew
                open={formOpen}
                onClose={closeForm}
                id={selectedID}
            />
            {deleteTransaction &&
                <ModalDialog
                    title="Delete transaction"
                    text={`You want to delete Transaction on "${deleteTransaction.date}" of ${deleteTransaction.value} ?`}
                    onApply={onDelete}
                    onCancel={() => setDeleteTransaction(undefined)}
                />}
        </div>
    )
}

export default TransactionView;