import {getMonthsRange} from '../balanceService'

describe('Test balance service', () => {
    describe('test month rabge service', () => {
        it('should return month range two months', () => {
            const range = getMonthsRange("1981-09-28", "1981-10-02");
            const expectedRange = ["Sep 1981", "Oct 1981"]
            expect(range).toEqual(expectedRange);
        })
        it('should return two months range in two years', () => {
            const range = getMonthsRange("1981-12-31", "1982-01-01");
            const expectedRange = ["Dec 1981", "Jan 1982"]
            expect(range).toEqual(expectedRange);
        })
        it('should return one month range', () => {
            const range = getMonthsRange("1981-12-01", "1981-12-31");
            const expectedRange = ["Dec 1981"]
            expect(range).toEqual(expectedRange);
        })
        it('should return four months range', () => {
            const range = getMonthsRange("1981-12-01", "1982-03-31");
            const expectedRange = ["Dec 1981", "Jan 1982", "Feb 1982", "Mar 1982"]
            expect(range).toEqual(expectedRange);
        })
    })
})