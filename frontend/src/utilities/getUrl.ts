const PUBLIC_URL = process.env.PUBLIC_URL;

export function getUrl(path: string): string {
    if (path === "/" && PUBLIC_URL === "") return path
    if (path === "/") return PUBLIC_URL
    return `${PUBLIC_URL}/${path}`;
}

export default getUrl;
