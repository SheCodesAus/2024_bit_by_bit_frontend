// HOOKS

// COMPONENTS
import ManageUserAccordion from "../../components/UserComponents/manageUserAccordion";

// ELEMENTS
import { useNavbarContext } from "../../components/NavBarContext";

// API
import useAllUsers from "../../hooks/use-all-users";
import useUserProcess from "../../hooks/use-user-process";

// DUMMY DATA
import { mockUserData } from "../../mock_user_data";
import { mockUserProcessData } from "../../mock_user_process_data";

function ManageUsersPage() {
  const { users } = useAllUsers();
  const { userProcess } = useUserProcess();
  const { isNavbarOpen } = useNavbarContext();

  return (
    <main
      className={`min-h-screen ${
        isNavbarOpen ? "ml-60" : "ml-20"
      } flex flex-col justify-center px-4`}
    >
      <h1 className="text-2xl font-semibold mb-4 pt-16">Manage Users</h1>

      <ManageUserAccordion userData={users} processData={userProcess} />
    </main>
  );
}

export default ManageUsersPage;
