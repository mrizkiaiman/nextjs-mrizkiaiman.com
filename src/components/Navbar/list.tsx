import { BLOG, LINKED_IN } from '@app/_config'

export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  path: string
  externalLink?: boolean
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  // {
  //   label: 'Projects',
  //   path: '#',
  // },
  {
    label: 'Blog',
    path: BLOG,
    externalLink: true,
  },
  {
    label: 'Contact',
    path: LINKED_IN,
    externalLink: true,
  },
]
