// HOOKS
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate, useParams } from "react-router-dom";
import useUserProcess from "../../hooks/use-user-process";


// COMPONENTS
import ButtonElement from "../GlobalElements/Button";

// API
import putUpdateUserProcess from "../../api/put-update-userprocess";

function UpdateUserProcessForm() {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const { id } = useParams();
    const { userprocess } = useUserProcess(id);
    const token = auth.token;
  

    const [userProcessDetails, setUserProcessDetails] = useState({
        user_onboarding_task_slack: false,
        user_onboarding_task_linkedin: false,
        user_onboarding_task_CodeofConduct: false,
        user_onboarding_task_tshirtsent: false,
        user_offboarding_task_feedbackrequested: false,
        user_offboarding_task_feedbackreceived: false,
        user_offboarding_task_tshirtreceived: false,
      });
      
      useEffect(() => {
        if (userprocess) {
          setUserProcessDetails({
            user_onboarding_task_slack: userprocess.user_onboarding_task_slack ?? false,
            user_onboarding_task_linkedin: userprocess.user_onboarding_task_linkedin ?? false,
            user_onboarding_task_CodeofConduct: userprocess.user_onboarding_task_CodeofConduct ?? false,
            user_onboarding_task_tshirtsent: userprocess.user_onboarding_task_tshirtsent ?? false,
            user_offboarding_task_feedbackrequested: userprocess.user_offboarding_task_feedbackrequested ?? false,
            user_offboarding_task_feedbackreceived: userprocess.user_offboarding_task_feedbackreceived ?? false,
            user_offboarding_task_tshirtreceived: userprocess.user_offboarding_task_tshirtreceived ?? false,
          });
        }
      }, [userprocess]);

    const handleChange = (event) => {
        const { id, checked } = event.target;
        setUserProcessDetails((prevState) => ({
          ...prevState,
          [id]: checked,
        }));
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const updated = await putUpdateUserProcess(userProcessDetails, id, token);
          if (updated) {
            navigate(`/users/manage/`);
          } else {
            console.error("Failed to update user process.");
          }
        } catch (error) {
          console.error("Error updating user process:", error);
        }
      };

  console.log(userProcessDetails.user_onboarding_task_slack)

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center py-8"
      >
        {/* SECTION - User process information. */}
        <section className="w-full mb-4">
          <h2 className="text-lg font-semibold mb-2">User Process Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Details */}
            <div>
            <label
                htmlFor="user_onboarding_task_slack"
                className="block text-sm font-medium text-gray-700"
            >
                Slack
            </label>
            <input
                type="checkbox"
                name="user_onboarding_task_slack"
                id="user_onboarding_task_slack"
                onChange={handleChange}
                checked={userProcessDetails.user_onboarding_task_slack}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div>
            <label
                htmlFor="user_onboarding_task_linkedin"
                className="block text-sm font-medium text-gray-700"
            >
                Linkedin
            </label>
            <input
                type="checkbox"
                name="user_onboarding_task_linkedin"
                id="user_onboarding_task_linkedin"
                onChange={handleChange}
                checked={userProcessDetails.user_onboarding_task_linkedin}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div>
            <label
                htmlFor="user_onboarding_task_CodeofConduct"
                className="block text-sm font-medium text-gray-700"
            >
                Code of Conduct
            </label>
            <input
                type="checkbox"
                name="user_onboarding_task_CodeofConduct"
                id="user_onboarding_task_CodeofConduct"
                onChange={handleChange}
                checked={userProcessDetails.user_onboarding_task_CodeofConduct}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
          </div>
        </section>
        <section>
          <ButtonElement message="Update user onboarding." btnClick={handleSubmit} />
        </section>
      </form>
    </main>
  );
}

export default UpdateUserProcessForm;
