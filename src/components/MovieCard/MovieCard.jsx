import './MovieCard.css'

export default function MovieCard(props) {
  const { id, posterPath, title, rating, selectSingleMovie } = props

  return (
    <article className='movie-card' key={id} onClick={() => selectSingleMovie(id)}>
      <img className='movie-poster' src={posterPath} alt={`Movie poster for ${title}`}/>
      <h2 className='movie-title'>{title}</h2>
      <div className='tomatillo'>
        <span className='movie-rating'>{rating.toFixed(1)}</span>
      </div>
    </article>
  )
}
