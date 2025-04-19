import { FC } from 'react'

import { RenderIfTProps } from './RenderIf.types'

export const RenderIf: FC<RenderIfTProps> = ({ condition, children }) => {
  if (!condition) {
    return
  }

  return children
}
