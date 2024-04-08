// HOOKS
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { Fragment, useState, useRef, useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Link, useNavigate } from "react-router-dom";

// STYLE/TAILWIND
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

// COMPONENTS
import Button from "../GlobalElements/Button";

// API
import deleteMentor from "../../api/delete-eventMentor";

function ManageUserAccordion({ userData, mentorData }) {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [mentorToManage, setMentorToManage] = useState();

  let mentors = [];
  mentorData &&
    userData &&
    mentorData.map((mentor) => {
      userData.map((user) => {
        if (mentor.mentor_id == user.id) {
          const addMentor = {
            id: mentor.id,
            user_id: mentor.mentor_id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            slack: user.slack,
            role_requested: mentor.role_requested,
            role_assigned: mentor.role_assigned,
            onboarding_slack: mentor.event_onboarding_task_slackinvite,
            onboarding_lms: mentor.event_onboarding_task_lmsinvite,
            onboarding_google:
              mentor.event_onboarding_task_googlecalendarinvite,
            onboarding_dates: mentor.event_onboarding_task_reconfirmdates,
            onboarding_bio: mentor.event_onboarding_task_mentorbio,
            onboarding_img: mentor.event_onboarding_task_createimgasset,
            onboarding_contract: mentor.event_onboarding_task_contract,
            onboarding_buildinginformation:
              mentor.event_onboarding_task_buildinginformation,
            offboarding_invoicesent: mentor.event_offboarding_task_invoicesent,
            offboarding_task_feedbackreceived:
              mentor.offboarding_task_feedbackreceived,
          };
          mentors.push(addMentor);
        }
      });
    });

  // MODALS & BUTTONS
  const [modalOpen, setModalOpen] = useState(false);
  const cancelBtnRef = useRef(null);

  const modalTitle = "Delete Availability Application";
  const modalMessage =
    "Are you sure you want to delete this mentor availability application? All of the data will be permanently removed. This action cannot be undone. ";
  const modalBtnTxt = "Delete Availability";

  const handleModalBtnClick = async (id) => {
    const { data } = await deleteMentor({
      mentor_id: id,
      token: auth.token,
    });
    setModalOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const handleCancelBtnClick = (event) => {
    setModalOpen(false);
  };

  //UPDATE BUTTON
  const updateMessage = "Update Availability";
  const updateBtnClick = (id) => {
    navigate(`/mentor/${id}/update`);
  };

  //DELETE BUTTON
  const deleteMessage = "Delete Availability";
  const deleteBtnClick = (id) => {
    setMentorToManage(id);
    setModalOpen(true);
  };

  function createAccordion(mentor) {
    return (
      <Accordion defaultIndex={[0]} allowMultiple>
        {mentor.map((m, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="grid grid-cols-6 text-wrap border-t border-orange-300"
              >
                <div className="px-4 py-2"> {m.name}</div>
                <div className="px-4 py-2">{m.email}</div>
                <div className="px-4 py-2">{m.role_requested}</div>
                <div
                  className={classNames(
                    "px-4 py-2 font-bold",
                    {
                      "text-red-500 ": m.role_assigned === "Unassigned",
                    },
                    {
                      "text-green-500 ": m.role_assigned != "Unassigned",
                    }
                  )}
                >
                  {m.role_assigned}
                </div>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left"></Box>
              </AccordionButton>
            </h2>
            <AccordionPanel p={4} className="flex flex-col bg-orange-300">
              <Box as="span" flex="1" textAlign="left"></Box>
              {/* ONBOARDING TASKS */}
              <div className="m-4">
                <h2 className="font-semibold">Event Onboarding tasks</h2>
                <div className="flex">
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Slack link Provided?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.onboarding_slack}
                    />
                  </div>
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>LMS invite Provided?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.onboarding_lms}
                    />
                  </div>
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Google Calendar invite Provided?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.onboarding_google}
                    />
                  </div>
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Contract provided?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.onboarding_contract}
                    />
                  </div>
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Mentor bio provided?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.onboarding_bio}
                    />
                  </div>
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Dates reconfirmed?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.onboarding_dates}
                    />
                  </div>
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Building Information provided?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.onboarding_buildinginformation}
                    />
                  </div>
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Image asset created?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.onboarding_img}
                    />
                  </div>
                </div>
              </div>
              {/* OFFBOARDING TASKS */}
              <div className="m-4">
                <h2 className="font-semibold">Event Offboarding tasks</h2>
                <div className="flex">
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Feedback Received?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.offboarding_task_feedbackreceived}
                    />
                  </div>
                  <div className="grid grid-cols-1 px-4 py-2">
                    <label>Invoice recieved?</label>
                    <input
                      type="checkbox"
                      readOnly={true}
                      checked={m.offboarding_invoicesent}
                    />
                  </div>
                </div>
              </div>

              {/* UPDATE/DELETE */}
              <div className="m-4 flex justify-center gap-2">
                <Button
                  message={updateMessage}
                  btnClick={() => updateBtnClick(m.id)} //TODO: - need to pass the user id from this function.
                />
                <Button
                  message={deleteMessage}
                  btnClick={() => deleteBtnClick(m.id)}
                />
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <>
      <section className="grid grid-cols-6">
        <h2 className="font-semibold px-4 py-2">Name</h2>
        <h2 className="font-semibold px-4 py-2">Email</h2>
        <h2 className="font-semibold px-4 py-2">Role Requested</h2>
        <h2 className="font-semibold px-4 py-2">Role Assigned</h2>
        <h2 className="font-semibold px-4 py-2">Slack</h2>
      </section>
      {/* {mentorData && createAccordion(mentorData)} */}
      {mentors && mentors.length > 0 && createAccordion(mentors)}
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
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon
                            className="h-6 w-6 text-red-600"
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
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => handleModalBtnClick(mentorToManage)}
                      >
                        {modalBtnTxt}
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={handleCancelBtnClick}
                        ref={cancelBtnRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </section>
    </>
  );
}

export default ManageUserAccordion;
