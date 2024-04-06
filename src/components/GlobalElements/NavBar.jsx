import { Link, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import React, { useState } from "react";
import { useNavbarContext } from "../NavBarContext";
import useUser from "../../hooks/use-user.js";

// STYLE/TAILWIND
import {
  HomeIcon,
  CalendarDaysIcon,
  InformationCircleIcon,
  IdentificationIcon,
  CogIcon,
  UserCircleIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

function NavBar() {
  const { auth, setAuth } = useAuth();
  const { isNavbarOpen, toggleNavbar } = useNavbarContext();
  const { user, isLoading, error } = useUser(auth.user_id);
  // const [isOpen, setIsOpen] = useState(true);
  // const toggleNavBar = () => setIsOpen(!isOpen);
  const logoPath = "/imgs/logo.png";
  const logOutIcon = "/imgs/logout.png";

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("is_admin");
    setAuth({ token: null, user_id: null, username: null });
  };
  console.log("auth", auth.is_admin);
  console.log("storage", localStorage);


  return (
    <>
      <header>
        <section
          className="fixed w-full text-white flex items-center justify-end px-4 h-12"
          style={{ backgroundColor: "rgb(130, 70, 175)" }}
        >
          <button
            className="flex items-center justify-start bg-orange-400 rounded-full p-1 shadow-sm"
            onClick={toggleNavbar}
            style={{ marginRight: 'auto' }}
          >
            <ChevronDoubleRightIcon alt="Toggle Navigation" className={`w-6 h-6 transition-transform duration-300 ${isNavbarOpen ? 'rotate-180' : ''}`} />
          </button>
          <img id="text logo" src="/imgs/BTlogo.png" className="h-12" />
          <Link
            to="/"
            className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            onClick={handleLogout}
          >
            <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
              Logout
            </span>
            <img src={logOutIcon} alt="Settings" className="w-6 h-6" />
          </Link>
        </section>

        <nav
          className={`fixed top-12 h-[calc(100vh-3rem)] p-3 ${isNavbarOpen ? "w-60" : "w-20"
            } text-white flex flex-col transition-all duration-500 ease-in-out`}
          style={{ backgroundColor: "rgb(130, 70, 175)" }}
        >
          <div
            className={`flex flex-col items-center justify-center ${!isNavbarOpen ? "overflow-hidden" : ""}`}
          >
            <a className="flex items-center justify-center">
              <img
                src={logoPath}
                alt="Logo"
                className={`transition-all duration-300 ${isNavbarOpen ? "w-52 h-52" : "w-12 h-12"}`}
              />
            </a>
          </div>


          <div className="mt-auto flex flex-col justify-center items-center gap-2 pt-6 border-t border-orange-300">
            <Link
              to="/home"
              className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            >
              <HomeIcon alt="Home" className="w-6 h-6" />
              <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                Home
              </span>
            </Link>
            <Link
              to={`/users/${auth.user_id}`}
              className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            >
              <IdentificationIcon alt="Settings" className="w-6 h-6" />
              <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                Profile
              </span>
            </Link>
            <Link
              to="/events"
              className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            >
              <CalendarDaysIcon alt="Events" className="w-6 h-6" />
              <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                Events
              </span>
            </Link>
            <Link
              to="/about"
              className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            >
              <InformationCircleIcon alt="About" className="w-6 h-6" />
              <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                About
              </span>
            </Link>
            {auth.token && (
              <>
                {auth.is_admin == true && (
                  <Link
                    to="/users/manage"
                    className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
                  >
                    <CogIcon alt="logout" className="w-7 h-7" />
                    <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                      Users
                    </span>
                  </Link>
                )}
              </>
            )}
            <div className="user-profile flex justify-center items-center gap-4 pt-6">
              <div className="user-avatar w-12 h-12">
                <Link
                  to={`/users/${auth.user_id}`}
                >
                  <UserCircleIcon alt="user" className="w-full h-full rounded-full" />
                </Link>
              </div>
              <div
                className={`user-details ${isNavbarOpen ? "inline" : "hidden"} text-center`}
              >
                <Link
                  to={`/users/${auth.user_id}`}
                >
                  <p className="username font-semibold">{user?.first_name} <br /> {user?.last_name}</p>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;
