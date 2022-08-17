export function createSlug(q: string): string {
    return q.trim().split(" ").join("+")
}

export default createSlug
