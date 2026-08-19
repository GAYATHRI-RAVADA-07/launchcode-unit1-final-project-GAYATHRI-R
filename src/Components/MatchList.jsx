import MatchCard from "./MatchCard";

function MatchList({ games, onJoinMatch }) {
  return (
    <div>
      {games.map((game) => (
        <MatchCard key={game.id} match={game} onJoinMatch={onJoinMatch} />
      ))}
    </div>
  );
}

export default MatchList;
