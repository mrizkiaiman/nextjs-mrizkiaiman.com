import * as React from 'react'
import { motion } from 'framer-motion'
import { Button, Center, Flex, Text, useColorModeValue, Link, Box } from '@chakra-ui/react'
import { DefaultPage } from '@app/components/containers/DefaultPage'
import Image from 'next/image'
import NextLink from 'next/link'
import { LINKED_IN, AVATAR, TOOLS, SLOGAN } from '@app/_config'
import { ButtonMotion } from '@app/components/containers/animations/ButtonMotion'
import { AvatarMotion } from '@app/components/containers/animations/AvatarMotion'

import { useColors } from '@app/utils/hooks/useColors'

const Landing: React.FC = props => {
  const { activeAndHoverColor } = useColors()

  return (
    <DefaultPage headTitle="M. Rizki Aiman">
      <Flex paddingTop={{ base: 12, md: 0 }} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Flex
          p={{ base: 4 }}
          direction={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={{ base: 'center', md: 'space-between' }}>
          <Flex
            direction={'column'}
            width={{ md: '50%' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems={{ base: 'center', md: 'flex-start' }}>
            <Text fontWeight={'bold'} fontSize={{ base: 28, md: 54 }} letterSpacing={{ base: -1.5, md: -1.8 }}>
              M. Rizki Aiman
            </Text>
            <Text
              width={{ md: 450 }}
              paddingTop={4}
              fontWeight={500}
              fontSize={{ base: 18, md: 24 }}
              letterSpacing={-0.5}
              textAlign={{ base: 'center', md: 'left' }}>
              {SLOGAN}
            </Text>
            <ButtonMotion>
              <NextLink href={LINKED_IN} passHref>
                <Link style={{ textDecoration: 'none' }} isExternal>
                  <Button
                    width={{ base: '180px', md: '220px' }}
                    height={{ base: '54px', md: '64px' }}
                    marginTop={8}
                    marginLeft={'4px'}
                    fontWeight={'bold'}
                    fontSize={{ base: 16, md: 20 }}
                    bg={useColorModeValue('black', 'white')}
                    _hover={{ bg: activeAndHoverColor, color: 'black' }}>
                    <Text color={useColorModeValue('white', 'black')}>Contact Me</Text>
                  </Button>
                </Link>
              </NextLink>
            </ButtonMotion>
          </Flex>
          <AvatarMotion>
            <Box marginRight={{ md: -40 }}>
              <Image alt="mrizkiaiman-avatar" src={AVATAR} width={550} height={550} priority />
            </Box>
          </AvatarMotion>
        </Flex>
        {/* TOOLS */}
        <Center flexDirection={'column'}>
          <Text fontSize={18} fontWeight={'900'} letterSpacing={-1} color={useColorModeValue('black', 'white')} paddingBottom={3}>
            TOOLS
          </Text>
          <Flex>
            {TOOLS.map((tool, index) => (
              <Flex alignItems={'center'} direction={{ base: 'column', md: 'row' }} padding={4} key={tool.label}>
                {tool.whiteBorder ? (
                  <Center bg={'white'} padding={0.5} borderRadius={100}>
                    <Image alt={tool.label} src={tool.img} width={50} height={50} layout="fixed" />
                  </Center>
                ) : (
                  <Image alt={tool.label} src={tool.img} width={50} height={50} layout="fixed" />
                )}
                <Text
                  paddingLeft={{ md: 3 }}
                  paddingTop={{ base: 2 }}
                  fontWeight={'bold'}
                  fontSize={{ base: 12, md: 20 }}
                  letterSpacing={-1}>
                  {tool.label}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Center>
      </Flex>
    </DefaultPage>
  )
}

export default Landing
