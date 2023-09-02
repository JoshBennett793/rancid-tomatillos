import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import MovieCard from '../MovieCard/MovieCard.jsx'
import './AllMovies.css'

export default function AllMovies({ movies }) {
  const movieCards = movies.map(movie => {
    return (
      <Link
        to={`movie/${movie.id}`}
        key={movie.id}
        className='movie-card-link'
      >
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          rating={movie.average_rating}
          release={movie.release_date}
        />
      </Link>
    )
  })

  return <main className='all-movies-container'>{movieCards}</main>
}

AllMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      "id": PropTypes.number.isRequired,
      "title": PropTypes.string.isRequired,
      "poster_path": PropTypes.string.isRequired,
      "average_rating": PropTypes.number.isRequired,
      "release_date": PropTypes.string.isRequired,
    })
  ).isRequired
}
