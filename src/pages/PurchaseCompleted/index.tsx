import * as S from "./purchase-completed.styles"
import purchaseCompleted from "../../assets/purchaseCompleted.png"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useContextMovie } from "../../context/MoviesContext"
import { Button } from "../../components/Button"

export function PurchaseCompleted() {
  const { setCart } = useContextMovie()

  useEffect(() => {
    setCart([])
  },[])

  return (
    <S.Container>
      <S.Content>
        <h1>Compra realizada com sucesso!</h1>
        <img src={purchaseCompleted} alt="" />
        <Link to="/">
          <Button.Root>
            voltar
          </Button.Root>
        </Link>
      </S.Content>
    </S.Container>
  )
}