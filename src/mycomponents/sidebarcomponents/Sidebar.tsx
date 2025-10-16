import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClipboard, faGrip, faReceipt, faRightFromBracket, faTable, faTableColumns, faUser} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { NavLink } from "react-router-dom";
import '../../App.css'
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/Separator";

interface ActiveColorTypeProp {
  ActiveColor : string;
  sidebarbgColor : string;
}

const Sidebar = ({ActiveColor,sidebarbgColor}:ActiveColorTypeProp) => {
  return <div className="w-full h-full p-4">
    <ul className={cn("flex gap-3.5 flex-col h-[99%] overflow-auto  p-9 pl-5  text-white rounded-l-lg ",sidebarbgColor)}>
        <div className="w-full pb-3">
          <li className={cn("flex gap-3 items-center font-bold ",sidebarbgColor === "bg-gray-800" ? "text-white" :"text-gray-700")}><FontAwesomeIcon icon={faTableColumns} className="text-2xl"/> Dashboard Theme </li>
        
        </div>
        <div className={cn("w-full")}><Separator className="" /></div>
        
        <NavLink to='/dashboard' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5 hover:bg-gray-400 hover:rounded-md",isActive ? `${ActiveColor} hover:${ActiveColor}  w-full rounded-md` : sidebarbgColor === "bg-gray-800" ? "text-white" :"text-gray-700")}> <FontAwesomeIcon icon={faGrip}/>Dashboard</NavLink>
        <NavLink to='/table' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? `${ActiveColor} hover:${ActiveColor}  w-full rounded-md` :sidebarbgColor === "bg-gray-800" ? "text-white" :"text-gray-700")}><FontAwesomeIcon icon={faTable}/>Table</NavLink>
        <NavLink to='/billing' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? `${ActiveColor} hover:${ActiveColor}  w-full rounded-md` :sidebarbgColor === "bg-gray-800" ? "text-white" :"text-gray-700")}><FontAwesomeIcon icon={faReceipt}/> Billing</NavLink>
        <NavLink to='/notifications' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? `${ActiveColor} hover:${ActiveColor}  w-full rounded-md` :sidebarbgColor === "bg-gray-800" ? "text-white" :"text-gray-700")}><FontAwesomeIcon icon={faBell}/> Notifications</NavLink>
        <NavLink to='/profile' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? `${ActiveColor} hover:${ActiveColor}  w-full rounded-md` :sidebarbgColor === "bg-gray-800" ? "text-white" :"text-gray-700")}><FontAwesomeIcon icon={faUser}/> Profile</NavLink>
        <NavLink to='/signin' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? `${ActiveColor} hover:${ActiveColor}  w-full rounded-md` :sidebarbgColor === "bg-gray-800" ? "text-white" :"text-gray-700")}><FontAwesomeIcon icon={faRightFromBracket}/> Sign In</NavLink>
        <NavLink to='/signup' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? `${ActiveColor} hover:${ActiveColor}  w-full rounded-md` :sidebarbgColor === "bg-gray-800" ? "text-white" :"text-gray-700")}><FontAwesomeIcon icon={faClipboard}/> Sign Up</NavLink>
        <li> <Button className={cn(" cursor-pointer uppercase w-full",`${ActiveColor} hover:${ActiveColor}`)}>Upgrade to pro</Button></li>
    </ul>
  </div>;
};

export default Sidebar;
