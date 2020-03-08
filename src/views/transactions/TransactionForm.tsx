import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, MenuItem, TextField, Theme } from '@material-ui/core';
import moment from 'moment';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import uuidv4 from 'uuid/v4';
import { addTransaction, modifyTransaction } from '../../data/actions/transactionActions';
import AccountDTO from '../../data/DTO/AccountDTO';
import TransactionCategoryDTO from '../../data/DTO/TransactionCategoryDTO';
import TransactionDTO from '../../data/DTO/TransactionDTO';
import { GlobalState } from '../../data/reducers';

interface OwnProps {
    id?: string;
    onCancel: () => void;
}

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

interface StateProps {
    stateTransaction?: TransactionDTO;
}

const TransactionForm: React.FC<OwnProps & StateProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const allCategories: TransactionCategoryDTO[] = useSelector((state: GlobalState) => state.transactionCategories);
    const allAccounts: AccountDTO[] = useSelector((state: GlobalState) => state.accounts);
    const stateTransaction = useSelector((state: GlobalState) => state.transactions.find(el => el.id === props.id))

    const [selectedTransaction, setSelectedTransaction] = useState<TransactionDTO>({ id: uuidv4(), name: "", transactionCategoryID: "", date: moment().format("YYYY-MM-DD"), value: 0, description: "", accountID: "" });

    useEffect(() => {
        if (stateTransaction) {
            setSelectedTransaction({ ...stateTransaction })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const modify = (name: keyof TransactionDTO, value: any) => {
        setSelectedTransaction({ ...selectedTransaction, [name]: value })
    }

    const onApply = () => {
        if (props.id === "") {
            addTransaction(selectedTransaction)(dispatch);
        } else {
            modifyTransaction(selectedTransaction)(dispatch);
        }

        props.onCancel();
    }
    const onCancel = () => props.onCancel();
    return (
            <Dialog
                open
            >
                <DialogTitle className={classes.header}>
                    <div className={classes.container}>
                        {props.id ? "Modify transaction" : "Add new transaction"}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className={classes.paddingBlock}>
                        <TextField
                            label="Transaction name"
                            fullWidth
                            value={selectedTransaction.name}
                            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('name', e.target.value)}
                        />
                    </div>
                    <div className={classes.paddingBlock}>
                        <TextField
                            label="Transaction Category"
                            fullWidth
                            value={selectedTransaction.transactionCategoryID}
                            select
                            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('transactionCategoryID', e.target.value)}
                        >
                            {allCategories.map(el => {
                                return (
                                    <MenuItem key={el.name} value={el.id}>{el.name}</MenuItem>
                                )
                            })}
                        </TextField>
                    </div>
                    <div className={classes.paddingBlock}>
                        <TextField
                            label="Wallet"
                            fullWidth
                            value={selectedTransaction.accountID}
                            select
                            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('accountID', e.target.value)}
                        >
                            {allAccounts.map(el => {
                                return (
                                    <MenuItem key={el.name} value={el.id}>{el.name}</MenuItem>
                                )
                            })}
                        </TextField>
                    </div>
                    <div className={classes.paddingBlock}>
                        <TextField
                            label="Value"
                            fullWidth
                            type="number"
                            value={selectedTransaction.value}
                            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('value', parseFloat(e.target.value))}
                        />
                    </div>
                    <div className={classes.paddingBlock}>
                        <TextField
                            label="Date"
                            fullWidth
                            type="date"
                            value={selectedTransaction.date}
                            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('date', e.target.value)}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <div className={classes.paddingBlock}>
                        <Button
                            onClick={onCancel}
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

export default TransactionForm;