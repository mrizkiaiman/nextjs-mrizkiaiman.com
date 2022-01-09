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
import { ComponentProps } from '@type/ComponentProps'
import { NAV_ITEMS, NavItem } from './_list'

interface IPNavbar extends ComponentProps {}

export const Navbar: React.FunctionComponent<IPNavbar> = props => {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  const { defaultLinkColor, defaultLightAndDark, activeAndHoverColor } = useColors()

  return (
    <>
      <Box
        boxShadow={'base'}
        display={'flex'}
        width={{ base: '100%', md: '100%', sm: '100%' }}
        justifyContent={'center'}
        alignItems={'center'}>
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
              return (
                <Link href={item.path} key={item?.label || index} passHref>
                  <Text
                    sx={{
                      cursor: 'pointer',
                      fontWeight: '600',
                      paddingLeft: 5,
                      paddingRight: 5,
                      fontSize: 16,
                      color: router?.asPath === item.path ? activeAndHoverColor : defaultLinkColor,
                    }}
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
