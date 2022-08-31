import { Text, Flex, Box, Image } from '@chakra-ui/react'
import { DefaultPage } from '@app/components/containers/DefaultPage'
import { Section } from '@components/Section'
import { ProjectCard } from '@app/pages/projects/project-card'

import { PROJECTS_NOTION, PROJECTS_MOBILE_APP, PROJECTS_WEB } from '@app/_config'

const Projects = () => {
  return (
    <DefaultPage headTitle="M. Rizki Aiman - Projects">
      <Flex direction={'column'} justifyContent="center" alignItems={'center'} py={{ md: 16 }} pt={{ base: 16, md: 28 }}>
        <Flex alignItems={'center'}>
          <Image alt="avatar" src="/images/avatar-head-only.webp" width={'72px'} height={'72px'} borderRadius="full" />
          <Text
            textAlign={{ md: 'center' }}
            fontSize={{ base: 28, md: 72 }}
            letterSpacing={{ base: -1, md: -4 }}
            pl={{ base: 2, md: 4 }}
            fontWeight="bold">
            Discover my works
          </Text>
        </Flex>
        <Text fontWeight={'semibold'} pt={{ base: 4 }} fontSize={{ base: 16, md: 24 }} width={{ md: 600 }} textAlign="center">
          My goal is to build platforms that designed to improve work & life productivity
        </Text>
      </Flex>
      <Flex direction={'column'} pb={32} w={{ md: '1050px' }}>
        <Section title="Web Platform">
          <Flex
            pt={{ md: 8 }}
            mt={{ base: -6 }}
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            flexWrap="wrap">
            {PROJECTS_WEB.map((item, index) => (
              <ProjectCard {...item} key={item.title} index={index} />
            ))}
          </Flex>
        </Section>
        <Box pt={{ md: 16 }}>
          <Section title="Mobile Platform">
            <Flex
              pt={{ md: 8 }}
              mt={{ base: -6 }}
              direction={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'center', md: 'flex-start' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
              flexWrap="wrap">
              {PROJECTS_MOBILE_APP.map((item, index) => (
                <ProjectCard {...item} key={item.title} index={index} />
              ))}
            </Flex>
          </Section>
        </Box>
        <Box pt={{ md: 16 }}>
          <Section title="Notion Templates">
            <Flex
              justifyContent={{ base: 'center', md: 'flex-start' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
              pt={{ md: 8 }}
              mt={{ base: -6 }}
              direction={{ base: 'column', md: 'row' }}
              flexWrap="wrap">
              {PROJECTS_NOTION.map((item, index) => (
                <ProjectCard {...item} key={item.title} index={index} />
              ))}
            </Flex>
          </Section>
        </Box>
      </Flex>
    </DefaultPage>
  )
}

export default Projects
