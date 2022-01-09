export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  path: string
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '#',
  },
  {
    label: 'Projects',
    path: '#',
  },
  {
    label: 'Blog',
    path: '#',
  },
  {
    label: 'Contact',
    path: '#',
  },
]
