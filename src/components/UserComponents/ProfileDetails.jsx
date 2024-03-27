// HOOKs
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";
import useUser from "../../hooks/use_user.js";
import useUserProcess from "../../hooks/use-user-process.js";

// 🌟 STYLE REFERNCE: https://tailwindui.com/components/application-ui/data-display/description-lists 🌟

function ProfileInformation() {
  const { auth, setAuth } = useAuth();
  const { userID } = useParams();

  const token = window.localStorage.getItem("token");

  // const { user, isLoading, error } = useUser(userID);
  // console.log(user);
  // const { userProcess, isLoading, error } = useUserProcess(userID);
  // console.log(userProcess);

  // DUMMY DATA
  const user = {
    username: "dummyD",
    firstName: "Dummy",
    lastName: "User",
    email: "dummy@test.com",
    profilePic: "",
    bio: "I am the best dummy data around.",
    codingLanguage: "All of them!",
    contactNumber: 1568473200,
    slack: "DummySlack",
    linkedIn: "linkedin.com/dummyuser",
  };

  const userProcess = {
    user_onboarding_task: {
      "Slack provided": false,
      "LinkedIn provided": true,
      "Mentor code of conduct provided": false,
      "Mentor t-shirt provided": false,
    },
    user_offboarding_task: {
      "Feedback asked for": true,
      "Feedback recieved": true,
      "Mentor t-shirt returned": false,
    },
  };
  console.log("User Process: ", userProcess);

  const [isOnboardingChecked, setIsOnboardingChecked] = useState({
    ...userProcess.user_onboarding_task,
  });
  console.log("isOnboardingChecked: ", isOnboardingChecked);

  return (
    <>
      <section>
        {/* SECTION  - Basic Info */}
        <section>
          {/* NAMES */}
          <dl>
            <dt>First Name</dt>
            <dd>{user.firstName}</dd>
            <dt>Last Name</dt>
            <dd>{user.lastName}</dd>
          </dl>
          {/* CONTACT NUMBER*/}
          <dl>
            <dt>Contact Number</dt>
            <dd>{user.contactNumber}</dd>
          </dl>
          {/* EMAIL */}
          <dl>
            <dt>Email</dt>
            <dd>{user.email}</dd>
          </dl>
        </section>
        {/* SECTION  - Mentor Information */}
        <section>
          {/* BIO */}
          <section>
            <dt>Mentor Bio</dt>
            <dd>{user.bio}</dd>
          </section>
          {/* CODING LANGUAGES */}
          {/* TODO: Confirm how we want to allow users to select this/allowing multiple choices.*/}
          <section>
            <dt>Main Coding Language</dt>
            <dd>{user.language}</dd>
          </section>
          {/* Slack */}
          <section>
            <dt>Slack</dt>
            <dd>{user.slack}</dd>
          </section>
          {/* LINKEDIN */}
          <section>
            <dt>LinkedIn</dt>
            <dd>{user.linkedIn}</dd>
          </section>
        </section>
        {/* SECTION  - Onboarding Information */}
        <section>
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
        </section>

        {/* SECTION  -  Stats (Extra if time) */}
        <section></section>
      </section>
    </>
  );
}

export default ProfileInformation;
