import { ADD_TRANSACTION_CATEGORY, DELETE_TRANSACTION_CATEGORY, MODIFY_TRANSACTION_CATEGORY } from "../actions/actionTypes";
import { AddTransactionCategoryAction, DeleteTransactionCategoryAction, ModifyTransactionCategoryAction } from '../actions/transactionCategoryActions';
import TransactionCategoryDTO from "../DTO/TransactionCategoryDTO";
import uuidv4 from 'uuid/v4';
import TransactionType from "../enums/TransactionType";


const initialState: TransactionCategoryState = [
    {
        id: uuidv4(),
        name: "Expenses",
        type: TransactionType.TransitExpenses,
    },
    {
        id: uuidv4(),
        name: "Inome",
        type: TransactionType.TransitIncome,
    },
]

type ActionType = AddTransactionCategoryAction | ModifyTransactionCategoryAction | DeleteTransactionCategoryAction;
const ensureNever = (action: never) => action;

export default function (state: TransactionCategoryState = initialState, action: ActionType): TransactionCategoryState {
    switch (action.type) {
        case ADD_TRANSACTION_CATEGORY:
            return [...state, action.transactionCategory]
        case DELETE_TRANSACTION_CATEGORY:
            return [...state.filter(el => el.id !== action.transactionCategoryID)]
        case MODIFY_TRANSACTION_CATEGORY:
            return [...state.filter(el => el.id !== action.transactionCategory.id), action.transactionCategory];
        default:
            ensureNever(action);
            return state;
    }
}

export type TransactionCategoryState = TransactionCategoryDTO[];
