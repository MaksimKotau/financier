import React, { useEffect, useState } from 'react'
import MultiStepTransactionForm from './MultiStepTransactionForm'
import TransactionDTO from '../../../data/DTO/TransactionDTO';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../../../data/reducers';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import TransactionType from '../../../data/enums/TransactionType';
import _ from 'lodash'
import TransactionCategoryDTO from '../../../data/DTO/TransactionCategoryDTO';
import { addTransaction, modifyTransaction } from '../../../data/actions/transactionActions';

interface OwnProps {
    id?: string;
    open: boolean;
    onClose: () => void;
}

export interface TransferDTO {
    fromAccountID: string;
    toAccountID: string;
    value: number;
    date: string;
    name?: string;
    description?: string;
}

export interface TransactionError {
    value: string;
    transactionCategoryID: string;
    accountID: string;
    date: string;
}

export interface TransferError {
    fromAccountID: string;
    toAccountID: string;
    value: string;
    date: string;
}

export type AvailableTransactionType = "Income" | "Expenses" | "Transfer";

const TransactionForm: React.FC<OwnProps> = (props) => {
    const [transactionType, setTransactionType] = useState<AvailableTransactionType>("Expenses");
    const [canApply, setCanApply] = useState<boolean>(false);
    const dispatch = useDispatch();
    const onTransactionTypeChange = (type: AvailableTransactionType) => {
        setTransactionType(type);
    }
    //----------------------------------------------------//
    //---------------------TRANSACTION--------------------//
    //----------------------------------------------------//
    const stateTransaction = useSelector((state: GlobalState) => {
        return state.transactions.find(el => el.id === props.id)
    });
    const stateCategory = useSelector((state: GlobalState) => {
        if (!_.isNil(stateTransaction)) {
            return state.transactionCategories.find(el => el.id === stateTransaction.transactionCategoryID)
        }
        return undefined;
    })
    const [selectedTransaction, setSelectedTransaction] = useState<TransactionDTO>({ id: uuidv4(), name: "", transactionCategoryID: "", date: moment().format("YYYY-MM-DD"), value: 0, description: "", accountID: "" });
    useEffect(() => {
        if (!_.isNil(stateTransaction) && !_.isNil(stateCategory) && (stateCategory.type === TransactionType.Expenses || stateCategory.type === TransactionType.Income)) {
            setSelectedTransaction({ ...stateTransaction })
            setTransactionType(stateCategory.type === TransactionType.Expenses ? "Expenses" : (stateCategory.type === TransactionType.Income ? "Income" : "Transfer"))
        } else {
            setSelectedTransaction({ id: uuidv4(), name: "", transactionCategoryID: "", date: moment().format("YYYY-MM-DD"), value: 0, description: "", accountID: "" })
            setTransactionType("Expenses")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.open]);
    const [transactionErrors, setTransactionErrors] = useState<TransactionError>({ value: "", transactionCategoryID: "", accountID: "", date: "" });
    const onTransactionChange = (name: keyof TransactionDTO, value: any) => {
        setSelectedTransaction({
            ...selectedTransaction,
            [name]: value
        })
    }
    useEffect(() => {
        if (transactionType !== "Transfer") {
            let errors = _.cloneDeep(transactionErrors)
            let noErrors = true;
            if (_.isEmpty(selectedTransaction.transactionCategoryID)) {
                errors.transactionCategoryID = "Field is required";
                noErrors = false;
            } else {
                errors.transactionCategoryID = "";
            }
            if (_.isEmpty(selectedTransaction.accountID)) {
                errors.accountID = "Field is required";
                noErrors = false;
            } else {
                errors.accountID = "";
            }
            if (!_.isNumber(selectedTransaction.value)) {
                errors.value = "Is not a valid number";
                noErrors = false;
            } else if (selectedTransaction.value === 0) {
                errors.value = "Field can not be 0";
                noErrors = false;
            } else {
                errors.value = "";
            }
            if (_.isEmpty(selectedTransaction.date) || !moment(selectedTransaction.date).isValid()) {
                errors.date = "Date is not valid";
                noErrors = false;
            } else {
                errors.date = "";
            }
            setTransactionErrors(errors);
            setCanApply(noErrors);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTransaction.transactionCategoryID, selectedTransaction.accountID, selectedTransaction.value, selectedTransaction.date, transactionType])
    //----------------------------------------------------//
    //-----------------------TRANSFER---------------------//
    //----------------------------------------------------//
    const transitExpensesCategory: TransactionCategoryDTO = useSelector((state: GlobalState) => {
        return state.transactionCategories.find(el => el.type === TransactionType.TransitExpenses)!;
    })
    const transitIncomeCategory: TransactionCategoryDTO = useSelector((state: GlobalState) => {
        return state.transactionCategories.find(el => el.type === TransactionType.TransitIncome)!;
    })
    const [transferErrors, setTransferErrors] = useState<TransferError>({ fromAccountID: "", toAccountID: "", value: "", date: "" });
    const [selectedTransfer, setSelectedTransfer] = useState<TransferDTO>({ fromAccountID: "", toAccountID: "", name: "", date: moment().format("YYYY-MM-DD"), value: 0, description: "" });
    const onTransferChange = (name: keyof TransferDTO, value: any) => {
        setSelectedTransfer({
            ...selectedTransfer,
            [name]: value
        })
    }
    const stateExpenseTransfer = useSelector((state: GlobalState) => {
        if (!_.isNil(stateCategory)) {
            if (stateCategory.type === TransactionType.TransitExpenses) {
                return state.transactions.find(el => el.id === props.id)
            } else {
                return state.transactions.find(el => el.pairTransactionID === props.id)
            }
        }
        return undefined;
    });
    const stateIncomeTransfer = useSelector((state: GlobalState) => {
        if (!_.isNil(stateCategory)) {
            if (stateCategory.type === TransactionType.TransitIncome) {
                return state.transactions.find(el => el.id === props.id)
            } else {
                return state.transactions.find(el => el.pairTransactionID === props.id)
            }
        }
        return undefined;
    })
    useEffect(() => {
        if (!_.isNil(stateExpenseTransfer) && !_.isNil(stateIncomeTransfer) && !_.isNil(stateCategory) && (stateCategory.type === TransactionType.TransitExpenses || stateCategory.type === TransactionType.TransitIncome)) {
            setSelectedTransfer({
                date: stateIncomeTransfer.date,
                fromAccountID: stateExpenseTransfer.accountID,
                toAccountID: stateIncomeTransfer.accountID,
                value: stateIncomeTransfer.value,
                description: stateIncomeTransfer.description,
                name: stateIncomeTransfer.name
            })
            setTransactionType("Transfer")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.open]);
    useEffect(() => {
        if (transactionType === "Transfer") {
            let errors = _.cloneDeep(transferErrors)
            let noErrors = true;
            if (_.isEmpty(selectedTransfer.fromAccountID)) {
                errors.fromAccountID = "Field is required";
                noErrors = false;
            } else if (selectedTransfer.toAccountID === selectedTransfer.fromAccountID) {
                errors.fromAccountID = "To transfer money, you need to choose different wallets.";
            } else {
                errors.fromAccountID = "";
            }
            if (_.isEmpty(selectedTransfer.toAccountID)) {
                errors.toAccountID = "Field is required";
                noErrors = false;
            } else if (selectedTransfer.toAccountID === selectedTransfer.fromAccountID) {
                errors.toAccountID = "To transfer money, you need to choose different wallets.";
            } else {
                errors.toAccountID = "";
            }

            if (!_.isNumber(selectedTransfer.value)) {
                errors.value = "Is not a valid number";
                noErrors = false;
            } else if (selectedTransfer.value === 0) {
                errors.value = "Field can not be 0";
                noErrors = false;
            } else {
                errors.value = "";
            }
            if (_.isEmpty(selectedTransfer.date) || !moment(selectedTransfer.date).isValid()) {
                errors.date = "Date is not valid";
                noErrors = false;
            } else {
                errors.date = "";
            }
            setTransferErrors(errors);

            setCanApply(noErrors)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTransfer.fromAccountID, selectedTransfer.toAccountID, selectedTransfer.value, selectedTransfer.date, transactionType])
    const onApply = () => {
        if (transactionType === "Transfer") {
            const fromTransactionID = uuidv4();
            const toTransactionID = uuidv4();
            let fromTransaction: TransactionDTO = {
                id: fromTransactionID,
                date: selectedTransfer.date,
                name: selectedTransfer.name,
                accountID: selectedTransfer.fromAccountID,
                transactionCategoryID: transitExpensesCategory.id,
                value: selectedTransfer.value,
                description: selectedTransfer.description,
                pairTransactionID: toTransactionID
            };

            //To transaction
            let toTransaction: TransactionDTO = {
                id: toTransactionID,
                date: selectedTransfer.date,
                name: selectedTransfer.name,
                accountID: selectedTransfer.toAccountID,
                transactionCategoryID: transitIncomeCategory.id,
                value: selectedTransfer.value,
                description: selectedTransfer.description,
                pairTransactionID: fromTransactionID
            };
            addTransaction(fromTransaction)(dispatch);
            addTransaction(toTransaction)(dispatch);
        } else {
            if (_.isEmpty(props.id)) {
                addTransaction(selectedTransaction)(dispatch)
            } else {
                modifyTransaction(selectedTransaction)(dispatch)
            }
        }
        props.onClose();
    }
    if (!props.open)
        return null;
    return (
        <MultiStepTransactionForm
            onClose={props.onClose}
            transactionType={transactionType}
            onApply={onApply}
            canApply={canApply}
            transaction={selectedTransaction}
            transactionErrors={transactionErrors}
            transferErrors={transferErrors}
            transfer={selectedTransfer}
            onTransactionTypeChange={onTransactionTypeChange}
            onTransferChange={onTransferChange}
            onTransactionChange={onTransactionChange}
        />
    )
}

export default TransactionForm;