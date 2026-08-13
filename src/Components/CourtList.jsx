import CourtCard from "./CourtCard";

function CourtList({ courts }) {
  return (
    <div className="court-grid">
      {courts.map((court) => (
        <CourtCard key={court.id} court={court} />
      ))}
    </div>
  );
}

export default CourtList;
