import './SingleMovie.css'
import { fetchSingleMovie } from '../../api-calls'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from '../../Loader/loader'

export default function SingleMovie() {
  const { id } = useParams()
  const [movieData, setMovieData] = useState({
    selectedSingleMovie: {},
    movieID: id,
    dataArrived: false,
    errorMsg: '',
    releaseDate: '',
    avgRating: 0,
    genres: '',
    budget: '',
    revenue: ''
  })

  const updateState = (key, value) => {
    setMovieData(prevMovieData => {
      return {
        ...prevMovieData,
        [key]: value
      }
    })
  }

  const selectSingleMovie = async id => {
    const data = await fetchSingleMovie(id)
    if (data.name !== 'Error') {
      updateState('selectedSingleMovie', data.movie)
      updateState('dataArrived', true)
    } else {
      updateState('errorMsg', data.message)
    }
  }

  useEffect(() => {
    updateState('movieID', id)
  }, [id])

  useEffect(() => {
    selectSingleMovie(movieData.movieID)
  }, [movieData.movieID])

  useEffect(() => {
    if (movieData.selectedSingleMovie.id) {
      const formattedReleaseDate = movieData.selectedSingleMovie.release_date
          .slice(5)
          .concat('/', movieData.selectedSingleMovie.release_date.slice(0, 4))
          .replaceAll('-', '/')
      const formattedAvgRating = movieData.selectedSingleMovie.average_rating.toFixed(1)
      const formattedGenres = movieData.selectedSingleMovie.genres.join(', ')
      const formattedBudget = movieData.selectedSingleMovie.budget.toLocaleString()
      const formattedRevenue = movieData.selectedSingleMovie.revenue.toLocaleString()

      updateState('releaseDate', formattedReleaseDate)
      updateState('avgRating', formattedAvgRating)
      updateState('genres', formattedGenres)
      updateState('budget', formattedBudget)
      updateState('revenue', formattedRevenue)
    }
  }, [movieData.selectedSingleMovie])

  return (
    <>
      {!movieData.dataArrived && movieData.errorMsg ? ( 
        <p className='error-msg'>{movieData.errorMsg}</p>
      ) : !movieData.dataArrived ? (
        <Loader />
      ) : (
        <article className='single-movie' key={movieData.selectedSingleMovie.id}>
          <div className='poster-trailer-container'>
            <img
              className='single-movie-poster'
              src={movieData.selectedSingleMovie.poster_path}
              alt={`Movie poster for ${movieData.selectedSingleMovie.title}`}
            />
          </div>
          <div className='single-movie-data'>
            <div className='overlay'></div>
            <img
              className='single-movie-backdrop'
              src={movieData.selectedSingleMovie.backdrop_path}
              alt={`Movie backdrop image for ${movieData.selectedSingleMovie.title}`}
            />
            <div className='title-and-date'>
              <h2 className='single-movie-title'>
                {movieData.selectedSingleMovie.title}
              </h2>
              <span>({movieData.releaseDate.slice(-4)})</span>
            </div>
            <div className='tomatillo-rating'>
              <span className='single-movie-rating'>
                {movieData.avgRating} Tomatillos
              </span>
            </div>
            <p>
              {movieData.releaseDate} • {movieData.genres} • {movieData.selectedSingleMovie.runtime} mins
            </p>
            <span>{movieData.selectedSingleMovie.tagline}</span>
            <h3>Overview</h3>
            <p>{movieData.selectedSingleMovie.overview}</p>
            <div className='single-movie-meta-data'>
              <p>
                <strong>Budget</strong>: ${movieData.budget}
              </p>
              <p>Revenue: ${movieData.revenue}</p>
            </div>
          </div>
        </article>
      )}
    </>
  )
}
