import './Header.css'

export default function Header() {
  return (
    <div>
      <header className='header'>
        <img
          className='tomatillo-logo'
          src='../src/assets/tomatillo.svg'
          alt='tomatillo logo'
        />
        <h1>Rancid Tomatillos</h1>
      </header>
    </div>
  )
}
