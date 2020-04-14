import uuidv4 from 'uuid/v4';
import * as constants from '../../actions/actionTypes';
import { AddTransactionAction, DeleteTransactionAction, ModifyTransactionAction } from '../../actions/transactionActions';
import TransactionDTO from '../../DTO/TransactionDTO';
import transactionReducer from '../transactionReducers';

describe('TransactionReducer', () => {
    it('should return state with new transaction', () => {
        const transactionID: string = uuidv4();
        const currentTransaction: TransactionDTO = { id: transactionID, date: "2020-02-16", value: 100, transactionCategoryID: uuidv4(), accountID: uuidv4() };
        const currentAction: AddTransactionAction = { type: constants.ADD_TRANSACTION, transaction: currentTransaction };
        const expectedState: TransactionDTO[] = [currentTransaction];
        expect(transactionReducer([], currentAction)).toEqual(expectedState);
    })
    it('should return state with modified transaction', () => {
        const transactionID: string = uuidv4();
        const currentTransaction: TransactionDTO = { id: transactionID, date: "2020-02-16", value: 100, transactionCategoryID: uuidv4(), accountID: uuidv4() };
        const modifiedTransaction: TransactionDTO = { id: transactionID, date: "2020-02-16", value: 110, transactionCategoryID: uuidv4(), accountID: uuidv4() };
        const currentState: TransactionDTO[] = [currentTransaction];
        const expectedState: TransactionDTO[] = [modifiedTransaction];
        const action: ModifyTransactionAction = {type: constants.MODIFY_TRANSACTION, transaction: modifiedTransaction};
        expect(transactionReducer(currentState, action)).toEqual(expectedState);
    })
    it('should return state without deleted transaction', () => {
        const transactionID: string = uuidv4();
        const currentTransaction: TransactionDTO = { id: transactionID, date: "2020-02-16", value: 100, transactionCategoryID: uuidv4(), accountID: uuidv4() };
        const currentState: TransactionDTO[] = [currentTransaction];
        const expectedState: TransactionDTO[] = [];
        const action: DeleteTransactionAction = {type: constants.DELETE_TRANSACTION, transactionID};
        expect(transactionReducer(currentState, action)).toEqual(expectedState);
    })
})