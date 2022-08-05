import { motion } from 'framer-motion'
import { WithChildren } from '@app/types/FCProps'

interface AvatarMotionProps extends WithChildren {
  direction?: 'left' | 'right'
}

export const AvatarMotion: React.FC<AvatarMotionProps> = ({ children, direction = 'right' }) => {
  const animateX = direction === 'right' ? [72, 0] : [-72, 0]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: animateX, opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
      transition={{ ease: 'easeInOut', duration: 1.2 }}>
      {children}
    </motion.div>
  )
}
