import React from "react"
import * as S from "./button-root.styles"

type ButtonRootProps = React.ComponentProps<"button"> & {
  quantity?: number
}

export function ButtonRoot({ children, quantity=0, ...props }: ButtonRootProps) {

  return (
    <S.ButtonStyles {...props} quantity={quantity}>
      {children}
    </S.ButtonStyles>
  )
}