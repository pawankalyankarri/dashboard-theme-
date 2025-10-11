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
        <div><FontAwesomeIcon icon={faEllipsisV} className="px-5"/></div>
      </div>
      <Table>
        <TableHeader >
          <TableRow className="font-bold">
            <TableHead className="w-[100px] text-gray-400 ">Companies</TableHead>
            <TableHead className="text-gray-400">Members</TableHead>
            <TableHead className="text-gray-400">Budget</TableHead>
            <TableHead className="text-right text-gray-400">Completion</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TableData.map((item, idx) => {
            return (
              <TableRow key={idx} className="p-2">
                <TableCell className="font-medium">{item.companies}</TableCell>
                <TableCell>{item.members}</TableCell>
                <TableCell>{item.budget} </TableCell>
                <TableCell className="text-right">
                  <Progress value={item.completion} className={cn("[&>div]:bg-blue-500",item.completion===100 ? "[&>div]:bg-green-500":"" )}/>
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
