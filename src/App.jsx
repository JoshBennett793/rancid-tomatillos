import { useState, useEffect } from 'react'
import { fetchMovieData } from './api-calls'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import AllMovies from './components/AllMovies/AllMovies'
import SingleMovie from './components/SingleMovie/SingleMovie'
import UrlError from './components/URLerror/urlError'

export default function App() {
  const [movies, setMovies] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)

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
      <Routes>
        <Route
          path='/'
          element={
            errorMsg ? (
              <p className='error-msg'>{errorMsg}</p>
            ) : (
              <AllMovies movies={movies} />
            )
          }
        />
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<UrlError />} />
      </Routes>
    </>
  )
}
