// HOOKS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// COMPONENTS
import ScheduleMentorAccordion from "../../components/EventComponents/ScheduleMentorAccordion";

// ELEMENTS
import { useNavbarContext } from "../../components/NavBarContext";

// API
import useAllUsers from "../../hooks/use-all-users";
import getEvent from "../../api/get-event";

function ScheduleEventMentorPage() {
  const { id } = useParams();
  const { users } = useAllUsers();
  const [eventData, setEventData] = useState();
  const [eventError, setEventError] = useState();

  const { isNavbarOpen } = useNavbarContext();

  useEffect(() => {
    getEvent(id)
      .then((event) => {
        setEventData(event);
      })
      .catch((error) => {
        setEventError(error);
      });
  }, []);

  return (
    <main
      className={`min-h-screen ${
        isNavbarOpen ? "ml-60" : "ml-20"
      } flex flex-col justify-center px-4`}
    >
      <section className="flex flex-col items-center pt-16">
        <img
          id="SCimage9"
          src="/imgs/SCimage4.jpeg"
          className="w-full px-4 h-auto object-cover "
        />
        <div className="flex justify-center p-4 border-gray-300 mb-4">
          <h1 className="font-bold text-5xl">SCHEDULE MENTORS</h1>
        </div>
        <div className="flex flex-col justify-center w-3/4 space-x-2">
          <h3 className="text-center border-y border-gray-300 px-4 py-1 text-l mb-4">
            Click on the drop down arrow at the end of each row to expand the
            user onboarding/offboarding information
          </h3>
        </div>
      </section>
      <section className="flex flex-col items-center pb-4 border-gray-200">
        <h3 className="font-bold"> {eventData?.event_name}</h3>
        <h4 className="font-bold"> {eventData?.event_type}</h4>
        <h3>
          {" "}
          {new Date(eventData?.event_start_date).toLocaleDateString("en-GB")}
        </h3>
      </section>

      <ScheduleMentorAccordion
        eventData={eventData}
        userData={users}
        mentorData={eventData?.mentors}
      />
    </main>
  );
}

export default ScheduleEventMentorPage;
