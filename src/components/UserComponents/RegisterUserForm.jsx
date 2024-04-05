// HOOKs
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";
import buttonElement from "../GlobalElements/Button.jsx";

// STYLE/TAILWIND
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

// API
import postCreateUser from "../../api/post-create-user.js";
import postCreateUserProcess from "../../api/post-create-userProcess.js";
import postLogin from "../../api/post-login.js";

function RegisterUserForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  // const [userProcessDetails, setUserProcessDetails] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    profilePic:
      "https://github.com/SheCodesAus/2024_bit_by_bit_frontend/blob/frontydevelopment/public/imgs/logo2.png",
    bio: "",
    coding_language: "",
    slack: "",
    linkedIn: "",
    is_admin: false,
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); //used to hide passwords when loging in.
  const [passwordValidation, setPasswordValidation] = useState(""); //to alert users if new PW not 'strong' enough
  const [retypePassword, setRetypePassword] = useState(""); //for advising if PW doesnt match when retyped
  const [retypePasswordValidation, setRetypePasswordValidation] = useState("");
  const [referralCode, setReferralCode] = useState("")

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "password") {
      setPassword(value);
      if (value.length < 8) {
        setPasswordValidation("Password must be at least 8 characters long.");
      } else {
        setPasswordValidation("");
      }
    } else if (id === "retypePassword") {
      setRetypePassword(value);
      if (value !== password) {
        setRetypePasswordValidation("Passwords do not match.");
      } else {
        setRetypePasswordValidation("");
      }
    } else {
      setUserDetails((prevUserDetails) => ({
        ...prevUserDetails,
        [id]: value,
      }));
    }
  };
  console.log(userDetails);
  console.log("password: ", password);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (referralCode !== "cupcakes4days") {
      alert("Incorrect referral code. Please enter the correct referral code to proceed.")
      return;
    }

    if (
      userDetails.first_name &&
      userDetails.last_name &&
      userDetails.email &&
      userDetails.username &&
      password
    ) {
      postCreateUser(userDetails, password).then((newUser) => {
        console.log("new user: ", newUser);
        const userProcessDetails = {
          mentor: newUser.id,
          user_onboarding_task_slack: false,
          user_onboarding_task_linkedin: false,
          user_onboarding_task_CodeofConduct: false,
          user_onboarding_task_tshirtsent: false,
          user_offboarding_task_feedbackrequested: false,
          user_offboarding_task_feedbackreceived: false,
          user_offboarding_task_tshirtreceived: false,
          is_completed: false,
          timestamps: new Date(),
        };

        postCreateUserProcess(userProcessDetails)
          .then(
            console.log("new user: ", newUser),
            postLogin(newUser.username, password)
          )
          .then((response) => {
            window.localStorage.setItem("token", response.token);
            window.localStorage.setItem("user_id", response.user_id);
            window.localStorage.setItem("username", response.username);
            window.localStorage.setItem("is_admin", response.is_admin);
            setAuth({
              token: response.token,
              user_id: response.user_id,
              username: response.username,
              is_admin: response.is_admin,
            });
          })
          .then(navigate("/"));
      });
    }
  };

  return (
    <>
      <form className="flex flex-col items-center justify-center py-8">
        {/* SECTION 1 - Account information */}
        <section className="w-full mb-4">
          <h2 className="text-lg font-semibold mb-2">Account information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* USERNAME */}
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                autoComplete="username"
                placeholder="epicusername"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="new-password"
                placeholder="********"
                value={password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="retypePassword"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700"
              >
                Re-Type Password
              </label>
              <input
                id="retypePassword"
                type={showPassword ? "text" : "password"}
                name="retypePassword"
                autoComplete="new-password"
                placeholder="********"
                value={password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <label htmlFor="check">Show Password</label>
              <input
                type="checkbox"
                value={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="ml-2"
              />
            </div>
          </div>
        </section>
        {/* SECTION 2 - Personal Information */}
        <section className="w-full mb-4">
          <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* NAMES */}
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                autoComplete="given-name"
                placeholder="Taylor"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                autoComplete="family-name"
                placeholder="Swift"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* CONTACT NUMBER */}
            <div>
              <label
                htmlFor="contact_number"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Contact Number
              </label>
              <input
                id="contact_number"
                type="text"
                name="contact_number"
                autoComplete="tel"
                placeholder="555 2368"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                autoComplete="email"
                placeholder="tayloristhebest@swift.com"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* PROFILE PICTURE */}
            <div className="col-span-2 flex items-center justify-center">
              <label
                htmlFor="profilePic"
                className="block text-sm font-medium text-gray-700 mr-2"
              >
                Profile Picture
              </label>
              <PhotoIcon className="h-6 w-6 text-gray-400" />
              <button
                type="button"
                className="ml-2 text-sm text-blue-600 hover:text-blue-700 focus:outline-none"
              >
                Change
              </button>
            </div>
          </div>
        </section>
        {/* SECTION 3 - Mentor Information */}
        <section className="w-full mb-4">
          <h2 className="text-lg font-semibold mb-2">Mentor Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* BIO */}
            <div className="sm:col-span-2">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Mentor Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                placeholder="I am an incredible mentor with experience in X, Y and Z. When I am not coding or mentoring I am being a QUEEN!"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
                rows="4"
              />
            </div>
            {/* CODING LANGUAGES */}
            {/* TODO: Confirm how we want to allow users to select this/allowing multiple choices */}
            <div className="sm:col-span-2">
              <label
                htmlFor="coding_language"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Main Coding Language
              </label>
              <select
                id="coding_language"
                name="coding_language"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm "
              >
                <option value="Select_language">Select a language</option>
                <option value="HTML/CSS">HTML/CSS</option>
                <option value="Python">Python</option>
                <option value="Django">Django</option>
                <option value="Javascript and React">
                  Javascript and React
                </option>
                <option value="WordPress">WordPress</option>
              </select>
            </div>
            {/* SLACK */}
            <div>
              <label
                htmlFor="slack"
                className="block text-sm font-medium text-gray-700"
              >
                Slack
              </label>
              <input
                id="slack"
                type="text"
                name="slack"
                placeholder="mySlack URL"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            {/* LINKEDIN */}
            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn
              </label>
              <input
                id="linkedin"
                type="text"
                name="linkedin"
                placeholder="myLinkedIn URL"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
          </div>
        </section>
        <section className="w-full mb-4">
          <h2 className="text-lg font-semibold mb-2">Referral Code</h2>
          <div >
            <input
              id="referralCode"
              type="text"
              name="referralCode"
              placeholder="Enter referral code"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
              required
            />
            <p className="block text-sm font-medium text-gray-700 mr-2" >Please check your mentor invitation email for your referral code. </p>
          </div>
        </section>
        {/* SECTION 5 - Submit */}
        <section>
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-orange-500 px-3"
          >
            Submit
          </button>
        </section>
      </form>
    </>
  );
}

export default RegisterUserForm;
