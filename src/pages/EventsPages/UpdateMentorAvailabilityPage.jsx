// HOOKs
import { useNavbarContext } from "../../components/NavBarContext.jsx";
import UpdateMentorAvailabilityForm from "../../components/EventComponents/UpdateMentorAvailabilityForm.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useAuth } from "../../hooks/use-auth.js";

// API
import getEvent from "../../api/get-event.js";
import getEventMentor from "../../api/get-event-mentor.js";

function UpdateMentorAvailabilityPage() {
  const { id } = useParams();
  const { isNavbarOpen } = useNavbarContext();
  const [mentorData, setMentorData] = useState();
  const [mentorError, setMentorError] = useState();
  const [eventID, setEventID] = useState();
  const [eventData, setEventData] = useState();
  const [eventError, setEventError] = useState();

  useEffect(() => {
    if (id) {
      getEventMentor(id)
        .then((mentor) => {
          setMentorData(mentor);
          setEventID(mentor.event_id);
        })
        .catch((error) => {
          setMentorError(error);
        });
    }
  }, []);

  useEffect(() => {
    if (eventID) {
      getEvent(eventID)
        .then((event) => {
          setEventData(event);
        })
        .catch((error) => {
          setEventError(error);
        });
    }
  }, [eventID]);

  console.log("UPDATE EVENT MENTOR AVAILABILITY PAGE id: ", id);
  console.log("UPDATE EVENT MENTOR AVAILABILITY PAGE mentorData: ", mentorData);
  console.log("UPDATE EVENT MENTOR AVAILABILITY PAGE eventID: ", eventID);
  console.log("UPDATE EVENT MENTOR AVAILABILITY PAGE eventData: ", eventData);

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen ${
        isNavbarOpen ? "ml-60" : "ml-20"
      } bg-white`}
    >
      <style>
        {`::-webkit-scrollbar {width: 8px;} ::-webkit-scrollbar-track {background: #ffffff;} ::-webkit-scrollbar-thumb {background-color: orange; border-radius: 10px; border: 2px solid #ffffff;}`}
      </style>

      <section className="flex flex-col items-center pt-16 border-b border-gray-200">
        <img
          src="/imgs/SCbanner9.jpg"
          className="w-full px-4 h-auto object-cover"
        />
        <h1 className="text-4xl font-bold text-center text-slate-800">
          MENTOR EVENT SCHEDULDING
        </h1>
      </section>
      <section className="flex flex-col items-center pt-4 border-gray-200">
        <h3 className="font-bold"> {eventData?.event_name}</h3>
        <h4 className="font-bold"> {eventData?.event_type}</h4>
        <h3>
          {" "}
          {new Date(eventData?.event_start_date).toLocaleDateString("en-GB")}
        </h3>
      </section>

      <section className="w-full max-w-4xl mt-4 bg-orange-100/90 rounded-lg p-4 shadow-md">
        <UpdateMentorAvailabilityForm mentorData={mentorData} />
      </section>
    </main>
  );
}

export default UpdateMentorAvailabilityPage;
