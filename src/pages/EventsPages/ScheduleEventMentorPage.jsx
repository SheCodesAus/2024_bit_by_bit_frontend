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
      <h1 className="text-2xl font-semibold mb-4 pt-16">Schedule Mentors</h1>

      <ScheduleMentorAccordion
        eventData={eventData}
        userData={users}
        mentorData={eventData?.mentors}
      />
    </main>
  );
}

export default ScheduleEventMentorPage;
