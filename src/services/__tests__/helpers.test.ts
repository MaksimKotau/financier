import AccountType from '../../data/enums/AccountType'
import { enumToarray } from '../enumToArray'

enum TestEnum {
    name1 = 1,
    name2 = 2
}

describe('Helpers test', () => {
    it('should return array of key-value pairs', () => {
        const expectedArray: { name: string, value: number }[] = [
            { name: "name1", value: 1 },
            { name: "name2", value: 2 }
        ]
        expect(enumToarray(TestEnum)).toEqual(expectedArray)
    })
    it('should return array of Accont type name-value pairs', () => {
        const expectedArray: { name: string, value: number }[] = [
            { name: "Debit", value: 1 },
            { name: "Credit", value: 2 },
            {name: "Saving",value: 3},
            {name: "Cash", value: 4}
        ]
        expect(enumToarray(AccountType)).toEqual(expectedArray);
    })
})