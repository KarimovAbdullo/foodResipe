import { IProduct } from 'types/data'

export type DetailState = {
    products: IProduct[]
    loading: boolean
    error: string
    count: number
    productPage: number
    next: string | null
    moreLoading: boolean
    previuos: string | null
}
