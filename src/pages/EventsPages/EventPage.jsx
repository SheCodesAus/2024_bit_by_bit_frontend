// HOOKS
import { useParams } from "react-router-dom";
import useAllEvents from "../../hooks/use-events";

// COMPONENTS
import { useNavbarContext } from "../../components/NavBarContext";

function EventPage() {
  const { isNavbarOpen } = useNavbarContext();
  const { id } = useParams();
  console.log(id);

  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>
      <section className="border-b p-4 border-gray-300">
        <h1 className="font-bold">
          This is the Event page for event id = {id}{" "}
        </h1>
      </section>
    </main>
  );
}

export default EventPage;
