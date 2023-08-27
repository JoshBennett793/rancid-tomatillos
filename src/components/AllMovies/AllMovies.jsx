import PropTypes from 'prop-types'
import MovieCard from '../MovieCard/MovieCard.jsx'
import './AllMovies.css'

export default function AllMovies({ movies, selectSingleMovie }) {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        posterPath={movie.poster_path}
        rating={movie.average_rating}
        release={movie.release_date}
        selectSingleMovie={selectSingleMovie}
      />
    )
  })

  return <main className='all-movies-container'>{movieCards}</main>
}

AllMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  selectSingleMovie: PropTypes.func.isRequired
}
