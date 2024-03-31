import * as S from "./loading.styles"
import loader from "../../assets/Loader.png"

export function Loading() {
  return (
    <S.LoadingContainer>
      <img src={loader} alt="Loading" />
    </S.LoadingContainer>
  );
}
