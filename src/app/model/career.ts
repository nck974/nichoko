export interface CareerPosition{
    name: string,
    startRange: string,
    endRange?: string,
    activities: string[]
}

export interface CareerCompany {
    name: string,
    location?: string,
    positions: CareerPosition[],
}

export interface CareerSection{
    name: string,
    icon: string,
    path: string,
    career: CareerCompany[],
}