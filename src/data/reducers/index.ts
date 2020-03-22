import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import accounts, { AccountState } from './accountReducers';
import transactionCategories, { TransactionCategoryState } from './transactionCategoryReducers';
import transactions, { TransactionState } from './transactionReducers';
import dashboard, { DashboardState } from './dashboardReducers';

const rootPersistConfig = {
  key: 'root',
  storage,
} as any



export interface GlobalState {
  readonly accounts: AccountState;
  readonly transactionCategories: TransactionCategoryState;
  readonly transactions: TransactionState;
  readonly dashboard: DashboardState;
}


export const rootReducer =  combineReducers<GlobalState, any>({
  accounts,
  transactionCategories,
  transactions,
  dashboard
} as any)

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = createStore<GlobalState, any, null, null>(persistedReducer as any);

export const persistor = persistStore(store)
