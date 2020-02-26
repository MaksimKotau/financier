import uuidv4 from 'uuid/v4';
import { AddAccountAction, DeleteAccountAction, ModifyAccountAction } from '../../actions/accountActions';
import * as constants from '../../actions/actionTypes';
import AccountDTO from '../../DTO/AccountDTO';
import AccountType from '../../enums/AccountType';
import accountReducer from '../accountReducers';


describe('accountReducers', () => {
    it('should return state with new account', () => {
        const currentAccountID: string = uuidv4();
        const currentAccount: AccountDTO = { id: currentAccountID, name: "Name", type: AccountType.Cash, startBalance: 0 };
        const currentAction: AddAccountAction = { type: constants.ADD_ACCOUNT, account: currentAccount };
        const expectedState = [currentAccount];
        expect(accountReducer(undefined, currentAction)).toEqual(expectedState);
    })
    it('should return state with modified account', () => {
        const date = "2020-08-16";
        const currentAccountID: string = uuidv4();
        const currentAccount = { id: currentAccountID, name: "Name", type: AccountType.Cash, startBalance: 0, startDate: date };
        const currentState = [currentAccount];
        const modifiedAccount = { id: currentAccountID, name: "Name2", type: AccountType.Cash, startBalance: 0, startDate: date };
        const action: ModifyAccountAction = {type: constants.MODIFY_ACCOUNT, account: modifiedAccount};
        const expectedState = [modifiedAccount];
        expect(accountReducer(currentState, action)).toEqual(expectedState);
    })
    it('should delete account from state', () => {
        const currentAccountID: string = uuidv4();
        const currentState: AccountDTO[] = [{id: currentAccountID, type: AccountType.Credit, name: "Name", startBalance: 0}]
        const action: DeleteAccountAction = {type: constants.DELETE_ACCOUNT, accountID: currentAccountID};
        const newState:AccountDTO[] = [];
        expect(accountReducer(currentState, action)).toEqual(newState);
    })
})