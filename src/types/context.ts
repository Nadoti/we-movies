import { ListMoviesProps } from "./list-movies";
import { ListMoviesCartProps } from "./list-movies-cart";


export type ContextProps = {
  search: string;
  setSearch: (value: string) => void;
  searchMovies: (name?: string) => void;
  movies: ListMoviesProps[];
  loading: boolean;
  cart: ListMoviesCartProps[];
  setCart: (movies: ListMoviesCartProps[]) => void,
}