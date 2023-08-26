import './SingleMovie.css'
import PropTypes from 'prop-types';

export default function SingleMovie({ selectedSingleMovie, returnAllMovies }) {

  return (
    <article className='single-movie' key={selectedSingleMovie.id}>
      <img
        className='single-movie-poster'
        src={selectedSingleMovie.backdrop_path}
        alt={`Movie poster for ${selectedSingleMovie.title}`}
      />
      <h2 className='single-movie-title'>{selectedSingleMovie.title}</h2>
      <div className='tomatillo'>
        <span className='single-movie-rating'>
          {selectedSingleMovie.average_rating.toFixed(1)} Tomatillos
        </span>
      </div>
      <p className='single-movie-release'>Release Date:{selectedSingleMovie.release_date}</p>
      <button className='return-all-movies' onClick={() => returnAllMovies()}>
        ALL MOVIES
      </button>
    </article>
  )
}

SingleMovie.propTypes = { 
selectedSingleMovie: PropTypes.shape({
    average_rating: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}).isRequired,
returnAllMovies: PropTypes.func.isRequired
}

// .shape() used to specify prop that is an object 
// with a specific structure. define expected properties 
// of the object and their PropTypes 