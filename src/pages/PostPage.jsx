import { Navigate, useParams } from 'react-router-dom'
import BlogLayout from '../components/BlogLayout.jsx'
import PostContentRenderer from '../components/PostContentRenderer.jsx'
import { getPostBySlug } from '../data/posts.js'

function PostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/" replace />
  }

  return (
    <BlogLayout>
      <article className="post-page">
        <h2 className="post-page-title">{post.title}</h2>
        <p className="post-page-date">{post.date}</p>
        <PostContentRenderer blocks={post.blocks} />
      </article>
    </BlogLayout>
  )
}

export default PostPage
