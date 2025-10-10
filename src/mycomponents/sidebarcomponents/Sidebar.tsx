import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClipboard, faGrip, faReceipt, faRightFromBracket, faTable, faTableColumns, faUser} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { NavLink } from "react-router-dom";
import '../../App.css'
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/Separator";

const Sidebar = () => {
  return <div className="w-full h-full p-4">
    <ul className="flex gap-10 flex-col h-[95%] overflow-auto  p-5 pl-5 bg-gray-800 text-white rounded-l-lg ">
        <div>
          <li className="flex gap-3 items-center"><FontAwesomeIcon icon={faTableColumns} className="text-2xl"/> Dashboard Theme </li>
        <Separator className="mt-5" />
        </div>
        
        <NavLink to='/' className={({isActive})=>cn("flex gap-3 items-center px-4 py-2",isActive ? "bg-blue-500  w-full rounded-md" :"")}> <FontAwesomeIcon icon={faGrip}/>Dashboard</NavLink>
        <li className="flex gap-3 items-center"><FontAwesomeIcon icon={faTable}/>Table</li>
        <li className="flex gap-3 items-center"><FontAwesomeIcon icon={faReceipt}/> Billing</li>
        
        <li className="flex gap-3 items-center"><FontAwesomeIcon icon={faBell}/> Notifications</li>
        <li className="flex gap-3 items-center"><FontAwesomeIcon icon={faUser}/> Profile</li>
        <li className="flex gap-3 items-center"><FontAwesomeIcon icon={faRightFromBracket}/> Sign In</li>
        <li className="flex gap-3 items-center"><FontAwesomeIcon icon={faClipboard}/> Sign Up</li>
        <li className="flex gap-3 items-center"><FontAwesomeIcon icon={faClipboard}/> <Button className="text-white bg-blue-500 uppercase w-full">Upgrade to pro</Button></li>
    </ul>
  </div>;
};

export default Sidebar;
