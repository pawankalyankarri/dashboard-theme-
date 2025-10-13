import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const YourTransactions = () => {
    return(
        <div className="w-full">
            <Card className="w-full h-full">
                <CardHeader className="flex justify-between">
                    <span className="font-bold">Your Transaction's</span>
                    <span className="text-sm"><FontAwesomeIcon icon={faCalendar} className="text-md" />23 - 30 March 2020</span>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-full">
                        <div className="w-full h-full text-gray-500 uppercase text-sm font-bold ">Newest</div>
                    </div>
                    <div className="w-full h-full"></div>
                </CardContent>
            </Card>
        </div>
    )
}

export default YourTransactions;