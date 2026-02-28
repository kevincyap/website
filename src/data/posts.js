export const posts = [
  {
    slug: 'progress',
    title: 'Blog Progress',
    date: '2026-02-27',
    excerpt: 'This is the blog progress',
    blocks: [
      {
        type: 'paragraph',
        text: 'It\'s not going to hot if imma be honest',
      },
      {
        type: 'image',
        src: '/images/cat.jpg',
        alt: 'Sad cat',
        caption: 'Hes sad because this demo is balls',
      },
      {
        type: 'cardGrid',
        cards: [
          {
            title: '2026-02-27',
            text: 'Added some basic content blocks for posts so I dont have to copy stuff',
          }
        ],
      },
    ],
  }
]

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
