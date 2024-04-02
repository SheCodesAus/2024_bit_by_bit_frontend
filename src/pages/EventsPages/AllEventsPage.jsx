// HOOKS
import React, { useState } from "react";
import useAllEvents from "../../hooks/use-events";
import { useAuth } from "../../hooks/use-auth";
import { Link } from "react-router-dom";

// COMPONENTS
import { useNavbarContext } from "../../components/NavBarContext";
import EventCard from "../../components/GlobalElements/EventCard";
import buttonElement from "../../components/GlobalElements/Button";
// import ProtectedRoute from "../../components/UserComponents/ProtectedRoutes";

function AllEventsPage() {
  const { isNavbarOpen } = useNavbarContext();
  const [selectedCity, setSelectedCity] = useState("");
  const { events } = useAllEvents();
  const { auth, setAuth } = useAuth();
  const bannerPath = "/imgs/SCbanner4.jpg";

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
        <img id="bannerAllEvents" src={bannerPath} className="w-full h-96" />
        <div className="flex justify-center border-b p-4 border-gray-300 mb-4">
          <h1 className="font-bold text-5xl">SHE CODES EVENTS</h1>
        </div>
        <div className="flex justify-center space-x-2">
          {/* All Events Button */}
          <button
            onClick={() => setSelectedCity("")}
            className={`px-4 py-2 rounded ${selectedCity === "" ? "bg-orange-500 text-white" : "bg-purple-500 text-white"}`}
          >
            All
          </button>
          {/* City Filter buttons */}
          {["Brisbane", "Perth", "Sydney"].map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded ${selectedCity === city
                ? "bg-orange-500 text-white"
                : "bg-purple-500 text-white"
                }`}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      <section className="text-center border-b p-4 border-gray-300">
        {/* Restricted to only admin view for create event button */}
        {auth.token && (
          <>
            {auth.is_admin == true && (
              <Link
                to="/create-event"
                className="inline-flex w-full justify-center rounded-md px-3 py-2 bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto">
                Create New Event
              </Link>
            )}
          </>
        )}
        

        {/* TODO: create if statement for: if no events available, display text to say "XYZ" */}
        <div className="flex flex-row overflow-x-auto gap-4 pt-4">
          {filteredEvents.map((eventData) => (
            <EventCard key={eventData.id} eventData={eventData} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AllEventsPage;
