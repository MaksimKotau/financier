import React, { useEffect, useState, ChangeEvent } from 'react';
import AccountDTO from '../../data/DTO/AccountDTO';
import { Dialog, makeStyles, Theme, createStyles, Paper, Grid, Typography, TextField, MenuItem, Button, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from '../../data/reducers';
import uuidv4 from 'uuid/v4';
import AccountType from '../../data/enums/AccountType';
import { enumToarray } from '../../services/enumToArray';
import { addAccount, modifyAccount } from '../../data/actions/accountActions';
import moment from 'moment';

interface OwnProps {
    id?: string;
    onCancel: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: 300,
            height: 300
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
    stateAccount?: AccountDTO;
}

const AccountForm: React.FC<OwnProps & StateProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { stateAccount } = useSelector((state: GlobalState) => {
        const foundAccount = state.accounts.find(el => el.id === props.id);
        return {
            stateAccount: foundAccount
        }
    })

    const [selectedAccount, setSelectedAccount] = useState<AccountDTO>({ id: uuidv4(), name: "", type: AccountType.Cash, startBalance: 0 });

    useEffect(() => {
        if (stateAccount) {
            setSelectedAccount({ ...stateAccount })
        }
    }, []);

    const modify = (name: keyof AccountDTO, value: any) => {
        setSelectedAccount({ ...selectedAccount, [name]: value })
    }

    const onApply = () => {
        if (props.id === "") {
            addAccount(selectedAccount)(dispatch);
        } else {
            modifyAccount(selectedAccount)(dispatch);
        }

        props.onCancel();
    }
    const onCancel = () => props.onCancel();
    console.log(selectedAccount);
    return (
        <Dialog
            open
        >
            <DialogTitle>
                <Typography variant="h6" className={classes.header}>
                    {props.id ? "Modify wallet" : "Add new wallet"}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Wallet name"
                        fullWidth
                        value={selectedAccount.name}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('name', e.target.value)}
                    />
                </div>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Wallet Type"
                        fullWidth
                        value={selectedAccount.type}
                        select
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('type', e.target.value)}
                    >
                        {enumToarray(AccountType).map(el => {
                            return (
                                <MenuItem key={el.name} value={el.value}>{el.name}</MenuItem>
                            )
                        })}
                    </TextField>
                </div>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Start balance"
                        fullWidth
                        type="number"
                        value={selectedAccount.startBalance}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('startBalance', parseFloat(e.target.value))}
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

export default AccountForm;