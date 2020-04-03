import _ from 'lodash';
import moment from 'moment';
import AccountDTO from "../data/DTO/AccountDTO";
import TransactionDTO from "../data/DTO/TransactionDTO";
import AccountType from "../data/enums/AccountType";
import TransactionType from "../data/enums/TransactionType";
import { GlobalState, store } from '../data/reducers';

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
        if (category) {
            if ((category.type === TransactionType.Expenses || category.type === TransactionType.TransitExpenses) && currentAccount.type === AccountType.Credit) {
                return result + num.value
            } else if ((category.type === TransactionType.Expenses || category.type === TransactionType.TransitExpenses) && currentAccount.type === AccountType.Debit) {
                return result - num.value
            } else if ((category.type === TransactionType.Income || category.type === TransactionType.TransitIncome) && currentAccount.type === AccountType.Credit) {
                return result - num.value
            } else if ((category.type === TransactionType.Income || category.type === TransactionType.TransitIncome) && currentAccount.type === AccountType.Debit) {
                return result + num.value
            }
        }
        return result;
    }, startBalance)
}

export const isPossibleToDeleteAccount = (accountID: string) => {
    const state: GlobalState = (store as any).getState();
    const accountTransactions: TransactionDTO[] = state.transactions.filter(el => el.accountID === accountID)
    return accountTransactions.length === 0;
}

export const isPossibleToDeleteTransactionCategory = (categoryID: string) => {
    const state: GlobalState = (store as any).getState();
    const transactions: TransactionDTO[] = state.transactions.filter(el => el.transactionCategoryID === categoryID)
    return transactions.length === 0;
}

export const getAllExpensesByCategories = (startDate: string, endDate: string): { categoryName: string, value: number }[] => {
    let result: { categoryName: string, value: number }[] = [];
    if (!moment(startDate).isValid() || !moment(endDate).isValid() || (moment(endDate).isBefore(moment(startDate))))
        return result;
    const state: GlobalState = (store as any).getState();
    const allExpensesCategories = state.transactionCategories.filter(c => c.type === TransactionType.Expenses);
    allExpensesCategories.forEach(c => {
        const allExpenses = state.transactions.filter(t => t.transactionCategoryID === c.id && moment(t.date).isSameOrAfter(moment(startDate).startOf('day')) && moment(t.date).isSameOrBefore(moment(endDate).endOf('day')));
        const summ = allExpenses.map(el => el.value).reduce((a, b) => a + b, 0)
        result.push({ categoryName: c.name, value: summ });
    })
    return result;
}

export const getAllIncomesByCategories = (startDate: string, endDate: string): { categoryName: string, value: number }[] => {
    let result: { categoryName: string, value: number }[] = [];
    if (!moment(startDate).isValid() || !moment(endDate).isValid() || (moment(endDate).isBefore(moment(startDate))))
        return result;
    const state: GlobalState = (store as any).getState();
    const allIncomesCategories = state.transactionCategories.filter(c => c.type === TransactionType.Income);
    allIncomesCategories.forEach(c => {
        const allIncomes = state.transactions.filter(t => t.transactionCategoryID === c.id && moment(t.date).isSameOrAfter(moment(startDate).startOf('day')) && moment(t.date).isSameOrBefore(moment(endDate).endOf('day')));
        const summ = allIncomes.map(el => el.value).reduce((a, b) => a + b, 0)
        result.push({ categoryName: c.name, value: summ });
    })
    return result;
}

interface DataRawsPeriodically {
    labels: string[];
    datasets: {
        label: string,
        data: number[]
    }[]
}

export const getAllExpensesByCategoriesMonthly = (startDate: string, endDate: string): DataRawsPeriodically => {
    let result: DataRawsPeriodically = {
        labels: [],
        datasets: []
    };
    if (!moment(startDate).isValid() || !moment(endDate).isValid() || (moment(endDate).isBefore(moment(startDate))))
        return result;
    const state: GlobalState = (store as any).getState();
    const allExpensesCategories = state.transactionCategories.filter(c => c.type === TransactionType.Expenses);
    const labels: string[] = getMonthsRange(startDate, endDate);
    allExpensesCategories.forEach(c => {
        const allExpenses = state.transactions.filter(t =>
            t.transactionCategoryID === c.id &&
            moment(t.date).isSameOrAfter(moment(startDate).startOf('month')) &&
            moment(t.date).isSameOrBefore(moment(endDate).endOf('month'))
        );
        const data: number[] = [];
        labels.forEach(l => {
            const dateTransactions = allExpenses.filter(el => _.isEqual(moment(el.date).format('MMM YYYY'), l))
            const summTransactions = dateTransactions.map(el => el.value).reduce((a, b) => a + b, 0);
            data.push(summTransactions);
        })
        result.datasets = [...result.datasets, {label: c.name, data}]
    });
    result.labels = labels;
    return result;
}

export const getAllIncomesByCategoriesMonthly = (startDate: string, endDate: string): DataRawsPeriodically => {
    let result: DataRawsPeriodically = {
        labels: [],
        datasets: []
    };
    if (!moment(startDate).isValid() || !moment(endDate).isValid() || (moment(endDate).isBefore(moment(startDate))))
        return result;
    const state: GlobalState = (store as any).getState();
    const allIncomesCategories = state.transactionCategories.filter(c => c.type === TransactionType.Income);
    const labels: string[] = getMonthsRange(startDate, endDate);
    allIncomesCategories.forEach(c => {
        const allIncomes = state.transactions.filter(t =>
            t.transactionCategoryID === c.id &&
            moment(t.date).isSameOrAfter(moment(startDate).startOf('month')) &&
            moment(t.date).isSameOrBefore(moment(endDate).endOf('month'))
        );
        const data: number[] = [];
        labels.forEach(l => {
            const dateTransactions = allIncomes.filter(el => _.isEqual(moment(el.date).format('MMM YYYY'), l))
            const summTransactions = dateTransactions.map(el => el.value).reduce((a, b) => a + b, 0);
            data.push(summTransactions);
        })
        result.datasets = [...result.datasets, {label: c.name, data}]
    });
    result.labels = labels;
    return result;
}

export const getMonthsRange = (startDate: string, endDate: string): string[] => {
    const startFormattedDate: string = moment(startDate).format("MMM YYYY")
    const endFormattedDate: string = moment(endDate).format("MMM YYYY")
    const result: string[] = [];
    for (let m = moment(startFormattedDate, "MMM YYYY").startOf('month'); m.isSameOrBefore(moment(endFormattedDate, "MMM YYYY").endOf('month')); m.add(1, 'month')) {
        result.push(m.format("MMM YYYY"));
    }
    return result;
}