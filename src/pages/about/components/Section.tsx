import { FCProps } from '@app/types/FCProps'
import { Text, Box } from '@chakra-ui/react'

import { useColors } from '@app/utils/hooks/useColors'

interface SectionProps extends FCProps {
  title: string
}

export const Section = (props: SectionProps) => {
  const { children, title } = props
  const { defaultLinkColor } = useColors()

  return (
    <Box display="block" width={'100%'} pt={12}>
      <Text
        display={'inline'}
        borderBottom={'4px'}
        borderColor={defaultLinkColor}
        style={{ marginTop: 12, fontWeight: 'bold' }}
        fontSize={{ base: 22, md: 32 }}
        letterSpacing={{ base: -1.2, md: -1.4 }}>
        {title}
      </Text>
      <Box mt={3}>{children}</Box>
    </Box>
  )
}

export default Section
