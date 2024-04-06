// HOOKS
import { useState, useRef, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

// COMPONENTS
import ButtonElement from "../GlobalElements/Button";

// API
// import postCreateEventMentor from "../../api/post-create-eventMentor";
import putUpdateEventMentor from "../../api/put-update-event-mentor";
import getEventMentors from "../../api/get-event-mentors";

// STYLE/TAILWIND
import { Dialog, Transition } from "@headlessui/react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

function ProfileEventCard({ eventData }) {
  console.log("eventData inside profile card: ", eventData);
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const cancelBtnRef = useRef(null);
  // const eventLink = `/event/${eventData.id}`;
  const [allEventMentors, setAllEventMentors] = useState();
  const [allEventMentorsError, setAllEventMentorsError] = useState();
  const [newRoleRequested, setNewRoleRequested] = useState();
  const currentEvent = eventData.id;

  useEffect(() => {
    getEventMentors(auth.token)
      .then((eventMentors) => {
        setAllEventMentors(eventMentors);
      })
      .catch((error) => {
        setAllEventMentorsError(error);
      });
  }, []);

  // MENTOR RATIOS:
  const mentorNumber = function (array) {
    if (array !== null && array !== undefined) {
      return array.filter((mentor) => mentor.event_id === currentEvent).length;
    }
  };

  const currentMentorNumber = mentorNumber(allEventMentors);

  // const [eventMentorDetails, setEventMentorDetails] = useState({
  //   event_id: eventData.id,
  //   mentor_id: auth.user_id,
  //   approved: false,
  //   event_onboarding_task: {
  //     event_contract: false,
  //     slack_invite: false,
  //     google_calendar_invite: false,
  //     lms_invite: false,
  //     mentor_bio: false,
  //     mentor_photo: false,
  //     create_mentor_img_asset: false,
  //     reconfirm_dates: false,
  //     building_information: false,
  //   },
  //   event_offboarding_task: {
  //     invoice_sent: false,
  //     feedback_recieved: false,
  //   },
  //   role_requested: "",
  //   role_assigned: "Unassigned",
  //   is_completed: false,
  // });

  const handleRoleRequestedChange = (event) => {
    const { id, value } = event.target;
    setNewRoleRequested((prevEventMentorDetails) => ({
      ...prevEventMentorDetails,
      [id]: value,
    }));
  };

  const availabilityBtnMessage = "Update Availability";
  const handleSubmit = (event) => {
    event.preventDefault();
    setModalOpen(true);
    if (eventData.event_id && eventData.mentor_id && newRoleRequested) {
      putUpdateEventMentor(eventData.mentor_id, newRoleRequested).then(
        (newEventMentor) => {
          navigate(`/users/${eventData.user_id}`);
        }
      );
    }
  };

  // MODAL
  const modalTitle = "Availability Updated";
  const modalMessage = `Thank you for updating you availability for our ${eventData.type}: ${eventData.name}, in ${eventData.location}. If you have any questions, please get in touch with Kate Kirwin.`;
  const modalBtnTxt = "Close";

  const handleModalBtnClick = async (event) => {
    setModalOpen(false);
    window.location.reload();
  };

  return (
    <section
      className="event-card bg-white shadow-md p-8 rounded-lg flex-none"
      style={{ minWidth: "240px" }}
    >
      <h3 className="font-bold">{eventData.type}</h3>
      <h4 className="font-bold">{eventData.name}</h4>
      <h3>{new Date(eventData.date).toLocaleDateString("en-GB")}</h3>
      <h3 className="font-bold">{eventData.location}</h3>
      <h3 className="font-bold">{eventData.time}</h3>

      <section className="py-2">
        <h4 className="font-bold">Requested Role</h4>
        <p className="font">{eventData.role_requested}</p>
        <h4 className="font-bold">Assigned Role</h4>
        <p className="font">{eventData.role_assigned}</p>
      </section>

      <div>
        <select
          id="role_requested"
          name="role_requested"
          onChange={handleRoleRequestedChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Role</option>
          <option value="Lead Mentor">Lead Mentor</option>
          <option value="Mentor">Mentor</option>
          <option value="Industry Participant">Industry Participant</option>
        </select>
        <div className=" py-2">
          <ButtonElement
            message={availabilityBtnMessage}
            btnClick={handleSubmit}
          />
        </div>
      </div>

      {/* SECTION  - Modal */}
      <section>
        <Transition.Root show={modalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelBtnRef}
            onClose={setModalOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                          <HandThumbUpIcon
                            className="h-6 w-6 text-green-600 "
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            {modalTitle}
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              {modalMessage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md px-3 py-2 bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
                        onClick={handleModalBtnClick}
                      >
                        {modalBtnTxt}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </section>
    </section>
  );
}

export default ProfileEventCard;
