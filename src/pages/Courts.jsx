import CourtList from "../components/CourtList";
import { courts } from "../mockdata/courts";

function Courts() {
  return (
    <main className="courts-page">
      <CourtList courts={courts} />
    </main>
  );
}

export default Courts;
