import { Box, Container, Button, Center, Flex, Text, useColorModeValue, Link, Avatar } from '@chakra-ui/react'
import { Navbar } from '@components/Navbar'
import Image from 'next/image'
import NextLink from 'next/link'
import { CONTACT_ME, AVATAR, TOOLS, SLOGAN, AVATAR_WITH_LAPTOP } from '@app/_config'

import { useColors } from '@app/utils/hooks/colors'
import { ComponentProps } from '@app/types/ComponentProps'

const About: React.FunctionComponent = props => {
  const { activeAndHoverColor } = useColors()
  return (
    <Box height={{ md: '100vh' }}>
      <Navbar />
      <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Center>
          <Flex
            p={{ base: 4 }}
            direction={{ base: 'column', md: 'row' }}
            alignItems={'center'}
            justifyContent={{ md: 'space-between', base: 'center' }}>
            <Image alt="mrizkiaiman-avatar" src={AVATAR_WITH_LAPTOP} width={650} height={650} />
            <Flex direction={'column'}>
              <Title style={{ fontSize: 34, letterSpacing: -1.4 }}>M. Rizki Aiman</Title>
              <Title style={{ fontSize: 28, letterSpacing: -1.4 }}>Front-End Developer & Notion Creator</Title>
              <Text width={{ md: 500 }} paddingTop={4} fontWeight={500} fontSize={18} letterSpacing={-0.5}>
                Hello, my name is M. Rizki Aiman, you can just call me Iki. I'm a
                <span style={{ fontWeight: 'bold' }}> Mobile/Front-End Developer</span> from Arvis.
              </Text>
              <Text width={{ md: 500 }} paddingTop={4} fontWeight={500} fontSize={18} letterSpacing={-0.5}>
                When I'm not busy with dev stuff, I love to spend my time to explore and making{' '}
                <span style={{ fontWeight: 'bold' }}>Notion templates</span>
              </Text>
              <NextLink href={CONTACT_ME} passHref>
                <Link style={{ textDecoration: 'none' }} isExternal>
                  <Button
                    width={{ base: '90%', md: '300px' }}
                    height={'54px'}
                    marginTop={8}
                    bg={useColorModeValue('black', 'white')}
                    _hover={{ bg: activeAndHoverColor, color: 'black' }}>
                    <Text color={useColorModeValue('white', 'black')}>View My Portfolio</Text>
                  </Button>
                </Link>
              </NextLink>
            </Flex>
          </Flex>
        </Center>
      </Flex>

      <Flex marginLeft={{ base: 4, md: '28vh' }} marginRight={{ base: 4, md: '28vh' }} direction={'column'}>
        <Subtitle>Values</Subtitle>
        <Flex direction={{ base: 'column', md: 'row' }} marginTop={3} justifyContent={'space-between'}>
          <Text width={{ base: '100%', md: '45%' }} textAlign={'justify'}>
            This collection of values is my guide to ensuring I’m constantly evolving as both a designer and
            collaborator.
          </Text>
          <Text width={{ base: '100%', md: '45%' }} textAlign={'justify'} marginTop={{ base: 4, md: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l abore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </Text>
        </Flex>
        <Subtitle>Tools I use</Subtitle>
        <Text textAlign={'justify'} marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l abore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </Text>

        <Subtitle>Experience</Subtitle>
        <Text textAlign={'justify'} marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l abore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </Text>
        <Subtitle>So, that was my quick intro</Subtitle>
        <Text textAlign={'justify'} marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l abore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </Text>
        {/* Footer */}
        <Subtitle>Get in touch</Subtitle>
        <Text textAlign={'justify'} marginTop={3} marginBottom={24}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l abore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </Text>
      </Flex>
    </Box>
  )
}

export default About

const Title = (props: ComponentProps) => (
  <Text
    marginTop={{ base: 1, md: -2 }}
    style={{ fontWeight: 'bolder', ...props?.style }}
    fontSize={{ base: 28, md: 48 }}
    letterSpacing={{ base: -1.5, md: -3.2 }}>
    {props.children}
  </Text>
)

const Subtitle = (props: ComponentProps) => (
  <Text
    style={{ marginTop: 12, fontWeight: 'bolder', ...props?.style }}
    fontSize={{ base: 24, md: 36 }}
    letterSpacing={{ base: -1.4, md: -2.1 }}>
    {props.children}
  </Text>
)
