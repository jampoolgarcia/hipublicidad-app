export interface IProduct {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    images?: string[],
    rating: IRating
}

export interface IRating {
    rate: number,
    count: number
}