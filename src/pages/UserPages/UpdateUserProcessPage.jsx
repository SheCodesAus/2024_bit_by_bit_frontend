// HOOKs
import { useNavbarContext } from "../../components/NavBarContext";
import UpdateUserProcessForm from "../../components/UserComponents/UpdateUserProcessForm.jsx";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


function UpdateUserProcess() {
  const { id } = useParams();
  const { auth, setAuth } = useAuth();
  const { isNavbarOpen } = useNavbarContext();

  return (
    <main className={`flex flex-col items-center justify-center min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"} bg-white`}>

      <style>
        {`::-webkit-scrollbar {width: 8px;} ::-webkit-scrollbar-track {background: #ffffff;} ::-webkit-scrollbar-thumb {background-color: orange; border-radius: 10px; border: 2px solid #ffffff;}`}
      </style>

      <section className="flex flex-col items-center pt-16 border-b border-gray-200">
        <img src="/imgs/SCbanner9.jpg" className="w-full px-4 h-auto object-cover"/>
        <h1 className="text-4xl font-bold text-center text-slate-800">ONBOARDING & OFFBOARDING CHECKLIST</h1>
      </section>

      <section className="w-full max-w-4xl mt-4 bg-orange-100/90 rounded-lg p-4 shadow-md">
        <UpdateUserProcessForm id={id} />
      </section>
    </main>
  );
}

export default UpdateUserProcess;