import { WithChildren } from '@app/types/FCProps'
import { motion } from 'framer-motion'

interface ButtonMotionProps extends WithChildren {
  whileHoverScale?: number
  whileTapScale?: number
}

export const ButtonMotion: React.FC<ButtonMotionProps> = ({ children, whileHoverScale, whileTapScale }) => {
  return (
    <motion.button
      whileHover={{ scale: whileHoverScale ? whileHoverScale : 1.1 }}
      whileTap={{ scale: whileTapScale ? whileTapScale : 0.9 }}>
      {children}
    </motion.button>
  )
}

export default ButtonMotion
