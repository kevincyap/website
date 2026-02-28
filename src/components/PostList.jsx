import PostCard from './PostCard.jsx'

function PostList({ posts }) {
  return (
    <section className="post-list" aria-label="Posts">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  )
}

export default PostList
