import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { ProjectsDataTypes } from "../AllData";
import { ProjectsData } from "../AllData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Progress } from "@/components/ui/progress";

const ProjectsTable = () => {
  const projectsData = ProjectsData as ProjectsDataTypes[];
  return (
    <div className="w-full h-full">
      <div>
        <Card className="w-full h-full relative px-3">
          <div className="bg-blue-500 font-bold w-[96.6%] inset-shadow-xs inset-shadow-blue-800 shadow-md text-white p-6 rounded-lg absolute -top-6 left-4">
            Projects Table
          </div>
          <Table className="mt-12 ">
            <TableHeader className=" font-bold">
              <TableRow>
                <TableHead className="text-gray-400">Project</TableHead>
                <TableHead className="text-gray-400">Budget</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Completion</TableHead>
                <TableHead className="text-gray-400 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectsData.map((item, idx) => {
                return (
                  <TableRow key={idx} className="p-2 ">
                    <TableCell className="font-medium flex gap-3 p-2 py-4 w-fit justify-center items-center">
                      <span>
                        <Avatar>
                          <AvatarImage src={item.icon} className="cursor-pointer" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </span>
                      <div className="flex flex-col">
                        <span className="font-bold capitalize">
                          {item.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-500">
                      <div className="font-bold">${item.budget}</div>
                    </TableCell>
                    <TableCell className="text-gray-500 text-xs font-bold">
                      {item.status}
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm flex items-center justify-center gap-2">
                      <span className="font-bold text-gray-500 text-xs">{item.completion}%</span>
                      <Progress
                        value={item.completion}
                        className={cn(
                          "[&>div]:bg-blue-500 [&>div]:rounded-r-full",
                          item.completion === 100 ? "[&>div]:bg-green-500" : item.completion<=30 ? "[&>div]:bg-red-500" : ""
                        )}
                      />
                    </TableCell>
                    <TableCell className="text-gray-500 font-bold cursor-pointer text-center   ">
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};
export default ProjectsTable;
