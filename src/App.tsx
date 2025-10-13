import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./mycomponents/sidebarcomponents/Sidebar";
import HeaderCom from "./mycomponents/HeaderCom";
import DashboardFooter from "./mycomponents/dashboardDetails/DashboardFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="grid grid-cols-5 w-full h-full gap-5 font-sans bg-gray-100 box-border">
      {/*  grid-cols-[1.1fr_3.9fr] */}
      <div className="h-screen fixed top-0 left-0">
        <Sidebar />
      </div>
      <div  className=" relative col-span-4 p-5 px-6 col-start-2 w-full">
        <div className="sticky top-5 z-10 w-full">
          <HeaderCom />
        </div >
        <div className=" w-full relative ">
          
          <div className="fixed right-13 bottom-13 z-10"><span className="p-3 bg-cyan-50 rounded-full shadow-2xl"><FontAwesomeIcon icon={faGear} className="" /></span></div>
          <Outlet />
        </div>
        <div className="w-full"><DashboardFooter/></div>

      </div>
    </div> 
  );
}

export default App;
