import './SingleMovie.css'
// import PropTypes from 'prop-types'
import { fetchSingleMovie } from '../../api-calls'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from '../../Loader/loader'

export default function SingleMovie() {
  const { id } = useParams() // Get the id from the route params
  const [selectedSingleMovie, setSelectedSingleMovie] = useState({})
  const [movieID, setMovieID] = useState(id) // Initialize movieID with the id from useParams
  const [dataArrived, setDataArrived] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [avgRating, setAvgRating] = useState(0)
  const [genres, setGenres] = useState('')
  const [budget, setBudget] = useState('')
  const [revenue, setRevenue] = useState('')

  const selectSingleMovie = async id => {
    const data = await fetchSingleMovie(id)
    if (data.name !== 'Error') {
      setSelectedSingleMovie(data.movie)
      setDataArrived(true)
    } else {
      setErrorMsg(data.message)
    }
  }

  useEffect(() => {
    setMovieID(id) // Update movieID when the route param changes
  }, [id]) // Add id as a dependency to react to route changes

  useEffect(() => {
    selectSingleMovie(movieID)
  }, [movieID]) // runs when movieID is updated in above useEffect

  useEffect(() => {
    // check if state variable contains data
    if (selectedSingleMovie.id) {
      setReleaseDate(
        selectedSingleMovie.release_date
          .slice(5)
          .concat('/', selectedSingleMovie.release_date.slice(0, 4))
          .replaceAll('-', '/')
      )
      setAvgRating(selectedSingleMovie.average_rating.toFixed(1))
      setGenres(selectedSingleMovie.genres.join(', '))
      setBudget(selectedSingleMovie.budget.toLocaleString())
      setRevenue(selectedSingleMovie.revenue.toLocaleString())
    }
  }, [selectedSingleMovie]) // allows for state to update first before setting corresponding data

  return (
    <>
      {!dataArrived ? (
        <Loader />
      ) : (
        <article className='single-movie' key={selectedSingleMovie.id}>
          <div className='poster-trailer-container'>
            <img
              className='single-movie-poster'
              src={selectedSingleMovie.poster_path}
              alt={`Movie poster for ${selectedSingleMovie.title}`}
            />
            <button className='trailer-button'>▶ &nbsp; Watch Trailer</button>
          </div>
          <div className='single-movie-data'>
            <div className='overlay'></div>
            <img
              className='single-movie-backdrop'
              src={selectedSingleMovie.backdrop_path}
              alt={`Movie backdrop image for ${selectedSingleMovie.title}`}
            />
            <div className='title-and-date'>
              <h2 className='single-movie-title'>
                {selectedSingleMovie.title}
              </h2>
              <span>({releaseDate.slice(-4)})</span>
            </div>
            <div className='tomatillo-rating'>
              <span className='single-movie-rating'>
                {avgRating} Tomatillos
              </span>
            </div>
            <p>
              {releaseDate} • {genres} • {selectedSingleMovie.runtime} mins
            </p>
            <span>{selectedSingleMovie.tagline}</span>
            <h3>Overview</h3>
            <p>{selectedSingleMovie.overview}</p>
            <div className='single-movie-meta-data'>
              <p>
                <strong>Budget</strong>: ${budget}
              </p>
              <p>Revenue: ${revenue}</p>
            </div>
          </div>
        </article>
      )}
    </>
  )
}
