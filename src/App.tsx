import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./mycomponents/sidebarcomponents/Sidebar";
import HeaderCom from "./mycomponents/HeaderCom";
import DashboardFooter from "./mycomponents/dashboardDetails/DashboardFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "./components/ui/card";

function App() {
  const [rSidebarFlag, setRSidebarFalg] = useState<Boolean>(false);
  return (
    <div className="grid grid-cols-5 w-full h-full gap-5 font-sans bg-gray-100 box-border">
      {/*  grid-cols-[1.1fr_3.9fr] */}
      <div className="h-screen fixed top-0 left-0">
        <Sidebar />
      </div>
      <div className=" relative col-span-4 p-5 px-6 col-start-2 w-full h-full">
        <div className="sticky top-5 z-10 w-full">
          <HeaderCom />
        </div>
        <div className=" w-full ">
          <div className=" w-full h-full relative">
            {rSidebarFlag ? (
              <div className="w-[30%] h-full fixed right-0">
                <Card className="z-10">
                  <CardHeader className="grid grid-cols-3">
                    <div className="col-span-2 flex flex-col">
                      <span className="font-bold text-lg">Material UI Configurator</span>
                      <span>See our dashboard options.</span>
                    </div>
                    <div className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer" onClick={()=>setRSidebarFalg(!rSidebarFlag)} /></div>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </div>
            ) : (
              <span className="p-4 bg-cyan-50 rounded-full shadow-2xl cursor-pointer fixed right-10 bottom-10 z-10" onClick={() => setRSidebarFalg(!rSidebarFlag)}>
                <FontAwesomeIcon
                  icon={faGear}
                  className=""
                  
                />
              </span>
            )}
          </div>
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
        <div className="w-full">
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
