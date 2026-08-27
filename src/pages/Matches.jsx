import { useState } from "react";
import MatchList from "../components/MatchList";
import CreateMatchForm from "../components/CreateMatchForm";
import { matches as initialMatches } from "../mockdata/matches";
import Button from "../components/Button";

function Matches() {
  const [matches, setMatches] = useState(initialMatches);
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  function handleCreateMatchForm(newMatch) {
    setMatches((currentMatches) => [...currentMatches, newMatch]);
  }
  const today = new Date().toISOString().split("T")[0];

  const filteredMatches = matches.filter((game) => {
  const matchesSearch = game.sport
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesSkill =
    skillFilter === "" || game.skillLevel === skillFilter;

  const matchesDate = game.date >= today;

  return matchesSearch && matchesSkill && matchesDate;
});

  function handleJoinMatch(matchId) {
    setMatches((currentMatches) =>
      currentMatches.map((match) => {
        if (match.id === matchId && match.currentPlayers < match.maxPlayers) {
          return {
            ...match,
            currentPlayers: match.currentPlayers + 1,
            joined: true,
          };
        }

        return match;
      }),
    );
  }

  return (
    <main className="matches-page">
      <div className="matches-header">
        <h1>Matches</h1>
        <p>Find a game that matches your sport and skill level.</p>
      </div>

      <div className="match-controls">
        <input
          type="text"
          placeholder="Search by sport..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="skill-filter">
          <label htmlFor="skill-level">Skill Level</label>

          <select
            id="skill-level"
            value={skillFilter}
            onChange={(event) => setSkillFilter(event.target.value)}
          >
            <option value="">All Skill Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <Button
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? "Cancel" : "Create Match"}
        </Button>
      </div>

      {showCreateForm && (
        <CreateMatchForm onCreateMatch={handleCreateMatchForm} />
      )}

      <section className="matches-list-section">
        <h2>Available Matches</h2>

        <MatchList games={filteredMatches} onJoinMatch={handleJoinMatch} />
      </section>
    </main>
  );
}

export default Matches;
