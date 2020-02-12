import rootReducer from '../';
import { createStore } from 'redux';

describe('root reducer test', () => {
    it('should return default root state', () => {
        let store = createStore(rootReducer);
        let expectedState = {
            accounts: [],
            transactions: [],
            transactionCategories: []
        }
        expect(store.getState()).toEqual(expectedState)
    })
})