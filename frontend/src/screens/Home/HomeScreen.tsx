// import useAppDispatch from 'hooks/useAppDispatch'
// import useAppSelector from 'hooks/useAppSelector'
import { Space } from 'components/common/Space'
import Body from 'components/common/typo/Body'
import TabViewExample from 'components/TabView/TabView'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { Image, StatusBar, View } from 'react-native'

// import { getCompanyData } from 'state/user/actions'
// import { getUser } from 'state/user/selectors'
import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  const [index, setIndex] = useState(0)

  const routes = [
    { key: 'item', title: 'Popular' },
    { key: 'salat', title: 'Salad' },
    { key: 'breakfast', title: 'Breakfast' },
  ]

  const styles = useStyles(stylesConfig)

  return (
    <View style={styles.main}>
      <View>
        <Space height={20} />
        <StatusBar backgroundColor={'#11151E'} barStyle="light-content" />
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Body size={32} bold>
            Hello{'\n'}Kristin
          </Body>

          <Image
            source={require('assets/images/avatar.png')}
            style={styles.img}
          />
        </View>
      </View>
      <TabViewExample routes={routes} setIndex={setIndex} index={index} />
    </View>
  )
}

export default HomeScreen
