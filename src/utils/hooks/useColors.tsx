import { useColorModeValue } from '@chakra-ui/react'

export const useColors = () => {
  const defaultLinkColor = useColorModeValue('gray.600', 'white')
  const defaultLightAndDark = useColorModeValue('Light', 'Dark')
  const activeAndHoverColor = useColorModeValue('cyan.900', 'orange.200')

  return {
    defaultLinkColor,
    defaultLightAndDark,
    activeAndHoverColor,
  }
}
