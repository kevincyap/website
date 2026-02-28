function PostContentRenderer({ blocks = [] }) {
  return (
    <div className="post-content">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`

        if (block.type === 'paragraph') {
          return (
            <p key={key} className="post-block-paragraph">
              {block.text}
            </p>
          )
        }

        if (block.type === 'image') {
          return (
            <figure key={key} className="post-block-image-wrap">
              <img className="post-block-image" src={block.src} alt={block.alt} />
              {block.caption ? (
                <figcaption className="post-block-caption">{block.caption}</figcaption>
              ) : null}
            </figure>
          )
        }

        if (block.type === 'gallery') {
          return (
            <div key={key} className="post-block-gallery">
              {block.images?.map((image, imageIndex) => (
                <img
                  key={`${key}-${imageIndex}`}
                  className="post-block-gallery-image"
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
          )
        }

        if (block.type === 'cardGrid') {
          return (
            <section key={key} className="post-block-card-grid">
              {block.cards?.map((card, cardIndex) => (
                <article key={`${key}-${cardIndex}`} className="post-block-card-item">
                  <h3 className="post-block-card-title">{card.title}</h3>
                  <p className="post-block-card-text">{card.text}</p>
                </article>
              ))}
            </section>
          )
        }

        return null
      })}
    </div>
  )
}

export default PostContentRenderer
