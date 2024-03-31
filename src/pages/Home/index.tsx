import * as S from "./home.styles"
import { MoviesListAndSearch } from "../../components/MoviesListAndSearch";


export function Home() {

  return (
    <S.HomeContainer>
      <S.HomeContent>
        <MoviesListAndSearch />
      </S.HomeContent>
    </S.HomeContainer>
  )
}