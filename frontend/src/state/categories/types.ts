import { ICategory } from 'types/data'

export type CategoriesState = {
  categories: ICategory[]
  count: number
  categoriesPage: number
  next: string | null
  previuos: string | null
  loading: boolean
  moreLoading: boolean
  error: string
}
