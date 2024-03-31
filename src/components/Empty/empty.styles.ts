import styled from "styled-components";



export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 99px);
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 16px 40px 16px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 24px;
  padding-top: 64px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  img {
    width: 300px;
  }

  button {
    padding: 10px 30px;
  }
`