import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./styles/tailwind.output.css";
import { Navigate } from "react-router-dom";
import IndustrialColllaborations from "./pages/IndustrialColllaborations";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/collaborations" element={<IndustrialColllaborations />} />
        <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
