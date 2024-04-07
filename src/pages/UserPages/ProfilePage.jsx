// HOOKS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//COMPONENTS
import ProfileOverview from "../../components/UserComponents/ProfileOverview";
import ProfileInformation from "../../components/UserComponents/ProfileDetails";
import { useNavbarContext } from "../../components/NavBarContext";
import ProfileEventCard from "../../components/UserComponents/Profile-EventCard.jsx";

// API
import getUser from "../../api/get-user.js";
import getEvents from "../../api/get-events.js";
import getEventMentors from "../../api/get-event-mentors.js";

function ProfilePage() {
  const { id } = useParams();
  const { isNavbarOpen } = useNavbarContext();
  const [selectedCity] = useState("");

  const [userData, setUserData] = useState();
  const [userError, setUserError] = useState();
  useEffect(() => {
    getUser(id)
      .then((user) => {
        setUserData(user);
      })
      .catch((error) => {
        setUserError(error);
      });
  }, []);

  // REGISTERED EVENTS

  const [eventMentors, setEventMentors] = useState();
  const [mentorsError, setMentorsError] = useState();
  useEffect(() => {
    getEventMentors(id)
      .then((mentors) => {
        setEventMentors(mentors);
      })
      .catch((error) => {
        setMentorsError(error);
      });
  }, []);

  const [eventData, setEventData] = useState();
  const [EventError, setEventError] = useState();
  useEffect(() => {
    getEvents()
      .then((event) => {
        setEventData(event);
      })
      .catch((error) => {
        setEventError(error);
      });
  }, []);

  let mentorApplications = [];
  eventMentors &&
    userData &&
    eventMentors.map((mentor) => {
      if (mentor.mentor_id == userData.id) {
        const addApplication = {
          id: mentor.id,
          user_id: userData.id,
          event_id: mentor.event_id,
          role_requested: mentor.role_requested,
          role_assigned: mentor.role_assigned,
        };
        mentorApplications.push(addApplication);
      }
    });

  let eventApplications = [];
  mentorApplications.length > 0 &&
    eventData &&
    mentorApplications.map((mentor) => {
      eventData.map((event) => {
        if (mentor.event_id == event.id) {
          const addEventApplication = {
            mentor_id: mentor.id,
            event_id: mentor.event_id,
            user_id: mentor.user_id,
            name: event.event_name,
            location: event.location,
            date: event.event_start_date,
            type: event.event_type,
            role_requested: mentor.role_requested,
            role_assigned: mentor.role_assigned,
          };
          eventApplications.push(addEventApplication);
        }
      });
    });

  return (
    <main
      className={`min-h-screen ${
        isNavbarOpen ? "ml-60" : "ml-20"
      } flex flex-col items-center`}
    >
      <div className="flex justify-center p-4 border-gray-300 mb-8 pt-16">
        <h1 className="font-bold text-5xl ">hey there! </h1>
        <img id="wavingIcon" src="/imgs/wavingIcon.png" className="w-14 h-14" />
      </div>
      {/* top half of page */}
      <section className="flex flex-col md:flex-row w-full max-w-4xl p-4">
        {/* LHS top half - image */}
        <div className="md:w-1/2 md:pr-32">
          {/* add section for profile photo - update buttons and image? */}
          <ProfileOverview />
        </div>
        {/* LHS top half - user details */}
        <div className="bg-gradient-to-b from-slate-100 to-stone-200 rounded hover:rounded-lg sm:w-2/3">
          <ProfileInformation />
        </div>
      </section>

      {/* bottom half - event cards */}
      <section className="w-full max-w-4xl text-center border-t p-4 border-gray-300 mt-4">
        <h1 className="font-bold text-2xl ">Your Upcoming Events</h1>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {eventApplications.map((event, index) => (
            <ProfileEventCard key={index} eventData={event} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
