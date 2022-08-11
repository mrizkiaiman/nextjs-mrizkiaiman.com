import { useColorModeValue } from '@chakra-ui/react'

export const useColors = () => {
  const reverseDefaultColor = useColorModeValue('gray.700', 'white')
  const defaultColor = useColorModeValue('white', 'gray.700')
  const defaultLightAndDark = useColorModeValue('Light', 'Dark')
  const activeAndHoverColor = useColorModeValue('cyan.900', 'orange.200')
  const containerButton = useColorModeValue('gray.100', 'gray.700')

  return {
    defaultColor,
    reverseDefaultColor,
    defaultLightAndDark,
    activeAndHoverColor,
    containerButton,
  }
}
