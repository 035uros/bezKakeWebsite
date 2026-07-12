import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/privatnost" element={<PrivacyPolicy />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        pauseOnHover
      />
    </>
  );
}

export default App;
