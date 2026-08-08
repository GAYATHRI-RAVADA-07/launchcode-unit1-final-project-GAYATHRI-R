import { useState } from "react";
import MatchList from "./Components/MatchList";
import CreateMatchForm from "./Components/CreateMatchForm";
import { matches as initialMatches } from "./mockdata/matches";

function App() {
  const [matches, setMatches] = useState(initialMatches);

  function handleCreateMatchForm(newMatch) {
    setMatches((currentMatches) => [...currentMatches, newMatch]);
  }
  return (
    <div>
      <h1>CourtConnect</h1>

      <CreateMatchForm onCreateMatch={handleCreateMatchForm} />

      <MatchList games={matches} />
    </div>
  );
}

export default App;
