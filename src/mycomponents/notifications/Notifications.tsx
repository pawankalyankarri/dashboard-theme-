import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Notifications = () => {
    return(
        <div>
            <Card>
                <CardHeader>
                    <span className="font-bold text-lg">Notifications</span>
                    <span className="text-sm text-gray-400">Notifications on this page use Toasts from Bootstrap. Read more details here.</span>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between capitalize font-bold ">
                        <Button className="bg-green-500 hover:bg-green-500 cursor-pointer shadow-sm">Success Notification</Button>
                        <Button className="bg-blue-500 hover:bg-blue-500 cursor-pointer shadow-sm">Info Notification</Button>
                        <Button className="bg-orange-500 hover:bg-orange-500 cursor-pointer shadow-sm">Warning Notification</Button>
                        <Button className="bg-red-500 hover:bg-red-500 cursor-pointer shadow-sm">Error Notification</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Notifications;