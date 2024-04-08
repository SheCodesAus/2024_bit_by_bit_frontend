// HOOKS
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// COMPONENTS
import ButtonElement from "../GlobalElements/Button";

// API
import putUpdateEventMentor from "../../api/put-update-event-mentor";
import getUser from "../../api/get-user";

function UpdateMentorAvailabilityForm({ mentorData }) {
  console.log("UPDATE EVENT MENTOR AVAILABILITY FORM mentorData: ", mentorData);
  const navigate = useNavigate();
  const { id } = useParams();
  const [mentorDetails, setMentorDetails] = useState(mentorData);
  const [mentorUsername, setMentorUsername] = useState(""); // State to store mentor's username
  const mentor_id = mentorData?.mentor_id;

  useEffect(() => {
    if (mentor_id) {
      getUser(mentor_id).then((user) => {
        setMentorUsername;
      });
    }
  });

  console.log("UPDATE EVENT MENTOR AVAILABILITY FORM id: ", id);
  console.log("UPDATE EVENT MENTOR AVAILABILITY FORM mentor_id: ", mentor_id);
  console.log(
    "UPDATE EVENT MENTOR AVAILABILITY FORM userDetails: ",
    mentorDetails
  );

  const handleChange = (event) => {
    const { id, checked } = event.target;
    setMentorDetails((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };
  const handleRoleRequestedChange = (event) => {
    const { id, value } = event.target;
    setMentorDetails((prevMentorDetails) => ({
      ...prevMentorDetails,
      [id]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updated = await putUpdateEventMentor(id, mentorDetails);
      if (updated) {
        navigate(`/events/`);
      } else {
        console.error("Failed to update mentor application.");
      }
    } catch (error) {
      console.error("Error updating mentor application:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <form className="max-w-4xl w-full">
        {/* SECTION - Mentor Application information. */}
        <section className="w-full mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-center pb-4 border-b border-orange-200">
            Mentor Application Information
          </h2>
          <p className="text-2xl font-semibold mb-2">
            Mentor: {mentorUsername}
          </p>
          {/* SECTION - ROLE DETAILS. */}
          <h3 className="py-2 font-semibold">Role Details:</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <h4
              htmlFor="role_requested"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Role Requested:
            </h4>
            <p>{mentorData?.role_requested}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <label
              htmlFor="role_assigned"
              className="block text-sm font-medium text-gray-700"
            >
              Assign role
            </label>
            <select
              id="role_assigned"
              name="role_assigned"
              onChange={handleRoleRequestedChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Unassigned">Select Role</option>
              <option value="Lead Mentor">Lead Mentor</option>
              <option value="Mentor">Mentor</option>
              <option value="Industry Participant">Industry Participant</option>
            </select>
          </div>
          {/* SECTION - ONBOARDING TASKS. */}
          <h3 className="py-2 font-semibold">Event Onboarding Tasks:</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* Details */}
            <div>
              <label
                htmlFor="event_onboarding_task_slack"
                className="block text-sm font-medium text-gray-700"
              >
                Slack
              </label>
              <input
                type="checkbox"
                name="event_onboarding_task_slack"
                id="event_onboarding_task_slack"
                onChange={handleChange}
                checked={mentorData?.event_onboarding_task_slack}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="event_onboarding_task_lmsinvite"
                className="block text-sm font-medium text-gray-700"
              >
                LMS invite
              </label>
              <input
                type="checkbox"
                name="event_onboarding_task_lmsinvite"
                id="event_onboarding_task_lmsinvite"
                onChange={handleChange}
                checked={mentorData?.event_onboarding_task_lmsinvite}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="event_onboarding_task_googlecalendarinvite"
                className="block text-sm font-medium text-gray-700"
              >
                Google calendar invite
              </label>
              <input
                type="checkbox"
                name="event_onboarding_task_googlecalendarinvite"
                id="event_onboarding_task_googlecalendarinvite"
                onChange={handleChange}
                checked={mentorData?.event_onboarding_task_googlecalendarinvite}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="event_onboarding_task_contract"
                className="block text-sm font-medium text-gray-700"
              >
                Contract provided?
              </label>
              <input
                type="checkbox"
                name="event_onboarding_task_contract"
                id="event_onboarding_task_contract"
                onChange={handleChange}
                checked={mentorData?.event_onboarding_task_contract}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="event_onboarding_task_bio"
                className="block text-sm font-medium text-gray-700"
              >
                Mentor bio provided?
              </label>
              <input
                type="checkbox"
                name="event_onboarding_task_bio"
                id="event_onboarding_task_bio"
                onChange={handleChange}
                checked={mentorData?.event_onboarding_task_bio}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="event_onboarding_task_reconfirmdates"
                className="block text-sm font-medium text-gray-700"
              >
                Dates reconfirmed?
              </label>
              <input
                type="checkbox"
                name="event_onboarding_task_reconfirmdates"
                id="event_onboarding_task_reconfirmdates"
                onChange={handleChange}
                checked={mentorData?.event_onboarding_task_reconfirmdates}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="event_onboarding_task_buildinginformation"
                className="block text-sm font-medium text-gray-700"
              >
                Building information provided?
              </label>
              <input
                type="checkbox"
                name="event_onboarding_task_buildinginformation"
                id="event_onboarding_task_buildinginformation"
                onChange={handleChange}
                checked={mentorData?.event_onboarding_task_buildinginformation}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="event_onboarding_task_createimageasset"
                className="block text-sm font-medium text-gray-700"
              >
                Image asset created?
              </label>
              <input
                type="checkbox"
                name="event_onboarding_task_createimageasset"
                id="event_onboarding_task_createimageasset"
                onChange={handleChange}
                checked={mentorData?.event_onboarding_task_createimageasset}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
          </div>

          {/* SECTION - OFFBOARDING TASKS. */}
          <h3 className="pt-8 pb-2 font-semibold">Event Offboarding Tasks:</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <label
                htmlFor="event_offboarding_task_feedbackrecieved"
                className="block text-sm font-medium text-gray-700"
              >
                Feedback recieved?
              </label>
              <input
                type="checkbox"
                name="event_offboarding_task_feedbackrecieved"
                id="event_offboarding_task_feedbackrecieved"
                onChange={handleChange}
                checked={mentorData?.event_offboarding_task_feedbackrecieved}
                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="event_offboarding_task_invoicesent"
                className="block text-sm font-medium text-gray-700"
              >
                Invoice Received?
              </label>
              <input
                type="checkbox"
                name="event_offboarding_task_invoicesent"
                id="event_offboarding_task_invoicesent"
                onChange={handleChange}
                checked={mentorData?.event_offboarding_task_invoicesent}
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

export default UpdateMentorAvailabilityForm;
