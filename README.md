# website

A barebones static blog site.

- Open `index.html` for the blog landing page.
- Open `posts/post-template.html` for a starter post page.
- Shared page structure lives in `template.js`.
- Homepage post cards are generated from `posts/posts.json`.
- `index.html` includes inline fallback post data for local `file://` previews if JSON fetch is blocked.
- To create a new post, copy `posts/post-template.html`, update the `data-post-*` values, edit `<main data-post-content>`, and add a matching item in `posts/posts.json`.
- Deploy `index.html`, `posts/`, `styles.css`, and `template.js` to any static hosting provider.