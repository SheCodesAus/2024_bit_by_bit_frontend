// HOOKS
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate, useParams } from "react-router-dom";
// import useUserProcess from "../../hooks/use-user-process";



// COMPONENTS
import ButtonElement from "../GlobalElements/Button";
import { useNavbarContext } from "../../components/NavBarContext";

// API
import getUserProcess from "../../api/get-user-process";
import putUpdateUserProcess from "../../api/put-update-userprocess";
import getUser from "../../api/get-user";
// import putUpdateUser from "../../api/put-update-user";

function UpdateUserProcessForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const { id } = useParams();
  const token = auth.token;
  const [userProcessError, setUserProcessError] = useState();
  const [userProcessDetails, setUserProcessDetails] = useState({});
  const [mentorUsername, setMentorUsername] = useState(""); // State to store mentor's username
  const { isNavbarOpen } = useNavbarContext();


  useEffect(() => {
    getUserProcess(id, token)
      .then((process) => {
        setUserProcessDetails(process);
        // After getting user process details, fetch the mentor's username
        if (process.mentor) {
          getUser(process.mentor) // Assuming process.mentor is the id of the mentor user
            .then((mentorData) => {
              setMentorUsername(mentorData.username);
            })
            .catch((error) => {
              console.error("Error fetching mentor data:", error);
            });
        }
      })
      .catch((error) => {
        setUserProcessError(error);
      });
  }, [id, token]);

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
    <main className="flex flex-col items-center justify-center w-full">
      <form onSubmit={handleSubmit} className="max-w-4xl w-full">

        {/* SECTION - User process information. */}
        <section className="w-full mb-4">

          <h2 className="text-2xl font-semibold mb-4 text-center pb-4 border-b border-orange-200">User Process Information</h2>
          <p className="text-4xl font-semibold mb-2">Mentor: {mentorUsername}</p>
          <h3 className="py-2 font-semibold">Onboarding Tasks:</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

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
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
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
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
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
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
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
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
          </div>

          <h3 className="pt-8 pb-2 font-semibold">Offboarding Tasks:</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
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
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center w-full pt-4 border-t border-orange-200">
          <ButtonElement message="Update Checklist" btnClick={handleSubmit} />
        </section>
      </form>
    </main>
  );
}

export default UpdateUserProcessForm;
