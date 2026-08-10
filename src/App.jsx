import { useState } from "react";
import MatchList from "./Components/MatchList";
import CreateMatchForm from "./Components/CreateMatchForm";
import { matches as initialMatches } from "./mockdata/matches";

function App() {
  const [matches, setMatches] = useState(initialMatches);
  const [searchTerm, setSearchTerm] = useState("");

  function handleCreateMatchForm(newMatch) {
    setMatches((currentMatches) => [...currentMatches, newMatch]);
  }

  const filteredMatches = matches.filter((game) =>
    game.sport.toLowerCase().includes(searchTerm.toLowerCase()),
  );
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

      <MatchList games={filteredMatches} />
    </div>
  );
}

export default App;
