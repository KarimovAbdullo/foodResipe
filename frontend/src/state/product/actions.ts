import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IProduct, IResponse } from 'types/data'

export const getProductAction = createAsyncThunk<
  IResponse<IProduct>,
  { category: string }
>('product/get', async arg => {
  try {
    const { data: response } = await apiClient.get<IResponse<IProduct>>(
      R.consts.API_PATH_PRODUCT_LIST,
      {
        params: { page: 1, category: arg.category },
      },
    )

    return response
  } catch (e) {
    throw e
  }
})
export const getMoreProductAction = createAsyncThunk<
  IResponse<IProduct> | null,
  { page: number; category: string }
>('product/more-product-get', async arg => {
  try {
    const { data: response } = await apiClient.get<IResponse<IProduct> | null>(
      R.consts.API_PATH_PRODUCT_LIST,
      {
        params: { page: arg.page, category: arg.category },
      },
    )

    return response
  } catch (e) {
    throw e
  }
})
