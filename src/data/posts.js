export const posts = [
  {
    slug: 'welcome',
    title: 'Welcome to the Blog',
    date: '2026-02-27',
    excerpt: 'This is the first post in the MVP blog setup.',
    content:
      'This is a bare minimum blog post page. You can now add more posts to src/data/posts.js and they will show up on the homepage.',
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    date: '2026-02-27',
    excerpt: 'A second sample post to confirm list and detail routing.',
    content:
      'Routing is wired for /posts/:slug. This keeps the setup simple while still matching a basic blog structure.',
  },
]

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
