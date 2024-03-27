//COMPONENTS
import ProfileOverview from "../../components/UserComponents/ProfileOverview";
import ProfileInformation from "../../components/UserComponents/ProfileDetails";

function ProfilePage() {
  return (
    <main>
      {/* add section for profile photo - update buttons and image? */}
      <ProfileOverview />
      <ProfileInformation />
    </main>
  );
}

export default ProfilePage;
