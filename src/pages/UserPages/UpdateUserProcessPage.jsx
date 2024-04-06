// HOOKs
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";
import { useNavbarContext } from "../../components/NavBarContext";
import UpdateUserProcessForm from "../../components/UserComponents/UpdateUserProcessForm.jsx";



function UpdateUserProcess() {

  const { isNavbarOpen } = useNavbarContext();

  return (
    <main className={`flex flex-col items-center justify-center min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>

      <section className="border-b p-4 border-gray-300 flex flex-col items-center pt-16">
        <h1 className="text-4xl font-bold text-slate-800 text-center mb-5">Starting on a journey to mentorship magic.....</h1>
      </section>

      <section>
        <UpdateUserProcessForm/>
      </section>
    </main>
  );
}

export default UpdateUserProcess;