import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">
        <Link className="site-title-link" to="/">
          My Blog
        </Link>
      </h1>
    </header>
  )
}

export default Header
