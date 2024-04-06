// HOOKS
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { Fragment, useState, useRef } from "react";
import { useAuth } from "../../hooks/use-auth";
import { Link, useNavigate } from "react-router-dom";

// STYLE/TAILWIND
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// COMPONENTS
import Button from "../GlobalElements/Button";

// API
import deleteUser from "../../api/delete-user";

function ManageUserAccordion({ userData, processData }) {
  console.log("userData in accordion: ", userData);
  const { auth } = useAuth();
  const [userToManage, setUserToManage] = useState();

  // const mergedUserById = (a1, a2) =>
  //   a1.map((user) => ({
  //     ...a2.find((process) => process.mentor === user.id && process),
  //     ...user,
  //   }));

  // const mergedData = mergedUserById(userData, processData);
  // console.log("mergedData: ", mergedData);

  // MODALS & BUTTONS
  const [modalOpen, setModalOpen] = useState(false);
  const cancelBtnRef = useRef(null);

  const modalTitle = "Delete Profile Confirmation";
  const modalMessage =
    "Are you sure you want to deactivate this account? All of the data will be permanently removed. This action cannot be undone. ";
  const modalBtnTxt = "Delete Profile";

  const handleModalBtnClick = async (id) => {
    console.log("id in delete fnc: ", id);

    const { data } = await deleteUser({
      user_id: id,
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

  //UPDATE BUTTON //FIXME: this has not been updated at all
  const updateMessage = "Update Profile";
  const updateBtnClick = (event) => {
    event.preventDefault();
    console.log("going to update profile page");
    //TODO: update this when API is working
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  //DELETE BUTTON
  const deleteMessage = "Delete Profile";
  const deleteBtnClick = (id) => {
    console.log("id in delete btn click: ", id);
    setUserToManage(id);
    setModalOpen(true);
  };
  console.log("userToManage: ", userToManage);

  function createAccordion(userData) {
    return (
      <Accordion defaultIndex={[0]} allowMultiple>
        {userData.map((user, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="grid grid-cols-6 text-wrap"
              >
                <div className="px-4 py-2">{user.first_name}</div>
                <div className="px-4 py-2">{user.last_name}</div>
                <div className="px-4 py-2">{user.email}</div>
                <div className="px-4 py-2">{user.contact_number}</div>
                <div className="px-4 py-2">{user.linkedIn}</div>
                <div className="px-4 py-2">{user.slack}</div>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left"></Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="flex bg-orange-300">
              <Box as="span" flex="1" textAlign="left"></Box>
              {/* ONBOARDING TASKS */}
              {user.onboarded_mentor.map((onboard_process, i) => (
                <>
                  <div key={i} className="">
                    <h2 className="font-semibold">Onboarding tasks</h2>
                    <div className="flex">
                      <div className="grid grid-cols-1 px-4 py-2">
                        <label>Slack link Provided?</label>
                        <input
                          type="checkbox"
                          checked={onboard_process.user_onboarding_task_slack}
                        />
                      </div>
                      <div className="grid grid-cols-1  px-4 py-2">
                        <label>LinkedIn link Provided?</label>
                        <input
                          type="checkbox"
                          checked={
                            onboard_process.user_onboarding_task_linkedin
                          }
                        />
                      </div>
                      <div className="grid grid-cols-1 px-4 py-2">
                        <label>Mentor Code of Conduct provided?</label>
                        <input
                          type="checkbox"
                          checked={
                            onboard_process.user_onboarding_task_CodeofConduct
                          }
                        />
                      </div>
                      <div className="grid grid-cols-1 px-4 py-2">
                        <label>Mentor t-shirt provided?</label>
                        <input
                          type="checkbox"
                          checked={
                            onboard_process.user_onboarding_task_tshirtsent
                          }
                        />
                      </div>
                    </div>
                  </div>
                </>
              ))}
              {/* OFFBOARDING TASKS */}
              {user.onboarded_mentor.map((offboard_process, i) => (
                <>
                  <div key={i} className="">
                    <h2 className="font-semibold">Offboarding tasks</h2>
                    <div className="flex">
                      <div className="grid grid-cols-1 px-4 py-2">
                        <label>Feedback Requested?</label>
                        <input
                          type="checkbox"
                          checked={
                            offboard_process.user_offboarding_task_feedbackrequested
                          }
                        />
                      </div>
                      <div className="grid grid-cols-1  px-4 py-2">
                        <label>Feedback Recieved?</label>
                        <input
                          type="checkbox"
                          checked={
                            offboard_process.user_offboarding_task_feedbackreceived
                          }
                        />
                      </div>
                      <div className="grid grid-cols-1 px-4 py-2">
                        <label>Mentor t-shirt returned?</label>
                        <input
                          type="checkbox"
                          checked={
                            offboard_process.user_offboarding_task_tshirtreceived
                          }
                        />
                      </div>
                    </div>
                  </div>
                </>
              ))}
              {/* UPDATE/DELETE */}
              <div className="m-4 flex flex-col justify-center gap-2">
                <Button
                  message={updateMessage}
                  btnClick={updateBtnClick} //TODO: - need to pass the user id from this function.
                />
                <Button
                  message={deleteMessage}
                  btnClick={() => deleteBtnClick(user.id)}
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
        <h2 className="font-semibold px-4 py-2">First Name</h2>
        <h2 className="font-semibold px-4 py-2">Second Name</h2>
        <h2 className="font-semibold px-4 py-2">Email</h2>
        <h2 className="font-semibold px-4 py-2">Contact Number</h2>
        <h2 className="font-semibold px-4 py-2">Slack</h2>
        <h2 className="font-semibold px-4 py-2">LinkedIn</h2>
      </section>
      {userData && createAccordion(userData)}
      {/* {mergedData && userAccordion} */}
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
                        onClick={() => handleModalBtnClick(userToManage)}
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
  // return null;
}

export default ManageUserAccordion;
