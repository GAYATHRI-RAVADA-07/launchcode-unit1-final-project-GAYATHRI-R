import { useState } from "react";

function CreateMatchForm({ onCreateMatch }) {
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
    <form onSubmit={handleSubmit}>
      <h2>Create a Match</h2>

      <label>Sport:</label>
      <input
        type="text"
        value={sport}
        onChange={(event) => setSport(event.target.value)}
        placeholder="Enter sport"
        required
      />

      <p>Selected sport: {sport}</p>

      <label>Location:</label>
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Enter location"
        required
      />

      <p>Selected location: {location}</p>

      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        required
      />

      <p>Selected date: {date}</p>

      <label>Time:</label>
      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      />

      <p>Selected time: {time}</p>

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

      <p>Selected skill level: {skillLevel}</p>

      <label>Current Players:</label>
      <input
        type="number"
        min="1"
        value={currentPlayers}
        onChange={(event) => setCurrentPlayers(event.target.value)}
        placeholder="Number of players needed"
        required
      />

      <p>Current Players: {currentPlayers}</p>

      <label>Maximum Players:</label>
      <input
        type="number"
        min="1"
        value={maxPlayers}
        onChange={(event) => setMaxPlayers(event.target.value)}
        placeholder="Maximum number of players"
        required
      />

      <p>Maximum players: {maxPlayers}</p>

      <label>Organizer:</label>
      <input
        type="text"
        value={organizer}
        onChange={(event) => setOrganizer(event.target.value)}
        placeholder="Enter organizer name"
        required
      />

      <p>Organizer: {organizer}</p>

      <button type="submit">Create Match</button>
    </form>
  );
}

export default CreateMatchForm;
