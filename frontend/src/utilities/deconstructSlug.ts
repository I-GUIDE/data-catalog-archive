export function deconstructSlug(s: string): string {
    return s.trim().split("+").join(" ")
}

export default deconstructSlug
