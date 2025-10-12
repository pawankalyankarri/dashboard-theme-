import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { OrdersDataTypes } from "../AllData";
import { OrdersData } from "../AllData";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/Separator";

const OrdersOverview = () =>{
    const orders = OrdersData as OrdersDataTypes[]
    return(
        <Card className="font-sans h-full flex gap-8">
            <CardHeader>
                <span className="font-bold">Orders overview</span>
                <span className="text-gray-400"> <FontAwesomeIcon icon={faArrowUp} className="text-green-500" /> <span className=" font-bold">24%</span> this month</span>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
                {orders.map((item,idx)=>{
                    return(
                        <div className="relative " key={idx}>
                            <div className="flex gap-4">
                                <div className="h-full flex items-center flex-col">
                                <FontAwesomeIcon icon={item.icon} className={cn("p-2 text-white font-bold rounded-[50%]",item.color)}/>
                            </div>
                            <div className="flex flex-col text-gray-800">
                                <span className="font-bold text-sm">{item.title}</span>
                                <span className="text-xs text-gray-400">{item.date}</span>
                            </div>
                            </div>
                            <div className="absolute top-8 left-4">{idx === orders.length-1 ? "" : <Separator orientation="vertical" className="bg-gray-300 w-[2px] h-16"/>}</div>

                        </div>
                    )
                })}
            </CardContent>
        </Card>
    )
}
export default OrdersOverview;