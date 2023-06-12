import BackIcon from 'assets/icons/BackIcon'
import { Space } from 'components/common/Space'
import Body from 'components/common/typo/Body'
import useSmartNavigation from 'hooks/useSmartNavigation'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { IData } from 'screens/Popular/Popular'

interface IProps {
  route: {
    params: {
      item: IData
    }
  }
}

export const FoodDetail = ({ route }: IProps) => {
  const navigation = useSmartNavigation()

  const back = () => {
    navigation.goBack()
  }
  const { item: data } = route.params

  return (
    <View style={styles.main}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '70%',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={back}>
          <BackIcon />
        </TouchableOpacity>

        <Body size={20}>{data.name}</Body>
      </View>
      <Image source={data.image} style={styles.image} />

      <View style={styles.tabStyle}>
        <View>
          <Body color="gold">{data.callory}</Body>
          <Space height={10} />
          <Body size={12} color={'grey'}>
            call
          </Body>
        </View>

        <View>
          <Body color="gold">{data.gr}</Body>
          <Space height={10} />
          <Body size={12} color={'grey'}>
            gr
          </Body>
        </View>

        <View>
          <Body color="gold">{data.min}</Body>
          <Space height={10} />
          <Body size={12} color={'grey'}>
            min
          </Body>
        </View>

        <View>
          <Body color="gold">1</Body>
          <Space height={10} />
          <Body size={12} color={'grey'}>
            serve
          </Body>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    backgroundColor: '#11151E',
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  tabStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 15,
  },
})
