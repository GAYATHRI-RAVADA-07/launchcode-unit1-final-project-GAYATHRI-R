function CourtCard({ court }) {
  return (
    <div className="court-card">
      <h3>{court.name}</h3>

      <p>Sport: {court.sport}</p>

      <p>Location: {court.location}</p>

      <p>
        Status:{" "}
        <span className={court.status === "Available" ? "available" : "booked"}>
          {court.status}
        </span>
      </p>
    </div>
  );
}
export default CourtCard;
