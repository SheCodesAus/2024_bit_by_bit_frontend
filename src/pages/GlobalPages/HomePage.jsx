// HOOKS
import { useNavigate } from "react-router-dom";

// ELEMENTS
import GlobalAlertModal from "../../components/GlobalElements/GlobalAlertModal";
import ButtonElement from "../../components/GlobalElements/Button";

function HomePage() {
  const { projects } = useProjects();
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

  return (
    <main>
      <h1>This is the login page</h1>
      <GlobalAlertModal
        title={modalTitle}
        message={modalMessage}
        btnTxt={modalBtnTxt}
        btnAPICall={modalAPICall}
      />
      <ButtonElement message="test button" btnClick={goToLoginPage} />
    </main>
  );
}

export default HomePage;
