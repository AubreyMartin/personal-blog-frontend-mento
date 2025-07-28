import React from "react";
import Footer from "../components/Footer";

const Newsletter = () => (
  <main className="page-container">
    <div className="newsletter-container">
      <h1>Newsletter</h1>
      <p>
        Want to stay updated on my latest articles, coding tutorials, and
        personal adventures? Sign up for my newsletter! It’s a simple way to
        keep track of new posts and occasional coding tips I discover. Just drop
        your email in the sign-up box, and I’ll send you updates whenever
        there’s something new to share.
      </p>
      <h3>
        I’d love to have you along for the ride and also hear about your own
        journey!
      </h3>
    </div>
    <div className="newsletter-form">
      <form>
        <title>Email Address</title>
        <input type="email" placeholder="email@example.com" />
        <br />
        <button className="newsletter-button" type="Stay updated">
          Stay updated
        </button>
        <br />
        <button className="unsubscribe-button">
          Unsubscribe anytime. No spam, I promise 🙂
        </button>
      </form>
    </div>
    <Footer />
  </main>
);

export default Newsletter;
