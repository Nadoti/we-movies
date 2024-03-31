import * as S from "./input.styles"
import search from "../../assets/search.svg"

type InputProps = React.ComponentProps<'input'> & {
  onClick: () => void
}

export function Input({ onClick,...props}: InputProps) {

  return (
    <S.InputContainer>
      <S.InputStyles 
        type="text"
        placeholder="Buscar filme pelo nome"
        {...props}
      />
      <S.ButtonSearch onClick={onClick}>
        <img src={search} alt="" />
      </S.ButtonSearch>
    </S.InputContainer>
  )
}