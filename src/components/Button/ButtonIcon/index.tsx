import { ReactNode } from "react"
import * as S from "./button-icon.styles"

export function ButtonIcon({ children }: {children: ReactNode}) {

  return (
    <S.Container>
      {children}
    </S.Container>
  )
}