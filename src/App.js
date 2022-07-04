import AcademicBackground from "./pages/AcademicBackground";
import AwardsHonors from "./pages/AwardsHonors";
import Home from "./pages/Home";
import "./styles/tailwind.output.css";

const App = () => {
  return (
    <div className="w-fit h-fit overflow-hidden p-0 m-0 flex flex-col justify-start items-start">
      <Home />
      <AwardsHonors />
      <AcademicBackground/>
    </div>
  );
};

export default App;
