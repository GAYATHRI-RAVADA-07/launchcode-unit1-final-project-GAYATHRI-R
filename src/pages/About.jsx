function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About CourtConnect</h1>

        <p>
          Making it easier to find a game, meet players, and get on the court.
        </p>
      </section>

      <section className="about-content">
        <div className="about-intro">
          <h2>Connect. Play. Enjoy.</h2>

          <p>
            CourtConnect helps players discover local matches and courts in one
            simple place. Whether you're looking for a casual game or want to
            create your own match, CourtConnect makes getting started easy.
          </p>
        </div>

        <div className="how-it-works">
          <h2>How CourtConnect Works</h2>

          <div className="steps">
            <div className="step">
              <span>1</span>
              <h3>Find a Match</h3>
              <p>
                Browse available games and find one that fits your sport and
                skill level.
              </p>
            </div>

            <div className="step">
              <span>2</span>
              <h3>Join or Create</h3>
              <p>
                Join an existing game or create your own match for other players
                to discover.
              </p>
            </div>

            <div className="step">
              <span>3</span>
              <h3>Get Playing</h3>
              <p>
                Meet other players, show up at the court, and enjoy the game.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
