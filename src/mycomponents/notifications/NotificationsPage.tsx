import AlertPage from "./AlertsPage";
import Notifications from "./Notifications";

const NotificationsPage = () => {
    return(
        <div className="  h-full w-full flex gap-5 flex-col justify-center items-center">
            <div className="w-[70%] h-full "><AlertPage/></div>
            <div className="w-[70%] h-full"><Notifications/></div>
        </div>
    )
}
export default NotificationsPage;