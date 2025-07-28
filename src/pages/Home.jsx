import React from "react";
import articles from "../data/data.json";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import SocialButtons from "../components/social";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="main-content">
        <div className="home__container">
          <h1> Hi, I'm Paulina 👋</h1>
          <p className="home__description">
            I'm on a journey to become a front-end web developer. I love
            building little projects, trying out new coding techniques, and
            sharing what I learn along the way. When I'm not at my desk, you'll
            find me reading, hiking through the mountains, or challenging myself
            on rock-climbing walls.
            <br />
            <br />I started this blog to document my progress, keep myself
            accountable, and hopefully inspire anyone else who's learning to
            code. Welcome to my corner of the internet, and thanks for stopping
            by!
          </p>
          <SocialButtons />
        </div>
        <section className="articles-container">
          <div>
            <h2>Latest Articles ____</h2>
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
            <button className="view-all-articles">
              {" "}
              <Link to="/blog">View all articles</Link>{" "}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
