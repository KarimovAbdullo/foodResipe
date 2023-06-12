import Filter from 'assets/icons/FilterIcon'
import { Space } from 'components/common/Space'
import Body from 'components/common/typo/Body'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React, { useEffect } from 'react'
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'
import { getFood } from 'state/product/actions'
import { getProduct } from 'state/product/selectors'

export interface IData {
  id: number
  name: string
  title?: string
  gr?: number
  callory?: number
  image: ImageSourcePropType
  min?: number
  serve?: number
}
const Breakfast = () => {
  const dispatch = useAppDispatch()
  const [foods] = useAppSelector(getProduct)

  console.log('data ', foods)

  useEffect(() => {
    dispatch(getFood())
  }, [])

  return (
    <View style={styles.main}>
      <Space height={20} />
      <StatusBar backgroundColor={'#11151E'} barStyle="light-content" />
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Body size={18} bold>
          1 Breakfast
        </Body>

        <Filter />
      </View>

      <FlatList
        data={foods}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }: { item: IData }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.6}>
            <Image source={item.image} style={styles.image} />

            <View style={styles.title}>
              <Body size={12} color="lgold">
                {item.gr}gr{''} {item.callory}cal
              </Body>

              <Space height={10} />

              <Body bold size={22}>
                {item.name}
              </Body>

              <Space height={15} />

              <Body size={14} color="grey">
                {item.title}
              </Body>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Breakfast

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
  },
  image: {
    width: 150,
    height: 150,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15,
    backgroundColor: '#232b3f',
    marginHorizontal: 5,
  },
  title: {
    width: '60%',
    marginLeft: 10,
    marginTop: 10,
  },
  tColor: {
    color: R.colors.lgold,
  },

  RColor: {
    color: R.colors.grey,
  },
})
