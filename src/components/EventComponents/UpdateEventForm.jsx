// HOOKS
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate, useParams } from "react-router-dom";
import useEvent from "../../hooks/use-event";

// API
import putUpdateEvent from "../../api/put-update-event";

// COMPONENTS
import ButtonElement from "../GlobalElements/Button";

function UpdateEventForm() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { id } = useParams();
  console.log("event id = ", id);
  const { event } = useEvent(id);
  const token = auth.token;

  const [eventDetails, setEventDetails] = useState({
    event_type: "",
    event_name: "",
    event_start_date: "",
    event_end_date: "",
    attendee_numbers: "",
    location: location,
    is_open: "true",
    date_created: "",
    owner: "",
  });

  useEffect(() => {
    if (event) {
      setEventDetails({
        event_type: event.event_type ?? "",
        event_name: event.event_name ?? "",
        event_start_date: event.event_start_date ?? "",
        event_end_date: event.event_end_date ?? "",
        attendee_numbers: event.attendee_numbers ?? "",
        location: event.location ?? "",
        is_open: event.is_open ?? "",
      });
    }
  }, [event]);

  console.log(eventDetails);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setEventDetails((prevEventDetails) => ({
      ...prevEventDetails,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await putUpdateEvent(token, id, eventDetails);
    if (updated) {
      navigate("/events");
    } else {
      console.error("Failed to update event");
    }
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center py-8"
      >
        {/* SECTION  - Event Information */}
        <section className="w-full mb-4">
          {/* HEADER */}
          <section className="border-b p-4 border-gray-300">
            <h2 className="text-lg font-semibold mb-2">Event Information</h2>
            <p className="mb-3 ">
              Ensure all event details are clear enough that a new mentor will
              understand the process! When organising events with multiple
              modules, like the Plus Program, create an event per module so that
              the mentors can register for the event that they have the
              strongest language skills.
            </p>
          </section>

          {/* EVENT TYPE */}
          <section className="mt-5">
            <label htmlFor="event_type">Event Type</label>
            <select
              name="event_type"
              value={eventDetails.event_type}
              onChange={handleChange}
              id="event_type"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Select one">Select one</option>
              <option value="One day workshop">One day workshop</option>
              <option value="Plus Program">Plus Program</option>
              <option value="Flash">Flash</option>
              <option value="Female Founders">Female Founders</option>
            </select>
          </section>

          {/* EVENT NAME */}
          <section>
            <label htmlFor="event_name">Event Name</label>
            <input
              type="text"
              name="event_name"
              value={eventDetails.event_name}
              placeholder="Epic Event Name"
              onChange={handleChange}
              id="event_name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </section>

          {/* FUTURE DEVELOPMENT: EVENT LANGUAGE */}
          {/* <section>
            <label htmlFor="event_language">Event Language</label>
            <select
              name="event_language"
              value={eventDetails.event_language}
              onChange={handleChange}
              id="event_language"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Select one">Select one</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="Wordpress">Wordpress</option>
              <option value="JS/React">JS/React</option>
            </select>
          </section> */}
        </section>

        {/* SECTION  - Location and Dates */}
        <section className="w-full mb-4">
          {/* LOCATION */}
          <section>
            <label htmlFor="location">Event Location</label>
            <select
              name="location"
              value={eventDetails.location}
              onChange={handleChange}
              id="location"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Select one">Select one</option>
              <option value="Perth">Perth</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
            </select>
          </section>

          {/* DATES */}
          <section>
            <label htmlFor="event_start_date">
              When does your event start?
            </label>
            <input
              type="date"
              id="event_start_date"
              value={eventDetails.event_start_date}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </section>
          <section>
            <label htmlFor="event_end_date">When does your event end?</label>
            <input
              type="date"
              id="event_end_date"
              value={eventDetails.event_end_date}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </section>
        </section>

        {/* SECTION  - Attendees */}
        <section className="w-full mb-4">
          <label htmlFor="attendee_numbers">Attendee Numbers</label>
          <input
            type="number"
            name="attendee_numbers"
            value={eventDetails.attendee_numbers}
            onChange={handleChange}
            id="attendee_numbers"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </section>

        {/* SECTION  - Submit */}
        <section>
          <ButtonElement message="Submit Changes" btnClick={handleSubmit} />
        </section>
      </form>
    </main>
  );
}

export default UpdateEventForm;
