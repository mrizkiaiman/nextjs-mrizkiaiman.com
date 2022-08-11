import * as React from 'react'

interface IGlobalContext {
  alreadyLoad: boolean
  setAlreadyLoad: (value: boolean) => void
}

export const GlobalContext = React.createContext<IGlobalContext>({
  alreadyLoad: true,
  setAlreadyLoad: () => {},
})
