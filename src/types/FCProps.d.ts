import { NextRouter } from 'next/router'
import React, { Ref } from 'react'

export interface FCProps<RefType = any> {
  router?: NextRouter
  className?: string
  ref?: Ref<RefType>
  children?: JSX.Element | JSX.Element[] | any
  id?: string
  style?: React.CSSProperties
}
