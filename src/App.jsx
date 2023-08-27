import { useState, useEffect } from 'react'
import AllMovies from './components/AllMovies/AllMovies'
import SingleMovie from './components/SingleMovie/SingleMovie'

export default function App() {
  const [movies, setMovies] = useState([])
  const [selectedSingleMovie, setSelectedSingleMovie] = useState(null)
  
  const fetchMovieData = async () => {
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    try {
      const response = await fetch(url)
      
      if (response.status === 500) {
        throw new Error('There seems to be a problem. Please try refreshing your browser.')
      }

      const data = await response.json()

      setMovies(data.movies)
    } catch (error) {
      console.log(error)
    }
  }
  
    const selectSingleMovie = id => {
      const selectedMovie = movies.find(movie => movie.id === id)
  
      setSelectedSingleMovie(selectedMovie)
    }
  
    const returnAllMovies = () => {
      setSelectedSingleMovie(null)
    }

  useEffect(() => {
    fetchMovieData()
  }, [])

  return (
    <>
      {selectedSingleMovie ? (
        <SingleMovie
          selectedSingleMovie={selectedSingleMovie}
          returnAllMovies={returnAllMovies}
        />
      ) : (
        <AllMovies movies={movies} selectSingleMovie={selectSingleMovie} />
      )}
    </>
  )
}
