import { Box, Button, Center, Flex, Text, useColorModeValue, Link, UnorderedList, ListItem } from '@chakra-ui/react'
import { Section } from '@app/pages/about/components/Section'
import { DefaultPage } from '@app/components/containers/DefaultPage'
import Image from 'next/image'
import NextLink from 'next/link'
import { BioPoint } from '@app/pages/about/components/BioPoint'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { useColors } from '@app/utils/hooks/useColors'
import { LINKED_IN, TWITTER, INSTAGRAM, GITHUB, AVATAR_WITH_LAPTOP, FIRST_TITLE, SECOND_TITLE } from '@app/_config'

export const About: React.FC = props => {
  const { activeAndHoverColor } = useColors()

  return (
    <DefaultPage headTitle="M. Rizki Aiman - About">
      <Flex
        p={{ base: 4 }}
        direction={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent={{ base: 'center', md: 'space-between' }}>
        <Image alt="mrizkiaiman-avatar" src={AVATAR_WITH_LAPTOP} width={550} height={550} />
        <Flex direction={'column'} width={{ base: '90%', md: '45%' }} marginLeft={{ md: -8 }}>
          <Text fontWeight={'bold'} fontSize={{ base: 28, md: 54 }} letterSpacing={-1.5}>
            M. Rizki Aiman
          </Text>
          <Text color={activeAndHoverColor} fontWeight={'bold'} fontSize={{ base: 22, md: 30 }} letterSpacing={{ base: -1.2, md: -1.8 }}>
            {FIRST_TITLE} & {SECOND_TITLE}
          </Text>

          {/* <NextLink href={LINKED_IN} passHref> */}
          <Link style={{ textDecoration: 'none' }} isExternal>
            <Button
              width={{ base: '180px', md: '180px' }}
              height={'54px'}
              marginTop={8}
              bg={useColorModeValue('black', 'white')}
              _hover={{ bg: activeAndHoverColor, color: 'black' }}>
              <Text fontWeight={'bold'} fontSize={16} color={useColorModeValue('white', 'black')}>
                My Portfolio
              </Text>
            </Button>
          </Link>
          {/* </NextLink> */}
        </Flex>
      </Flex>
      <Center>
        <Flex width={'80%'} direction={'column'} marginLeft={{ base: 4 }} marginRight={{ base: 4 }}>
          <Section title="Work">
            <Text fontSize={{ base: 16, md: 18 }} textAlign={'justify'} style={{ textIndent: '1em' }} pt={5}>
              Rizki is a full-stack developer and a Notion creator based in Jakarta with a passion for building digital services and
              products. He has different tooling-skills for solving real-life problems, either with Notion templates or code. Outside of his
              profession, he loves spending time with his kindle, playing games, hangout with family and friends, and study about anything.
              Currently, he is a full time employee as Senior Front-End Developer at start-up called Arvis.
            </Text>
          </Section>
          <Section title="Bio">
            <Box pt={5}>
              <BioPoint year={1996} description="Born in Palembang, Indonesia" />
              <BioPoint year={2016} description="Student Exchange - UTM in Johor Bahru, Malaysia" />
              <BioPoint year={2019} description="Bachelor Degree - Universitas Sriwijaya in Palembang, Indonesia" />
              <BioPoint year={2019} description="Graduate from Fullstack JavaScript Bootcamp - Hacktiv8 in Jakarta, Indonesia" />
              <BioPoint year={2020} description="Mobile Developer - RestoDepot in Jakarta, Indonesia" />
              <BioPoint year={2021} description={`Senior Front-End Developer - Arvis in Jakarta, Indonesia (present)`} />
            </Box>
          </Section>
          <Section title="Interests">
            <UnorderedList pt={5}>
              <ListItem mt={2} fontSize={{ base: 16, md: 18 }}>
                Reading (Health, self-help, and other non-fiction books)
              </ListItem>
              <ListItem mt={2} fontSize={{ base: 16, md: 18 }}>
                Anime & Manga
              </ListItem>
              <ListItem mt={2} fontSize={{ base: 16, md: 18 }}>
                Games (YGO Master Duel & Mobile Legends)
              </ListItem>
              <ListItem mt={2} fontSize={{ base: 16, md: 18 }}>
                Writing
              </ListItem>
              <ListItem mt={2} fontSize={{ base: 16, md: 18 }}>
                Notion enthusiast
              </ListItem>
            </UnorderedList>
          </Section>

          <Box pb={20}>
            <Section title="Socials">
              <Box pt={5}>
                <Flex alignItems={'center'} mt={2}>
                  <AiOutlineLinkedin color={activeAndHoverColor} fontSize={32} />
                  <a target={'_blank'} href={LINKED_IN} rel="noopener noreferrer">
                    <Text as="u" fontWeight={'bold'} ml={42} fontSize={{ base: 16, md: 20 }} color={activeAndHoverColor} cursor="pointer">
                      Muhammad Rizki Aiman
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'} mt={5}>
                  <AiOutlineGithub color={activeAndHoverColor} fontSize={32} />
                  <a target={'_blank'} href={GITHUB} rel="noopener noreferrer">
                    <Text as="u" fontWeight={'bold'} ml={42} fontSize={{ base: 16, md: 20 }} color={activeAndHoverColor} cursor="pointer">
                      mrizkiaiman
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'} mt={5}>
                  <AiOutlineTwitter color={activeAndHoverColor} fontSize={32} />
                  <a target={'_blank'} href={TWITTER} rel="noopener noreferrer">
                    <Text as="u" fontWeight={'bold'} ml={42} fontSize={{ base: 16, md: 20 }} color={activeAndHoverColor} cursor="pointer">
                      mrizkiaiman
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'} mt={5}>
                  <AiOutlineInstagram color={activeAndHoverColor} fontSize={32} />
                  <a target={'_blank'} href={INSTAGRAM} rel="noopener noreferrer">
                    <Text as="u" fontWeight={'bold'} ml={42} fontSize={{ base: 16, md: 20 }} color={activeAndHoverColor} cursor="pointer">
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
