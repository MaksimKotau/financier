import { Action } from 'redux';
import TransactionDTO from '../DTO/TransactionDTO';
import { ADD_TRANSACTION, DELETE_TRANSACTION, MODIFY_TRANSACTION } from './actionTypes';

export interface AddTransactionAction extends Action<"ADD_TRANSACTION"> {
    transaction: TransactionDTO
}

export interface ModifyTransactionAction extends Action<"MODIFY_TRANSACTION">{
    transaction: TransactionDTO
}

export interface DeleteTransactionAction extends Action<"DELETE_TRANSACTION">{
    transactionID: string
}

export function setAddTransactionAction(transaction: TransactionDTO): AddTransactionAction {
    return {
        type: ADD_TRANSACTION,
        transaction
    }
}

export function setModifyTransactionAction(transaction: TransactionDTO): ModifyTransactionAction {
    return {
        type: MODIFY_TRANSACTION,
        transaction
    }
}

export function setDeleteTransactionAction(transactionID: string): DeleteTransactionAction {
    return {
        type: DELETE_TRANSACTION,
        transactionID
    }
}

export function addTransaction(transaction: TransactionDTO) {
    return (dispatch: any) => {
        dispatch(setAddTransactionAction(transaction));
    }
}

export function modifyTransaction(transaction: TransactionDTO) {
    return (dispatch: any) => {
        dispatch(setModifyTransactionAction(transaction));
    }
}

export function deleteTransaction(transactionID: string) {
    return (dispatch: any) => {
        dispatch(setDeleteTransactionAction(transactionID));
    }
}