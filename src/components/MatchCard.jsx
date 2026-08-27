import Button from "./Button";
function MatchCard({ match, onJoinMatch }) {
  let buttonText = "Join Match";

  if (match.joined) {
    buttonText = "Joined!";
  } else if (match.currentPlayers >= match.maxPlayers) {
    buttonText = "Match Full";
  }
  return (
    <div className="match-card">
      <h3>{match.sport}</h3>

      <p>Location: {match.location}</p>

      <p>Date: {match.date}</p>

      <p>Time: {match.time}</p>

      <p>Skill Level: {match.skillLevel}</p>

      <p>
        Players: {match.currentPlayers} / {match.maxPlayers}
      </p>

      <p>Organizer: {match.organizer}</p>

      <Button
        className="button-full"
        onClick={() => onJoinMatch(match.id)}
        disabled={match.joined || match.currentPlayers >= match.maxPlayers}
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default MatchCard;
