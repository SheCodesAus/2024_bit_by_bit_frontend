// HOOKs
import { useState, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";

// STYLE/TAILWIND
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// API
import postLogin from "../../api/post-login.js";

function LoginForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // REMOVED DUE TO MVP TIME PRESSURE - CAN COME BACK
  // const [showPassword, setShowPassword] = useState("false");

  // function showPassword() {
  //   var x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

  // MODAL
  const [modalOpen, setModalOpen] = useState(false);
  const cancelBtnRef = useRef(null);

  const modalTitle = "Log in Error";
  const modalMessage =
    "Incorrect username and/or password entered - try again!";
  const modalBtnTxt = "Close";

  const handleModalBtnClick = async (event) => {
    setModalOpen(false);
  };

  const handleUsernameChange = (event) => {
    const { id, value } = event.target;
    setUsername((prevUsername) => ({
      ...prevUsername,
      [id]: value,
    }));
  };
  const handlePasswordChange = (event) => {
    const { id, value } = event.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      postLogin(username, password)
        .then((response) => {
          window.localStorage.setItem("token", response.token);
          window.localStorage.setItem("user_id", response.user_id);
          window.localStorage.setItem("username", response.username);
          window.localStorage.setItem("is_admin", response.is_admin);
          window.localStorage.setItem("is_authenticated", true);
          setAuth({
            token: response.token,
            user_id: response.user_id,
            username: response.username,
            is_admin: response.is_admin,
            is_authenticated: true,
          });
          navigate("/home");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Login attempt failed: ", error);
          setModalOpen(true);
        });
    }
  };

  return (
    <>
      <form>
        {/* SECTION 1 - Inputs */}
        <section>
          {/* USERNAME */}
          <section>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              autoComplete="username"
              placeholder="epicusername"
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </section>
          {/* PASSWORD */}
          <section>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="password"
              placeholder="epicpassword"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {/* REMOVED DUE TO MVP TIME CONSTRAINTS */}
            {/* <div>
              <label htmlFor="check">Show Password</label>
              <input
                type="checkbox"
                value={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
            </div> */}
          </section>
        </section>
        {/* SECTION 2 - Submit */}
        <section className="mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-orange-500 px-3"
          >
            Submit
          </button>
        </section>
      </form>
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

export default LoginForm;
