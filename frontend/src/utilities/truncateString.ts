export function truncateString(s: string, maxLength: number) {
    if (s.length > maxLength) {
        return s.slice(0, maxLength - 3) + "..."
    }
    return s
}

export default truncateString
