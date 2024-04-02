// HOOKs
import { Fragment, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";

// STYLE/TAILWIND
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// COMPONENTS
import ButtonElement from "../GlobalElements/Button.jsx";


// API
import deleteUser from "../../api/delete-user.js";

function ProfileOverview() {
  const navigate = useNavigate();

  // MODAL
  const { id } = useParams();
  const { auth, setAuth } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const cancelBtnRef = useRef(null);

  const modalTitle = "Delete Profile Confirmation";
  const modalMessage =
    "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone. ";
  const modalBtnTxt = "Delete Profile";
  // const modalAPICall = console.log("This is an API call");

  const handleModalBtnClick = async (event) => {
    setModalOpen(false);
    console.log("MODAL RED BUTTON");

    const { data } = await deleteUser({
      user_id: auth.user_id,
      token: auth.token,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/");
  };

  const handleCancelBtnClick = (event) => {
    console.log("cancel btn pressed");
    setModalOpen(false);
  };

  //UPDATE BUTTON
  const updateMessage = "Update Profile";
  const updateBtnOnClick = (event) => {
    event.preventDefault();
    console.log("going to update profile page");
    navigate(`/users/${id}/update`); //TODO: update this when API is working
  };

  //DELETE BUTTON
  const deleteMessage = "Delete Profile";
  const deleteBtnOnClick = (event) => {
    event.preventDefault();
    console.log("opening delete modal");
    setModalOpen(true);
  };

  return (
    <>
      {/* SECTION  - Profile Image */}
      <section className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border border-orange-500">
        <img
          id="defaultLogo"
          src="/imgs/defaultLogo.png"
          className="w-full h-full object-cover"
        />
      </section>
      {/* SECTION  - Update/Delete Buttons */}
      <section className="mt-4 flex flex-row justify-center gap-2">
        <ButtonElement message={updateMessage} btnClick={updateBtnOnClick} />
        <ButtonElement message={deleteMessage} btnClick={deleteBtnOnClick} />
      </section>
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
                        onClick={handleModalBtnClick}
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

export default ProfileOverview;
