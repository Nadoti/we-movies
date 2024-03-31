import { ReactNode, createContext, useContext, useState } from "react";
import { ListMoviesProps } from "../types/list-movies";
import { getAllMovies } from "../services/getAllMovies";
import { ListMoviesCartProps } from "../types/list-movies-cart";
import { ContextProps } from "../types/context";

const MoviesContext = createContext<ContextProps>({
  search: "",
  setSearch: () => {},
  searchMovies: () => {},
  movies: [],
  loading: false,
  cart: [],
  setCart: () => {},
});

export function useContextMovie() {
  const context = useContext(MoviesContext)

  return context
}

export function MoviesProvider({ children }: { children: ReactNode}) {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState<ListMoviesProps[]>([])
  const [loading, setLoading] = useState(false)

  const [cart, setCart] = useState<ListMoviesCartProps[]>([])
  

  async function searchMovies(name?: string) {
    setLoading(true)
    try {
      const response = await getAllMovies(name)
      setMovies(response)
    } finally {
      setLoading(false)
    }
  }

  return (
    <MoviesContext.Provider value={{
      search, setSearch, searchMovies, movies, loading, cart, setCart
    }}>
      { children }
    </MoviesContext.Provider>
  )
}