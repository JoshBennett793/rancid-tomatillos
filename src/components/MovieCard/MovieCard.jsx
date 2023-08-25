export default function MovieCard(props) {
  return (
    <article className='movie-card'>
      <div className='movie-poster'>
        <img src={props.movie_poster} alt={props.title} />
      </div>
    </article>
  )
}

// Does it have to be in a ul in order to use the key component
