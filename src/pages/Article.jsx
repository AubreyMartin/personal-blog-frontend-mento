import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import blogData from "../data/data.json";

const Article = () => {
  const { slug } = useParams();
  
  // Find the article by slug
  const article = blogData.find(post => post.slug === slug);
  
  if (!article) {
    return (
      <main className="page-container">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Footer />
      </main>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="article-page">
      <h1>{article.title}</h1>
      <div className="article-meta">
        <span>{formatDate(article.publishedAt)}</span>
        <span>•</span>
        <span>{article.readTime}</span>
        <span>•</span>
        <span>{article.category}</span>
      </div>
      <div className="article-content">
        <p>{article.description}</p>
        {/* Add more article content here when available */}
        <p>This is a placeholder for the full article content. The actual article content would be displayed here.</p>
      </div>
      <Footer />
    </main>
  );
};

export default Article; 