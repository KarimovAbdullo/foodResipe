import R from 'res'
import { IData } from 'screens/Popular/Popular'

export type TNavigationParams = {
  [R.routes.SCREEN_HOME]: { back?: boolean } | undefined
  [R.routes.SCREEN_FOOD_DETAIL]: { item: IData }
}
