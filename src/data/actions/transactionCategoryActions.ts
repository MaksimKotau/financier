import { Action } from 'redux';
import TransactionCategoryDTO from '../DTO/TransactionCategoryDTO';
import { ADD_TRANSACTION_CATEGORY, DELETE_TRANSACTION_CATEGORY, MODIFY_TRANSACTION_CATEGORY } from './actionTypes';

export interface AddTransactionCategoryAction extends Action<"ADD_TRANSACTION_CATEGORY"> {
    transactionCategory: TransactionCategoryDTO
}

export interface ModifyTransactionCategoryAction extends Action<"MODIFY_TRANSACTION_CATEGORY">{
    transactionCategory: TransactionCategoryDTO
}

export interface DeleteTransactionCategoryAction extends Action<"DELETE_TRANSACTION_CATEGORY">{
    transactionCategoryID: string
}

export function setAddTransactionCategoryAction(transactionCategory: TransactionCategoryDTO): AddTransactionCategoryAction {
    return {
        type: ADD_TRANSACTION_CATEGORY,
        transactionCategory
    }
}

export function setModifyTransactionCategoryAction(transactionCategory: TransactionCategoryDTO): ModifyTransactionCategoryAction {
    return {
        type: MODIFY_TRANSACTION_CATEGORY,
        transactionCategory
    }
}

export function setDeleteTransactionCategoryAction(transactionCategoryID: string): DeleteTransactionCategoryAction {
    return {
        type: DELETE_TRANSACTION_CATEGORY,
        transactionCategoryID
    }
}

export function addTransactionCategory(transactionCategory: TransactionCategoryDTO) {
    return (dispatch: any) => {
        dispatch(setAddTransactionCategoryAction(transactionCategory));
    }
}

export function modifyTransactionCategory(transactionCategory: TransactionCategoryDTO) {
    return (dispatch: any) => {
        dispatch(setModifyTransactionCategoryAction(transactionCategory));
    }
}

export function deleteTransactionCategory(transactionCategoryID: string) {
    return (dispatch: any) => {
        dispatch(setDeleteTransactionCategoryAction(transactionCategoryID));
    }
}