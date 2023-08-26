import './SingleMovie.css'

export default function SingleMovie(props) {
  const { singleMovie, returnAllMovies } = props

  return (
    <article className='single-movie' key={singleMovie.id}>
      <img
        className='single-movie-poster'
        src={singleMovie.backdrop_path}
        alt={singleMovie.title}
      />
      <h2 className='single-movie-title'>{singleMovie.title}</h2>
      <div className='tomatillo'>
        <span className='single-movie-rating'>
          {singleMovie.average_rating.toFixed(1)} Tomatillos
        </span>
      </div>
      <p className='single-movie-release'>Release Date:{singleMovie.release_date}</p>
      <button className='return-all-movies' onClick={() => returnAllMovies()}>
        ALL MOVIES
      </button>
    </article>
  )
}
