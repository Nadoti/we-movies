import styled from "styled-components";



export const CartContainer = styled.section`
  width: 100%;
  height: calc(100vh - 99px);
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary};
`

export const CartContent = styled.div`
  width: 100%;
  max-width: 1044px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
`

export const CartTable = styled.table`
  width: 100%;
  display: block;
`;

export const CartTableHead = styled.thead`
  width: 100%;
  display: block;
  /* padding-bottom: 24px; */
  
  tr {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  th {
    width: 100%;
    max-width: 200px;
    text-align: left;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.colors["gray-900"]};
  }

  @media (max-width: 670px) {
    display: none;
  }
`;

export const CartTableBody = styled.tbody`
  width: 100%;
  display: block;
  padding-bottom: 24px;
  
  tr {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
  }

  img {
    width: 91px;
  }

  td {
    width: 100%;
    max-width: 200px;
    text-align: left;
  }

  @media (max-width: 670px) {
    td:nth-child(even) {
      max-width: 150px;
    }
    td:nth-child(odd) {
      max-width: 100px;
    }
    td:last-child {
      max-width: 30px;
    }
    img {
      width: 64px;
    }
  }
`;

export const Product = styled.td`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 670px) {
    display: block;
  }
`

export const ProductInfo = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
`

export const DecreaseIncrease = styled.td`
  display: flex;
  align-items: center;
  gap: 11px;
  position: relative;

  input {
    width: 100%;
    max-width: 62px;
    text-align: center;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors["gray-200"]};
    border-radius: 4px;
    outline: none;
    cursor: not-allowed;
  }
`

export const ButtonDecreaseIncrease = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: none;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors["blue-400"]};
  color: ${({ theme }) => theme.colors["blue-400"]};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

export const SubTotal = styled.td`
  font-size: 16px;
  font-weight: 700;
  @media (max-width: 670px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  
`

export const ButtonDeleteContainer = styled.td`
  display: flex;
  justify-content: end;
  @media (max-width: 670px) {
    display: block;
  }
`

export const ButtonDelete = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
  }
`

export const FinishOrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid;
  border-color:  ${({ theme }) => theme.colors["gray-900"]};
  padding-top: 24px;

  button {
    padding: 10px 30px;
  }

  @media (max-width: 670px) {
    flex-direction: column-reverse;
    align-items: normal;
    gap: 16px;
  }
`
export const Total = styled.span`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 670px) {
    justify-content: space-between;
  }
`

export const TotalText = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors["gray-900"]};
`

export const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`