// import useAppDispatch from 'hooks/useAppDispatch'
// import useAppSelector from 'hooks/useAppSelector'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

// import { getCompanyData } from 'state/user/actions'
// import { getUser } from 'state/user/selectors'
import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  // const dispatch = useAppDispatch()
  // const companyData = useAppSelector(getUser)
  // console.log('daaaaaaaa', companyData)

  // useEffect(() => {
  //   dispatch(getCompanyData({ id: 2 }))
  // }, [])
  const styles = useStyles(stylesConfig)

  return (
    <SafeAreaView>
      <View style={styles}>
        <Text>Добро пожаловать!</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
