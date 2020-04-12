import { MenuItem, TextField, makeStyles, createStyles, Theme } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import TransactionCategoryDTO from '../../../data/DTO/TransactionCategoryDTO';
import TransactionDTO from '../../../data/DTO/TransactionDTO';
import TransactionType from '../../../data/enums/TransactionType';
import { GlobalState } from '../../../data/reducers';
import { AvailableTransactionType, TransactionError, TransferDTO } from './TransactionForm';
import _ from 'lodash';

interface OwnProps {
    selectedTransaction: TransactionDTO;
    transactionType: AvailableTransactionType;
    transactionErrors: TransactionError;
    onSelectedTransactionChange: (name: keyof TransactionDTO, value: any) => void;
    selectedTransfer: TransferDTO;
    onSelectedTransferChange: (name: keyof TransferDTO, value: any) => void;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paddingBlock: {
            padding: 10
        },
    }),
);

const CategoryChooser: React.FC<OwnProps> = (props) => {
    const classes = useStyles();
    const allCategories: TransactionCategoryDTO[] = useSelector((state: GlobalState) => {
        const type: TransactionType = props.transactionType === "Expenses" || props.transactionType === "Transfer" ? TransactionType.Expenses : TransactionType.Income;
        return state.transactionCategories.filter(el => el.type === type);
    });
    if (props.transactionType === "Transfer")
        return (
            <div className={classes.paddingBlock}>
                <TextField
                    label="Transaction Category"
                    fullWidth
                    variant="outlined"
                    value={props.selectedTransfer.calculateTransferForCategoryID}
                    select
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => props.onSelectedTransferChange('calculateTransferForCategoryID', e.target.value)}
                    helperText={`You need to select Category here ONLY if you want to calculate this transfer in Expenses. 
                    For example, when you pay for Credit/Loan, that not be created before by Expenses operation (to avoid double counting)`}
                >
                    <MenuItem key={"undefined"} value={undefined}>{"None"}</MenuItem>
                    {allCategories.map(el => {
                        return (
                            <MenuItem key={el.name} value={el.id}>{el.name}</MenuItem>
                        )
                    })}
                </TextField>
            </div>
        )
    return (
        <div className={classes.paddingBlock}>
            <TextField
                label="Transaction Category"
                fullWidth
                variant="outlined"
                required
                value={props.selectedTransaction.transactionCategoryID}
                select
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => props.onSelectedTransactionChange('transactionCategoryID', e.target.value)}
                helperText={!_.isEmpty(props.transactionErrors.transactionCategoryID) ? props.transactionErrors.transactionCategoryID : undefined}
                error={!_.isEmpty(props.transactionErrors.transactionCategoryID)}
            >
                {allCategories.filter(t => t.type !== TransactionType.TransitExpenses && t.type !== TransactionType.TransitIncome).map(el => {
                    return (
                        <MenuItem key={el.name} value={el.id}>{el.name}</MenuItem>
                    )
                })}
            </TextField>
        </div>
    )
}

export default CategoryChooser;