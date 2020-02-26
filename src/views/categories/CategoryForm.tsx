import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, MenuItem, TextField, Theme, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import uuidv4 from 'uuid/v4';
import { addTransactionCategory, modifyTransactionCategory } from '../../data/actions/transactionCategoryActions';
import TransactionCategoryDTO from '../../data/DTO/TransactionCategoryDTO';
import TransactionType from '../../data/enums/TransactionType';
import { GlobalState } from '../../data/reducers';
import { enumToarray } from '../../services/enumToArray';

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
    stateCategory?: TransactionCategoryDTO;
}

const CategoryForm: React.FC<OwnProps & StateProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { stateCategory } = useSelector((state: GlobalState) => {
        const foundCategory = state.transactionCategories.find(el => el.id === props.id);
        return {
            stateCategory: foundCategory
        }
    })

    const [selectedCategory, setSelectedCategory] = useState<TransactionCategoryDTO>({ id: uuidv4(), name: "", type: TransactionType.Expenses, description: "" });

    useEffect(() => {
        if (stateCategory) {
            setSelectedCategory({ ...stateCategory })
        }
    }, []);

    const modify = (name: keyof TransactionCategoryDTO, value: any) => {
        setSelectedCategory({ ...selectedCategory, [name]: value })
    }

    const onApply = () => {
        if (props.id === "") {
            addTransactionCategory(selectedCategory)(dispatch);
        } else {
            modifyTransactionCategory(selectedCategory)(dispatch);
        }

        props.onCancel();
    }
    const onCancel = () => props.onCancel();
    return (
        <Dialog
            open
        >
            <DialogTitle>
                <Typography variant="h6" className={classes.header}>
                    {props.id ? "Modify category" : "Add new category"}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Category name"
                        fullWidth
                        value={selectedCategory.name}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('name', e.target.value)}
                    />
                </div>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Category Type"
                        fullWidth
                        value={selectedCategory.type}
                        select
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('type', e.target.value)}
                    >
                        {enumToarray(TransactionType).map(el => {
                            return (
                                <MenuItem key={el.name} value={el.value}>{el.name}</MenuItem>
                            )
                        })}
                    </TextField>
                </div>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Description"
                        fullWidth
                        multiline
                        rows={3}
                        value={selectedCategory.description}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('description', e.target.value)}
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

export default CategoryForm;