import * as S from "./header.styles"
import cartImage from "../../assets/cart.svg"
import { useContextMovie } from "../../context/MoviesContext"
import { Link } from "react-router-dom"


export function Header() {
  const { cart } = useContextMovie()
  return (
    <S.HeaderContainer>
      <S.NavCart>
        <Link to="/">
          <S.Logo>WeMovies</S.Logo>
        </Link>

        <Link to="/cart">
          <S.CartContainer>
            <S.Cart>
              <S.CartText>Meu Carrinho</S.CartText>
              <S.CartItens>{cart.length} itens</S.CartItens>
            </S.Cart>
            <S.CartIcon  src={cartImage} alt="" />
          </S.CartContainer>
        </Link>
      </S.NavCart>
    </S.HeaderContainer>
  )
}