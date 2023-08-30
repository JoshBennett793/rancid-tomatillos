import './SingleMovie.css'
// import PropTypes from 'prop-types'
import { fetchSingleMovie } from '../../api-calls'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function SingleMovie() {
  const [selectedSingleMovie, setSelectedSingleMovie] = useState({})
  const [movieID, setMovieID] = useState('')
  const [dataArrived, setDataArrived] = useState(false)
  
  console.log(typeof useParams().id); // string
  setMovieID(useParams().id)

  const selectSingleMovie = async id => {
    const data = await fetchSingleMovie(id)
    if (data.name !== 'Error') {
      setSelectedSingleMovie(data.movie)
      setDataArrived(true)
      return
    } else {
      setErrorMsg(data.message)
    }
  }

  useEffect(() => {
    if (!dataArrived) {
      selectSingleMovie(movieID)
      var releaseDate = selectedSingleMovie.release_date
        .slice(5)
        .concat('/', selectedSingleMovie.release_date.slice(0, 4))
        .replaceAll('-', '/')
    }
    console.log('hi')

      
  }, [movieID])

  return dataArrived && <article className='single-movie' key={selectedSingleMovie.id}>
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
      <h2 className='single-movie-title'>{selectedSingleMovie.title}</h2>
      <span>({releaseDate.slice(-4)})</span>
    </div>
    <div className='tomatillo-rating'>
      <span className='single-movie-rating'>
        {selectedSingleMovie.average_rating.toFixed(1)} Tomatillos
      </span>
    </div>
    <p>
      {releaseDate} • {selectedSingleMovie.genres.join(', ')} •{' '}
      {selectedSingleMovie.runtime} mins
    </p>
    <span>{selectedSingleMovie.tagline}</span>
    <h3>Overview</h3>
    <p>{selectedSingleMovie.overview}</p>
    <div className='single-movie-meta-data'>
      <p>
        <strong>Budget</strong>: $
        {selectedSingleMovie.budget.toLocaleString()}
      </p>
      <p>Revenue: ${selectedSingleMovie.revenue.toLocaleString()}</p>
    </div>
  </div>
</article>
}
