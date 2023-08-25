import './MovieCard.css'

export default function MovieCard(props) {
  return (
    <article className='movie-card' key={props.id}>
      <img className='movie-poster' src={props.posterPath} alt={props.title} />
      <h2 className='movie-title'>{props.title}</h2>
      <div className='tomatillo'>
        <span className='movie-rating'>{props.rating.toFixed(1)}</span>
      </div>
      {/* <img src='../src/assets/tomatillo.svg' alt='Tomatillo Rating Icon' />
      <p className='movie-rating'></p> */}
    </article>
  )
}

// Does it have to be in a ul in order to use the key component
