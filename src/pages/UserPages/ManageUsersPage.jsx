// COMPONENTS
import ManageUserDetails from "../../components/UserComponents/manageUsers/ManageUsersDetails";

// DUMMY DATA
import { mockUserData } from "../../mock_user_data";

function ManageUsersPage() {
  return (
    <main>
      <h1>This is the Manage users page</h1>
      <table className="accordion">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Slack</th>
            <th>LinkedIn</th>
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
