import BlogLayout from '../components/BlogLayout.jsx'
import PostList from '../components/PostList.jsx'
import { posts } from '../data/posts.js'

function HomePage() {
  return (
    <BlogLayout>

        <article className="post-card">
            <h2 className="post-card-title">
                Quote of the day
            </h2>
            <p className="post-card-date">2026-02-27</p>
            <p className="post-card-excerpt">Suck ma nards</p>
        </article>

        <PostList posts={posts} />
    </BlogLayout>
  )
}

export default HomePage
