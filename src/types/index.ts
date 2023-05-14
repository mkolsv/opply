export interface Supplier {
    id: number,
    name: string,
    description: string
}

export interface Quote {
    id: number,
    supplier_id: number,
    title: string,
    amount: string,
    created: string
}