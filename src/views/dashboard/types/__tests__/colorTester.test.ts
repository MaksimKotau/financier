import ColorChooser, {chartColors} from '../chartColors';

describe('Test of ColorChooser', () => {
    let palette = new ColorChooser();
    beforeEach(() => {
        palette = new ColorChooser();
    })
    it('shoul return first color', () => {
        expect(palette.getColor()).toEqual(chartColors[0]);
    })
    it('should return third color', () => {
        palette.getColor();
        palette.getColor();
        expect(palette.getColor()).toEqual(chartColors[2]);
    })
    it('should return first color', () => {
        for(let i = 0; i< chartColors.length; i++){
            palette.getColor();
        }
        expect(palette.getColor()).toEqual(chartColors[0]);
    })
}) 
