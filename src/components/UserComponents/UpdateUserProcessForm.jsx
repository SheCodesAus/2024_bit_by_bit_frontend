// HOOKS
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate, useParams } from "react-router-dom";
// import useUserProcess from "../../hooks/use-user-process";


// COMPONENTS
import ButtonElement from "../GlobalElements/Button";

// API
import getUserProcess from "../../api/get-user-process";
import putUpdateUserProcess from "../../api/put-update-userprocess";
import putUpdateUser from "../../api/put-update-user";

function UpdateUserProcessForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const { id } = useParams();
  const token = auth.token;
  const [userProcessError, setUserProcessError] = useState();
  const [userProcessDetails, setUserProcessDetails] = useState({});

  useEffect(() => {
    getUserProcess(id, token)
      .then((process) => {
        setUserProcessDetails(process);
      })
      .catch((error) => {
        setUserProcessError(error);
      });
  }, []);

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


  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center py-8"
      >
        {/* SECTION - User process information. */}
        <section className="w-full mb-4">
          <h2 className="text-lg font-semibold mb-2">User Process Information</h2>
          <p className="text-lg font-semibold mb-2">Username: {auth.username}</p>
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
            <div>
            <label
                htmlFor="user_onboarding_task_tshirtsent"
                className="block text-sm font-medium text-gray-700"
            >
                Mentor tshirt sent
            </label>
            <input
                type="checkbox"
                name="user_onboarding_task_tshirtsent"
                id="user_onboarding_task_tshirtsent"
                onChange={handleChange}
                checked={userProcessDetails.user_onboarding_task_tshirtsent}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
          </div>
          <div>
            <label
                htmlFor="user_offboarding_task_feedbackrequested"
                className="block text-sm font-medium text-gray-700"
            >
                Feedback Requested
            </label>
            <input
                type="checkbox"
                name="user_offboarding_task_feedbackrequested"
                id="user_offboarding_task_feedbackrequested"
                onChange={handleChange}
                checked={userProcessDetails.user_offboarding_task_feedbackrequested}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div>
            <label
                htmlFor="user_offboarding_task_feedbackreceived"
                className="block text-sm font-medium text-gray-700"
            >
                Feedback Received
            </label>
            <input
                type="checkbox"
                name="user_offboarding_task_feedbackreceived"
                id="user_offboarding_task_feedbackreceived"
                onChange={handleChange}
                checked={userProcessDetails.user_offboarding_task_feedbackreceived}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
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
