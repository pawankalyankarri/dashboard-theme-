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
import {
  faBell,
  faCircleUser,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { localhost } from "./AllData";
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
            <BreadcrumbLink href={`${localhost}/dashboard`}>
              <FontAwesomeIcon icon={faHouse} /> /
            </BreadcrumbLink>
            {paths.map((item, idx) => {
              return (
                <BreadcrumbItem key={idx}>
                  <BreadcrumbLink
                    href={`${localhost}/${item}`}
                    className="capitalize"
                  >
                    {item}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
          <span  className="capitalize font-bold text-sm py-2 text-gray-700">{paths[paths.length-1]}</span>
        </Breadcrumb>
      </div>
      <div className="w-full grid grid-cols-2 place-items-end gap-5 ">
        <div className="w-full flex justify-end">
          <Input
            placeholder="Search Here"
            className="py-5 w-[80%] inset-shadow-xs inset-shadow-gray-50 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus:outline-none"
            type="text"

          />
        </div>
        <div className="text-gray-500 flex gap-3 justify-end">
          <span>
            <FontAwesomeIcon icon={faCircleUser} className="cursor-pointer" />
          </span>
          <span>
            <FontAwesomeIcon icon={faGear} className="cursor-pointer" />
          </span>
          <span>
            <FontAwesomeIcon icon={faBell} className="cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default HeaderCom;
