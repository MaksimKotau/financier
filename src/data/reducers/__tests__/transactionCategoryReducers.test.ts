import uuidv4 from 'uuid/v4';
import * as constants from '../../actions/actionTypes';
import { AddTransactionCategoryAction, DeleteTransactionCategoryAction, ModifyTransactionCategoryAction } from '../../actions/transactionCategoryActions';
import TransactionCategoryDTO from '../../DTO/TransactionCategoryDTO';
import TransactionType from '../../enums/TransactionType';
import transactionCategoryReducer from '../transactionCategoryReducers';


describe('transactionCategoryReducers', () => {
    it('should return state with new TransactionCategory', () => {
        const transactionCategoryID: string = uuidv4();
        const currentTransactionCategory: TransactionCategoryDTO = { id: transactionCategoryID, name: "Name", type: TransactionType.Income};
        const currentAction: AddTransactionCategoryAction = { type: constants.ADD_TRANSACTION_CATEGORY, transactionCategory: currentTransactionCategory };
        expect(transactionCategoryReducer([], currentAction)[0]).toEqual(currentTransactionCategory);
    })
    it('should return state with modified TransactionCategory', () => {
        const transactionCategoryID: string = uuidv4();
        const currentTransactionCategory = { id: transactionCategoryID, name: "Name", type: TransactionType.Income };
        const currentState = [currentTransactionCategory];
        const modifiedTransactionCategory = { id: transactionCategoryID, name: "Name2", type: TransactionType.Income };
        const action: ModifyTransactionCategoryAction = {type: constants.MODIFY_TRANSACTION_CATEGORY, transactionCategory: modifiedTransactionCategory};
        const expectedState = [modifiedTransactionCategory];
        expect(transactionCategoryReducer(currentState, action)).toEqual(expectedState);
    })
    it('should delete TransactionCategory from state', () => {
        const transactionCategoryID: string = uuidv4();
        const currentState: TransactionCategoryDTO[] = [{id: transactionCategoryID, type: TransactionType.Income, name: "Name"}]
        const action: DeleteTransactionCategoryAction = {type: constants.DELETE_TRANSACTION_CATEGORY, transactionCategoryID};
        const newState:TransactionCategoryDTO[] = [];
        expect(transactionCategoryReducer(currentState, action)).toEqual(newState);
    })
})