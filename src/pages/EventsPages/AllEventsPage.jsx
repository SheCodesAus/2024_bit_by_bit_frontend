// HOOKS
import React, { useState } from "react";
import useEvents from "../../hooks/use-events";

// COMPONENTS
import { useNavbarContext } from "../../components/NavBarContext";
import EventCard from "../../components/GlobalElements/EventCard";
import buttonElement from "../../components/GlobalElements/Button";

function AllEventsPage() {
  const { isNavbarOpen } = useNavbarContext();
  const [selectedCity, setSelectedCity] = useState("");
  const { events } = useEvents();
  const bannerPath = "/imgs/banner3_img.jpg";

  // Example events data
  // const events = [
  //   {
  //     id: 1,
  //     program: "Event 1",
  //     date: "1/1/2024",
  //     city: "brisbane",
  //     time: "9am - 1pm",
  //   },
  //   {
  //     id: 2,
  //     program: "Event 2",
  //     date: "2/2/2024",
  //     city: "perth",
  //     time: "5:30 - 8:30pm",
  //   },
  //   {
  //     id: 3,
  //     program: "Event 1",
  //     date: "1/1/2024",
  //     city: "brisbane",
  //     time: "9am - 1pm",
  //   },
  //   {
  //     id: 4,
  //     program: "Event 2",
  //     date: "2/2/2024",
  //     city: "perth",
  //     time: "5:30 - 8:30pm",
  //   },
  //   {
  //     id: 5,
  //     program: "Event 1",
  //     date: "1/1/2024",
  //     city: "brisbane",
  //     time: "9am - 1pm",
  //   },
  //   {
  //     id: 6,
  //     program: "Event 2",
  //     date: "2/2/2024",
  //     city: "perth",
  //     time: "5:30 - 8:30pm",
  //   },
  //   {
  //     id: 7,
  //     program: "Event 1",
  //     date: "1/1/2024",
  //     city: "brisbane",
  //     time: "9am - 1pm",
  //   },
  //   {
  //     id: 8,
  //     program: "Event 2",
  //     date: "2/2/2024",
  //     city: "perth",
  //     time: "5:30 - 8:30pm",
  //   },
  //   {
  //     id: 9,
  //     program: "Event 1",
  //     date: "1/1/2024",
  //     city: "brisbane",
  //     time: "9am - 1pm",
  //   },
  //   {
  //     id: 10,
  //     program: "Event 2",
  //     date: "2/2/2024",
  //     city: "perth",
  //     time: "5:30 - 8:30pm",
  //   },
  // ];

  const filteredEvents = selectedCity
    ? events.filter(
      (event) => event.location.toLowerCase() === selectedCity.toLowerCase()
    )
    : events;

  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>

      {/* Adjust margin based on sidebar toggle */}
      <section className="border-b p-4 border-gray-300 pt-16">
        <img id="bannerAllEvents" src={bannerPath} />
        <div className="flex justify-center border-b p-4 border-gray-300 mb-4">
          <h1 className="font-bold text-5xl">SHE CODES EVENTS</h1>
        </div>
        <div className="flex justify-center space-x-2">
          {/* Filter buttons */}
          {["Brisbane", "Perth", "Sydney"].map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded ${selectedCity === city ? "bg-orange-500 text-white" : "bg-purple-500 text-white"
                }`}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      <section className="text-center border-b p-4 border-gray-300">
        {/* TODO: restrict to only admin view for create event button */}
        <button
          className="inline-flex w-full justify-center rounded-md px-3 py-2 bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto">
          Create New Event
        </button>
        {/* TODO: create if statement for: if no events available, display text to say "XYZ" */}
        <div className="flex justify-center overflow-x-auto gap-4 pt-4">
          {filteredEvents.map((eventData) => (
            <EventCard key={eventData.id} eventData={eventData} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AllEventsPage;
