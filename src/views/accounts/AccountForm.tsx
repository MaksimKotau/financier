import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, MenuItem, TextField, Theme } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import uuidv4 from 'uuid/v4';
import { addAccount, modifyAccount } from '../../data/actions/accountActions';
import AccountDTO from '../../data/DTO/AccountDTO';
import AccountType from '../../data/enums/AccountType';
import { GlobalState } from '../../data/reducers';
import { enumToarray } from '../../services/enumToArray';
import { isPossibleToDeleteAccount } from '../../services/balanceService';

interface Errors {
    name: string;
    type: string;
    balance: string;
}

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
    stateAccount?: AccountDTO;
}

const AccountForm: React.FC<OwnProps & StateProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const allAccountNames: string[] = useSelector((state: GlobalState) => state.accounts.filter(a => a.id !== props.id).map(el => el.name))
    const [canApply, setCanApply] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>({ balance: "", name: "", type: "" });
    const [validate, setValidate] = useState<boolean>(false);
    const { stateAccount } = useSelector((state: GlobalState) => {
        const foundAccount = state.accounts.find(el => el.id === props.id);
        return {
            stateAccount: foundAccount
        }
    })

    const [selectedAccount, setSelectedAccount] = useState<AccountDTO>({ id: uuidv4(), name: "", type: AccountType.Credit, startBalance: 0 });
    useEffect(() => {
        if (stateAccount) {
            setSelectedAccount({ ...stateAccount })
        }
        setValidate(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (validate) {
            if (selectedAccount.name.length === 0) {
                setErrors({ ...errors, name: "Field is required" })
            } else if (allAccountNames.includes(selectedAccount.name)) {
                setErrors({ ...errors, name: "Account name is not unique" })
            }
            else {
                setErrors({ ...errors, name: "" })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAccount.name, selectedAccount.startBalance, selectedAccount.type])
    useEffect(() => {
        if (validate)
            setCanApply(errors.name.length === 0 && errors.balance.length === 0 && errors.type.length === 0);
    }, [errors.name, errors.type, errors.balance, selectedAccount.name, selectedAccount.startBalance, selectedAccount.type])

    const modify = (name: keyof AccountDTO, value: any) => {
        setSelectedAccount({ ...selectedAccount, [name]: value });
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
    return (
        <Dialog
            open
        >
            <DialogTitle className={classes.header}>
                <div className={classes.container}>
                    {props.id ? "Modify wallet" : "Add new wallet"}
                </div>
            </DialogTitle>
            <DialogContent>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Wallet Type"
                        fullWidth
                        value={selectedAccount.type}
                        select
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('type', e.target.value)}
                        disabled={!isPossibleToDeleteAccount(selectedAccount.id)}
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
                        label="Wallet name"
                        fullWidth
                        value={selectedAccount.name}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('name', e.target.value)}
                        error={errors.name.length > 0}
                        helperText={errors.name.length > 0 ? errors.name : undefined}
                    />
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
                        disabled={!canApply}
                    >
                        Apply
                            </Button>
                </div>
            </DialogActions>
        </Dialog >
    )
}

export default AccountForm;