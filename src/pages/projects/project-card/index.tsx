import { useColors } from '@app/utils/hooks/useColors'
import { Box, Text, Center, HStack, Flex, Image } from '@chakra-ui/react'
import { ButtonMotion } from '@app/components/containers/animations/ButtonMotion'

interface ProjectCardProps {
  title: string
  description: string
  tags: Array<string>
  url?: string
  image?: string
  index: number
  year: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image, url, index, year }) => {
  const { reverseDefaultColor, defaultColor, activeAndHoverColor } = useColors()

  return (
    <Box mr={{ md: 12 }} pt={{ base: 12, md: index > 1 ? 12 : 0 }} width={{ md: 475 }}>
      <ButtonMotion whileHoverScale={1.03}>
        {url ? (
          <a target={'_blank'} href={url} rel="noopener noreferrer">
            <Box boxShadow={'md'} borderRadius={'8px'}>
              <Image
                alt="project-image"
                src={image}
                height={{ base: 230, md: 310 }}
                width={{ base: 340, md: 475 }}
                style={{ borderRadius: 8 }}
              />
            </Box>
          </a>
        ) : (
          <Box boxShadow={'md'} borderRadius={'8px'}>
            <Image
              alt="project-image"
              src={image}
              height={{ base: 230, md: 310 }}
              width={{ base: 340, md: 475 }}
              style={{ borderRadius: 8 }}
            />
          </Box>
        )}
      </ButtonMotion>

      <Box ml={1} pt={4}>
        <HStack>
          <Text fontWeight="bold">{title}</Text>
          <Text fontWeight={'bold'} color={activeAndHoverColor}>
            ({year})
          </Text>
        </HStack>
        <Text>{description}</Text>
        <Flex pt={2} w={{ base: 340, md: 475 }} flexWrap="wrap" justifyContent={'flex-start'}>
          {tags ||
            [].map((item, index) => (
              <Center key={item} w={'102px'} borderRadius={4} mt={2} mr={2} py={1} bg={reverseDefaultColor}>
                <Text fontSize={10} color={defaultColor} fontWeight="bold">
                  {item}
                </Text>
              </Center>
            ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default ProjectCard
