import { FCProps } from '@app/types/FCProps'
import { Flex, Text } from '@chakra-ui/react'

interface BioPointProps extends FCProps {
  year: number | string
  description: string
}

export const BioPoint = (props: BioPointProps) => {
  const { year, description } = props
  return (
    <Flex mt={2}>
      <Text fontSize={{ base: 16, md: 20 }} fontWeight={'bold'}>
        {year}
      </Text>
      <Text fontSize={{ base: 16, md: 20 }} paddingLeft={42}>
        {description}
      </Text>
    </Flex>
  )
}
