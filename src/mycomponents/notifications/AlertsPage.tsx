import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { NotificationsAPI } from "../Allapis";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { shadcnColors } from "../AllData";
import { cn } from "@/lib/utils";

interface NotificationsTypes {
      id: number,
      quote: string,
      author: string
    }
const AlertPage = () => {
    const [notifications,setNotifications] = useState<NotificationsTypes[]>([]);
    const colors = shadcnColors as string[]
    const mountFalg = useRef<boolean>(false)
    useEffect(()=>{
        if(mountFalg.current) return;
        mountFalg.current = true;
        axios.get(NotificationsAPI).then(res=>setNotifications(res.data.quotes)).catch(err=>console.log(err))
    },[])
    return(
        <div className="w-full h-full">
            <Card className=" w-full h-full">
                <CardHeader className="font-bold w-full">Alerts</CardHeader>
                <CardContent className="grid gap-3">
                    {notifications.length === 0 ? <div className="text-center font-bold">Loading...</div> :    notifications.map(item=>{
                        return(
                            <Alert key={item.id} className={cn("p-3 py-5 text-white bg-red-300 flex justify-between",colors[ item.id % colors.length])}>
                                <AlertDescription className="text-white text-md">{item.quote}</AlertDescription>
                                <span className="font-bold text-sm"><FontAwesomeIcon icon={faXmark} className="cursor-pointer p-2" size="sm" onClick={()=>setNotifications(notifications.filter(n=>n.id !== item.id))} /></span>
                            </Alert>
                        )
                    })}
                </CardContent>
            </Card>
        </div>
    )
}
export default AlertPage;