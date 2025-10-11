import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./mycomponents/sidebarcomponents/Sidebar";

function App() {
  return <div className="grid grid-cols-5 w-full h-full gap-0 font-sans bg-gray-100">  {/*  grid-cols-[1.1fr_3.9fr] */}
    <div className="h-screen fixed top-0 left-0"> <Sidebar/></div>
    <div className="col-span-4 m-5 col-start-2"> <Outlet/>  </div>
  </div>;
}

export default App;
