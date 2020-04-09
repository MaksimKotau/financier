import { AddAccountAction, DeleteAccountAction, ModifyAccountAction } from '../actions/accountActions';
import { ADD_ACCOUNT, DELETE_ACCOUNT, MODIFY_ACCOUNT } from "../actions/actionTypes";
import AccountDTO from "../DTO/AccountDTO";
import AccountType from '../enums/AccountType';


const initialState: AccountState = [
    {
        id: "d17945ac-8892-4aee-8ce7-b20af694aed3",
        name: "Cash",
        startBalance: 150,
        type: AccountType.Debit
    },
    {
        id: "03305510-3333-4902-b0fa-3249eb4733b2",
        name: "RBC MasterCard",
        startBalance: 0,
        type: AccountType.Credit
    },
    {
        id: "1440b4d8-ab69-4b35-a201-58cfd5ba3cd3",
        name: "RBC DebitCard",
        startBalance: 3000,
        type: AccountType.Debit
    },
    {
        id: "4a7a39dc-b7d5-4864-8c76-6d0d0f232857",
        name: "Desjardins Saving Account",
        startBalance: 200,
        type: AccountType.Debit
    },
    {
        id: "e170a61e-a16d-4113-87d4-38e21392ccf2",
        name: "BestBuy CreditCard",
        startBalance: 3500,
        type: AccountType.Credit,
    },
    {
        id: "2e47e201-36bf-49d7-bc3b-25056058e91d",
        name: "TD Bank TFSA",
        startBalance: 500,
        type: AccountType.Debit
    },
    {
        id: "ccc163c2-494c-40a6-9a9a-dc3c217279c9",
        name: "RBC AFE Credit",
        startBalance: 2000,
        type: AccountType.Credit
    }
]

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
