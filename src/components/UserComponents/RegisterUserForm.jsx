// HOOKs
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";

// STYLE/TAILWIND
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

// API
import postCreateUser from "../../api/post-create-user.js";
import postLogin from "../../api/post-login.js";

function RegisterUserForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const [userDetails, setUserDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    profilePic: "",
    bio: "",
    codingLanguage: "",
    slack: "",
    linkedIn: "",
  });

  const [password, setPassword] = useState("");
  const [showpassword, setShowPassowrd] = useState(false); //used to hide passwords when loging in.

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userDetails.firstName &&
      userDetails.lastName &&
      userDetails.email &&
      userDetails.username &&
      password
    ) {
      postCreateUser(userDetails, password).then((newUser) => {
        postLogin(newUser.username, password)
          .then((response) => {
            window.localStorage.setItem("token", response.token);
            window.localStorage.setItem("userID", response.userID);
            setAuth({
              token: response.token,
              userID: response.userID,
            });
          })
          .then(navigate("/home"));
      });
    }
  };

  return (
    <>
      <form>
        {/* SECTION 1 - Account information */}
        <section>
          {/* HEADER */}
          <section>
            <h2>Account information</h2>
            <p>
              This username can be seen for all mentors. Make sure it is
              appropriate!
            </p>
          </section>
          {/* USERNAME */}
          <section>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoComplete="username"
              placeholder="epicusername"
              onChange={handleChange}
            />
          </section>
          {/* PASSWORD */}
          <section>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              autoComplete="password"
              placeholder="epicpassword"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <label htmlFor="check">Show Password</label>
              <input
                type="checkbox"
                value={showpassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
            </div>
          </section>
        </section>
        {/* SECTION 2 - Personal Information */}
        <section>
          {/* NOTE: This heading and information my need to change */}
          {/* HEADER */}
          <section>
            <h2>Personal Information</h2>
            <p>This information will be accessed by the admin team.</p>
          </section>
          {/* NAMES */}
          <section>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              autoComplete="given-name"
              placeholder="Taylor"
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              autoComplete="given-name"
              placeholder="Swift"
              onChange={handleChange}
            />
          </section>
          {/* CONTACT NUMBER*/}
          <section>
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              autoComplete="contactNumber"
              placeholder="555 2368"
              onChange={handleChange}
            />
          </section>
          {/* EMAIL */}
          <section>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              autoComplete="email"
              placeholder="tayloristhebest@swift.com"
              onChange={handleChange}
            />
          </section>
          {/* PROFILE PICTURE */}
          <section>
            <label htmlFor="profilePic">Profile Picture</label>
            <svg
              className="h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>
            <button type="button">Change</button>
          </section>
        </section>
        {/* SECTION 3 - Mentor Information */}
        <section>
          {/* NOTE: This heading and information my need to change */}
          {/* HEADER */}
          <section>
            <h2>Mentor Information</h2>
            <p>This information will be accessed by the admin team.</p>
          </section>
          {/* BIO */}
          <section>
            <label htmlFor="bio">Mentor Bio</label>
            <input
              type="text"
              name="bio"
              placeholder="I am an incredible mentor with experience in X, Y and Z. When I am not coding or mentoring I am being a QUEEN!"
              onChange={handleChange}
            />
          </section>
          {/* CODING LANGUAGES */}
          {/* TODO: Confirm how we want to allow users to select this/allowing multiple choices.*/}
          <section>
            <label htmlFor="mainCodingLanguage">Main Coding Language</label>
            <select
              id="codingLanguage"
              name="codingLanguage"
              onChange={handleChange}
            >
              <option value="htmlCss">HTML/CSS</option>
              <option value="python">Python</option>
              <option value="django">Django</option>
              <option value="jsReact">Javascript and React</option>
              <option value="wordpress">Wordpress</option>
            </select>
          </section>
          {/* SLACK */}
          <section>
            <label htmlFor="slack">Slack</label>
            <input
              type="text"
              name="slack"
              placeholder="mySlack URL"
              onChange={handleChange}
            />
          </section>
          {/* LINKEDIN */}
          <section>
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              placeholder="myLinkedIn URL"
              onChange={handleChange}
            />
          </section>
        </section>
        {/* SECTION 4 - Submit */}
        <section>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </section>
      </form>
    </>
  );
}

export default RegisterUserForm;
