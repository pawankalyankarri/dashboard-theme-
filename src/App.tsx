import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./mycomponents/sidebarcomponents/Sidebar";
import HeaderCom from "./mycomponents/HeaderCom";
import DashboardFooter from "./mycomponents/dashboardDetails/DashboardFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { Separator } from "./components/ui/Separator";
import { Button } from "./components/ui/Button";
import { Label } from "./components/ui/label";
import { Switch } from "./components/ui/switch";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { cn } from "./lib/utils";

function App() {
  const [rSidebarFlag, setRSidebarFalg] = useState<Boolean>(false);
  const [navActiveColor,setNavActiveColor] = useState<string>("bg-blue-600")
  const [sidebarbgColor,setSidebarbgColor] = useState<string>("bg-gray-800")
  return (
    <div className="grid grid-cols-5 w-full h-full gap-5 font-sans bg-gray-100 box-border">
      {/*  grid-cols-[1.1fr_3.9fr] */}
      <div className="h-screen fixed top-0 left-0">
        <Sidebar ActiveColor={navActiveColor} sidebarbgColor={sidebarbgColor} />
      </div>
      <div className=" relative col-span-4 p-5 px-6 col-start-2 w-full h-full">
        <div className="sticky top-5 z-10 w-full">
          <HeaderCom />
        </div>
        <div className=" w-full ">
          <div className=" w-full h-full relative z-40 ">
            {rSidebarFlag ? (
              <Card className="p-3 w-[29%] h-full fixed right-0 top-0  overflow-y-scroll">
                <CardHeader className="grid grid-cols-10">
                  <div className="col-span-9 flex flex-col">
                    <span className="font-bold text-xl text-gray-600">
                      Material UI Configurator
                    </span>
                    <span className="text-gray-500">
                      See our dashboard options.
                    </span>
                  </div>
                  <div className="flex justify-end items-center">
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="cursor-pointer"
                      onClick={() => setRSidebarFalg(!rSidebarFlag)}
                    />
                  </div>
                </CardHeader>
                <div className="flex justify-center">
                  <Separator className="w-[70%] " />
                </div>
                <CardContent className="grid gap-5">
                  <div className="w-full h-full grid gap-3">
                    <span className="capitalize font-bold text-gray-700">sidenav colors</span>
                    <div className="w-full h-full flex gap-2">
                      <div className="w-[23px] h-[23px] bg-pink-600 rounded-full hover:outline-1 hover:outline-gray-800 cursor-pointer" onClick={()=>setNavActiveColor("bg-pink-500")}></div>
                      <div className="w-[23px] h-[23px] bg-black rounded-full hover:outline-1 hover:outline-gray-800 cursor-pointer" onClick={()=>setNavActiveColor("bg-black")}></div>
                      <div className="w-[23px] h-[23px] bg-blue-600 rounded-full hover:outline-1 hover:outline-gray-800 cursor-pointer" onClick={()=>setNavActiveColor("bg-blue-500")}></div>
                      <div className="w-[23px] h-[23px] bg-green-600 rounded-full hover:outline-1 hover:outline-gray-800 cursor-pointer" onClick={()=>setNavActiveColor("bg-green-500")}></div>
                      <div className="w-[23px] h-[23px] bg-orange-600 rounded-full hover:outline-1 hover:outline-gray-800 cursor-pointer" onClick={()=>setNavActiveColor("bg-orange-400")}></div>
                      <div className="w-[23px] h-[23px] bg-red-600 rounded-full hover:outline-1 hover:outline-gray-800 cursor-pointer" onClick={()=>setNavActiveColor("bg-red-600")}></div>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <div className="grid gap-2">
                      <span className="font-bold text-gray-700">Sidenav Type</span>
                      <span className="text-sm text-gray-400">Choose between different sidenav types.</span>
                    </div>
                    <div className="w-full flex gap-3 ">
                      <Button className={cn("uppercase text-xs font-bold bg-white text-gray-600 outline-1 outline-gray-500 hover:bg-white hover:shadow-md cursor-pointer",sidebarbgColor === "bg-gray-800" ? "bg-gray-800 text-white hover:bg-gray-800 hover:text-white" : "")} onClick={()=>setSidebarbgColor("bg-gray-800")}>dark</Button>
                      <Button className={cn("uppercase text-xs font-bold bg-white text-gray-600 outline-1 outline-gray-500 hover:bg-white hover:shadow-md cursor-pointer",sidebarbgColor === "bg-transparent" ? "bg-gray-800 text-white hover:bg-gray-800 hover:text-white" : "")} onClick={()=>setSidebarbgColor("bg-transparent")}>transparent</Button>
                      <Button className={cn("uppercase text-xs font-bold bg-white text-gray-600 outline-1 outline-gray-500 hover:bg-white hover:shadow-md cursor-pointer",sidebarbgColor === "bg-white" ? "bg-gray-800 text-white hover:bg-gray-800 hover:text-white" : "")} onClick={()=>setSidebarbgColor("bg-white")}>white</Button>
                    </div>
                  </div>
                  <div className="grid gap-5">
                    <div className="flex justify-between">
                      <Label className="font-bold text-md text-gray-600" htmlFor="nf">Navbar Fixed</Label>
                      <Switch className=" cursor-pointer" id="nf" />
                    </div>
                    <div className="w-full flex justify-center"><Separator className="w-[70%] "/></div>
                    <div className="flex justify-between">
                      <Label className="font-bold text-md text-gray-600" htmlFor="ld">Light / Dark</Label>
                      <Switch className=" cursor-pointer" id="ld" />
                      
                    </div>
                    <div className="w-full flex justify-center"><Separator className="w-[70%]  "/></div>

                  </div>
                  <div className="w-full flex gap-3 flex-col">
                    <div>
                      <Button className="w-full  cursor-pointer uppercase text-xs font-bold bg-white text-gray-600 outline-1 outline-gray-500 hover:bg-white">view documentation</Button>
                    </div>
                    <div className=" flex justify-center text-xs font-bold">
                      <div className="outline-1 cursor-pointer outline-gray-400 px-3 py-1 bg-gray-200 rounded-l">
                        <FontAwesomeIcon
                          icon={regularStar}
                          className="text-sm"
                        />
                        star
                      </div>
                      <div className="outline-1 outline-gray-400 px-3 py-1 rounded-r ">
                        2,989
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 ">
                  <div className="font-bold">Thank you for sharing!</div>
                  <div className="flex gap-5 w-full justify-center">
                    <Button className=" cursor-pointer bg-blue-950 hover:bg-blue-950 px-8 flex gap-1 uppercase  font-bold">
                      <FaTwitter />
                      <span className="text-xs">Tweet</span>
                    </Button>
                    <Button className="cursor-pointer bg-blue-950 hover:bg-blue-950 px-8 flex gap-1 uppercase  font-bold">
                      <FaFacebookF />
                      <span className="text-xs">Share</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <span
                className="p-4 bg-cyan-50 rounded-full shadow-2xl cursor-pointer fixed right-10 bottom-10 z-10"
                onClick={() => setRSidebarFalg(!rSidebarFlag)}
              >
                <FontAwesomeIcon icon={faGear} className=" cursor-pointer" />
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
