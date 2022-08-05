import { motion } from 'framer-motion'
import { WithChildren } from '@app/types/FCProps'

export const RenderPageMotion: React.FC<WithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
      transition={{ ease: 'easeInOut', duration: 2 }}>
      {children}
    </motion.div>
  )
}
