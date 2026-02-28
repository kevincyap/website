import BlogLayout from '../components/BlogLayout.jsx'
import PostList from '../components/PostList.jsx'
import { posts } from '../data/posts.js'

function HomePage() {
  return (
    <BlogLayout>
      <PostList posts={posts} />
    </BlogLayout>
  )
}

export default HomePage
