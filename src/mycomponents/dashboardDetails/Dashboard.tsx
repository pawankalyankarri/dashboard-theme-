import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DbBarChart from "./Charts/DbBarChart";
import DashBoardHeader from "./DashBoardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlarmClock, faClock } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "@/components/ui/Separator";



const Dashboard = () => {
  return (
    <div className="flex items-center flex-col m-0">
      <DashBoardHeader/>
      <div className="grid grid-cols-3 h-full w-full py-5">
        <Card className="relative h-full">
          <CardHeader className=" w-full h-full absolute -top-10">
            <CardTitle className="w-full h-[200px]  text-white bg-blue-500 rounded-lg"><DbBarChart/></CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col pt-36">
            <span className="font-bold">Website Views</span>
            <span>Last Campaign Performance</span>
          </CardContent>
          <Separator className="w-[80%] m-auto"/>
          <CardFooter>
            <FontAwesomeIcon icon={faClock} className="px-2" />Campaign sent to 2 days ago
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default Dashboard;
