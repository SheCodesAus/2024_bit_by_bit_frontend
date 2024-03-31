// HOOKS
import { Link } from "react-router-dom";

// ELEMENTS
import { useNavbarContext } from "../../components/NavBarContext";

function HomePage() {

  const { isNavbarOpen } = useNavbarContext();
  const bannerPath = "/imgs/SCbanner10.jpg";

  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"} justify-center`}>

      <section className="border-b p-4 border-gray-300 flex flex-col items-center pt-16">
        <img src={bannerPath} className="w-full h-96"/>
        <div className="flex justify-center border-b p-4 border-gray-300 mb-4">
          <h1 className="font-bold text-3xl">Welcome to BYTE TIME!</h1>
        </div>
        <div className="flex justify-center space-x-2">
          <h3>Scheduling Success for She Codes Events!</h3>
        </div>
      </section>

      <section className="flex justify-center pt-4">
        <h3> click on one of the programs below for more information </h3>
      </section>

      <section className="flex flex-row justify-center border-b p-8 border-gray-300 mb-4">
        <div
          className="event-card bg-orange-400 shadow-md p-8 rounded-lg mx-4 flex justify-center border border-orange-300"
          style={{ minWidth: "300px" }}
        >
          <Link to="/about" className="font-bold text-white text-xl">
            {" "}
            PLUS{" "}
          </Link>
        </div>
        <div
          className="event-card bg-orange-400 shadow-md p-8 rounded-lg mx-4 flex justify-center border border-orange-300"
          style={{ minWidth: "300px" }}
        >
          <Link to="/about" className="font-bold text-white text-xl">
            {" "}
            ONE-DAY WORKSHOPS{" "}
          </Link>
        </div>
        <div
          className="event-card bg-orange-400 shadow-md p-8 rounded-lg mx-4 flex justify-center border border-orange-300"
          style={{ minWidth: "300px" }}
        >
          <Link to="/about" className="font-bold text-white text-xl">
            {" "}
            FLASH{" "}
          </Link>
        </div>
      </section>
      
    </main>
  );
}

export default HomePage;
