import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import CreditCard from "./CreditCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faP } from "@fortawesome/free-solid-svg-icons";
import PaymentMethodCom from "./PaymentMethodCom";
import InvoicesPage from "./InvoicesPage";
import BillingInformation from "./BillingInformation";
import YourTransactions from "./YourTransactions";

const BillingCom = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full grid grid-cols-3 gap-5">
        <div className=" w-full h-full col-span-2 grid grid-cols-4 gap-5">
          <div className=" w-full h-full col-span-2">
            <CreditCard />
          </div>
          <div className="w-full h-full">
            <Card className="shadow-md w-full h-fit">
              <CardHeader className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className="p-4 bg-blue-500 rounded-md text-white text-xl font-bold shadow-xl"
                />{" "}
              </CardHeader>
              <CardContent className="flex flex-col px-3 gap-2">
                <span className="font-bold ">Salary</span>
                <span className="text-xs text-gray-500">
                  Belong Interactive
                </span>
                <div className="flex justify-center items-center pt-2">
                  <hr className="w-[60%] text-gray-50" />
                </div>
              </CardContent>
              <CardFooter className="font-bold text-xl py-0 text-gray-700">
                +$2000
              </CardFooter>
            </Card>
          </div>
          <div className="w-full h-full">
            <Card className="shadow-md w-full h-full">
              <CardHeader className="flex justify-center">
                <FontAwesomeIcon
                  icon={faP}
                  className="p-4 bg-blue-500 rounded-md text-white text-xl font-bold shadow-xl"
                />{" "}
              </CardHeader>
              <CardContent className="flex flex-col gap-2 text-gray-500 text-xs">
                <span className="text-black text-lg font-bold">PayPal</span>
                <span className="">Freelance</span>
                <span>Payment</span>
                <div className="flex justify-center items-center h-fit pt-2">
                  <hr className="w-[70%] text-gray-50" />
                </div>
              </CardContent>

              <CardFooter>
                <span className="font-bold text-xl text-gray-700">$455.00</span>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full h-full col-span-4">
            <PaymentMethodCom />
          </div>
        </div>
        <div className="w-full h-full ">
          <InvoicesPage />
        </div>
      </div>
      <div className="grid grid-cols-5 w-full h-full mt-7 gap-5">
        <div className="col-span-3 w-full h-full"><BillingInformation/></div>
        <div className="col-span-2 w-full h-full"><YourTransactions/></div>
        </div>
    </div>
  );
};
export default BillingCom;
