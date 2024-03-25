import { useNavbarContext } from "../../components/NavBarContext";
import EventCard from "../../components/GlobalElements/EventCard";
import React from "react";

function AllEventsPage() {

  const { isNavbarOpen } = useNavbarContext();

	// Example events data
	const events = [
	{ program: 'Event 1', date: '1/1/2024', location: 'brisbane', time: '9am - 1pm' },
	{ program: 'Event 2', date: '2/2/2024', location: 'perth', time: '5:30 - 8:30pm' },
	{ program: 'Event 1', date: '1/1/2024', location: 'brisbane', time: '9am - 1pm' },
	{ program: 'Event 2', date: '2/2/2024', location: 'perth', time: '5:30 - 8:30pm' },
	{ program: 'Event 1', date: '1/1/2024', location: 'brisbane', time: '9am - 1pm' },
	{ program: 'Event 2', date: '2/2/2024', location: 'perth', time: '5:30 - 8:30pm' },
	{ program: 'Event 1', date: '1/1/2024', location: 'brisbane', time: '9am - 1pm' },
	{ program: 'Event 2', date: '2/2/2024', location: 'perth', time: '5:30 - 8:30pm' },
	{ program: 'Event 1', date: '1/1/2024', location: 'brisbane', time: '9am - 1pm' },
	{ program: 'Event 2', date: '2/2/2024', location: 'perth', time: '5:30 - 8:30pm' },
	];

  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>
      {/* Adjust margin based on sidebar toggle */}
      <section className="border-b p-4 border-gray-300">
		<div>
			<h1>Events Page</h1>
			<p>enter in some text about the event page here</p>
		</div>
		<div>
      		{/* buttons for filtering events by city go here */}			
		</div>
      </section>
	  <section className="border-b p-4 border-gray-300">
		<div className="flex overflow-x-auto gap-4">
			{events.map(eventData => (
			<EventCard key={eventData.id} eventData={eventData} />
			))}
		</div>
	  </section>
    </main>
  );
}

export default AllEventsPage;