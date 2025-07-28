import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import blogData from "../data/data.json";

const Blog = () => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleArticleClick = (slug) => {
    navigate(`/article/${slug}`);
  };

  return (
    <main className="blog-page">
      <h1>My Articles</h1>
      <p className="blog-intro">
        Below are all my recent blog posts. Click on any title to read the full
        article.
      </p>

      <div className="blog-grid">
        {blogData.map((post, index) => (
          <article
            key={index}
            className="blog-post"
            onClick={() => handleArticleClick(post.slug)}
          >
            <div className="post-header">
              <h3>{post.title}</h3>
              <span className="post-date">{formatDate(post.publishedAt)}</span>
            </div>
            <p className="post-description">{post.description}</p>
            <div className="post-meta"></div>
          </article>
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default Blog;
