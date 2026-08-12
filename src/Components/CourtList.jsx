import CourtCard from "./CourtCard";

function CourtList({ courts }) {
  return (
    <div>
      {courts.map((court) => (
        <CourtCard key={court.id} court={court} />
      ))}
    </div>
  );
}

export default CourtList;
