// HOOKS
import React, { useState } from "react";

//COMPONENTS
import ProfileOverview from "../../components/UserComponents/ProfileOverview";
import ProfileInformation from "../../components/UserComponents/ProfileDetails";
import { useNavbarContext } from "../../components/NavBarContext";
import EventCard from "../../components/GlobalElements/EventCard";

function ProfilePage() {

  const { isNavbarOpen } = useNavbarContext();
  const [selectedCity, setSelectedCity] = useState("");

  // Example events data
  const events = [
    {
      id: 1,
      program: "Event 1",
      date: "1/1/2024",
      city: "brisbane",
      time: "9am - 1pm",
    },
  ];

  const filteredEvents = selectedCity
    ? events.filter(
      (event) => event.location.toLowerCase() === selectedCity.toLowerCase()
    )
    : events;

  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"} flex flex-col items-center`}>

      {/* top half of page */}
      <section className="flex flex-col md:flex-row w-full max-w-4xl p-4 pt-16">
        {/* LHS top half - image */}
        <div className="md:w-1/2 md:pr-32">
          {/* add section for profile photo - update buttons and image? */}
          <ProfileOverview />
        </div>
        {/* LHS top half - user details */}
        <div className="md:w-1/2 md:pl-4">
          <ProfileInformation />
        </div>
      </section>

      {/* bottom half - event cards */}
      <section className="w-full max-w-4xl text-center border-t p-4 border-gray-300 mt-4">
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {filteredEvents.map((eventData) => (
            <EventCard key={eventData.id} eventData={eventData} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
