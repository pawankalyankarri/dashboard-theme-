import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClipboard, faGrip, faReceipt, faRightFromBracket, faTable, faTableColumns, faUser} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { NavLink } from "react-router-dom";
import '../../App.css'
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/Separator";

const Sidebar = () => {
  return <div className="w-full h-full p-4">
    <ul className="flex gap-3.5 flex-col h-[99%] overflow-auto  p-9 pl-5 bg-gray-800 text-white rounded-l-lg ">
        <div className="w-full pb-3">
          <li className="flex gap-3 items-center font-bold "><FontAwesomeIcon icon={faTableColumns} className="text-2xl"/> Dashboard Theme </li>
        
        </div>
        <div className="w-full"><Separator className="" /></div>
        
        <NavLink to='/dashboard' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5 hover:bg-gray-400 hover:rounded-md",isActive ? "bg-blue-500 hover:bg-blue-500  w-full rounded-md" :"")}> <FontAwesomeIcon icon={faGrip}/>Dashboard</NavLink>
        <NavLink to='/table' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? "bg-blue-500 hover:bg-blue-500  w-full rounded-md" :"")}><FontAwesomeIcon icon={faTable}/>Table</NavLink>
        <NavLink to='/' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? "bg-blue-500 hover:bg-blue-500  w-full rounded-md" :"")}><FontAwesomeIcon icon={faReceipt}/> Billing</NavLink>
        <NavLink to='/' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? "bg-blue-500 hover:bg-blue-500  w-full rounded-md" :"")}><FontAwesomeIcon icon={faBell}/> Notifications</NavLink>
        <NavLink to='/' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? "bg-blue-500 hover:bg-blue-500  w-full rounded-md" :"")}><FontAwesomeIcon icon={faUser}/> Profile</NavLink>
        <NavLink to='/' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? "bg-blue-500 hover:bg-blue-500  w-full rounded-md" :"")}><FontAwesomeIcon icon={faRightFromBracket}/> Sign In</NavLink>
        <NavLink to='/' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2.5  hover:bg-gray-400 hover:rounded-md",isActive ? "bg-blue-500 hover:bg-blue-500  w-full rounded-md" :"")}><FontAwesomeIcon icon={faClipboard}/> Sign Up</NavLink>
        <li> <Button className="text-white bg-blue-500 uppercase w-full">Upgrade to pro</Button></li>
    </ul>
  </div>;
};

export default Sidebar;
