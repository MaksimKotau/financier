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
    getFirstColor(): string {
        return chartColors[0]
    }
    getLastColor(): string {
        return chartColors[chartColors.length - 1]
    }
}

export const getTransparentColor = (color: string): string => {
    return `rgba(${[...hexToRgb(color), 0.2].join(',')})`
}

const hexToRgb = (hex: string): number[] =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)!
    .map(x => parseInt(x, 16))

export default ColorChooser;

