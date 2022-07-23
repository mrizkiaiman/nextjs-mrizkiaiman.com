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
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { NavbarMenuMotion } from '@app/components/containers/animations/NavbarMenuMotion'

import { useRouter } from 'next/router'
import { useColors } from '@app/utils/hooks/useColors'
import { FCProps } from '@type/FCProps'
import { NAV_ITEMS, NavItem } from './list'

interface IPNavbar extends FCProps {}

export const Navbar: React.FC<IPNavbar> = props => {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  const { defaultLinkColor, defaultLightAndDark, activeAndHoverColor, containerButton } = useColors()

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
          <Flex display={{ base: 'none', md: 'flex' }} pt={2} pb={2}>
            {NAV_ITEMS.map((item: NavItem, index: number) => {
              return item?.externalLink ? (
                <a target={'_blank'} href={item.path} key={item?.label || index} rel="noopener noreferrer">
                  <NavbarMenuMotion>
                    <Text
                      cursor={'pointer'}
                      fontWeight="600"
                      fontSize={16}
                      py={'12px'}
                      px={5}
                      mx={'6px'}
                      borderRadius={8}
                      color={router?.asPath === item.path ? activeAndHoverColor : defaultLightAndDark}
                      _hover={{ color: activeAndHoverColor, opacity: 1, backgroundColor: containerButton, fontWeight: 'bold' }}>
                      {item?.label || '-'}
                    </Text>
                  </NavbarMenuMotion>
                </a>
              ) : (
                <NavbarMenuMotion>
                  <Link href={item.path} key={item?.label || index} passHref>
                    <Text
                      cursor={'pointer'}
                      fontWeight={router?.asPath === item.path ? 'bold' : '600'}
                      fontSize={16}
                      py={'12px'}
                      px={5}
                      mx={'6px'}
                      borderRadius={8}
                      backgroundColor={router?.asPath === item.path ? containerButton : defaultLightAndDark}
                      color={router?.asPath === item.path ? activeAndHoverColor : defaultLinkColor}
                      _hover={{ color: activeAndHoverColor, opacity: 1, backgroundColor: containerButton, fontWeight: 'bold' }}>
                      {item?.label || '-'}
                    </Text>
                  </Link>
                </NavbarMenuMotion>
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
