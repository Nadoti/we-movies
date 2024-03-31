import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles.ts'
import { Theme } from './styles/theme.ts'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Router.tsx'
import { MoviesProvider } from './context/MoviesContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <MoviesProvider>
      <Router />
    </MoviesProvider>
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
)
