import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { CompaniesDataTypes } from "../AllData";
import { CompaniesData } from "../AllData";
import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CompaniesTable = () => {
  const TableData = CompaniesData as CompaniesDataTypes[];
  return (
    <Card className="w-full p-5 font-sans">
      <div className="flex justify-between p-2 ">
        <div className="flex flex-col gap-1 text-md">
          <span className="font-bold">Projects</span>
          <span className="text-gray-400">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-blue-500 font-bold text-md  "
            />
            <span className="font-semibold">30 done</span> this month
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsisV} className="px-5" />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead className=" text-gray-400 w-fit px-1">Companies</TableHead>
            <TableHead className="text-gray-400 px-1">Members</TableHead>
            <TableHead className="text-gray-400 px-1">Budget</TableHead>
            <TableHead className="text-right text-gray-400 px-1">
              Completion
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TableData.map((item, idx) => {
            return (
              <TableRow key={idx} className="w-full">
                <TableCell className="font-medium py-3 w-fit">
                  <div className="flex items-center">
                    <img
                      src={item.companiesIcon}
                      alt=""
                      className="w-10 h-10"
                    />
                    <span>{item.companies}</span>
                  </div>
                </TableCell>
                <TableCell className="flex -space-x-2 justify-center items-center px-5">
                  {item.members.map((icon, idx) => {
                    return (
                      <Avatar key={idx} className="w-5.5 h-5.5 cursor-pointer mt-2.5 ">
                        <AvatarImage src={icon} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    );
                  })}
                </TableCell>
                <TableCell className="font-bold text-gray-400 text-xs">
                  {typeof item.budget === "number" ? (
                    <span className="">$</span>
                  ) : (
                    ""
                  )}
                  {item.budget}
                </TableCell>
                <TableCell className="text-right">
                  <Progress
                    value={item.completion}
                    className={cn(
                      "[&>div]:bg-blue-500 [&>div]:rounded-r-full",
                      item.completion === 100 ? "[&>div]:bg-green-500" : ""
                    )}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};
export default CompaniesTable;
