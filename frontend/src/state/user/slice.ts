import AsyncStorage from '@react-native-community/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { signOutUser } from 'state/user/actions'
import { UserState } from 'state/user/types'

const initialState: UserState = {
  user: null,
  loading: false,
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signOutUser.type]: state => {
      state.user = null
      state.loading = false
      state.token = null
    },
  },
})

const persistConfig: PersistConfig<UserState> = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user', 'token'],
}

export const userReducer = persistReducer(persistConfig, userSlice.reducer)
