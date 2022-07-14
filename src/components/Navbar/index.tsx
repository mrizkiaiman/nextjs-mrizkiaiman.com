import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useColors } from '@utils/hooks/colors'
import { FCProps } from '@type/FCProps'
import { NAV_ITEMS, NavItem } from './list'

interface IPNavbar extends FCProps {}

export const Navbar: React.FC<IPNavbar> = props => {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  const { defaultLinkColor, defaultLightAndDark, activeAndHoverColor } = useColors()

  return (
    <>
      <Box boxShadow={'base'} display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Flex w={1200} justifyContent={'space-between'}>
          <Flex display={{ base: 'flex', md: 'none' }} pt={3} pb={3}>
            <Menu>
              <MenuButton as={Button} onClick={onToggle} bg={useColorModeValue('Light', 'Dark')} ml={4} p={0}>
                <IconButton
                  sx={{ padding: 0, margin: 0 }}
                  icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                  variant={'ghost'}
                  aria-label={'Toggle Navigation'}
                />
              </MenuButton>
              <MenuList>
                {NAV_ITEMS.map((item, index) => (
                  <Link key={item.label} href={item.path} passHref>
                    <MenuItem>{item.label}</MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }} pt={5} pb={5}>
            {NAV_ITEMS.map((item: NavItem, index: number) => {
              return item?.externalLink ? (
                <a target={'_blank'} href={item.path} key={item?.label || index} rel="noopener noreferrer">
                  <Text
                    cursor={'pointer'}
                    fontWeight="600"
                    pl={5}
                    pr={5}
                    fontSize={16}
                    color={router?.asPath === item.path ? activeAndHoverColor : defaultLinkColor}
                    _hover={{ color: activeAndHoverColor }}>
                    {item?.label || '-'}
                  </Text>
                </a>
              ) : (
                <Link href={item.path} key={item?.label || index} passHref>
                  <Text
                    cursor={'pointer'}
                    fontWeight="600"
                    pl={5}
                    pr={5}
                    fontSize={16}
                    color={router?.asPath === item.path ? activeAndHoverColor : defaultLinkColor}
                    _hover={{ color: activeAndHoverColor }}>
                    {item?.label || '-'}
                  </Text>
                </Link>
              )
            })}
          </Flex>
          <Flex sx={{ paddingTop: 3 }}>
            <Button bg={defaultLightAndDark} onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar
