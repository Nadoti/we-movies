import { ChangeEvent, Fragment, useEffect } from "react";
import { useContextMovie } from "../../context/MoviesContext";
import { Input } from "../Input";
import { ListMovies } from "../ListMovies";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loading } from "../Loading";


export function MoviesListAndSearch() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  
  const paramenterSearch = searchParams.get("search-query")

  const {search, setSearch, searchMovies, loading} = useContextMovie()

  function handleOnChange({ target }: ChangeEvent<HTMLInputElement>) {
    setSearch(target.value)
  }

  function handleOnBlur({ target }: ChangeEvent<HTMLInputElement>) {
    navigate(`/search?search-query=${target.value.toLowerCase()}`)
  }

  function handleSearchMovies() {
    searchMovies(search)
  }

  useEffect(() => {
    searchMovies(String(paramenterSearch))
  }, [paramenterSearch])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Input value={search} onChange={handleOnChange} onBlur={handleOnBlur} onClick={handleSearchMovies}/>
          <ListMovies />
        </Fragment>
      )}
      
    </div>
  )
}