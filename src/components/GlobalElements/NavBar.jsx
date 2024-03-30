import { Link, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import React, { useState } from "react";
import { useNavbarContext } from "../NavBarContext";

function NavBar() {
  const { auth, setAuth } = useAuth();
  const { isNavbarOpen, toggleNavbar } = useNavbarContext();
  // const [isOpen, setIsOpen] = useState(true);
  // const toggleNavBar = () => setIsOpen(!isOpen);
  const logoPath = "/imgs/logo.png";

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("username");
    setAuth({ token: null, user_id: null, username: null });
  };

  return (
    <>
      <header>
        <section
          className="fixed w-full text-white flex items-center justify-end px-4 h-12"
          style={{ backgroundColor: "rgb(130, 70, 175)" }}
        >
          <h1 className="text-3xl font-bold">BYTE TIME</h1>
        </section>

        <nav
          className={`fixed top-12 h-[calc(100vh-3rem)] p-3 ${
            isNavbarOpen ? "w-60" : "w-20"
          } text-white flex flex-col transition-all duration-500 ease-in-out`}
          style={{ backgroundColor: "rgb(130, 70, 175)" }}
        >
          <div
            className={`flex justify-center items-center ${
              !isNavbarOpen ? "overflow-hidden" : ""
            }`}
          >
            {/* <a href="#logo" className="logo-wrapper flex items-center gap-4">
              <img
                src={logoPath}
                alt="Logo"
                className={`transition-all duration-300 ${
                  isNavbarOpen ? "w-8 h-8" : "w-6 h-6"
                }`}
              />
              <h2 className={`${isNavbarOpen ? "inline" : "hidden"}`}>LOGO</h2>
            </a> */}
            <a
              className="toggle-btn absolute top-2.5 right-[-12px] p-2 bg-white rounded-full flex items-center justify-center transform transition-transform ease-linear"
              onClick={toggleNavbar}
            >
              <img
                src={logoPath}
                alt="expand button"
                className={`${isNavbarOpen ? "rotate-0" : "rotate-180"}`}
              />
            </a>
          </div>

          <div className="mt-auto flex flex-col justify-center items-center gap-2 pt-6 border-t border-orange-300">
            <Link
              to="/home"
              className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            >
              <img src={logoPath} alt="Settings" className="w-6 h-6" />
              <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                Home
              </span>
            </Link>
            <Link
              to={`/users/${auth.user_id}`}
              className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            >
              <img src={logoPath} alt="Settings" className="w-6 h-6" />
              <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                Profile
              </span>
            </Link>
            <Link
              to="/events"
              className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            >
              <img src={logoPath} alt="Settings" className="w-6 h-6" />
              <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                Events
              </span>
            </Link>
            <Link
              to="/about"
              className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
            >
              <img src={logoPath} alt="Settings" className="w-6 h-6" />
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
                    <img src={logoPath} alt="Settings" className="w-6 h-6" />
                    <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                      Manage Users
                    </span>
                  </Link>
                )}
                <Link
                  to="/"
                  className="link flex items-center gap-4 p-2 rounded-md hover:bg-orange-600"
                  onClick={handleLogout}
                >
                  <img src={logoPath} alt="Settings" className="w-6 h-6" />
                  <span className={`${isNavbarOpen ? "inline" : "hidden"}`}>
                    Logout
                  </span>
                </Link>
              </>
            )}
            <div className="user-profile flex justify-center items-center gap-4 pt-6">
              <div className="user-avatar w-12 h-12 cursor-pointer transition-transform duration-200 hover:scale-110">
                <img
                  src={logoPath}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div
                className={`user-details ${isNavbarOpen ? "inline" : "hidden"}`}
              >
                {/* <p className="username font-semibold">[Firstname] [Lastname]</p> */}
                <p className="username font-semibold">{auth.username}</p>
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
