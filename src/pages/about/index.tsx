import { Box, Button, Center, Flex, Text, useColorModeValue, Link, UnorderedList, ListItem } from '@chakra-ui/react'
import { Section } from '@app/pages/about/components/Section'
import { DefaultPage } from '@app/components/containers/DefaultPage'
import Image from 'next/image'
import NextLink from 'next/link'
import { BioPoint } from '@app/pages/about/components/BioPoint'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { ButtonMotion } from '@app/components/containers/animations/ButtonMotion'
import { AvatarMotion } from '@app/components/containers/animations/AvatarMotion'

import { useColors } from '@app/utils/hooks/useColors'
import { LINKED_IN, TWITTER, INSTAGRAM, GITHUB, AVATAR_WITH_LAPTOP, FIRST_TITLE, SECOND_TITLE, BIO, INTERESTS, WORK } from '@app/_config'

export const About: React.FC = props => {
  const { activeAndHoverColor } = useColors()

  return (
    <DefaultPage headTitle="M. Rizki Aiman - About">
      <Flex
        p={{ base: 4 }}
        direction={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent={{ base: 'center', md: 'space-between' }}>
        <AvatarMotion direction="left">
          <Image alt="mrizkiaiman-avatar" src={AVATAR_WITH_LAPTOP} width={550} height={550} />
        </AvatarMotion>
        <Flex direction={'column'} width={{ base: '90%', md: '45%' }} marginLeft={{ md: -8 }}>
          <Text fontWeight={'bold'} fontSize={{ base: 28, md: 54 }} letterSpacing={-1.5}>
            M. Rizki Aiman
          </Text>
          <Text color={activeAndHoverColor} fontWeight={'bold'} fontSize={{ base: 22, md: 30 }} letterSpacing={{ base: -1.2, md: -1.8 }}>
            {FIRST_TITLE} & {SECOND_TITLE}
          </Text>
          <ButtonMotion>
            <Link style={{ textDecoration: 'none' }} isExternal>
              <Button
                width={{ base: '220px', md: '220px' }}
                height={'64px'}
                marginTop={8}
                bg={useColorModeValue('black', 'white')}
                _hover={{ bg: activeAndHoverColor, color: 'black' }}>
                <Text fontWeight={'bold'} fontSize={20} color={useColorModeValue('white', 'black')}>
                  My Portfolio
                </Text>
              </Button>
            </Link>
          </ButtonMotion>
        </Flex>
      </Flex>
      <Center>
        <Flex width={'80%'} direction={'column'} marginLeft={{ base: 4 }} marginRight={{ base: 4 }}>
          <Section title="Work">
            <Text fontSize={{ base: 16, md: 18 }} textAlign={'justify'} style={{ textIndent: '1em' }} pt={5}>
              {WORK}
            </Text>
          </Section>
          <Section title="Bio">
            <Box pt={5}>
              {BIO.map((item, index) => (
                <BioPoint key={item.description} year={item.year} description={item.description} />
              ))}
            </Box>
          </Section>
          <Section title="Interests">
            <UnorderedList pt={5}>
              {INTERESTS.map((item, index) => (
                <ListItem key={item.description} mt={2} fontSize={{ base: 16, md: 18 }}>
                  {item.description}
                </ListItem>
              ))}
            </UnorderedList>
          </Section>

          <Box pb={20}>
            <Section title="Socials">
              <Box pt={5}>
                <Flex alignItems={'center'} mt={2}>
                  <AiOutlineLinkedin color={activeAndHoverColor} fontSize={32} />
                  <a target={'_blank'} href={LINKED_IN} rel="noopener noreferrer">
                    <Text fontWeight={'bold'} ml={42} fontSize={{ base: 16, md: 18 }} color={activeAndHoverColor} cursor="pointer">
                      Muhammad Rizki Aiman
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'} mt={3}>
                  <AiOutlineGithub color={activeAndHoverColor} fontSize={32} />
                  <a target={'_blank'} href={GITHUB} rel="noopener noreferrer">
                    <Text fontWeight={'bold'} ml={42} fontSize={{ base: 16, md: 18 }} color={activeAndHoverColor} cursor="pointer">
                      mrizkiaiman
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'} mt={3}>
                  <AiOutlineTwitter color={activeAndHoverColor} fontSize={32} />
                  <a target={'_blank'} href={TWITTER} rel="noopener noreferrer">
                    <Text fontWeight={'bold'} ml={42} fontSize={{ base: 16, md: 18 }} color={activeAndHoverColor} cursor="pointer">
                      mrizkiaiman
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'} mt={3}>
                  <AiOutlineInstagram color={activeAndHoverColor} fontSize={32} />
                  <a target={'_blank'} href={INSTAGRAM} rel="noopener noreferrer">
                    <Text fontWeight={'bold'} ml={42} fontSize={{ base: 16, md: 18 }} color={activeAndHoverColor} cursor="pointer">
                      mrizkiaiman
                    </Text>
                  </a>
                </Flex>
              </Box>
            </Section>
          </Box>
        </Flex>
      </Center>
    </DefaultPage>
  )
}

export default About
