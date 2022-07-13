import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./styles/tailwind.output.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
