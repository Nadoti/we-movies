import styled from "styled-components";


export const ButtonStyles = styled.button<{quantity: number}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  padding: 8px;
  border: none;
  
  background: ${({ quantity, theme }) => quantity > 0 ? theme.backgrounds["green-400"] : theme.backgrounds["blue-400"]};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  span {
    margin-right: 12px;
    margin-left: 4px;
    text-transform: none;
    font-weight: normal;
  }
`