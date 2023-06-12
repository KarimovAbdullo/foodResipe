import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, ReactNode } from 'react'
import { StyleProp, Text, TextProps } from 'react-native'
import { TThemeColors } from 'res/theme'
import { createStyles } from 'utils/createStyles'

interface IProps extends TextProps {
  children:
    | ReactNode
    | ReactElement
    | string
    | string[]
    | number
    | (string | number)[]
  center?: boolean
  size?: 36 | 32 | 24 | 22 | 20 | 18 | 16 | 14 | 13 | 12 | 10 | 8 | 26
  style?: StyleProp<TextProps>
  numberOfLines?: number
  color?: keyof TThemeColors
  opacity?: number
  bold?: boolean
  light?: boolean
  semiBold?: boolean
  medium?: boolean
  flex?: boolean
  right?: boolean
  regular?: boolean
}

const Body: React.FC<IProps> = ({
  size = 16,
  children,
  style,
  numberOfLines,
  color = 'white',
  center = false,
  opacity = 1,
  light = false,
  bold = false,
  semiBold = false,
  medium = true,
  flex = false,
  right = false,
  regular = false,
  ...attributes
}) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  const colorStyle = { color: color ? colors[color] : undefined }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.default,
        { fontSize: size },
        center && styles.center,
        right && styles.right,
        colorStyle,
        bold && styles.bold,
        semiBold && styles.semiBold,
        light && styles.light,
        medium && styles.medium,
        regular && styles.regular,
        flex && styles.flex,
        style,
        { opacity },
      ]}
      {...attributes}>
      {children}
    </Text>
  )
}

const stylesConfig = createStyles((_colors, fonts) => ({
  default: {
    fontFamily: fonts.Maven.medium,
    fontWeight: '400',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  bold: {
    fontFamily: fonts.Maven.bold,
  },
  medium: {
    fontWeight: '500',
  },
  semiBold: {
    fontFamily: fonts.Maven.semiBold,
    fontWeight: '600',
  },
  regular: {
    fontFamily: fonts.Maven.medium,
    fontWeight: '400',
  },
  flex: { flex: 1 },
  light: {
    fontFamily: fonts.Maven.regular,
  },
}))

export default Body
