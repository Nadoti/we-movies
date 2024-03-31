import styled from "styled-components";


export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme}) => theme.backgrounds.primary};
`
export const HomeContent = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
`