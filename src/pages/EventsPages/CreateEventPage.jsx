// COMPONENTS
import CreateEventForm from "../../components/EventComponents/CreateEventForm";
import { useState } from "react";
import { useNavbarContext } from "../../components/NavBarContext";

function CreateEventPage({ isOpen }) {

  const { isNavbarOpen } = useNavbarContext();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className={`p-10 ${isNavbarOpen ? "ml-60" : "ml-20"}`} style={{ paddingTop: "4rem" }}>
      {/* Adjust margin based on sidebar toggle */}
      <h1>This is the Create Event page</h1>
      <CreateEventForm />
    </main>
  );
}

export default CreateEventPage;