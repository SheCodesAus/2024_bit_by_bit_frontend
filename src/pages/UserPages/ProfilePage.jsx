//COMPONENTS
import ProfileOverview from "../../components/UserComponents/ProfileOverview";
import ProfileInformation from "../../components/UserComponents/ProfileDetails";
import { useNavbarContext } from "../../components/NavBarContext";

function ProfilePage() {

  const { isNavbarOpen } = useNavbarContext();

  return (
    <main className={`flex min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"} justify-center`}>
      <section className="flex flex-col md:flex-row w-full max-w-4xl p-4">
        <div>
          {/* add section for profile photo - update buttons and image? */}
          <ProfileOverview />
        </div>
        <div className="flex-1">
          <ProfileInformation />
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
