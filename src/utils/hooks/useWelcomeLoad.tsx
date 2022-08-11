import * as React from 'react'
import { useGlobalContext } from '@app/utils/hooks/useGlobalContext'

export const useWelcomeLoad = () => {
  const { alreadyLoad, setAlreadyLoad } = useGlobalContext()

  React.useEffect(() => {
    setTimeout(() => {
      setAlreadyLoad(true)
    }, 9900)
  }, [])

  return { alreadyLoad, setAlreadyLoad }
}
