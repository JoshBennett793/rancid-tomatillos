import PropTypes from 'prop-types'
import { useState } from 'react'
import './MovieCard.css'

export default function MovieCard({
  id,
  posterPath,
  title,
  rating,
  selectSingleMovie
}) {
  const [imageUrl, setImageUrl] = useState(posterPath)
  const fallbackImageUrl = '../src/assets/image-not-found.jpg'

  function setFallbackUrl() {
    setImageUrl(fallbackImageUrl)
  }

  return (
    <article
      className='movie-card'
      key={id}
      onClick={() => selectSingleMovie(id)}
    >
      <img
        className='movie-poster'
        src={imageUrl}
        alt={`Movie poster for ${title}`}
        onError={setFallbackUrl}
      />
      <h2 className='movie-title'>{title}</h2>
      <div className='tomatillo'>
        <span className='movie-rating'>{rating.toFixed(1)}</span>
      </div>
    </article>
  )
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  selectSingleMovie: PropTypes.func.isRequired
}
