import MovieCard from '../MovieCard/MovieCard.jsx'

export default function AllMovies(props) {
  const { movies } = props
  console.log(movies)

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        posterPath={movie.poster_path}
        rating={movie.average_rating}
        release={movie.release_date}
      />
    )
  })

  return <main className='all-movies-container'>{movieCards}</main>
}
