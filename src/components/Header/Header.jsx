import './Header.css'

export default function Nav() {
  return (
    <header className='header-container'>
      <img
        className='tomatillo-logo'
        src='../src/assets/tomatillo.svg'
        alt='tomatillo logo'
      />
      <h1>Rancid Tomatillos</h1>
    </header>
  )
}
