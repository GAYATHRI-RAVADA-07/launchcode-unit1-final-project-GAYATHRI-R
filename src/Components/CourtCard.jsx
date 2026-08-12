function CourtCard({ court }) {
  return (
    <div>
      <h3>{court.name}</h3>

      <p>Sport: {court.sport}</p>

      <p>Status: {court.status}</p>
    </div>
  );
}
export default CourtCard;
