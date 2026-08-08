import MatchCard from "./MatchCard";

function MatchList({ games }) {
  return (
    <div>
      <h2>Available Matches</h2>

      {games.map((game) => (
        <MatchCard key={game.id} match={game} />
      ))}
    </div>
  );
}

export default MatchList;
