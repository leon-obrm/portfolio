import convert from "color-convert"

/** Creates color palettes based on palette configs */
export class PaletteCreator {
    /** Creates hue palette based on hue of main color
     * Rotates hue to nearest bright hue
     */
    modifyHues(mainHue: number, hueRotationAmount: number): number[] {
        // Hue modifiers to choose from that are added to main hue
        const maxHueModifiers: number[] = [20, 10, 5, 2, 0, 2, 5, 10, 20]

        // Creates hues based on amount of hue rotation and rotation direction
        const hues: number[] = maxHueModifiers.map(
            (hueModifier: number) => mainHue + (hueModifier / 100) * hueRotationAmount
        )

        return hues
    }

    /** Creates saturation palette based on saturation of main color
     * Divides remaining saturation space evenly between main saturation and max saturation
     */
    modifySaturations(mainSaturation: number): number[] {
        const maxSaturation = 100
        // Distances to max saturation
        const mainToMax = maxSaturation - mainSaturation

        // Divides remaining saturation space evenly between main saturation and max saturation
        const saturations: number[] = [
            maxSaturation,
            mainSaturation + mainToMax * 0.75,
            mainSaturation + mainToMax * 0.5,
            mainSaturation + mainToMax * 0.25,
            mainSaturation,
            mainSaturation + mainToMax * 0.25,
            mainSaturation + mainToMax * 0.5,
            mainSaturation + mainToMax * 0.75,
            maxSaturation,
        ]

        return saturations
    }

    /** Creates lightness palette based on lightness of main color
     * Divides remaining lightnesses evenly between main lightness and min / max lightness
     */
    modifyLightnesses(mainLightness: number): number[] {
        const minLightness = 10
        const maxLightness = 96

        // Distances to min and max lightness
        const mainToMin = mainLightness - minLightness
        const mainToMax = maxLightness - mainLightness

        // Divides remaining lightnesses evenly between main lightness and min / max lightness
        const lightnesses: number[] = [
            minLightness,
            mainLightness - mainToMin * 0.75,
            mainLightness - mainToMin * 0.5,
            mainLightness - mainToMin * 0.25,
            mainLightness,
            mainLightness + mainToMax * 0.25,
            mainLightness + mainToMax * 0.5,
            mainLightness + mainToMax * 0.75,
            maxLightness,
        ]

        return lightnesses
    }

    /** Creates a more balanced color palette
     * @param mainColor Main / middle color of color palette in hex (without #)
     * @param hueRotationAmount Range: -100 - 100
     */
    createPalette(mainColor: string, hueRotationAmount: number): string[] {
        const mainHsl: number[] = convert.hex.hsl(mainColor)

        const hues: number[] = this.modifyHues(mainHsl[0], hueRotationAmount)
        const saturations: number[] = this.modifySaturations(mainHsl[1])
        const lightnesses: number[] = this.modifyLightnesses(mainHsl[2])

        const colors: string[] = []

        // Creates color palette based on modified hues, saturations and lightnesses
        const amountofColors = 9
        for (let i = 0; i < amountofColors; i++) {
            const color: string = convert.hsl.hex([hues[i], saturations[i], lightnesses[i]])
            colors.push(color)
        }

        return colors
    }
}
