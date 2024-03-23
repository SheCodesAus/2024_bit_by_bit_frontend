// ELEMENTS
import GlobalAlertModal from "../../components/GlobalElements/GlobalAlertModal";

// API
import getEvent from "../../api/get-event";

function HomePage() {
  const modalTitle = "Global Modal Template";
  const modalMessage = "This is a global modal template";
  const modalBtnTxt = "Modal";
  const modalAPICall = console.log("this is the api call");

  return (
    <main>
      <h1>This is the login page</h1>
      <GlobalAlertModal
        title={modalTitle}
        message={modalMessage}
        btnTxt={modalBtnTxt}
        btnAPICall={modalAPICall}
      />
    </main>
  );
}

export default HomePage;
