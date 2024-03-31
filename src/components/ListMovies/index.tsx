import * as S from "./list-movies.styles"
import cartButton from "../../assets/cartButton.svg"
import { ListMoviesProps } from "../../types/list-movies"
import { useContextMovie } from "../../context/MoviesContext"
import { ListMoviesCartProps } from "../../types/list-movies-cart"
import { formatMoney } from "../../utils/format-money"
import { Button } from "../Button"


export function ListMovies() {

  const { movies, setCart, cart} = useContextMovie()

  function addToCart(movie: ListMoviesProps) {
    const existingItem = cart.find((item:ListMoviesCartProps) => item.id === movie.id);
    if (existingItem) {
      const updatedCart = cart.map((item:ListMoviesCartProps) => {
      if (item.id === movie.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    } else {
      setCart([...cart, { ...movie, quantity: 1 }]);
    }
  }

  function takeQuantityMovie(id: number) {
    const takeMovie = cart?.find((item:ListMoviesCartProps) => item.id === id)
    if(takeMovie) {
      return takeMovie.quantity
    } else {
      return 0
    }
  }

  return (
    <S.ListMoviesContainer>
      {movies?.map((movie:ListMoviesProps) => (
        <S.ListMoviesContent key={movie.id}>
          <S.Image src={movie.image} alt="" />
          <S.MoviesInfo>
            <S.Title>{movie.title}</S.Title>
            <S.Price>{formatMoney(movie.price)}</S.Price>
          </S.MoviesInfo>
          <Button.Root onClick={() => addToCart(movie)} quantity={takeQuantityMovie(movie.id)}>
            <Button.Icon>
              <img src={cartButton} alt="carrinho do botão" />
              <span>{takeQuantityMovie(movie.id)}</span>
            </Button.Icon>
            adicionar ao carrinho
          </Button.Root>
        </S.ListMoviesContent>
      ))}
    </S.ListMoviesContainer>
  )
}