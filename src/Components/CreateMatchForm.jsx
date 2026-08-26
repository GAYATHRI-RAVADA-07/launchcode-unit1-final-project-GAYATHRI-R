import { useState } from "react";

function CreateMatchForm({ onCreateMatch }) {
  const today = new Date().toISOString().split("T")[0];

  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [currentPlayers, setCurrentPlayers] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("");
  const [organizer, setOrganizer] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (date < today) {
      alert("Please select today or a future date.");
      return;
    }

    if (Number(currentPlayers) > Number(maxPlayers)) {
      alert("Players needed cannot be greater than maximum players");
      return;
    }

    const newMatch = {
      id: Date.now(),
      sport,
      location,
      date,
      time,
      skillLevel,
      currentPlayers: Number(currentPlayers),
      maxPlayers: Number(maxPlayers),
      organizer,
    };

    onCreateMatch(newMatch);

    setSport("");
    setLocation("");
    setDate("");
    setTime("");
    setSkillLevel("");
    setCurrentPlayers("");
    setMaxPlayers("");
    setOrganizer("");
  }

  return (
    <form className="create-match-form" onSubmit={handleSubmit}>
      <h2>Create a Match</h2>

      <label>Sport:</label>
      <input
        type="text"
        value={sport}
        onChange={(event) => setSport(event.target.value)}
        placeholder="Enter sport"
        required
      />

      <label>Location:</label>
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Enter location"
        required
      />

      <label>Date:</label>
      <input
        type="date"
        value={date}
        min={today}
        onChange={(event) => setDate(event.target.value)}
        required
      />

      <label>Time:</label>
      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      />

      <label>Skill Level:</label>
      <select
        value={skillLevel}
        onChange={(event) => setSkillLevel(event.target.value)}
        required
      >
        <option value="">Select skill level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <label>Current Players:</label>
      <input
        type="number"
        min="1"
        value={currentPlayers}
        onChange={(event) => setCurrentPlayers(event.target.value)}
        placeholder="Number of players needed"
        required
      />

      <label>Maximum Players:</label>
      <input
        type="number"
        min="1"
        value={maxPlayers}
        onChange={(event) => setMaxPlayers(event.target.value)}
        placeholder="Maximum number of players"
        required
      />

      <label>Organizer:</label>
      <input
        type="text"
        value={organizer}
        onChange={(event) => setOrganizer(event.target.value)}
        placeholder="Enter organizer name"
        required
      />

      <button className="submit-match-button" type="submit">
        Create Match
      </button>
    </form>
  );
}

export default CreateMatchForm;
