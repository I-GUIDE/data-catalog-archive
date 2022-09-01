// attempt to format name as <fist> <last>. Will correct <last>, <first> to <first> <last>
export function formatName(name: string | undefined | null): string {
    if (!name) {
        return ""
    }

    const commaIdx = name.indexOf(",")

    if (commaIdx !== -1 && commaIdx + 1 < name.length) {
        return `${name.slice(commaIdx + 1)} ${name.slice(0, commaIdx)}`
    }

    return name
}

export default formatName
