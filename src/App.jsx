import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Courts from "./pages/Courts";
import MatchList from "./Components/MatchList";
import CreateMatchForm from "./Components/CreateMatchForm";
import { matches as initialMatches } from "./mockdata/matches";
import CourtList from "./Components/CourtList";
import { courts } from "./mockdata/courts";
import "./App.css";

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
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courts" element={<Courts />} />

        <Route
          path="/matches"
          element={
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

              <MatchList
                games={filteredMatches}
                onJoinMatch={handleJoinMatch}
              />

              <CourtList courts={courts} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
