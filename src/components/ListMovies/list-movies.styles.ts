import styled from "styled-components";


export const ListMoviesContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`

export const ListMoviesContent = styled.div`
  width: 100%;
  height: 324px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${({ theme }) => theme.backgrounds.white};
  border-radius: 4px;
`

export const Image = styled.img`
  width: 147px;
`

export const MoviesInfo = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
`
export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
`