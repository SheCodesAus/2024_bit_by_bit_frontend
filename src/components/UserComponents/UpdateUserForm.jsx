// HOOKS
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../../hooks/use_user";

// API
import putUpdateUser from "../../api/put-update-user";
import getUser from "../../api/get-user";

// STYLE/TAILWIND
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function UpdateUserForm() {
  const navigate = useNavigate();
  //   const { id } = useParams();
  const { auth, setAuth } = useAuth();
  const { user, isLoading, error } = useUser(auth.user_id);
  const user_id = auth.user_id;
  const token = auth.token;

  //   console.log("user: ", user);

  const [userDetails, setUserDetails] = useState({
    username: "",
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    profilePic: "",
    bio: "",
    coding_language: "",
    slack: "",
    linkedIn: "",
  });

  useEffect(() => {
    if (user) {
      setUserDetails({
        first_name: user.first_name ?? "",
        last_name: user.last_name ?? "",
        contact_number: user.contact_number ?? "",
        email: user.email ?? "",
        profilePic: user.profilePic ?? "",
        bio: user.bio ?? "",
        coding_language: user.coding_language ?? "",
        slack: user.profilePic ?? "",
        linkedIn: user.profilePic ?? "",
      });
    }
  }, [user]);

  //   console.log("userDetails: ", userDetails);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

  {
    /* TO-DO: CREATE & IMPORT PUT-UPDATEUSER FILE TO TEST WITH API CALLS WHEN WE CAN LOG IN */
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await putUpdateUser(token, user_id, userDetails);
    if (updated) {
      navigate(`/users/${auth.user_id}`);
    } else {
      console.error("Failed to update profile");
    }
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center py-8"
      >
        {/* SECTION 1 - Account information */}
        <section className="w-full mb-4">
          {/* <h2 className="text-lg font-semibold mb-2">Account information</h2> */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* USERNAME */}
            {/* <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    autoComplete="username"
                                    placeholder="epicusername"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                </div> */}
            {/* PASSWORD */}
            {/* <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="new-password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                </div>
                                <div className="col-span-2 flex items-center justify-center">
                                <label htmlFor="check">Show Password</label>
                                <input
                                    type="checkbox"
                                    value={showpassword}
                                    onChange={() => setShowPassword((prev) => !prev)}
                                />
                                </div> */}
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
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                placeholder={user?.first_name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                placeholder={user?.last_name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* CONTACT NUMBER */}
            <div>
              <label
                htmlFor="contact_number"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="text"
                name="contact_number"
                id="contact_number"
                autoComplete="tel"
                placeholder={user?.contact_number}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                placeholder={user?.email}
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
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Mentor Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                placeholder={user?.bio}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
              />
            </div>
            {/* CODING LANGUAGES */}
            {/* TODO: Confirm how we want to allow users to select this/allowing multiple choices */}
            <div>
              <label
                htmlFor="coding_language"
                className="block text-sm font-medium text-gray-700"
              >
                Main Coding Language
              </label>
              <select
                id="coding_language"
                name="coding_language"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                type="text"
                name="slack"
                id="slack"
                placeholder={user?.slack}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder={user?.linkedIn}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </section>

        {/* SECTION 4 - Submit */}
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
    </main>
  );
}

export default UpdateUserForm;
