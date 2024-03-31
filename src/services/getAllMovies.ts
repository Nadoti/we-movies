import { ListMoviesProps } from "../types/list-movies";
import { api } from "./axios";




export async function getAllMovies(name?: string) {
  const response = (await api.get(`/products`)).data as ListMoviesProps[]
  let data = response
  if(name) {
    data = data.filter(movies => movies.title.toLowerCase().includes(name.toLowerCase()))
  }
  return data;
}