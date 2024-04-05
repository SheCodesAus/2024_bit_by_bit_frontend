// HOOKS
import { useEffect, useState } from "react";
import useUser from "../../hooks/use-user.js";
import { useAuth } from "../../hooks/use-auth.js";
import { useParams } from "react-router-dom";

//COMPONENTS
import ProfileOverview from "../../components/UserComponents/ProfileOverview";
import ProfileInformation from "../../components/UserComponents/ProfileDetails";
import { useNavbarContext } from "../../components/NavBarContext";
import EventCard from "../../components/GlobalElements/EventCard";

// API
import getUserProcess from "../../api/get-user-process.js";

function ProfilePage() {
  const { auth } = useAuth();
  const { user } = useUser(auth);
  const { token } = useUser(auth.token);
  const { id } = useParams();
  console.log("user: ", user);
  const { isNavbarOpen } = useNavbarContext();
  const [selectedCity] = useState("");

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
      className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"
        } flex flex-col items-center`}
    >
      <div className="flex justify-center p-4 border-gray-300 mb-8 pt-16">
        <h1 className="font-bold text-5xl ">hey there, {user?.username}!</h1>
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
        <div className="bg-gradient-to-b from-slate-100 to-stone-200 rounded hover:rounded-lg ">
          <ProfileInformation />
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center border-t p-4 border-gray-300 mt-4">
        <h2 className="font-bold text-xl pb-4">Mentor Onboarding Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <input
              type="checkbox"
              checked={userProcess?.user_onboarding_task_slack}
              className="w-6 h-6 block mb-2"
              disabled={!auth.is_admin}
            />
            <label>Slack username provided</label>
          </div>
          <div className="flex flex-col items-center justify-center">
            <input
              type="checkbox"
              checked={userProcess?.user_onboarding_task_linkedin}
              className="w-6 h-6 block mb-2"
              readOnly={!auth.is_admin}
            />
            <label>LinkedIn URL Provided</label>
          </div>
          <div className="flex flex-col items-center justify-center">
            <input
              type="checkbox"
              checked={userProcess?.user_onboarding_task_CodeofConduct}
              className="w-6 h-6 block mb-2"
              readOnly={!auth.is_admin}
            />
            <label>Read the Code of Conduct</label>
          </div>
          <div className="flex flex-col items-center justify-center">
            <input
              type="checkbox"
              checked={userProcess?.user_onboarding_task_tshirtsent}
              className="w-6 h-6 block mb-2"
              readOnly={!auth.is_admin}
            />
            <label>Mentor t-shirt Received</label>
          </div>
        </div>
      </section>

      {/* bottom half - event cards */}
      <section className="w-full max-w-4xl text-center border-t p-4 border-gray-300 mt-4">
        <h1 className="font-bold text-2xl ">Your Upcoming Events</h1>
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
