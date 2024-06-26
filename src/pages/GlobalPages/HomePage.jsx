// HOOKS
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

// ELEMENTS
import { useNavbarContext } from "../../components/NavBarContext";

function HomePage() {

  const { isNavbarOpen } = useNavbarContext();
  const bannerPath = "/imgs/SCbanner10.jpg";

  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"} justify-center`}>

      <style>
        {`::-webkit-scrollbar {width: 8px;} ::-webkit-scrollbar-track {background: #ffffff;} ::-webkit-scrollbar-thumb {background-color: orange; border-radius: 10px; border: 2px solid #ffffff;}`}
      </style>

      <section className="border-b p-4 border-gray-300 flex flex-col items-center pt-16">
        <img src={bannerPath} className="w-full h-auto object-cover sm:h-96" />
        <div className="flex justify-center p-4">
          <h1 className="font-bold text-5xl">WELCOME TO BYTE TIME!</h1>
        </div>
        <p className="font-bold">Starting on a journey to mentorship magic!</p>
      </section>

      <section className="flex justify-center pt-4">
        <h3> Click on one of the program titles below for more information: </h3>
      </section>

      <section className="flex flex-col sm:flex-row justify-center items-center border-b p-8 border-gray-300 mb-4">
        <div>
          <Link
            to="/about#PLUS_PROGRAM"
            className="event-card bg-orange-400 shadow-md p-8 rounded-lg mx-4 my-2 sm:my-0 flex justify-center border border-orange-300 text-white text-xl font-bold"
            style={{ minWidth: "300px", cursor: "pointer" }}
          >
            PLUS
          </Link>
        </div>
        <div>
          <Link
            to="/about#ONE_DAY_WORKSHOP"
            className="event-card bg-orange-400 shadow-md p-8 rounded-lg mx-4 my-2 sm:my-0 flex justify-center border border-orange-300 text-white text-xl font-bold"
            style={{ minWidth: "300px", cursor: "pointer" }}
          >
            ONE DAY WORKSHOPS
          </Link>
        </div>
        <div>
          <Link
            to="/about#FLASH"
            className="event-card bg-orange-400 shadow-md p-8 rounded-lg mx-4 my-2 sm:my-0 flex justify-center border border-orange-300 text-white text-xl font-bold"
            style={{ minWidth: "300px", cursor: "pointer" }}
          >
            FLASH
          </Link>
        </div>
      </section>

    </main>
  );
}

export default HomePage;
