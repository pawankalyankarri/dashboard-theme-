import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreditCard = () => {
    return (
        <div className="w-full">
            <Card className="w-full font-bold shadow-md py-12">
                <CardHeader>
                    <FontAwesomeIcon icon={faWifi}/>
                </CardHeader>
                <CardContent>
                    1234 &emsp; 5678&emsp; 9101&emsp; 1213
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Card Holder</span>
                        <span className="text-lg">Jack Peterson</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Expires</span>
                        <span className="text-lg">11/22</span>
                    </div>
                    <div><span>1</span></div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CreditCard;