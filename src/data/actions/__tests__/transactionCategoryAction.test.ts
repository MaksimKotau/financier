import uuidv4 from 'uuid/v4';
import TransactionCategoryDTO from '../../DTO/TransactionCategoryDTO';
import TransactionType from '../../enums/TransactionType';
import * as constants from '../actionTypes';
import { AddTransactionCategoryAction, DeleteTransactionCategoryAction, ModifyTransactionCategoryAction, setAddTransactionCategoryAction, setDeleteTransactionCategoryAction, setModifyTransactionCategoryAction } from '../transactionCategoryActions';

describe('transaction category actions', () => {
    const currentID: string = uuidv4();
    const currentTransactionCategory: TransactionCategoryDTO ={
        id: currentID,
        description: "description",
        name: "name",
        type: TransactionType.Debit
    };
    it('should return AddTransactionCAtegoryAction', () => {
        const expectedAction: AddTransactionCategoryAction = { type: constants.ADD_TRANSACTION_CATEGORY, transactionCategory: currentTransactionCategory};
        expect(setAddTransactionCategoryAction(currentTransactionCategory)).toEqual(expectedAction);
    })
    it('should return ModifyTransactionCategoryAction', () => {
        const expectedAction: ModifyTransactionCategoryAction = { type: constants.MODIFY_TRANSACTION_CATEGORY, transactionCategory: currentTransactionCategory};
        expect(setModifyTransactionCategoryAction(currentTransactionCategory)).toEqual(expectedAction);
    })
    it('should return DeleteTransactionCategoryAction', () => {
        const expectedAction: DeleteTransactionCategoryAction = { type: constants.DELETE_TRANSACTION_CATEGORY, transactionCategoryID: currentID};
        expect(setDeleteTransactionCategoryAction(currentID)).toEqual(expectedAction);
    })
})