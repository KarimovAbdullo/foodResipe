import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uniqBy } from 'lodash'
import { PersistConfig, persistReducer } from 'redux-persist'
import { getCategoriesAction } from 'state/categories/actions'
import { getMoreCategoryAction } from 'state/categories/actions'
import { ICategoryResult } from 'types/data'

import { CategoriesState } from './types'

const initialState: CategoriesState = {
  categories: [],
  categoriesPage: 1,
  count: 0,
  next: null,
  previuos: null,
  loading: false,
  moreLoading: false,
  error: '',
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [getCategoriesAction.pending.type]: state => {
      state.loading = true
    },
    [getCategoriesAction.fulfilled.type]: (
      state,
      action: PayloadAction<ICategoryResult>,
    ) => {
      state.categories = action.payload.results
      state.loading = false
      state.categoriesPage = 1
      state.count = action.payload.count
      state.next = action.payload.next
      state.previuos = action.payload.previous
    },
    [getCategoriesAction.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.error = action.payload
      state.loading = false
    },

    [getMoreCategoryAction.pending.type]: state => {
      state.moreLoading = false
    },
    [getMoreCategoryAction.fulfilled.type]: (
      state,
      action: PayloadAction<ICategoryResult>,
    ) => {
      if (state.categories) {
        const newData = uniqBy(
          [...state.categories, ...action.payload.results],
          'id',
        )
        state.categories = newData
        state.next = action.payload.next
        state.previuos = action.payload.previous
        state.categoriesPage += 1
      }
      state.moreLoading = false
    },
    [getMoreCategoryAction.rejected.type]: state => {
      state.moreLoading = false
    },
  },
})

const persistConfig: PersistConfig<CategoriesState> = {
  key: 'categories',
  storage: AsyncStorage,
  whitelist: ['categories'],
}

export const categoriesReducer = persistReducer(
  persistConfig,
  categoriesSlice.reducer,
)
