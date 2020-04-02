import React from 'react'
import { TextField, MenuItem, makeStyles, Theme, createStyles } from '@material-ui/core';
import { AvailableTransactionType } from './TransactionForm';

interface OwnProps {
    type: AvailableTransactionType
    onTypeChange: (type: AvailableTransactionType) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paddingBlock: {
            padding: 10
        },
    }),
);

const TypeChooser: React.FC<OwnProps> = (props) => {
    const classes = useStyles();
    const handleChange = (event: any) => {
        props.onTypeChange(event.target.value)
    }
    return (
        <div className={classes.paddingBlock}>
            <TextField
                select
                label="TransactionType"
                value={props.type}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
            >
                <MenuItem key="Income" value="Income">
                    Income
            </MenuItem>
                <MenuItem key="Expenses" value="Expenses">
                    Expenses
            </MenuItem>
                <MenuItem key="Transfer" value="Transfer">
                    Transfer
            </MenuItem>
            </TextField>
        </div>
    );
}

export default TypeChooser;