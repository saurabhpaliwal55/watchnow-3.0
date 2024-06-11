import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex border border-white overflow-y-scroll max-h-[90vh]">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
