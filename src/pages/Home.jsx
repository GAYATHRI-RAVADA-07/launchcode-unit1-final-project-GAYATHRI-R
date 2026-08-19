function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>Welcome to CourtConnect</h1>

        <p>
          Find courts, discover and create matches, and connect with players
          near you.
        </p>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h2>Find Matches</h2>
          <p>Discover available matches based on sport and skill level.</p>
        </div>

        <div className="feature-card">
          <h2>Create Matches</h2>
          <p>Organize a game and connect with other players.</p>
        </div>

        <div className="feature-card">
          <h2>Find Courts</h2>
          <p>Explore courts and check their availability.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
