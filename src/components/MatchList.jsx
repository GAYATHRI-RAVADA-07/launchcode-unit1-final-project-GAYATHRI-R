import MatchCard from "./MatchCard";

function MatchList({ games, onJoinMatch }) {
  return (
    <div className="match-grid">
      {/* Render each match using the reusable MatchCard component */}
      {games.map((game) => (
        <MatchCard key={game.id} match={game} onJoinMatch={onJoinMatch} />
      ))}
    </div>
  );
}

export default MatchList;
