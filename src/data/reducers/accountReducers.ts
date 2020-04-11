import { AddAccountAction, DeleteAccountAction, ModifyAccountAction } from '../actions/accountActions';
import { ADD_ACCOUNT, DELETE_ACCOUNT, MODIFY_ACCOUNT } from "../actions/actionTypes";
import AccountDTO from "../DTO/AccountDTO";
import {getAccounts} from './accountService';

const initialState: AccountState = getAccounts()

type ActionType = AddAccountAction | DeleteAccountAction | ModifyAccountAction;
const ensureNever = (action: never) => action;

export default function (state: AccountState = initialState, action: ActionType): AccountState {
    switch (action.type) {
        case ADD_ACCOUNT:
            return [...state, action.account]
        case DELETE_ACCOUNT:
            return [...state.filter(el => el.id !== action.accountID)]
        case MODIFY_ACCOUNT:
            return [...state.filter(el => el.id !== action.account.id), action.account];
        default:
            ensureNever(action);
            return state;
    }
} 

export type AccountState = AccountDTO[];
