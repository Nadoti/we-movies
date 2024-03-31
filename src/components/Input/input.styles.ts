import styled from "styled-components";


export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`


export const InputStyles = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 16px 56px 18px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: all .3s;

  &::placeholder {
    color: ${({theme}) => theme.colors["gray-400"]};
  }

  &:focus {
    box-shadow: inset 0 0 0 3px #009EDD; 
  }
`


export const ButtonSearch = styled.button`
  position: absolute;
  height: 100%;
  padding: 0 16px;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`