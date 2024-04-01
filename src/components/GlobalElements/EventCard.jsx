// HOOKS
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

// COMPONENTS
import ButtonElement from "./Button";

// API
import postCreateEventMentor from "../../api/post-create-eventMentor";
import { Button } from "@chakra-ui/button";

function EventCard(props) {
  const navigate = useNavigate();

  const { eventData } = props;
  const { auth, setAuth } = useAuth();
  const eventLink = `/event/${eventData.id}`;
  const [eventMentorDetails, setEventMentorDetails] = useState({
    event_id: eventData.id,
    mentor_id: auth.user_id,
    approved: false,
    event_onboarding_task: {
      event_contract: false,
      slack_invite: false,
      google_calendar_invite: false,
      lms_invite: false,
      mentor_bio: false,
      mentor_photo: false,
      create_mentor_img_asset: false,
      reconfirm_dates: false,
      building_information: false,
    },
    event_offboarding_task: {
      invoice_sent: false,
      feedback_recieved: false,
    },
    role_requested: "",
    role_assigned: "",
    is_completed: false,
  });

  const handleRoleRequestedChange = (event) => {
    const { id, value } = event.target;
    setEventMentorDetails((prevEventMentorDetails) => ({
      ...prevEventMentorDetails,
      [id]: value,
    }));
  };

  const btnMessage = "Submit availability";
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("availability submitted for: ", eventData.event_name);
    if (
      eventMentorDetails.event_id &&
      eventMentorDetails.mentor_id &&
      role_requested
    ) {
      postCreateEventMentor(eventMentorDetails).then((newEventMentor) => {
        navigate(`/eventmentors/${newEventMentor.id}`);
      });
    }
  };

  return (
    <section
      className="event-card bg-white shadow-md p-8 rounded-lg flex-none"
      style={{ minWidth: "240px" }}
    >
      <Link to={eventLink}>
        <h3 className="font-bold">{eventData.event_type}</h3>
        <h4 className="font-bold">{eventData.event_name}</h4>
        <h3>
          {new Date(eventData.event_start_date).toLocaleDateString("en-GB")}
        </h3>
        <h3 className="font-bold">{eventData.location}</h3>
        <h3 className="font-bold">{eventData.time}</h3>
        <section className="py-2">
          <h4 className="font-bold">Attendee numbers</h4>
          <p className="font">{eventData.attendee_numbers}</p>
        </section>
      </Link>

      <div>
        <select
          id="role_requested"
          name="role_requested"
          onChange={handleRoleRequestedChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Role</option>
          <option value="lead_mentor">Lead Mentor</option>
          <option value="mentor">Mentor</option>
          <option value="industry_participant">Industry Participant</option>
        </select>
        <div className=" py-2">
          <Button
            message={btnMessage}
            btnClick={handleSubmit}
            className="inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
          > Submit Availability </Button>
        </div>
      </div>

      {/* TODO: link buttons to event id's */}
      {auth.token && (
        <>
          {auth.is_admin == true && (
            <div>
              <Link
                to="/event/:id/update"
                className="inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-2/5">
                Update
              </Link>
              <Link
                to="/event/:id/schedule"
                className="inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-2/5 mt-2">
                Schedule
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default EventCard;
