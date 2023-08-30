import type { ColorProps } from "$lib/interfaces"

/** Provides color palettes based on a main color */
export class paletteCreator {
    /** Creates color palette based on absolute scale */
    static createAbsolutePalette(mainColor: ColorProps): ColorProps[] {
        const absoluteColorModifiers: ColorProps[] = [
            { hue: 4, saturation: 19, lightness: -45 },
            { hue: 2, saturation: 10, lightness: -39 },
            { hue: 2, saturation: 5, lightness: -27 },
            { hue: 0, saturation: 2, lightness: -14 },
            { hue: 0, saturation: 0, lightness: 0 },
            { hue: 0, saturation: 2, lightness: 16 },
            { hue: 1, saturation: 5, lightness: 24 },
            { hue: 3, saturation: 10, lightness: 32 },
            { hue: 5, saturation: 19, lightness: 37 },
        ]

        const colorPalette: ColorProps[] = absoluteColorModifiers.map((modifier: ColorProps) => {
            return {
                hue: mainColor.hue + modifier.hue,
                saturation: mainColor.saturation + modifier.saturation,
                lightness: mainColor.lightness + modifier.lightness,
            }
        })

        return colorPalette
    }

    /** Creates color palette based on relative scale */
    static createRelativePalette(mainColor: ColorProps): ColorProps[] {
        const relativeColorModifiers: ColorProps[] = [
            { hue: 4, saturation: 0.235, lightness: -0.763 },
            { hue: 2, saturation: 0.123, lightness: -0.661 },
            { hue: 2, saturation: 0.062, lightness: -0.458 },
            { hue: 0, saturation: 0.025, lightness: -0.237 },
            { hue: 0, saturation: 0.0, lightness: 0.0 },
            { hue: 0, saturation: 0.025, lightness: 0.271 },
            { hue: 1, saturation: 0.062, lightness: 0.407 },
            { hue: 3, saturation: 0.123, lightness: 0.542 },
            { hue: 5, saturation: 0.235, lightness: 0.627 },
        ]

        const colorPalette: ColorProps[] = relativeColorModifiers.map((modifier: ColorProps) => {
            return {
                hue: mainColor.hue + modifier.hue,
                saturation: mainColor.saturation + mainColor.saturation * modifier.saturation,
                lightness: mainColor.lightness + mainColor.lightness * modifier.lightness,
            }
        })

        return colorPalette
    }

    /** Creates hue palette based on hue of main color
     * Rotates hue to nearest bright hue
     *
     * @param mainHue Hue of main color
     * @param hueRotationAmount Amount of hue rotation
     */
    static createModifiedHues(
        mainHue: number,
        hueRotationAmount: "none" | "small" | "medium" | "large",
        changeHueDirection = false
    ): number[] {
        // Hue modifiers to choose from that are added to main hue
        const noHueModifiers: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        const smallHueModifiers: number[] = [3, 2, 1, 0, 0, 0, 1, 2, 3]
        const mediumHueModifiers: number[] = [6, 4, 2, 1, 0, 1, 2, 4, 6]
        const largeHueModifiers: number[] = [12, 8, 4, 2, 0, 2, 4, 8, 12]

        // Distances to nearest bright hues
        const distanceToYellow: number = mainHue - 60
        const distanceToCyan: number = mainHue - 180
        const distanceToMagenta: number = mainHue - 300
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

        if (changeHueDirection) hueRotationDirection *= -1

        // Chooses hue modifiers based on amount of hue rotation
        let chosenHueModifiers: number[] = []

        switch (hueRotationAmount) {
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
            (hueModifier: number) => mainHue + hueModifier * hueRotationDirection
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
    static createDividedPalette(
        mainColor: ColorProps,
        hueRotationAmount: "none" | "small" | "medium" | "large",
        changeHueDirection?: boolean
    ): ColorProps[] {
        const hues: number[] = this.createModifiedHues(
            mainColor.hue,
            hueRotationAmount,
            changeHueDirection
        )
        const saturations: number[] = this.createdModifiedSaturations(mainColor.saturation)
        const lightnesses: number[] = this.createdModifiedLightnesses(mainColor.lightness)

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

    /** Creates every kind of palette for a certain amount of colors */
    static createTestPalettes(changeHueDirection: boolean): ColorProps[][] {
        const mainColors: ColorProps[] = [
            // Blue
            {
                hue: 188,
                saturation: 81,
                lightness: 59,
            },
            // Orange
            {
                hue: 36,
                saturation: 100,
                lightness: 60,
            },
            // Orange 2
            {
                hue: 13,
                saturation: 88,
                lightness: 54,
            },
            // Pink
            {
                hue: 342,
                saturation: 99,
                lightness: 57,
            },
            // Mint
            {
                hue: 162,
                saturation: 92,
                lightness: 43,
            },
            // Green
            {
                hue: 128,
                saturation: 51,
                lightness: 47,
            },
            // Cyan
            {
                hue: 180,
                saturation: 50,
                lightness: 50,
            },
            // Purple
            {
                hue: 278,
                saturation: 82,
                lightness: 47,
            },
            // Red
            {
                hue: 360,
                saturation: 80,
                lightness: 47,
            },
        ]

        const testPalettes: ColorProps[][] = mainColors.flatMap((mainColor: ColorProps) => [
            this.createAbsolutePalette(mainColor),
            this.createRelativePalette(mainColor),
            this.createDividedPalette(mainColor, "none", changeHueDirection),
            this.createDividedPalette(mainColor, "small", changeHueDirection),
            this.createDividedPalette(mainColor, "medium", changeHueDirection),
            this.createDividedPalette(mainColor, "large", changeHueDirection),
        ])

        return testPalettes
    }
}
