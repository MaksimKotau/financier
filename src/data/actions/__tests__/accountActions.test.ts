import uuidv4 from 'uuid/v4';
import AccountDTO from '../../DTO/AccountDTO';
import AccountType from '../../enums/AccountType';
import { setAddAccountAction, setDeleteAccountAction, setModifyAccountAction } from '../accountActions';
import * as constants from '../actionTypes';

describe('Account actions', () => {
    const currentAccount: AccountDTO = {
        id: uuidv4(),
        name: "Work debit card",
        type: AccountType.Debit
    };
    it('creates an action to add new account', () => {
        const expectedAction = {type: constants.ADD_ACCOUNT, account: currentAccount};
        expect(setAddAccountAction(currentAccount)).toEqual(expectedAction);
    })
    it('creates an action  to modify account', () => {
        const expectedAction = {type: constants.MODIFY_ACCOUNT, account: currentAccount};
        expect(setModifyAccountAction(currentAccount)).toEqual(expectedAction);
    })
    it('creates an action  to delete account', () => {
        const id: string = uuidv4();
        const expectedAction = {type: constants.DELETE_ACCOUNT, accountID: id};
        expect(setDeleteAccountAction(id)).toEqual(expectedAction);
    })
})
