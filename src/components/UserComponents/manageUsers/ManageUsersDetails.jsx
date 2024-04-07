// HOOKS
import { useState } from "react";

function ManageUserDetails(item) {
  const [isActive, setIsActive] = useState(false);

  const userProcess = {
    user_onboarding_task: {
      "Slack provided": item.item.user_process.user_onboarding_task_slack,
      "LinkedIn provided": item.item.user_process.user_onboarding_task_linkedIn,
      "Mentor Code of Conduct provided":
        item.item.user_process.user_onboarding_CodeofConduct,
      "Mentor t-shirt provided":
        item.item.user_process.user_offboarding_tshirtsent,
    },
    user_offboarding_task: {
      "Feedback asked for":
        item.item.user_process.user_offboarding_feedbackrequested,
      "Feedback recieved":
        item.item.user_process.user_offboarding_feedbackrecieved,
      "Mentor t-shirt returned":
        item.item.user_process.user_offboarding_tshirtrecieved,
    },
  };
  const [isOnboardingChecked, setIsOnboardingChecked] = useState({
    ...userProcess.user_onboarding_task,
  });

  return (
    <>
      <tbody
        className="accordian-header bg-slate-200"
        onClick={() => setIsActive(!isActive)}
      >
        {/* <> */}
        <tr>
          <td>{item.item.first_name}</td>
          <td>{item.item.last_name}</td>
          <td>{item.item.email}</td>
          <td>{item.item.contact_number}</td>
          <td>{item.item.slack}</td>
          <td>{item.item.linkedIn}</td>
          <td>{isActive ? "-" : "+"}</td>
        </tr>
      </tbody>

      <>
        {isActive && (
          <tr className="accordian-content  bg-slate-300">
            <td>
              <label>Mentor t-shirt provided?</label>
              <input
                type="checkbox"
                checked={isOnboardingChecked["Mentor t-shirt provided"]}
              />
            </td>
            <td>
              <label>Slack link Provided?</label>
              <input
                type="checkbox"
                checked={isOnboardingChecked["Slack provided"]}
              />
            </td>
            <td>
              <label>LinkedIn link Provided?</label>
              <input
                type="checkbox"
                checked={isOnboardingChecked["LinkedIn provided"]}
              />
            </td>
            <td>
              <label>Mentor Code of Conduct provided?</label>
              <input
                type="checkbox"
                checked={
                  isOnboardingChecked["Mentor Code of Conduct provided "]
                }
              />
            </td>
          </tr>
        )}
        ;
      </>
    </>
  );
}

export default ManageUserDetails;
