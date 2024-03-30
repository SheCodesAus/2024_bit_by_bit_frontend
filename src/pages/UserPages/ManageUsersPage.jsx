// COMPONENTS
import { useState, useEffect } from "react";

import ManageUserDetails from "../../components/UserComponents/manageUsers/ManageUsersDetails";

// API
import useAllUsers from "../../hooks/use-all-users";

// DUMMY DATA
import { mockUserData } from "../../mock_user_data";

function ManageUsersPage() {
  const { users } = useAllUsers();
  // const [isActive, setIsActive] = useState(false);

  return (
    <main>
      <h1>This is the Manage users page</h1>
      <table className="accordion">
        <thead className="accordian-item">
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Slack</th>
            <th>LinkedIn</th>
            <th></th>
          </tr>
        </thead>

        {mockUserData.map((item, index) => (
          <ManageUserDetails item={item} key={index} />
        ))}
      </table>
    </main>
  );
}

export default ManageUsersPage;
