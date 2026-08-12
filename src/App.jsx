import { useState } from "react";
import MatchList from "./Components/MatchList";
import CreateMatchForm from "./Components/CreateMatchForm";
import { matches as initialMatches } from "./mockdata/matches";

function App() {
  const [matches, setMatches] = useState(initialMatches);
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("");

  function handleCreateMatchForm(newMatch) {
    setMatches((currentMatches) => [...currentMatches, newMatch]);
  }

  const filteredMatches = matches.filter((game) => {
    const matchesSearch = game.sport
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesSkill = skillFilter === "" || game.skillLevel === skillFilter;

    return matchesSearch && matchesSkill;
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
    <div>
      <h1>CourtConnect</h1>

      <CreateMatchForm onCreateMatch={handleCreateMatchForm} />

      <input
        type="text"
        placeholder="Search by sport..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <label>Filter by Skill Level:</label>

      <select
        value={skillFilter}
        onChange={(event) => setSkillFilter(event.target.value)}
      >
        <option value="">All Skill Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <MatchList games={filteredMatches} onJoinMatch={handleJoinMatch} />
    </div>
  );
}

export default App;
