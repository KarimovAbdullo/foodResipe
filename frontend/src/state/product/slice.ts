import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uniqBy } from 'lodash'
import { PersistConfig, persistReducer } from 'redux-persist'
import { getMoreProductAction, getProductAction } from 'state/product/actions'
import { IProduct, IProductList, IResponse } from 'types/data'

import { ProductState } from './types'

const initialState: ProductState = {
  products: [],
  error: '',
  loading: false,
  count: 0,
  productPage: 1,
  next: null,
  moreLoading: false,
  previuos: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductAction.pending.type]: state => {
      state.loading = true
    },
    [getProductAction.fulfilled.type]: (
      state,
      action: PayloadAction<IProductList>,
    ) => {
      state.products = action.payload.results
      state.loading = false
      state.count = action.payload.count
      state.productPage = 1
      state.next = action.payload.next
    },
    [getProductAction.rejected.type]: state => {
      state.loading = false
    },

    [getMoreProductAction.pending.type]: state => {
      state.moreLoading = true
    },
    [getMoreProductAction.fulfilled.type]: (
      state,
      action: PayloadAction<IResponse<IProduct>>,
    ) => {
      if (state.products) {
        const newData = uniqBy(
          [...state.products, ...action.payload.results],
          'id',
        )
        state.products = newData
        state.next = action.payload.next
        state.previuos = action.payload.previous
        state.productPage += 1
        state.count = action.payload.count
      }
      state.moreLoading = false
    },
    [getMoreProductAction.rejected.type]: state => {
      state.moreLoading = false
    },
  },
})

const persistConfig: PersistConfig<ProductState> = {
  key: 'product',
  storage: AsyncStorage,
  whitelist: ['product'],
}

export const productReducer = persistReducer(
  persistConfig,
  productSlice.reducer,
)
