export function formatNFiles(n: number): string {
    if (n > 1) {
        return `${n} files`
    }
    return `${n} file`
}

export default formatNFiles
