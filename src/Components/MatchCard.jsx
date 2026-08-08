function MatchCard({ match }) {
  return (
    <div>
      <h3>{match.sport} Match</h3>

      <p>Location: {match.location}</p>

      <p>Date: {match.date}</p>

      <p>Time: {match.time}</p>

      <p>Skill Level: {match.skillLevel}</p>

      <p>Players Needed: {match.playersNeeded}</p>

      <p>Maximum Players: {match.maxPlayers}</p>

      <p>Organizer: {match.organizer}</p>

      <button>Join Match</button>
    </div>
  );
}

export default MatchCard;
