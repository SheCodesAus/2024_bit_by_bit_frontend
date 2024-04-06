// HOOKS
import { useEffect, useState } from "react";
import useUser from "../../hooks/use-user.js";
import { useAuth } from "../../hooks/use-auth.js";
import { useParams } from "react-router-dom";

//COMPONENTS
import ProfileOverview from "../../components/UserComponents/ProfileOverview";
import ProfileInformation from "../../components/UserComponents/ProfileDetails";
import { useNavbarContext } from "../../components/NavBarContext";
// import EventCard from "../../components/GlobalElements/EventCard";
import ProfileEventCard from "../../components/UserComponents/Profile-EventCard.jsx";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

// API
import getUser from "../../api/get-user.js";
import getEvents from "../../api/get-events.js";
import getUserProcess from "../../api/get-user-process.js";
import getEventMentors from "../../api/get-event-mentors.js";

function ProfilePage() {
  const { auth } = useAuth();
  const { user } = useUser(auth);
  const { token } = useUser(auth.token);
  const { id } = useParams();
  console.log("user: ", user);
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

  console.log("mentorApplications after push: ", mentorApplications);

  let eventApplications = [];
  mentorApplications.length > 0 &&
    eventData &&
    mentorApplications.map((mentor) => {
      console.log("map step 1");
      eventData.map((event) => {
        console.log("map step 2");
        if (mentor.event_id == event.id) {
          console.log("map if fnc");
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

  console.log("eventApplications after push: ", eventApplications);

  const [userProcess, setUserProcess] = useState();
  const [processError, setProcessError] = useState();

  useEffect(() => {
    getUserProcess(id, token)
      .then((processes) => {
        setUserProcess(processes);
      })
      .catch((error) => {
        setProcessError(error);
      });
  }, [id, token]);
  console.log("userProcess: ", userProcess);

  const filteredEvents = selectedCity
    ? events.filter(
        (event) => event.location.toLowerCase() === selectedCity.toLowerCase()
      )
    : events;

  // const userProcess = {
  //   user_onboarding_task: {
  //     "Slack provided": false,
  //     "LinkedIn provided": true,
  //     "Mentor code of conduct provided": false,
  //     "Mentor t-shirt provided": false,
  //   },
  //   user_offboarding_task: {
  //     "Feedback asked for": true,
  //     "Feedback recieved": true,
  //     "Mentor t-shirt returned": false,
  //   },
  // };

  // const [isOnboardingChecked, setIsOnboardingChecked] = useState({
  //   ...userProcess.user_onboarding_task,
  // });

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

      {/* <section className="max-w-4xl mx-auto text-center border-t p-4 border-gray-300 mt-4">
        <h2 className="font-bold text-xl pb-4">Mentor Onboarding Tasks</h2>
        <div className="grid grid-rows-4 gap-4 text-center">
          <div>
            <ul>Slack username provided</ul>
            {userProcess?.user_onboarding_task_slack && (
              <CheckBadgeIcon className="w-6 h-6" />
            )}
          </div>
          <div>
            <ul>LinkedIn URL Provided</ul>
            {userProcess?.user_onboarding_task_linkedin && (
              <CheckBadgeIcon className="w-6 h-6" />
            )}
          </div>
          <div>
            <ul>Read the Code of Conduct</ul>
            {userProcess?.user_onboarding_task_CodeofConduct && (
              <CheckBadgeIcon className="w-6 h-6" />
            )}
          </div>
          <div>
            <ul>Mentor t-shirt Received</ul>
            {userProcess?.onboard_process.user_onboarding_task_tshirtsent && (
              <CheckBadgeIcon className="w-6 h-6" />
            )}
          </div>
        </div>
      </section> */}

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
