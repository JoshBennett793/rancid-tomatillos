import './UrlError.css'
import { Link } from 'react-router-dom'

export default function UrlError() {
  return (
    <div className='url-error'>
      <Link to={`/`}>
        <button className='return-all-movies'>⮐ &nbsp; Return</button>
      </Link>
      <h2>Oops! This page does not exist. Please return home.</h2>
      <img
        className='url-error-img'
        src='../src/assets/incorrect-url.jpg'
        alt='dog holding popcorn'
      />
    </div>
  )
}
