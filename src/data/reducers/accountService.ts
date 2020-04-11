import { AccountState } from "./accountReducers";
import AccountType from "../enums/AccountType";

export const getAccounts = (): AccountState => [
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
    },
    {
        id: "48f71cef-1ed8-471f-a546-d6031f28c712",
        name: "RBC RRSP",
        startBalance: 1000,
        type: AccountType.Debit
    },
    {
        id: "d84b935b-32d2-4e87-ac55-d71cb279bf05",
        name: "CIBC Mortgage",
        startBalance: 250000,
        type: AccountType.Credit
    }
]