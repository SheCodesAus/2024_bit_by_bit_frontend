// HOOKS
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useNavbarContext } from '../NavBarContext';

import getUser from '../../api/get-user'
import buttonElement from '../GlobalElements/Button';

function UpdateEventForm() {

    // const navigate = useNavigate();
    const { auth } = useContext(AuthContext);
    // const { isNavbarOpen } = useNavbarContext();

    const [eventType, setEventType] = useState("");
    const [location, setLocation] = useState("");
    const [language, setLanguage] = useState("");

    const [eventDetails, setEventDetails] = useState({
        event_type: eventType,
        event_name: "",
        event_start_date: "",
        event_end_date: "",
        attendee_numbers: "",
        location: location,
        is_open: "true",
        date_created: new Date(),
        owner: auth.user_id,
    });

    useEffect(() => {
        if (auth.id) {
            getUser(auth.userID)
                .then((data) => {
                    setEventDetails({
                        event_type: data.event_type ?? '',
                        event_name: data.event_name ?? '',
                        event_start_date: data.event_start_date ?? '',
                        event_end_date: data.event_end_date ?? '',
                        attendee_numbers: data.attendee_numbers ?? '',
                        location: data.location ?? '',
                        is_open: data.is_open ?? '',
                    });
                })
                .catch((error) => {
                    console.error("Failed to load event details:", error);
                });
        }
    }, [auth.id]);

    const handleChange = (event) => {
        const { eventID, value } = event.target;
        setEventDetails((prevEventDetails) => ({
            ...prevEventDetails,
            [eventID]: value,
        }));
    };

    {/* TO-DO: CREATE & IMPORT PUT-UPDATEUSER FILE TO TEST WITH API CALLS WHEN WE CAN LOG IN */ }
    const handleSubmit = async (event) => {
        event.preventDefault();
        //   const updated = await updateEvent(auth.id, eventDetails);
        //   if (updated) {
        //       navigate('/events');
        //   } else {
        //       console.error('Failed to update event');
        //   }
    };

    return (
        <main>
            <form className="flex flex-col items-center justify-center py-8">

                {/* SECTION  - Event Information */}
                {/* TODO: Look at event language! */}
                <section className="w-full mb-4">
                    {/* HEADER */}
                    <section className="border-b p-4 border-gray-300">
                        <h2 className="text-lg font-semibold mb-2">Event Information</h2>
                        <p className="mb-3 ">
                            Ensure all event detail is clear enough that a new mentor will
                            understand the process! When organising events with multiple
                            modules, like the Plus Program, create an event per module so that
                            the mentors can register for the event that they have the
                            strongest language skills.
                        </p>
                    </section>

                    {/* EVENT TYPE */}
                    <section className="mt-5">
                        <label htmlFor="eventType">Event Type</label>
                        <select
                            name="eventType"
                            value={eventDetails.event_type}
                            onChange={(e) => handleChange(e)}
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
                            onChange={(e) => handleChange(e)}
                            id="event_name"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </section>

                    {/* EVENT LANGUAGE */}
                    <section>
                        <label htmlFor="event_language">Event Language</label>
                        <select
                            name="event_language"
                            value={eventDetails.event_language}
                            onChange={(e) => handleChange(e)}
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
                    </section>
                </section>

                {/* SECTION  - Location and Dates */}
                <section className="w-full mb-4">

                    {/* LOCATION */}
                    <section>
                        <label htmlFor="location">Event Location</label>
                        <select
                            name="location"
                            value={eventDetails.location}
                            onChange={(e) => handleChange(e)}
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
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </section>
                    <section>
                        <label htmlFor="event_end_date">When does your event end?</label>
                        <input
                            type="date"
                            id="event_end_date"
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
                        onChange={(e) => handleChange(e)}
                        id="attendee_numbers"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </section>

                {/* SECTION  - Submit */}
                <section>
                    <button
                        className="inline-flex w-full justify-center rounded-md px-3 py-2 bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto">
                        Submit Changes
                    </button>
                </section>
            </form>

        </main>
    );
}

export default UpdateEventForm;