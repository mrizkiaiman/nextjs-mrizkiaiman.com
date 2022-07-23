import { motion } from 'framer-motion'
import { WithChildren } from '@app/types/FCProps'

export const RenderPageMotion: React.FC<WithChildren> = ({ children }) => {
  return (
    <motion.div animate={{ y: [80, 0], opacity: [0.5, 1] }} transition={{ ease: 'easeInOut', duration: 2 }}>
      {children}
    </motion.div>
  )
}
