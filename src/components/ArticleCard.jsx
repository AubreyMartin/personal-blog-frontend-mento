import React from "react";

const ArticleCard = ({ article }) => {
  if (!article) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="article-card">
      <div className="article-header">
        <h3>{article.title}</h3>
        <span className="article-date">{formatDate(article.publishedAt)}</span>
      </div>
      <p className="article-description">{article.description}</p>
      <div className="article-meta"></div>
    </div>
  );
};

export default ArticleCard;
