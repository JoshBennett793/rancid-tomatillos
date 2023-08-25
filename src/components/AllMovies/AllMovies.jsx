import MovieCard from '../MovieCard/MovieCard.jsx'

export default function AllMovies(props) {
  const { movies } = props

  const movieCards = movies.map(movie => {
    return <MovieCard title={movie.title} />
  })

  return <main className='all-movies-container'>{movieCards}</main>
}
