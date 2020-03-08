import React, { useState, ChangeEvent } from 'react'
import { Dialog, makeStyles, Theme, createStyles, DialogTitle, TextField, DialogContent, DialogActions, MenuItem, Button } from '@material-ui/core';
import { GlobalState } from '../../data/reducers';
import { useSelector, useDispatch } from 'react-redux';
import AccountType from '../../data/enums/AccountType';
import { calculateCurrentBalance } from '../../services/balanceService';
import moment from 'moment';
import TransactionType from '../../data/enums/TransactionType';
import TransactionCategoryDTO from '../../data/DTO/TransactionCategoryDTO';
import uuidv4 from 'uuid/v4';
import AccountDTO from '../../data/DTO/AccountDTO';
import TransactionDTO from '../../data/DTO/TransactionDTO';
import { addTransaction } from '../../data/actions/transactionActions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: 400
        },
        paddingBlock: {
            padding: 15
        },
        header: {
            textAlign: "center",
            color: theme.palette.primary.main
        },
        buttonSpacing: {
            marginRight: 8
        }
    }),
);

interface OwnProps {
    onCancel: () => void
}

const MoveTransactionForm: React.FC<OwnProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [fromAccountID, setFromAccountID] = useState<string | undefined>(undefined);
    const [toAccountID, setToAccountID] = useState<string | undefined>(undefined);
    const [summ, setSumm] = useState<number>(0);
    const [date, setDate] = useState<string>(moment().format("YYYY-MM-DD"));
    const allAccounts = useSelector((state: GlobalState) => state.accounts);
    const transitExpensesCategory: TransactionCategoryDTO = useSelector((state: GlobalState) => {
        return state.transactionCategories.find(el => el.type === TransactionType.TransitExpenses)!;
    })
    const transitIncomeCategory: TransactionCategoryDTO = useSelector((state: GlobalState) => {
        return state.transactionCategories.find(el => el.type === TransactionType.TransitIncome)!;
    })
    const onApply = () => { 
        const fromAccount: AccountDTO | undefined = allAccounts.find(el => el.id === fromAccountID);
        const toAccount: AccountDTO | undefined = allAccounts.find(el => el.id === toAccountID);
        if (!fromAccount || !toAccount)
            return;
        //FROM transaction
        let fromTransaction: TransactionDTO = {
            id: uuidv4(),
            date,
            name: 'Moving money between accounts',
            accountID: fromAccount.id,
            transactionCategoryID: transitExpensesCategory.id,
            value: summ,
            description: `Moving money from account "${fromAccount.name}" to account "${toAccount.name}"`
        };
        
        //To transaction
        let toTransaction: TransactionDTO = {
            id: uuidv4(),
            date,
            name: 'Moving money between accounts',
            accountID: toAccount.id,
            transactionCategoryID: transitIncomeCategory.id,
            value: summ,
            description: `Moving money from account "${fromAccount.name}" to account "${toAccount.name}"`
        };
        addTransaction(fromTransaction)(dispatch);
        addTransaction(toTransaction)(dispatch);
        props.onCancel();
    };
    return (
        <Dialog
            open
        >
            <DialogTitle className={classes.header}>
                <div className={classes.container}>
                    Move money
                </div>
            </DialogTitle>
            <DialogContent>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="From Wallet"
                        fullWidth
                        value={fromAccountID}
                        select
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFromAccountID(e.target.value)}
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
                        value={toAccountID}
                        select
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setToAccountID(e.target.value)}
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
                        label="Summ"
                        fullWidth
                        value={summ}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSumm(parseFloat(e.target.value))}
                        type="number"
                    />
                </div>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Date"
                        fullWidth
                        type="date"
                        value={date}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDate(e.target.value)}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <div className={classes.paddingBlock}>
                    <Button
                        onClick={props.onCancel}
                        variant="contained"
                        className={classes.buttonSpacing}
                    >
                        Cancel
                            </Button>
                    <Button
                        onClick={onApply}
                        variant="contained"
                        color="primary"
                    >
                        Apply
                            </Button>
                </div>
            </DialogActions>
        </Dialog >
    )
}

export default MoveTransactionForm;