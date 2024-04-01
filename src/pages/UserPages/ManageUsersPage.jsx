// HOOKS
import { useState, useEffect } from "react";

// COMPONENTS
import ManageUserDetails from "../../components/UserComponents/manageUsers/ManageUsersDetails";
import ManageUserAccordion from "../../components/UserComponents/manageUserAccordion";

// ELEMENTS
import { useNavbarContext } from "../../components/NavBarContext";

// API
import useAllUsers from "../../hooks/use-all-users";

// DUMMY DATA
import { mockUserData } from "../../mock_user_data";
import { mockUserProcessData } from "../../mock_user_process_data";

function ManageUsersPage() {
  const { users } = useAllUsers();
  const { isNavbarOpen } = useNavbarContext();

  return (
    <main
      className={`min-h-screen ${
        isNavbarOpen ? "ml-60" : "ml-20"
      } flex flex-col justify-center px-4`}
    >
      <h1 className="text-2xl font-semibold mb-4 pt-16">Manage Users</h1>
      {/* 
      <section className="overflow-x-auto">
        <table className="w-full max-w-4xl mx-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Second Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact Number</th>
              <th className="px-4 py-2">Slack</th>
              <th className="px-4 py-2">LinkedIn</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody> */}
      {/* {mockUserData.map((item, index) => ( */}
      <ManageUserAccordion
        userData={mockUserData}
        processData={mockUserProcessData}
      />
      {/* ))} */}
      {/* </tbody>
        </table>
      </section> */}
    </main>
  );
}

export default ManageUsersPage;
