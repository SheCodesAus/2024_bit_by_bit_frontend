// HOOKs
import { useAuth } from "../../hooks/use-auth.js";
import useUser from "../../hooks/use-user.js";

function ProfileInformation() {
  const { auth } = useAuth();

  const { user } = useUser(auth.user_id);

  return (
    <>
      <section>
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
            <dd>{user?.slack}</dd>
          </section>
          {/* LINKEDIN */}
          <section className="mt-1 w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <dt className="text-sm font-medium text-gray-500">LinkedIn</dt>
            <dd>{user?.linkedin}</dd>
          </section>
        </section>
      </section>
    </>
  );
}

export default ProfileInformation;
