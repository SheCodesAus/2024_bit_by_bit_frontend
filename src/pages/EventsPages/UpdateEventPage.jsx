import { useNavbarContext } from "../../components/NavBarContext";

import UpdateEventForm from "../../components/EventComponents/UpdateEventForm";

function UpdateEventPage() {

	const { isNavbarOpen } = useNavbarContext();

	return (
		<main className={`flex flex-col sm:flex-row min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>

			{/* Adjust margin based on sidebar toggle */}
			<section className="flex-1 flex justify-center items-center bg-white px-4 sm:w-3/5">
				<div className="w-full max-w-md">
					<UpdateEventForm />
				</div>
			</section>

			{/* RHS: image */}
			<section className="flex-1 sm:w-2/5 bg-purple-500">
				<img id="SCportrait3" src="/imgs/SCportrait3.jpg" className="w-full h-full object-cover" />
			</section>
		</main>
	);
}

export default UpdateEventPage;