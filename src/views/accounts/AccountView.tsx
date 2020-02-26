import React, { useState, forwardRef } from 'react';
import MaterialTable from 'material-table';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import AddButton from '../../components/AddButton';
import AccountForm from './AccountForm';
import { GlobalState } from '../../data/reducers';
import { useSelector, useDispatch } from 'react-redux';
import AccountType from '../../data/enums/AccountType';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import ModalDialog from '../../components/ModalDialog';
import AccountDTO from '../../data/DTO/AccountDTO';
import {deleteAccount as delteCurrentAccount} from '../../data/actions/accountActions';
import SortIcon from '@material-ui/icons/ArrowUpward';

interface AccountViewType {
    id: string;
    name: string;
    type: string;
    startBalance: number;
    currentBalance: number;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            maxWidth: '100%'
        }
    }),
);

const AccountView: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectedID, setSelectedID] = useState<string>("")
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [deleteAccount, setDeleteAccount] = useState<AccountDTO | undefined>(undefined);
    const allAccounts = useSelector((state: GlobalState) => state.accounts.map(el => {
        return {
            id: el.id,
            name: el.name,
            type: AccountType[el.type],
            startBalance: el.startBalance,
            currentBalance: 0
        }
    }));
    const onCancel = () => {
        setFormOpen(false);
        setSelectedID("")
    }
    const onDelete = (accountID: string) => {
        delteCurrentAccount(accountID)(dispatch)
        setDeleteAccount(undefined);
    }
    const openForm = () => {
        setFormOpen(true);
    }
    return (
        <div className={classes.container}>
            <MaterialTable
                columns={[
                    { field: "name", title: "Name" },
                    { field: "type", title: "Type" },
                    { field: "currentBalance", title: "Current balance"}
                ]}
                data={allAccounts}
                title="Wallets"
                actions={[
                    {
                        icon: () => <EditIcon color="action"/>,
                        tooltip: 'Modify Wallet',
                        onClick: (event, rowData) => {
                            setSelectedID((rowData as AccountViewType).id)
                            setFormOpen(true)
                        }
                    },
                    {
                        icon: () => <DeleteIcon color="action"/>,
                        tooltip: 'Delete Wallet',
                        onClick: (event, rowData) => {
                            setDeleteAccount(rowData as unknown as AccountDTO);
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
                    SortArrow:forwardRef((props, ref) => <SortIcon {...props} ref={ref} />)
                }}
            />
            <AddButton onClick={openForm} />
            {formOpen && <AccountForm
                onCancel={onCancel}
                id={selectedID}
            />}
            {deleteAccount &&
                <ModalDialog
                    title="Delete wallet"
                    text={`You want to delete Wallet "${deleteAccount.name}" ?`}
                    onApply={() => onDelete(deleteAccount.id)}
                    onCancel={() => setDeleteAccount(undefined)}
                />}
        </div>
    )
}

export default AccountView;