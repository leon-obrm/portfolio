export const ssr = false

export const load = async ({ url }) => {
    return {
        mainColor: url.searchParams.get("mainColor") || "09D296",
        hueRotationAmount: parseInt(url.searchParams.get("hueRotationAmount") || "50"),
    }
}
