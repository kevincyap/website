import Header from './Header.jsx'

function BlogLayout({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">{children}</main>
    </div>
  )
}

export default BlogLayout
