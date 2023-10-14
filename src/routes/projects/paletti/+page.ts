export const ssr = false

export const load = async ({ url }) => {
    return {
        mainColor: url.searchParams.get("mainColor")?.split(",") || ["EF347C"],
        hueRotationAmount: (url.searchParams.get("hueRotationAmount")?.split(",") || ["50"]).map(
            (n) => parseInt(n)
        ),
        focusedPalette: parseInt(url.searchParams.get("focusedPalette") || "0"),
    }
}
