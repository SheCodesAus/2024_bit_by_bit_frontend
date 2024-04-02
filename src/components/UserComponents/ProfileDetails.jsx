// HOOKs
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";
import useUser from "../../hooks/use-user.js";
import useUserProcess from "../../hooks/use-user-process.js";

// 🌟 STYLE REFERNCE: https://tailwindui.com/components/application-ui/data-display/description-lists 🌟

function ProfileInformation() {
  const { auth, setAuth } = useAuth();

  const { user, isLoading, error } = useUser(auth.user_id);
  // console.log("user: ", user);
  // const { userProcess, isLoading, error } = useUserProcess(user_id);
  // console.log(userProcess);

  {/* MOVED SECTION TO PROFILE PAGE.JSX FOR BETTER LAYOUT */}
  // const userProcess = {
  //   user_onboarding_task: {
  //     "Slack provided": false,
  //     "LinkedIn provided": true,
  //     "Mentor code of conduct provided": false,
  //     "Mentor t-shirt provided": false,
  //   },
  //   user_offboarding_task: {
  //     "Feedback asked for": true,
  //     "Feedback recieved": true,
  //     "Mentor t-shirt returned": false,
  //   },
  // };
  // // console.log("User Process: ", userProcess);

  // const [isOnboardingChecked, setIsOnboardingChecked] = useState({
  //   ...userProcess.user_onboarding_task,
  // });
  // console.log("isOnboardingChecked: ", isOnboardingChecked);

  return (
    <>
      <section >
        {/* SECTION  - Basic Info */}
        <section>
          {/* NAMES */}
          <dl className="mt-1 w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <dt className="text-sm font-medium text-gray-500">First Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user?.first_name}
            </dd>
            <dt className="text-sm font-medium text-gray-500">Last Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user?.last_name}
            </dd>
          </dl>
          {/* CONTACT NUMBER*/}
          <dl className="mt-1 w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <dt className="text-sm font-medium text-gray-500">
              Contact Number
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user?.contact_number}
            </dd>
          </dl>
          {/* EMAIL */}
          <dl className="mt-1 w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd>{user?.email}</dd>
          </dl>
        </section>
        {/* SECTION  - Mentor Information */}
        <section>
          {/* BIO */}
          <section className="mt-1 w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <dt className="text-sm font-medium text-gray-500">Mentor Bio</dt>
            <dd>{user?.bio}</dd>
          </section>
          {/* CODING LANGUAGES */}
          {/* TODO: Confirm how we want to allow users to select this/allowing multiple choices.*/}
          <section className="mt-1 w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <dt className="text-sm font-medium text-gray-500">
              Main Coding Language
            </dt>
            <dd>{user?.coding_language}</dd>
          </section>
          {/* Slack */}
          <section className="mt-1 w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <dt className="text-sm font-medium text-gray-500">Slack</dt>
            {/* <dd>{user.slack}</dd> */}
          </section>
          {/* LINKEDIN */}
          <section className="mt-1 w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <dt className="text-sm font-medium text-gray-500">LinkedIn</dt>
            {/* <dd>{user.linkedIn}</dd> */}
          </section>
        </section>
        
        {/* SECTION  - Onboarding Information */}
        {/* <section className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <h2>Mentor Onboarding</h2>
          <dt>Slack username provided?</dt>
          <input
            type="checkbox"
            checked={isOnboardingChecked["Slack provided"]}
          />
          <dt>LinkedIn link Provided?</dt>
          <input
            type="checkbox"
            checked={isOnboardingChecked["LinkedIn provided"]}
          />
          <dt>Mentor code of conduct provided?</dt>
          <input
            type="checkbox"
            checked={isOnboardingChecked["Mentor code of conduct provided "]}
          />
          <dt>Mentor t-shirt provided?</dt>
          <input
            type="checkbox"
            checked={isOnboardingChecked["Mentor t-shirt provided"]}
          />
        </section> */}

        {/* SECTION  -  Stats (Extra if time) */}
        <section></section>
      </section>
    </>
  );
}

export default ProfileInformation;
