import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DbBarChart from "./Charts/DbBarChart";
import DashBoardHeader from "./DashBoardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faClock } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "@/components/ui/Separator";
import DbLineChart from "./Charts/DbLineChart";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState} from "react";
import CompaniesTable from "./CompaniesTable";
import OrdersOverview from "./OrdersOverview";
import axios from "axios";
import { DaySalesAPI, MonthSalesAPI } from "../Allapis";

export interface BarChartDataType  {
    day: string,
    sales: number
  }

// export interface chartTypes{
//   chart : React.ComponentType<{BarChartData : BarChartDataType[] }>,
//   bg : string,
//   title : string,
//   body : string,
//   footer : string
// }

export interface LineDatatype {
    Month: string,
    Sales: number
  }



const Dashboard = () => {
  const [barData,setBarData] = useState<BarChartDataType[]>([])
  const [lineData,setLineData] = useState<LineDatatype[]>([])
  const mountFalg = useRef<boolean>(false)
//  const chartsComponents : chartTypes[] = [
//     {
//       chart: DbBarChart,
//       bg: "bg-blue-500",
//       title: "Website Views",
//       body: "Last Campaign Performance",
//       footer : "campaign sent 2 days ago"
//     },
//     {
//       chart: DbLineChart,
//       bg: "bg-green-500",
//       title: "Daily sales",
//       body: "(+15%) increase in today sales",
//       footer : "updated 4 min ago"
//     },
//     {
//       chart: DbLineChart,
//       bg: "bg-black",
//       title: "Completed Tasks",
//       body: "Last Campaign Performance",
//       footer : "just updated "
//     },
//   ];  

  useEffect(()=>{
    if(mountFalg.current) return;
    mountFalg.current = true
    axios.get(DaySalesAPI).then(res=>setBarData(res.data)).catch(err=>console.log(err))
    axios.get(MonthSalesAPI).then(res=>setLineData(res.data)).catch(err=>console.log(err))
  },[])

  

  return (
    <div className="flex items-center flex-col m-0">
      <DashBoardHeader />
      <div className="grid grid-cols-3 h-full w-full py-5 gap-5">
       <> {/* {chartsComponents.map((item, idx) => {
          const ChartType = item.chart
          console.log('chartpye',ChartType)
          return (
            <Card className="relative h-full inset-shadow-sm" key={idx}>
              <CardHeader className=" w-full h-full absolute -top-10">
                <CardTitle
                  className={cn(
                    "w-full h-[200px]  text-white rounded-lg",
                    item.bg
                  )}
                >
                  <ChartType data = {barData}/>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col pt-36">
                <span className="font-bold">{item.title}</span>
                <span>{item.body}</span>
              </CardContent>
              <Separator className="w-[80%] m-auto" />
              <CardFooter>
                <FontAwesomeIcon icon={faClock} className="px-2" />
                {item.footer}
              </CardFooter>
            </Card>
          );
        })} */}</>

             {/* DbBarChart */}
          <Card className="relative h-full inset-shadow-sm">
              <CardHeader className=" w-full h-full absolute -top-10">
                <CardTitle
                  className={cn(
                    "w-full h-[200px] py-5  text-white rounded-lg","bg-blue-500"
                    
                  )}
                >
                  <DbBarChart data={barData}/>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col pt-36">
                <span className="font-bold capitalize text-gray-800">website views</span>
                <span className="text-gray-500 text-sm">Last Campaign Performance</span>
              </CardContent>
              <Separator className="w-[80%] m-auto" />
              <CardFooter className="text-gray-500 text-sm">
                <FontAwesomeIcon icon={faClock} className="px-2 " />
                campaign sent 2 days ago
              </CardFooter>
            </Card>

            {/* DbLineChart */}

          <Card className="relative h-full inset-shadow-sm">
              <CardHeader className=" w-full h-full absolute -top-10">
                <CardTitle
                  className={cn(
                    "w-full h-[200px] py-2  text-white rounded-lg","bg-green-600"
                    
                  )}
                >
                  <DbLineChart data={lineData}/>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col pt-36">
                <span className="font-bold capitalize text-gray-800">daily sales</span>
                <span className="text-gray-500 text-sm">(+15%) increase in today sales.</span>
              </CardContent>
              <Separator className="w-[80%] m-auto" />
              <CardFooter className="text-gray-500 text-sm">
                <FontAwesomeIcon icon={faClock} className="px-2" />
                updated 4 min ago
              </CardFooter>
            </Card>

            {/* DbLineChart */}

          <Card className="relative h-full inset-shadow-sm">
              <CardHeader className=" w-full h-full absolute -top-10">
                <CardTitle
                  className={cn(
                    "w-full h-[200px] py-2  text-white rounded-lg","bg-black"
                    
                  )}
                >
                  <DbLineChart data={lineData}/>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col pt-36">
                <span className="font-bold capitalize text-gray-800">completed tasks</span>
                <span className="text-gray-500 text-sm">Last Campaign Performance</span>
              </CardContent>
              <Separator className="w-[80%] m-auto" />
              <CardFooter className="text-gray-500 text-sm">
                <FontAwesomeIcon icon={faClock} className="px-2" />
                just updated
              </CardFooter>
            </Card>


        
        
      </div>
      <div className="grid grid-cols-3 gap-5 w-full"><div className="col-span-2 w-full"><CompaniesTable/></div>
      <div className="col-span-1"><OrdersOverview/></div>
      </div>
    </div>
  );
};
export default Dashboard;
