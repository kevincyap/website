(function () {
  function createHeader(title, tagline) {
    var header = document.createElement("header");
    header.className = "site-header";

    var heading = document.createElement("h1");
    heading.textContent = title || "Kevin's Blog";

    var subtitle = document.createElement("p");
    subtitle.textContent = tagline || "";

    header.appendChild(heading);
    if (subtitle.textContent) {
      header.appendChild(subtitle);
    }

    return header;
  }

  function createPostCard(post) {
    var article = document.createElement("article");
    article.className = "post-card";

    var meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = post.date || "";

    var heading = document.createElement("h2");
    var titleLink = document.createElement("a");
    titleLink.href = post.url || "#";
    titleLink.textContent = post.title || "Untitled";
    heading.appendChild(titleLink);

    var excerpt = document.createElement("p");
    excerpt.textContent = post.excerpt || "";

    var readMore = document.createElement("a");
    readMore.className = "read-more";
    readMore.href = post.url || "#";
    readMore.textContent = post.readMoreLabel || "Read post →";

    if (meta.textContent) {
      article.appendChild(meta);
    }
    article.appendChild(heading);
    if (excerpt.textContent) {
      article.appendChild(excerpt);
    }
    article.appendChild(readMore);

    return article;
  }

  function getComparableDate(post) {
    if (!post || !post.date) {
      return 0;
    }

    var dateMatch = String(post.date).match(/\d{4}-\d{2}-\d{2}/);
    if (!dateMatch) {
      return 0;
    }

    var timestamp = Date.parse(dateMatch[0]);
    return Number.isNaN(timestamp) ? 0 : timestamp;
  }

  function renderPosts(postsContainer, posts) {
    postsContainer.innerHTML = "";

    if (!Array.isArray(posts) || posts.length === 0) {
      var empty = document.createElement("p");
      empty.className = "meta";
      empty.textContent = "No posts yet.";
      postsContainer.appendChild(empty);
      return;
    }

    var sortedPosts = posts.slice().sort(function (left, right) {
      return getComparableDate(right) - getComparableDate(left);
    });

    sortedPosts.forEach(function (post) {
      postsContainer.appendChild(createPostCard(post));
    });
  }

  function getInlinePosts(body) {
    var inlineData = body.querySelector("#posts-inline-data");
    if (!inlineData) {
      return null;
    }

    try {
      return JSON.parse(inlineData.textContent || "[]");
    } catch (error) {
      return null;
    }
  }

  function renderHome(body) {
    var title = body.dataset.siteTitle;
    var tagline = body.dataset.siteTagline;
    if (!body.querySelector(".site-header")) {
      body.prepend(createHeader(title, tagline));
    }

    var postsContainer = body.querySelector(".posts");
    if (!postsContainer) {
      return;
    }

    var postsDataPath = body.dataset.postsData || "posts/posts.json";
    fetch(postsDataPath)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load posts data");
        }
        return response.json();
      })
      .then(function (posts) {
        renderPosts(postsContainer, posts);
      })
      .catch(function () {
        var inlinePosts = getInlinePosts(body);
        renderPosts(postsContainer, inlinePosts || []);
      });
  }

  function renderPost(body) {
    var content = body.querySelector("[data-post-content]");
    if (!content) {
      return;
    }

    var article = document.createElement("article");
    article.className = "post";

    var title = document.createElement("h1");
    title.textContent = body.dataset.postTitle || "Untitled Post";

    var meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = body.dataset.postDate || "";

    article.appendChild(title);
    if (meta.textContent) {
      article.appendChild(meta);
    }

    while (content.firstChild) {
      article.appendChild(content.firstChild);
    }

    var backLink = document.createElement("a");
    backLink.className = "back-link";
    backLink.href = body.dataset.backHref || "../index.html";
    backLink.textContent = body.dataset.backLabel || "← Back to all posts";
    article.appendChild(backLink);

    content.remove();
    body.appendChild(article);
  }

  var body = document.body;
  if (!body) {
    return;
  }

  var layout = body.dataset.layout;
  if (layout === "home") {
    renderHome(body);
    return;
  }

  if (layout === "post") {
    renderPost(body);
  }
})();