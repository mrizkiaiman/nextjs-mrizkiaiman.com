import { GlobalContext } from '@app/utils/helpers/context'
import { useContext } from 'react'

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
