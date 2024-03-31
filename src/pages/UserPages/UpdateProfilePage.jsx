// HOOKs
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";
import { useNavbarContext } from "../../components/NavBarContext";

import UpdateUserForm from "../../components/UserComponents/UpdateUserForm";

function UpdateProfilePage() {

  const { isNavbarOpen } = useNavbarContext();

  return (
    <main className={`flex flex-col items-center justify-center min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>

      <section className="border-b p-4 border-gray-300 flex flex-col items-center pt-16">
        <h1 className="text-4xl font-bold text-slate-800 text-center mb-5">UPDATE YOUR DETAILS</h1>
      </section>

      <section>
        <UpdateUserForm />
      </section>
    </main>
  );
}

export default UpdateProfilePage;
