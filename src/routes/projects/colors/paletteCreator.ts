import type { ColorProps, PaletteConfig } from "$lib/interfaces"

/** Provides color palette based on a main color */
export class paletteCreator {
    /** Creates hue palette based on hue of main color
     * Rotates hue to nearest bright hue
     *
     * @param config Configuration for palette creation
     */
    static createModifiedHues(config: PaletteConfig): number[] {
        // Hue modifiers to choose from that are added to main hue
        const noHueModifiers: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        const smallHueModifiers: number[] = [3, 2, 1, 0, 0, 0, 1, 2, 3]
        const mediumHueModifiers: number[] = [6, 4, 2, 1, 0, 1, 2, 4, 6]
        const largeHueModifiers: number[] = [12, 8, 4, 2, 0, 2, 4, 8, 12]

        // Distances to nearest bright hues
        const distanceToYellow: number = config.mainColor.hue - 60
        const distanceToCyan: number = config.mainColor.hue - 180
        const distanceToMagenta: number = config.mainColor.hue - 300
        const distances: number[] = [distanceToYellow, distanceToCyan, distanceToMagenta]

        /** Determines if nearest bright hue is up or down from main hue */
        enum HueRotationDirection {
            "Up" = 1,
            "None" = 0,
            "Down" = -1,
        }
        let hueRotationDirection: HueRotationDirection = HueRotationDirection.None

        /** Currently smallest distance to nearest bright hue */
        let smallestDistance = 360

        // Finds smallest distance and sets correct hue rotation direction
        distances.forEach((distance: number) => {
            if (Math.abs(distance) < Math.abs(smallestDistance)) {
                smallestDistance = distance
                if (distance === 0) hueRotationDirection = HueRotationDirection.None
                else if (distance < 0) hueRotationDirection = HueRotationDirection.Up
                else if (distance > 0) hueRotationDirection = HueRotationDirection.Down
            }
        })

        if (config.invertHueDirection) hueRotationDirection *= -1

        // Chooses hue modifiers based on amount of hue rotation
        let chosenHueModifiers: number[] = []

        switch (config.hueRotationAmount) {
            case "none":
                chosenHueModifiers = noHueModifiers
                break
            case "small":
                chosenHueModifiers = smallHueModifiers
                break
            case "medium":
                chosenHueModifiers = mediumHueModifiers
                break
            case "large":
                chosenHueModifiers = largeHueModifiers
                break
            default:
                chosenHueModifiers = noHueModifiers
                break
        }

        // Creates hues based on amount of hue rotation and rotation direction
        const hues: number[] = chosenHueModifiers.map(
            (hueModifier: number) => config.mainColor.hue + hueModifier * hueRotationDirection
        )

        return hues
    }

    /** Creates saturation palette based on saturation of main color
     * Divides remaining saturation space evenly between main saturation and max saturation
     *
     * @param mainSaturation Saturation of main color
     */
    static createdModifiedSaturations(mainSaturation: number): number[] {
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
     *
     * @param mainLightness Lightness of main color
     */
    static createdModifiedLightnesses(mainLightness: number): number[] {
        const minLightness = 13
        const maxLightness = 95

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

    /** Creates a more balanced color palette */
    static createBalancedPalette(config: PaletteConfig): ColorProps[] {
        const hues: number[] = this.createModifiedHues(config)
        const saturations: number[] = this.createdModifiedSaturations(config.mainColor.saturation)
        const lightnesses: number[] = this.createdModifiedLightnesses(config.mainColor.lightness)

        const colorPalette: ColorProps[] = []

        // Creates color palette based on modified hues, saturations and lightnesses
        const amountofColors = 9
        for (let i = 0; i < amountofColors; i++) {
            colorPalette.push({
                hue: hues[i],
                saturation: saturations[i],
                lightness: lightnesses[i],
            })
        }

        return colorPalette
    }
}
