import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
        <img className="site-title-image" src="/images/cat.jpg" alt="Site icon" />
      <h1 className="site-title">
        <Link className="site-title-link" to="/">
          Kevin's Blog
        </Link>
      </h1>
    </header>
  )
}

export default Header
