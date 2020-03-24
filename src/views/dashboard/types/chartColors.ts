export const chartColors = [
    "#00876c",
    "#559c74",
    "#84b182",
    "#afc695",
    "#d7dbad",
    "#fcf1ca",
    "#f2d2a1",
    "#ecb27e",
    "#e68f65",
    "#df6956",
    "#d43d51"
]

class ColorChooser {
    private currentIndex: number = 0;
    private maxIndex: number = chartColors.length - 1;
    getColor(): string {
        const color = chartColors[this.currentIndex];
        if (this.currentIndex === this.maxIndex) {
            this.currentIndex = 0
        } else {
            this.currentIndex += 1;
        }
        return color;
    }
}

export default ColorChooser;

