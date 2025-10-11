import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./mycomponents/sidebarcomponents/Sidebar";

function App() {
  return <div className="grid grid-cols-[1.1fr_3.9fr] w-full h-full font-sans bg-gray-100">
    <div className="min-h-screen"> <Sidebar/></div>
    <div className=" m-5"> <Outlet/>  </div>
  </div>;
}

export default App;
