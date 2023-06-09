import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { ICategoryResult } from 'types/data'

export const getCategoriesAction = createAsyncThunk<ICategoryResult | null>(
  'categories/get',
  async () => {
    try {
      const { data: response } = await apiClient.get<ICategoryResult | null>(
        R.consts.API_PATH_CATEGORY_LIST,
        {
          params: { page: 1 },
        },
      )

      return response
    } catch (e) {
      throw e
    }
  },
)
export const getMoreCategoryAction = createAsyncThunk<
  ICategoryResult | null,
  { page: number }
>('categories/more-categories-get', async arg => {
  try {
    const { data: response } = await apiClient.get<ICategoryResult | null>(
      R.consts.API_PATH_CATEGORY_LIST,
      {
        params: { page: arg.page },
      },
    )

    return response
  } catch (e) {
    throw e
  }
})
