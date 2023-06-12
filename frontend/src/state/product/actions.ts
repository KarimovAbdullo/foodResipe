import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import { IFoodData } from 'types/data'

export const getFood = createAsyncThunk<IFoodData>(
  'get/foods',
  //@ts-ignore
  async () => {
    try {
      const { data: response } = await apiClient.get<IFoodData>(
        'https://localhost:3000/foods',
      )

      return response
    } catch (e) {
      throw e
    }
  },
)
