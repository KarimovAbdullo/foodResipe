import Body from 'components/common/typo/Body'
import * as React from 'react'
import { useWindowDimensions, View } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import Popular from 'screens/Popular/Popular'
import Breakfast from 'screens/Salad/Breakfast/Breakfast'
import Salad from 'screens/Salad/Salad'
import { colors } from 'theme/themes'

const popular = () => <Popular />
const salat = () => <Salad />
const breakfast = () => <Breakfast />

const renderScene = SceneMap({
  item: popular,
  salat: salat,
  breakfast: breakfast,
})

interface IProps {
  routes: any
  index: number
  setIndex: (value: number) => void
}

export default function TabViewExample({ index, setIndex, routes }: IProps) {
  const layout = useWindowDimensions()

  return (
    <TabView
      renderTabBar={props => (
        <TabBar
          {...props}
          renderLabel={title => (
            <View
              style={{
                borderRadius: 100,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <Body color={title?.focused ? 'gold' : 'white'} size={16}>
                {title?.route?.title}
              </Body>
            </View>
          )}
          style={{
            backgroundColor: '#11151E',
            marginHorizontal: 1,
            elevation: 0,
          }}
          indicatorStyle={{
            backgroundColor: '#FFD700',
          }}
          labelStyle={{ color: '#937AEA', fontSize: 16, fontWeight: '500' }}
        />
      )}
      style={{ marginTop: 10 }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}
