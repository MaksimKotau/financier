import { Action } from 'redux';
import AccountDTO from '../DTO/AccountDTO';
import { ADD_ACCOUNT, DELETE_ACCOUNT, MODIFY_ACCOUNT } from './actionTypes';

export interface AddAccountAction extends Action<"ADD_ACCOUNT"> {
    account: AccountDTO
}

export interface ModifyAccountAction extends Action<"MODIFY_ACCOUNT">{
    account: AccountDTO
}

export interface DeleteAccountAction extends Action<"DELETE_ACCOUNT">{
    accountID: string
}

export function setAddAccountAction(account: AccountDTO): AddAccountAction {
    return {
        type: ADD_ACCOUNT,
        account
    }
}

export function setModifyAccountAction(account: AccountDTO): ModifyAccountAction {
    return {
        type: MODIFY_ACCOUNT,
        account
    }
}

export function setDeleteAccountAction(accountID: string): DeleteAccountAction {
    return {
        type: DELETE_ACCOUNT,
        accountID
    }
}

export function addAccount(account: AccountDTO) {
    return (dispatch: any) => {
        dispatch(setAddAccountAction(account));
    }
}

export function modifyAccount(account: AccountDTO) {
    return (dispatch: any) => {
        dispatch(setModifyAccountAction(account));
    }
}

export function deleteAccount(accountID: string) {
    return (dispatch: any) => {
        dispatch(setDeleteAccountAction(accountID));
    }
}