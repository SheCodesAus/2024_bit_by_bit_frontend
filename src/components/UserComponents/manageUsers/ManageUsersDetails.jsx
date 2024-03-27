// HOOKS
import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useAuth } from "../../../hooks/use-auth";

// // DUMMY DATA
// import { mockUserData } from "../../../mock_user_data";
// import { mockUserProcessData } from "../../mock_user_process_data";

// https://www.youtube.com/watch?v=IW_AYg3kUIY
// https://www.sitepoint.com/react-js-accordion-component/
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

function ManageUserDetails(item) {
  console.log(item);
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion bg-slate-200">
      <div className="accordian-item">
        <tbody
          className="accordian-header bg-slate-500"
          onClick={() => setIsActive(!isActive)}
        >
          <tr>
            <td>{item.item.first_name}</td>
            <td>{item.item.last_name}</td>
            <td>{item.item.email}</td>
            <td>{item.item.contactNumber}</td>
            <td>{item.item.slack}</td>
            <td>{item.item.linkedIn}</td>
          </tr>
          <div>{isActive ? "-" : "+"}</div>

          {isActive && (
            {item.item.user_process((process, index)=>(
            <div className="accordian-content" key={index}>
              <tr>
                <td>{process.}</td>
                <td>YES</td>
              </tr>
            </div>
            ))}
          )}
        </tbody>
      </div>
    </section>
  );
}

// {

//         <br />
//       </section>
//       <table className="w=[50%] ">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Second Name</th>
//             <th>Email</th>
//             <th>Contact Number</th>
//             <th>Slack</th>
//             <th>LinkedIn</th>
//           </tr>
//         </thead>
//         {mockUserData.map((userData, key) => {
//           return (
//             <tbody key={key}>
//               <tr>
//                 <td>{userData.first_name}</td>
//                 <td>{userData.last_name}</td>
//                 <td>{userData.email}</td>
//                 <td>{userData.contactNumber}</td>
//                 <td>{userData.slack}</td>
//                 <td>{userData.linkedIn}</td>
//               </tr>
//             </tbody>
//           );
//         })}
//       </table>
// }

export default ManageUserDetails;
