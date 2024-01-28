export interface SoftwareProject {
    id: number,
    title: string,
    description: string,
    link?: string,
    linkIcon?: string,
    images?: string[],
    altNameImages?: string[],
    tags: string[],
}