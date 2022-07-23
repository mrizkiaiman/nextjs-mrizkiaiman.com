import { motion } from 'framer-motion'
import { WithChildren } from '@app/types/FCProps'

export const ButtonMotion: React.FC<WithChildren> = ({ children }) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.1 }}>
      {children}
    </motion.button>
  )
}
