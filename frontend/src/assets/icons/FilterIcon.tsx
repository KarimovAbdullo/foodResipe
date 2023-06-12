import * as React from 'react'
import { ColorValue } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
}

const Filter = (props: IProps) => {
  const { color = 'black' } = props

  return (
    <Svg width="22" height="16" viewBox="0 0 22 16" fill="none">
      <Path
        d="M1.22222 2.2H20.7778C21.45 2.2 22 1.705 22 1.1C22 0.495 21.45 0 20.7778 0H1.22222C0.55 0 0 0.495 0 1.1C0 1.705 0.55 2.2 1.22222 2.2Z"
        fill="white"
      />
      <Path
        d="M7.22222 15.6453H14.5556C15.2278 15.6453 15.7778 15.1503 15.7778 14.5453C15.7778 13.9403 15.2278 13.4453 14.5556 13.4453H7.22222C6.55 13.4453 6 13.9403 6 14.5453C6 15.1503 6.55 15.6453 7.22222 15.6453Z"
        fill="white"
      />
      <Path
        d="M4.22222 8.92266H17.6667C18.3389 8.92266 18.8889 8.42766 18.8889 7.82266C18.8889 7.21766 18.3389 6.72266 17.6667 6.72266H4.22222C3.55 6.72266 3 7.21766 3 7.82266C3 8.42766 3.55 8.92266 4.22222 8.92266Z"
        fill="white"
      />
    </Svg>
  )
}

export default Filter
