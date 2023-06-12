import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IFoodData } from 'types/data'

import { getFood } from './actions'
import { ProductState } from './types'

const initialState: ProductState = {
  foods: [],
  loading: false,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getFood.pending.type]: state => {
      state.loading = true
    },
    [getFood.fulfilled.type]: (state, action: PayloadAction<IFoodData[]>) => {
      state.loading = false
      state.foods = action.payload
    },
    [getFood.rejected.type]: state => {
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<ProductState> = {
  key: 'product',
  storage: AsyncStorage,
  whitelist: ['foods'],
}

export const productReducer = persistReducer(
  persistConfig,
  productSlice.reducer,
)
