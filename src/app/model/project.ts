import { Chip } from "./chip";

export interface Project {
    id: number,
    title: string,
    description: string,
    link?: string,
    linkIcon?: string,
    images?: string[],
    altNameImages?: string[],
    tags?: Chip[],
}