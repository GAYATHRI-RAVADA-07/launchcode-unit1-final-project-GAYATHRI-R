import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>Welcome to CourtConnect</h1>

        <p>
          Find courts, discover and create matches, and connect with players
          near you
        </p>

        <Link to="/matches" className="button">
          Browse Matches
        </Link>
      </section>
    </main>
  );
}

export default Home;
