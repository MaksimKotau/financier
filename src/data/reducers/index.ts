import { combineReducers } from 'redux'
import accounts, {AccountState} from './accountReducers';
import transactionCategories, {TransactionCategoryState} from './transactionCategoryReducers';
import transactions, {TransactionState} from './transactionReducers';


export default combineReducers<GlobalState, any>({
  accounts,
  transactionCategories,
  transactions
})

export interface GlobalState {
  readonly accounts: AccountState;
  readonly transactionCategories: TransactionCategoryState;
  readonly transactions: TransactionState;
}
