// HOOKS

// COMPONENTS
import ScheduleMentorAccordion from "../../components/EventComponents/ScheduleMentorAccordion";

// ELEMENTS
import { useNavbarContext } from "../../components/NavBarContext";

// API
import useAllEvents from "../../hooks/use-events";
import useAllUsers from "../../hooks/use-all-users";
import useUserProcess from "../../hooks/use-user-process";

// DUMMY DATA
import { mockUserData } from "../../mock_user_data";
import { mockUserProcessData } from "../../mock_user_process_data";

function ScheduleEventMentorPage() {
  const { events } = useAllEvents();
  const { users } = useAllUsers();
  const { userProcess } = useUserProcess();
  const { isNavbarOpen } = useNavbarContext();

  return (
    <main
      className={`min-h-screen ${
        isNavbarOpen ? "ml-60" : "ml-20"
      } flex flex-col justify-center px-4`}
    >
      <h1 className="text-2xl font-semibold mb-4 pt-16">Schedule Mentors</h1>

      <ScheduleMentorAccordion
        eventData={events}
        userData={users}
        processData={userProcess}
      />
    </main>
  );
}

export default ScheduleEventMentorPage;
