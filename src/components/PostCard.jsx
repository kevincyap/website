import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <article className="post-card">
      <h2 className="post-card-title">
        <Link className="post-card-title-link" to={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <p className="post-card-date">{post.date}</p>
      <p className="post-card-excerpt">{post.excerpt}</p>
      <Link className="post-card-read-more" to={`/posts/${post.slug}`}>
        Read more
      </Link>
    </article>
  )
}

export default PostCard
