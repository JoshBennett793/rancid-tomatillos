import MovieCard from '../MovieCard/MovieCard.jsx'

export default function AllMovies(props) {
  const { movies, selectSingleMovie } = props

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
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
