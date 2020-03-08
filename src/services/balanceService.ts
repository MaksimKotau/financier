import AccountDTO from "../data/DTO/AccountDTO";
import TransactionDTO from "../data/DTO/TransactionDTO";
import { GlobalState } from '../data/reducers';
import TransactionType from "../data/enums/TransactionType";
import AccountType from "../data/enums/AccountType";
import {store} from '../data/reducers';

export const calculateCurrentBalance = (accountID: string): number => {
    const state: GlobalState = (store as any).getState();
    const currentAccount: AccountDTO | undefined = state.accounts.find(el => el.id === accountID);
    if (!currentAccount)
        return 0
    const accountTransactions: TransactionDTO[] = state.transactions.filter(el => el.accountID === accountID);
    const categories = state.transactionCategories;
    const startBalance: number = currentAccount.startBalance;
    return accountTransactions.reduce((result, num) => {
        const category = categories.find(el => el.id === num.transactionCategoryID);
        if (category){
            if((category.type === TransactionType.Expenses || category.type === TransactionType.TransitExpenses) && currentAccount.type === AccountType.Credit){
                return result + num.value
            }else if((category.type === TransactionType.Expenses  || category.type === TransactionType.TransitExpenses) && currentAccount.type === AccountType.Debit){
                return result - num.value
            }else if((category.type === TransactionType.Income  || category.type === TransactionType.TransitIncome) && currentAccount.type === AccountType.Credit){
                return result - num.value
            }else if((category.type === TransactionType.Income  || category.type === TransactionType.TransitIncome) && currentAccount.type === AccountType.Debit){
                return result + num.value
            }
        }
        return result;
    }, startBalance)
}

export const isPossibleToDeleteAccount = (accountID: string) => {
    const state: GlobalState = (store as any).getState();
    const accountTransactions: TransactionDTO[] = state.transactions.filter(el => el.accountID ===  accountID)
    return accountTransactions.length === 0; 
}

export const isPossibleToDeleteTransactionCategory = (categoryID: string) => {
    const state: GlobalState = (store as any).getState();
    const transactions: TransactionDTO[] = state.transactions.filter(el => el.transactionCategoryID ===  categoryID)
    return transactions.length === 0; 
}