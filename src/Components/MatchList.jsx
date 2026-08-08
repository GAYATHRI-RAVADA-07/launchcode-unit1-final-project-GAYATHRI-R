import MatchCard from "./MatchCard";
import { matches } from "../mockdata/matches";

function MatchList() {
  return (
    <div>
      <h2>Available Matches</h2>

      {matches.map((game) => (
        <MatchCard key={game.id} match={game} />
      ))}
    </div>
  );
}

export default MatchList;
