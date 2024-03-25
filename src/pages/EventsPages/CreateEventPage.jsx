// COMPONENTS
import CreateEventForm from "../../components/EventComponents/CreateEventForm";
import { useNavbarContext } from "../../components/NavBarContext";

function CreateEventPage() {

  const { isNavbarOpen } = useNavbarContext();

  return (
    <main className={`flex min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>
      {/* Adjust margin based on sidebar toggle */}
      <section className="w-3/5 flex justify-center items-center bg-white">
        <div className="w-4/5">
          <CreateEventForm />
        </div>
      </section>

      {/* RHS: image */}
      <section 
      className="w-2/5 bg-purple-500">
      </section>
    </main>
  );
}

export default CreateEventPage;