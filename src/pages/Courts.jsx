import CourtList from "../Components/CourtList";
import { courts } from "../mockdata/courts";

function Courts() {
  return (
    <main className="courts-page">
      <h1>Courts</h1>
      <CourtList courts={courts} />
    </main>
  );
}

export default Courts;
