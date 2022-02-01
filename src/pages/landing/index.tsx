import { Box, Container, Button, Center, Flex, Text, useColorModeValue, Link, Avatar } from '@chakra-ui/react'
import { Navbar } from '@components/Navbar'
import Image from 'next/image'
import NextLink from 'next/link'
import { CONTACT_ME, AVATAR, TOOLS, SLOGAN } from '@app/_config'

import { useColors } from '@app/utils/hooks/colors'
import { ComponentProps } from '@app/types/ComponentProps'

const Landing: React.FunctionComponent = props => {
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
            <Flex direction={'column'}>
              <Title>Software Engineer</Title>
              <Title style={{ marginTop: -12 }}>Notion Creator</Title>
              <Text width={{ md: 500 }} paddingTop={4} fontWeight={500} fontSize={18} letterSpacing={-0.5}>
                {SLOGAN}
              </Text>
              <NextLink href={CONTACT_ME} passHref>
                <Link style={{ textDecoration: 'none' }} isExternal>
                  <Button
                    width={{ base: '90%', md: '300px' }}
                    height={'54px'}
                    marginTop={8}
                    bg={useColorModeValue('black', 'white')}
                    _hover={{ bg: activeAndHoverColor, color: 'black' }}>
                    <Text color={useColorModeValue('white', 'black')}>Contact Me</Text>
                  </Button>
                </Link>
              </NextLink>
            </Flex>
            <Image alt="mrizkiaiman-avatar" src={AVATAR} width={550} height={550} />
          </Flex>
        </Center>
        {/* TOOLS */}
        <Center flexDirection={'column'}>
          <Text
            fontSize={18}
            fontWeight={'900'}
            letterSpacing={-1}
            color={useColorModeValue('black', 'white')}
            paddingBottom={3}>
            TOOLS
          </Text>
          <Flex>
            {TOOLS.map((tool, index) => (
              <ToolsWrapper key={tool.label}>
                {tool.whiteBorder ? (
                  <Center bg={'white'} padding={0.5} borderRadius={100}>
                    <Image alt={tool.label} src={tool.img} width={50} height={50} layout="fixed" />
                  </Center>
                ) : (
                  <Image alt={tool.label} src={tool.img} width={50} height={50} layout="fixed" />
                )}
                <ToolsLabel>{tool.label}</ToolsLabel>
              </ToolsWrapper>
            ))}
          </Flex>
        </Center>
      </Flex>
    </Box>
  )
}

export default Landing

const Title = (props: ComponentProps) => (
  <Text
    style={{ fontWeight: 'bold', ...props?.style }}
    fontSize={{ base: 28, md: 48 }}
    letterSpacing={{ base: -1.5, md: -3.2 }}>
    {props.children}
  </Text>
)

const ToolsWrapper = (props: ComponentProps) => (
  <Flex alignItems={'center'} direction={{ base: 'column', md: 'row' }} padding={4}>
    {props.children}
  </Flex>
)

const ToolsLabel = (props: ComponentProps) => (
  <Text
    paddingLeft={{ md: 3 }}
    paddingTop={{ base: 2 }}
    fontWeight={'bold'}
    fontSize={{ base: 12, md: 20 }}
    letterSpacing={-1}>
    {props.children}
  </Text>
)
