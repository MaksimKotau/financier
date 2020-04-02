import React, { ChangeEvent } from 'react'
import { AvailableTransactionType, TransferDTO, TransferError, TransactionError } from './TransactionForm';
import TransactionDTO from '../../../data/DTO/TransactionDTO';
import { TextField, MenuItem, makeStyles, Theme, createStyles } from '@material-ui/core';
import AccountDTO from '../../../data/DTO/AccountDTO';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../data/reducers';
import AccountType from '../../../data/enums/AccountType';
import { calculateCurrentBalance } from '../../../services/balanceService';
import _ from 'lodash';

interface OwnProps {
    transactionType: AvailableTransactionType,
    selectedTransaction: TransactionDTO,
    selectedTransfer: TransferDTO,
    onTransactionChange: (name: keyof TransactionDTO, value: any) => void;
    onTransferChange: (name: keyof TransferDTO, value: any) => void;
    transferErrors: TransferError;
    transactionErrors: TransactionError;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paddingBlock: {
            padding: 10
        },
    }),
);

const AccountChooser: React.FC<OwnProps> = (props) => {
    const classes = useStyles();
    const allAccounts: AccountDTO[] = useSelector((state: GlobalState) => state.accounts);
    if (props.transactionType === "Transfer") {
        return (
            <>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="From Wallet"
                        fullWidth
                        variant="outlined"
                        required
                        value={props.selectedTransfer.fromAccountID}
                        select
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => props.onTransferChange('fromAccountID', e.target.value)}
                        helperText={!_.isEmpty(props.transferErrors.fromAccountID) ? props.transferErrors.fromAccountID : undefined}
                        error={!_.isEmpty(props.transferErrors.fromAccountID)}
                    >
                        {allAccounts.map(el => {
                            return (
                                <MenuItem key={el.name} value={el.id}>{`${el.name} (${AccountType[el.type]}): ${calculateCurrentBalance(el.id)}`}</MenuItem>
                            )
                        })}
                    </TextField>
                </div>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="To Wallet"
                        fullWidth
                        required
                        variant="outlined"
                        value={props.selectedTransfer.toAccountID}
                        select
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => props.onTransferChange('toAccountID', e.target.value)}
                        helperText={!_.isEmpty(props.transferErrors.toAccountID) ? props.transferErrors.toAccountID : undefined}
                        error={!_.isEmpty(props.transferErrors.toAccountID)}
                    >
                        {allAccounts.map(el => {
                            return (
                                <MenuItem key={el.name} value={el.id}>{`${el.name} (${AccountType[el.type]}): ${calculateCurrentBalance(el.id)}`}</MenuItem>
                            )
                        })}
                    </TextField>
                </div>
            </>
        )
    } else {
        return (
            <div className={classes.paddingBlock}>
                <TextField
                    label="Wallet"
                    fullWidth
                    value={props.selectedTransaction.accountID}
                    select
                    variant="outlined"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => props.onTransactionChange('accountID', e.target.value)}
                    helperText={!_.isEmpty(props.transactionErrors.accountID) ? props.transactionErrors.accountID : undefined}
                    error={!_.isEmpty(props.transactionErrors.accountID)}
                >
                    {allAccounts.map(el => {
                        return (
                            <MenuItem key={el.name} value={el.id}>{el.name}</MenuItem>
                        )
                    })}
                </TextField>
            </div>
        )
    }
}

export default AccountChooser