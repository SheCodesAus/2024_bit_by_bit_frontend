// HOOKS
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';
import getUser from '../../api/get-user'

// STYLE/TAILWIND
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function UpdateUserForm() {

    // const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

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

    useEffect(() => {
        if (auth.id) {
            getUser(auth.userID)
                .then((data) => {
                    setUserDetails({
                        firstName: data.firstName ?? '',
                        lastName: data.lastName ?? '',
                        contactNumber: data.contactNumber ?? '',
                        email: data.email ?? '',
                        profilePic: data.profilePic ?? '',
                        bio: data.bio ?? '',
                        codingLanguage: data.profilePic ?? '',
                        slack: data.profilePic ?? '',
                        linkedIn: data.profilePic ?? '',
                    });
                })
                .catch((error) => {
                    console.error("Failed to load user details:", error);
                });
        }
    }, [auth.id]);

    const handleChange = (event) => {
        const { userID, value } = event.target;
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            [userID]: value,
        }));
    };

    {/* TO-DO: CREATE & IMPORT PUT-UPDATEUSER FILE TO TEST WITH API CALLS WHEN WE CAN LOG IN */ }
    const handleSubmit = async (event) => {
        event.preventDefault();
        //   const updated = await updateUser(auth.id, userDetails);
        //   if (updated) {
        //       navigate('/profile');
        //   } else {
        //       console.error('Failed to update profile');
        //   }
    };

    return (
        <main>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center py-8">

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
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    autoComplete="given-name"
                                    placeholder="Taylor"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    autoComplete="family-name"
                                    placeholder="Swift"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/* CONTACT NUMBER */}
                            <div>
                                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    id="contactNumber"
                                    autoComplete="tel"
                                    placeholder="555 2368"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/* EMAIL */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    placeholder="tayloristhebest@swift.com"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/* PROFILE PICTURE */}
                            <div className="col-span-2 flex items-center justify-center">
                                <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700 mr-2">Profile Picture</label>
                                <PhotoIcon className="h-6 w-6 text-gray-400" />
                                <button type="button" className="ml-2 text-sm text-blue-600 hover:text-blue-700 focus:outline-none">Change</button>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3 - Mentor Information */}
                    <section className="w-full mb-4">
                        <h2 className="text-lg font-semibold mb-2">Mentor Information</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* BIO */}
                            <div>
                                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Mentor Bio</label>
                                <textarea
                                    name="bio"
                                    id="bio"
                                    placeholder="I am an incredible mentor with experience in X, Y and Z. When I am not coding or mentoring I am being a QUEEN!"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    rows="4"
                                />
                            </div>
                            {/* CODING LANGUAGES */}
                            {/* TODO: Confirm how we want to allow users to select this/allowing multiple choices */}
                            <div>
                                <label htmlFor="codingLanguage" className="block text-sm font-medium text-gray-700">Main Coding Language</label>
                                <select
                                    id="codingLanguage"
                                    name="codingLanguage"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="htmlCss">HTML/CSS</option>
                                    <option value="python">Python</option>
                                    <option value="django">Django</option>
                                    <option value="jsReact">Javascript and React</option>
                                    <option value="wordpress">Wordpress</option>
                                </select>
                            </div>
                            {/* SLACK */}
                            <div>
                                <label htmlFor="slack" className="block text-sm font-medium text-gray-700">Slack</label>
                                <input
                                    type="text"
                                    name="slack"
                                    id="slack"
                                    placeholder="mySlack URL"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/* LINKEDIN */}
                            <div>
                                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn</label>
                                <input
                                    type="text"
                                    name="linkedin"
                                    id="linkedin"
                                    placeholder="myLinkedIn URL"
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