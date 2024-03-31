import * as S from "./empty.styles"
import empty from "../../assets/empty.png"
import { Link } from "react-router-dom"
import { Button } from "../Button"

export function Empty() {

  return (
    <S.Container>
      <S.Content>
        <h1>Parece que não há nada por aqui :(</h1>
        <img src={empty} alt="Empty" />
        <Link to="/">
          <Button.Root>
            recarregar página
          </Button.Root>
        </Link>
      </S.Content>
    </S.Container>
  )
}