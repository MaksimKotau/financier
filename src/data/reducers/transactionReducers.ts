import { ADD_TRANSACTION, DELETE_TRANSACTION, MODIFY_TRANSACTION } from "../actions/actionTypes";
import { AddTransactionAction, DeleteTransactionAction, ModifyTransactionAction } from '../actions/transactionActions';
import TransactionDTO from "../DTO/TransactionDTO";


const initialState: TransactionState = []

type ActionType = AddTransactionAction | ModifyTransactionAction | DeleteTransactionAction;
const ensureNever = (action: never) => action;

export default function (state: TransactionState = initialState, action: ActionType): TransactionState {
    switch (action.type) {
        case ADD_TRANSACTION:
            return [...state, action.transaction]
        case DELETE_TRANSACTION:
            return [...state.filter(el => el.id !== action.transactionID)]
        case MODIFY_TRANSACTION:
            return [...state.filter(el => el.id !== action.transaction.id), action.transaction];
        default:
            ensureNever(action);
            return state;
    }
}

export type TransactionState = TransactionDTO[];