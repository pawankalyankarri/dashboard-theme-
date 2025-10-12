import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser, faGear } from "@fortawesome/free-solid-svg-icons";
const HeaderCom = () => {
  const location = useLocation();
  //   console.log(location.pathname);
  const paths = location.pathname.split("/").filter((item) => item !== "");
  //   console.log(paths);
  return (
    <div className="p-5 grid grid-cols-2 w-full h-full bg-gray-100 inset-shadow-sm inset-shadow-gray-50 rounded-lg ">
      <div className="w-full h-full">
        <Breadcrumb>
          <BreadcrumbList>
            {paths.map((item, idx) => {
              return (
                <BreadcrumbItem key={idx}>
                  <BreadcrumbLink href={`http://localhost:5173/${item}`} className="capitalize">
                    {item}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full grid grid-cols-2 gap-5 ">
        <div className="w-full">
            <Input placeholder="Search Here" className="py-5 w-[80%] inset-shadow-xs inset-shadow-gray-50" type="text"/>
        </div>
        <div className="text-gray-500 flex gap-3">
            <span><FontAwesomeIcon icon={faCircleUser}/></span>
            <span><FontAwesomeIcon icon={faGear}/></span>
            <span><FontAwesomeIcon icon={faBell}/></span>
        </div>
      </div>
    </div>
  );
};
export default HeaderCom;
