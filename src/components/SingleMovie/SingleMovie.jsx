import './SingleMovie.css'
import PropTypes from 'prop-types'

export default function SingleMovie({ selectedSingleMovie, returnAllMovies }) {
  // Format release date to MM/DD/YYYY
  const releaseDate = selectedSingleMovie.release_date
    .slice(5)
    .concat('/', selectedSingleMovie.release_date.slice(0, 4))
    .replaceAll('-', '/')

  return (
    <article className='single-movie' key={selectedSingleMovie.id}>
      <button className='return-all-movies' onClick={returnAllMovies}>
        ⮐ &nbsp; Return
      </button>
      <div className="poster-trailer-container">
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
  )
}

SingleMovie.propTypes = {
  selectedSingleMovie: PropTypes.shape({
    average_rating: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number
  }).isRequired,
  returnAllMovies: PropTypes.func.isRequired
}

// .shape() used to specify prop that is an object
// with a specific structure. define expected properties
// of the object and their PropTypes

{
  /* {
    "id": 436270,
    "title": "Black Adam",
    "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "release_date": "2022-10-19",
    "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "genres": [
        "Action",
        "Fantasy",
        "Science Fiction"
    ],
    "budget": 200000000,
    "revenue": 384571691,
    "runtime": 125,
    "tagline": "The world needed a hero. It got Black Adam.",
    "average_rating": 4
} */
}
