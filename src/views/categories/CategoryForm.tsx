import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, MenuItem, TextField, Theme } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import uuidv4 from 'uuid/v4';
import { addTransactionCategory, modifyTransactionCategory } from '../../data/actions/transactionCategoryActions';
import TransactionCategoryDTO from '../../data/DTO/TransactionCategoryDTO';
import TransactionType from '../../data/enums/TransactionType';
import { GlobalState } from '../../data/reducers';
import { isPossibleToDeleteTransactionCategory } from '../../services/balanceService';
import { enumToarray } from '../../services/enumToArray';

interface OwnProps {
    id?: string;
    onCancel: () => void;
}

interface Errors {
    name: string;
    type: string;
    description: string;
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
    stateCategory?: TransactionCategoryDTO;
}

const CategoryForm: React.FC<OwnProps & StateProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [canApply, setCanApply] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>({ description: "", name: "", type: "" });
    const [validate, setValidate] = useState<boolean>(false);
    const allCategoriesNames: string[] = useSelector((state: GlobalState) => state.transactionCategories.filter(c => c.id !== props.id).map(el => el.name));
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
        setValidate(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    useEffect(() => {
        if (validate) {
            if (selectedCategory.name.length === 0) {
                setErrors({ ...errors, name: "Field is required" })
            } else if (allCategoriesNames.includes(selectedCategory.name)) {
                setErrors({ ...errors, name: "Category name is not unique" })
            }
            else {
                setErrors({ ...errors, name: "" })
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory.name, selectedCategory.description, selectedCategory.type])
    useEffect(() => {
        if (validate)
            setCanApply(errors.name.length === 0 && errors.description.length === 0 && errors.type.length === 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory.name, selectedCategory.description, selectedCategory.type, errors.name, errors.type, errors.description])
    return (
        <Dialog
            open
        >
            <DialogTitle className={classes.header}>
                <div className={classes.container}>
                    {props.id ? "Modify category" : "Add new category"}
                </div>
            </DialogTitle>
            <DialogContent>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Category Type"
                        fullWidth
                        value={selectedCategory.type}
                        select
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('type', e.target.value)}
                        disabled={!isPossibleToDeleteTransactionCategory(selectedCategory.id)}
                    >
                        {enumToarray(TransactionType).filter(en => en.name !== "TransitIncome" && en.name !== "TransitExpenses").map(el => {
                            return (
                                <MenuItem key={el.name} value={el.value}>{el.name}</MenuItem>
                            )
                        })}
                    </TextField>
                </div>
                <div className={classes.paddingBlock}>
                    <TextField
                        label="Category name"
                        fullWidth
                        value={selectedCategory.name}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => modify('name', e.target.value)}
                        error={errors.name.length > 0}
                        helperText={errors.name.length > 0 ? errors.name : undefined}
                    />
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
                        disabled={!canApply}
                    >
                        Apply
                            </Button>
                </div>
            </DialogActions>
        </Dialog >
    )
}

export default CategoryForm;