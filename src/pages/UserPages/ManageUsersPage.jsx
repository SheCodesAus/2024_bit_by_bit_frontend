// HOOKS
import { useEffect } from "react";

// COMPONENTS
import ManageUserAccordion from "../../components/UserComponents/manageUserAccordion";

// ELEMENTS
import { useNavbarContext } from "../../components/NavBarContext";

// API

import getAllUserProcesses from "../../api/get-all-user-processes";
import getUsers from "../../api/get-users";
import { useState } from "react";

// DUMMY DATA
// import { mockUserData } from "../../mock_user_data";
// import { mockUserProcessData } from "../../mock_user_process_data";

function ManageUsersPage() {
  const { isNavbarOpen } = useNavbarContext();
  // const { users } = useAllUsers();
  const [users, setUsers] = useState();
  const [userProcess, setUserProcess] = useState();
  console.log("users: ", users);
  console.log("userProcess:22 ", userProcess);

  const [processError, setProcessError] = useState();
  const [userError, setUserError] = useState();

  useEffect(() => {
    getAllUserProcesses()
      .then((processes) => {
        setUserProcess(processes);
      })
      .catch((error) => {
        setProcessError(error);
      });
  }, []);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        setUserError(error);
      });
  }, []);

  return (
    <main
      className={`min-h-screen ${
        isNavbarOpen ? "ml-60" : "ml-20"
      } flex flex-col justify-center px-4`}
    >
      <h1 className="text-2xl font-semibold mb-4 pt-16">Manage Users</h1>
      {users && userProcess && (
        <ManageUserAccordion userData={users} processData={userProcess} />
      )}
    </main>
  );
}

export default ManageUsersPage;
