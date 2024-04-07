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
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"} flex flex-col justify-center px-4`}>

      <style>
        {`::-webkit-scrollbar {width: 8px;} ::-webkit-scrollbar-track {background: #ffffff;} ::-webkit-scrollbar-thumb {background-color: orange; border-radius: 10px; border: 2px solid #ffffff;}`}
      </style>

      <section className="flex flex-col items-center pt-16">
        <img
          id="SCimage9"
          src="/imgs/SCimage3.jpeg"
          className="w-full px-4 h-auto object-cover "
        />
        <div className="flex justify-center p-4 border-gray-300 mb-4">
          <h1 className="font-bold text-5xl">MANAGE USERS</h1>
        </div>

        <div className="flex flex-col justify-center w-3/4 space-x-2">
          <h3 className="text-center border-y border-gray-300 px-4 py-1 text-l mb-4">
            Click on the drop down arrow at the end of each row to expand the
            user onboarding/offboarding information
          </h3>
        </div>
      </section>

      {users && userProcess && (
        <ManageUserAccordion userData={users} processData={userProcess} />
      )}
    </main>
  );
}

export default ManageUsersPage;
