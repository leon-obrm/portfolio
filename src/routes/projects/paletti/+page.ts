export const ssr = false

export const load = async ({ url }) => {
    return {
        mainColor: url.searchParams.get("mainColor") || "EF347C",
        hueRotationAmount: parseInt(url.searchParams.get("hueRotationAmount") || "50"),
    }
}
