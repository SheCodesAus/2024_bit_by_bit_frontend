import { useNavbarContext } from "../../components/NavBarContext";

function AllEventsPage() {

  const { isNavbarOpen } = useNavbarContext();

  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>
      {/* Adjust margin based on sidebar toggle */}
      <section className="border-b p-4 border-gray-300">
		<h1>Events Page</h1>
		<p>enter in some text about the event page here</p>
      </section>
	  <section className="border-b p-4 border-gray-300">
		<p>cards will go here in this section</p>
	  </section>
    </main>
  );
}

export default AllEventsPage;