import { useContextMovie } from "../../context/MoviesContext";
import * as S from "./cart.styles";
import trash from "../../assets/trash.svg";
import { formatMoney } from "../../utils/format-money";
import { ListMoviesCartProps } from "../../types/list-movies-cart";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Fragment } from "react/jsx-runtime";
import { Empty } from "../../components/Empty";


export function Cart() {
  const { cart, setCart } = useContextMovie()

  function handleIncreaseQuantityMovie(movie: ListMoviesCartProps) {
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
  function handleDescreaseQuantityMovie(movie: ListMoviesCartProps) {
    const existingItem = cart.find((item:ListMoviesCartProps) => item.id === movie.id);
    if (existingItem) {
      const updatedCart = cart.map((item:ListMoviesCartProps) => {
        
        if (item.id === movie.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...movie, quantity: 1 }]);
    }
  }

  function removeMovieCart(id: string) {
    const removeCart = cart.filter(movies => String(movies.id) !== id)
    setCart(removeCart)
  }

  const totalPriceMovies = cart.reduce((total, movie) => total + (movie.price * movie.quantity), 0);

  return (
    <Fragment>
      {cart.length > 0 ? (
        <S.CartContainer>
        <S.CartContent>
          <S.CartTable>
            <S.CartTableHead>
              <tr>
                <th>produto</th>
                <th>qtd</th>
                <th>subtotal</th>
                <th></th>
              </tr>
            </S.CartTableHead>
            <S.CartTableBody>
              {cart.map((movies: ListMoviesCartProps) => (
                <tr key={movies.id}>
                  <S.Product>
                    <img src={movies.image} alt="" />
                    <S.ProductInfo>
                      <p>{movies.title}</p>
                      <p>{formatMoney(movies.price)}</p>
                    </S.ProductInfo>
                  </S.Product>
                  <S.DecreaseIncrease>
                    <S.ButtonDecreaseIncrease onClick={() => handleDescreaseQuantityMovie(movies)}> - </S.ButtonDecreaseIncrease>
                    <input type="text" readOnly value={movies.quantity}/>
                    <S.ButtonDecreaseIncrease onClick={() => handleIncreaseQuantityMovie(movies)}> + </S.ButtonDecreaseIncrease>
                  </S.DecreaseIncrease>
                  <S.SubTotal>{formatMoney(movies.price * movies.quantity)}</S.SubTotal>
                  <S.ButtonDeleteContainer onClick={() => removeMovieCart(String(movies.id))}>
                    <S.ButtonDelete>
                      <img src={trash} alt="Lixeira" />
                    </S.ButtonDelete>
                  </S.ButtonDeleteContainer>
                </tr>
              ))}
            </S.CartTableBody>
          </S.CartTable>
          <S.FinishOrderContainer>
            <Link to="/purchase-completed">
              <Button.Root>finalizar pedido</Button.Root>
            </Link>
            <S.Total>
              <S.TotalText>Total</S.TotalText>
              <S.TotalPrice>{formatMoney(totalPriceMovies)}</S.TotalPrice>
            </S.Total>
          </S.FinishOrderContainer>
        </S.CartContent>
      </S.CartContainer>
      ) : (
        <Empty />
      )}
    </Fragment>
    
  )
}