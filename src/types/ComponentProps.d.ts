import { NextRouter } from 'next/router'
import React, { Ref } from 'react'

export interface ComponentProps<RefType = any> {
  router?: NextRouter
  className?: string
  ref?: Ref<RefType>
  children?: JSX.Element | JSX.Element[] | any
  id?: string
  style?: React.CSSProperties
}
