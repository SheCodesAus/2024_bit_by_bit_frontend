import { useNavbarContext } from "../../components/NavBarContext";

import UpdateEventForm from "../../components/EventComponents/UpdateEventForm";

function UpdateEventPage() {

	const { isNavbarOpen } = useNavbarContext();

	return (
		<main className={`flex flex-col items-center justify-center min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>

			<section className="border-b p-4 border-gray-300 flex flex-col items-center pt-16">
				<h1 className="text-4xl font-bold text-slate-800 text-center mb-5">UPDATE EVENT DETAILS</h1>
			</section>

			<section className="border-b w-2/3 border-gray-300 flex flex-col items-center">
				<UpdateEventForm />
			</section>
		</main>
	);
}

export default UpdateEventPage;