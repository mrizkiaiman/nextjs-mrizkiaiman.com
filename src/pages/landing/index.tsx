import { Box, Container, Button, Center, Flex, Text, useColorModeValue, Link } from '@chakra-ui/react'
import { Navbar } from '@components/Navbar'
import Image from 'next/image'
import NextLink from 'next/link'

import { ComponentProps } from '@app/types/ComponentProps'

const Landing: React.FunctionComponent = props => {
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
            <Flex direction={'column'}>
              <Title>Software Engineer</Title>
              <Title style={{ marginTop: -12 }}>Notion Creator</Title>
              <Text width={{ md: 500 }} paddingTop={4} fontWeight={500} fontSize={18} letterSpacing={-0.5}>
                {`I'm excited helping you to improve your business by building a web, mobile app and productivity system.`}
              </Text>
              <NextLink href={'https://www.linkedin.com/in/mrizkiaiman/'} passHref>
                <Link style={{ textDecoration: 'none' }} isExternal>
                  <Button
                    width={{ base: '90%', md: '300px' }}
                    height={'54px'}
                    marginTop={8}
                    bg={useColorModeValue('black', 'white')}
                    _hover={{ bg: 'orange.400', color: 'black' }}>
                    <Text color={useColorModeValue('white', 'black')}>Contact Me</Text>
                  </Button>
                </Link>
              </NextLink>
            </Flex>
            <Image alt="mrizkiaiman-avatar" src={'/images/avatar-full.png'} width={550} height={550} />
          </Flex>
        </Center>
        <Center flexDirection={'column'}>
          <Text
            fontSize={18}
            fontWeight={'900'}
            letterSpacing={-1}
            color={useColorModeValue('gray.500', 'white')}
            paddingBottom={3}>
            TOOLS
          </Text>
          <Flex>
            <ToolsWrapper>
              <Center bg={'white'} padding={0.5} borderRadius={100}>
                <Image alt="next-js" src={'/images/tools/nextjs.png'} width={50} height={50} layout="fixed" />
              </Center>
              <ToolsLabel>Next JS</ToolsLabel>
            </ToolsWrapper>
            <ToolsWrapper>
              <Image alt="react" src={'/images/tools/react.png'} width={52} height={50} layout="fixed" />
              <Box pt={{ base: 1, sm: 1, md: 0 }}>
                <ToolsLabel>React</ToolsLabel>
              </Box>
            </ToolsWrapper>
            <ToolsWrapper>
              <Center bg={'white'} padding={0.5} borderRadius={100}>
                <Image alt="expo-react-native" src={'/images/tools/expo.png'} width={50} height={50} layout="fixed" />
              </Center>
              <ToolsLabel>Expo</ToolsLabel>
            </ToolsWrapper>
            <ToolsWrapper>
              <Image alt="notion" src={'/images/tools/notion.png'} width={50} height={50} layout="fixed" />
              <Box pt={{ base: 1, sm: 1, md: 0 }}>
                <ToolsLabel>Notion</ToolsLabel>
              </Box>
            </ToolsWrapper>
          </Flex>
        </Center>
      </Flex>
    </Box>
  )
}

export default Landing

const Title = (props: ComponentProps) => (
  <Text style={{ letterSpacing: -3.2, fontWeight: 'bold', fontSize: 48, ...props?.style }}>{props.children}</Text>
)

const ToolsWrapper = (props: ComponentProps) => (
  <Flex alignItems={'center'} direction={{ base: 'column', md: 'row' }} padding={4}>
    {props.children}
  </Flex>
)

const ToolsLabel = (props: ComponentProps) => (
  <Text paddingLeft={{ md: 3 }} fontWeight={'bold'} fontSize={20} letterSpacing={-1}>
    {props.children}
  </Text>
)
