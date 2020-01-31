import moment from 'moment';
import uuidv4 from 'uuid/v4';
import TransactionDTO from '../../DTO/TransactionDTO';
import * as constants from '../actionTypes';
import { setAddTransactionAction, setDeleteTransactionAction, setModifyTransactionAction } from '../transactionActions';

describe('Transaction actions', () => {
    const categoryID = uuidv4();
    const currentTransaction: TransactionDTO = {
        id: uuidv4(),
        name: "Walmart",
        transactionCategoryID: categoryID,
        date: moment(),
        value: 100
    };
    it('creates an action to add new transaction', () => {
        const expectedAction = {type: constants.ADD_TRANSACTION, transaction: currentTransaction};
        expect(setAddTransactionAction(currentTransaction)).toEqual(expectedAction);
    })
    it('creates an action  to modify transaction', () => {
        const expectedAction = {type: constants.MODIFY_TRANSACTION,  transaction: currentTransaction};
        expect(setModifyTransactionAction(currentTransaction)).toEqual(expectedAction);
    })
    it('creates an action  to delete transaction', () => {
        const id: string = uuidv4();
        const expectedAction = {type: constants.DELETE_TRANSACTION, transactionID: id};
        expect(setDeleteTransactionAction(id)).toEqual(expectedAction);
    })
})