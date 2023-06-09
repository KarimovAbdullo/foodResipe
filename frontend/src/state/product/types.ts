import { IProduct } from 'types/data'

export type ProductState = {
  products: IProduct[]
  loading: boolean
  error: string
  count: number
  productPage: number
  next: string | null
  moreLoading: boolean
  previuos: string | null
}
