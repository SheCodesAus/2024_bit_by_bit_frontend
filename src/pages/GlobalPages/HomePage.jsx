// HOOKS
import { Link, useNavigate } from "react-router-dom";

// ELEMENTS
import GlobalAlertModal from "../../components/GlobalElements/GlobalAlertModal";
import ButtonElement from "../../components/GlobalElements/Button";
import { useNavbarContext } from "../../components/NavBarContext";

function HomePage() {
  const navigate = useNavigate();
  // MODAL Variables
  const modalTitle = "Global Modal Template";
  const modalMessage = "This is a global modal template";
  const modalBtnTxt = "Modal";
  const modalAPICall = console.log("this is the api call");

  //BUTTON Functions
  const goToLoginPage = (event) => {
    event.preventDefault();
    console.log("going to login page");
    navigate("/");
  };

  const { isNavbarOpen } = useNavbarContext();
  const bannerPath = "/imgs/banner_img.jpg";

  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"} justify-center`}>

      {/* <GlobalAlertModal
        title={modalTitle}
        message={modalMessage}
        btnTxt={modalBtnTxt}
        btnAPICall={modalAPICall}
      />
      <ButtonElement message="test button" btnClick={goToLoginPage} /> */}

      <section className="border-b p-4 border-gray-300">
        <img src={bannerPath}/>
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
        <div className="event-card bg-white shadow-md p-8 rounded-lg mx-4 flex justify-center border border-orange-300" style={{ minWidth: '300px' }}>
          <Link to="/about" className="text-xl"> PLUS </Link>
        </div>
        <div className="event-card bg-white shadow-md p-8 rounded-lg mx-4 flex justify-center border border-orange-300" style={{ minWidth: '300px' }}>
        <Link to="/about" className="text-xl"> ONE-DAY WORKSHOPS </Link>
        </div>
        <div className="event-card bg-white shadow-md p-8 rounded-lg mx-4 flex justify-center border border-orange-300" style={{ minWidth: '300px' }}>
        <Link to="/about" className="text-xl"> FLASH </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
