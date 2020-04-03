import React, { ChangeEvent } from 'react'
import { AvailableTransactionType, TransferDTO, TransferError, TransactionError } from './TransactionForm';
import TransactionDTO from '../../../data/DTO/TransactionDTO';
import { TextField, makeStyles, createStyles, Theme } from '@material-ui/core';
import _ from 'lodash';
import { DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface OwnProps {
    transactionType: AvailableTransactionType,
    selectedTransaction: TransactionDTO,
    selectedTransfer: TransferDTO,
    transferErrors: TransferError;
    transactionError: TransactionError;
    onTransactionChange: (name: keyof TransactionDTO, value: any) => void;
    onTransferChange: (name: keyof TransferDTO, value: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paddingBlock: {
            padding: 10
        },
    }),
);

const InformationChooser: React.FC<OwnProps> = (props) => {
    const classes = useStyles();
    const onChange = (name: 'name' | 'description' | 'value' | 'date', value: any) => {
        props.onTransferChange(name, value);
        props.onTransactionChange(name, value);
    }
    return (
        <>
            <div className={classes.paddingBlock}>
                <TextField
                    label="Transaction name"
                    fullWidth
                    variant="outlined"
                    value={props.transactionType !== "Transfer" ? props.selectedTransaction.name : props.selectedTransfer.name}
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange('name', e.target.value)}
                />
            </div>
            <div className={classes.paddingBlock} style={{ display: "flex" }}>
                <div style={{ flex: 1, paddingRight: 5 }}>
                    <TextField
                        label="Value"
                        required
                        fullWidth
                        variant="outlined"
                        type="number"
                        value={props.transactionType !== "Transfer" ? props.selectedTransaction.value : props.selectedTransfer.value}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange('value', _.isEmpty(e.target.value) ? 0 : parseFloat(e.target.value))}
                        helperText={!_.isEmpty(props[props.transactionType === "Transfer" ? "transferErrors" : "transactionError"].value) ? props[props.transactionType === "Transfer" ? "transferErrors" : "transactionError"].value : undefined}
                        error={!_.isEmpty(props[props.transactionType === "Transfer" ? "transferErrors" : "transactionError"].value)}
                    />
                </div>
                <div style={{ flex: 1, paddingLeft: 5 }}>
                    <DatePicker 
                        label="Date"
                        required
                        fullWidth
                        inputVariant="outlined"
                        value={props.transactionType !== "Transfer" ? props.selectedTransaction.date : props.selectedTransfer.date}
                        onChange={(value: MaterialUiPickersDate) => onChange('date', !_.isNil(value) ? value.format("YYYY-MM-DD") : "")}
                        helperText={!_.isEmpty(props[props.transactionType === "Transfer" ? "transferErrors" : "transactionError"].date) ? props[props.transactionType === "Transfer" ? "transferErrors" : "transactionError"].date : undefined}
                        error={!_.isEmpty(props[props.transactionType === "Transfer" ? "transferErrors" : "transactionError"].date)}
                    />
                </div>
            </div>
            <div className={classes.paddingBlock}>
                <TextField
                    label="Description"
                    fullWidth
                    variant="outlined"
                    value={props.transactionType !== "Transfer" ? props.selectedTransaction.description : props.selectedTransfer.description}
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange('description', e.target.value)}
                />
            </div>
        </>
    )

}

export default InformationChooser;