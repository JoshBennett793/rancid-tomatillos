import { useState, useEffect } from 'react'
import { fetchMovieData, fetchSingleMovie } from './api-calls'
import Header from './components/Header/Header'
import AllMovies from './components/AllMovies/AllMovies'
import SingleMovie from './components/SingleMovie/SingleMovie'

export default function App() {
  const [movies, setMovies] = useState([])
  const [selectedSingleMovie, setSelectedSingleMovie] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const selectSingleMovie = async id => {
    const data = await fetchSingleMovie(id)

    if (data.name !== 'Error') {
      setSelectedSingleMovie(data.movie)
      return
    } else {
      setErrorMsg(data.message)
    }
  }

  const returnAllMovies = () => {
    setSelectedSingleMovie(null)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovieData()

      if (data.name !== 'Error') {
        setMovies(data.movies)
      } else {
        setErrorMsg(data.message)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />
      {selectedSingleMovie ? (
        <SingleMovie
          selectedSingleMovie={selectedSingleMovie}
          returnAllMovies={returnAllMovies}
        />
      ) : errorMsg ? (
        <p className='error-msg'>{errorMsg}</p>
      ) : (
        <AllMovies movies={movies} selectSingleMovie={selectSingleMovie} />
      )}
    </>
  )
}
