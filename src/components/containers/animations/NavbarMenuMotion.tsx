import { WithChildren } from '@app/types/FCProps'
import { motion } from 'framer-motion'

export const NavbarMenuMotion: React.FC<WithChildren> = ({ children }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  )
}
