// HOOKS
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";

// DUMMY DATA
import { mockUserData } from "../../../mock_user_data";
// import { mockUserProcessData } from "../../mock_user_process_data";

// https://www.youtube.com/watch?v=IW_AYg3kUIY
// https://www.sitepoint.com/react-js-accordion-component/
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

function ManageUserDetails() {
  const items = document.querySelectorAll("#accordion .item .header");
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.closest(".item").classList.toggle("active");
    });
  });

  return (
    <>
      <section className="flex justify-center items-center h-screen bg-slate-600 text-white p-5">
        <div
          id="accordion"
          className="w-[50%] rounded-lg overflow-hidden bg-slate-800 flex flex-col gap-[1px]"
        >
          <div className="item active">
            <div className="header p-6 bg-slate-900 font-bold flex justify-between items-center cursor-pointer">
              <h2>HEADER</h2>
              <p>Subheading</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 activeIcon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inactiveIcon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
            <div className="content text-xl text-grey-300 transition-all duration-500">
              <p className="mb-5">THIS IS TEXT, PARA TEXT.</p>
            </div>
          </div>
        </div>

        <br />
      </section>
      <table className="w=[50%] ">
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
        {mockUserData.map((userData, key) => {
          return (
            <tbody key={key}>
              <tr>
                <td>{userData.first_name}</td>
                <td>{userData.last_name}</td>
                <td>{userData.email}</td>
                <td>{userData.contactNumber}</td>
                <td>{userData.slack}</td>
                <td>{userData.linkedIn}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default ManageUserDetails;
