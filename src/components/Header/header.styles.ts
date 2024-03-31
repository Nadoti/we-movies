import styled from "styled-components";



export const HeaderContainer = styled.header`
  width: 100%;
  padding: 31.5px 0;
  background: ${({ theme }) => theme.colors.primary};
` 
export const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
` 

export const NavCart = styled.nav`
  width: 100%;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 16px;
`

export const CartContainer = styled.div`
  display: flex;
  gap: 8px;
` 
export const Cart = styled.span`
  display: flex;
  flex-direction: column;
  align-items: end;
`

export const CartText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`

export const CartItens = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray-900"]};
` 
export const CartIcon = styled.img`` 