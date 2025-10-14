import { useEffect, useState } from "react";
import axios from "axios";
import { UserAPI } from "../Allapis";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export interface UserDataType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  icon : string,
  status : string,
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
interface StatusType{
    icon : string,
    status : string,
}
const AuthorsTable = () => {
  const [usersData, setUsersData] = useState<UserDataType[]>([]);
  useEffect(() => {
    axios
      .get(UserAPI)
      .then((res) => setUsersData(res.data["employess"]))
      .catch((err) => console.log(err));
  }, []);
  // const status : StatusType[] = [
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
  //     status: "online",
  //   },
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
  //     status: "offline",
  //   },
  //   {
  //     icon: "	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
  //     status: "online",
  //   },
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
  //     status: "online",
  //   },
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
  //     status: "offline",
  //   },
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
  //     status: "offline",
  //   },
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg",
  //     status: "online",
  //   },
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
  //     status: "offline",
  //   },
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg",
  //     status: "online",
  //   },
  //   {
  //     icon: "https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg",
  //     status: "online",
  //   },
  // ];
  return (
    <div className="w-full h-full pt-10 font-sans">
      {usersData.length === 0 ?  (<div className="text-center font-bold">Loading.... </div>) : 

      <Card className="w-full h-full relative px-3">
        <div className="bg-blue-500 font-bold w-[96.6%] inset-shadow-xs inset-shadow-blue-800 shadow-md text-white p-6 rounded-lg absolute -top-6 left-4"> Authors Table</div>
        <Table className="mt-12 ">
          <TableHeader className=" font-bold">
            <TableRow>
              <TableHead className="text-gray-400">Author</TableHead>
              <TableHead className="text-gray-400" >Function</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Phone</TableHead>
              <TableHead className="text-gray-400">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            {usersData.map((item, idx) => {
              return (
                <TableRow key={idx} className="p-2 ">
                  <TableCell className="font-medium flex gap-3 p-2 py-4 w-fit">
                    <span>
                      <Avatar>
                        <AvatarImage src={item.icon} className="cursor-pointer"/>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </span>
                    <div className="flex flex-col">
                        <span className="font-bold">{item.name}</span>
                        <span className="text-xs">{item.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700">
                   <div className="flex flex-col text-xs"> <span className=" font-bold">{item.company.name}</span>
                    <span>{item.website}</span></div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "uppercase",
                        item.status === "online"
                          ? "bg-green-600"
                          : "bg-black"
                      )}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600 text-sm">{item.phone}</TableCell>
                  <TableCell className="text-gray-600 text-xs font-bold cursor-pointer ">Edit</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>}
    </div>
  );
};
export default AuthorsTable;
