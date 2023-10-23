export const ssr = false

export const load = async ({ url }) => {
    return {
        mainColors: url.searchParams.get("mainColors")?.split(",") || ["EF347C"],
        hueRotations: (url.searchParams.get("hueRotations")?.split(",") || ["50"]).map((n) =>
            parseInt(n)
        ),
        focusedPalette: parseInt(url.searchParams.get("focusedPalette") || "0"),
    }
}
