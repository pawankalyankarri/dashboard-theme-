import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { masterCard } from "../AllData";

const PaymentMethodCom = () => {
  return (
    <div className="w-full h-full">
      <Card className="w-full h-full shadow-md">
        <CardHeader className="flex justify-between items-center">
          <div className="font-bold text-gray-700">Payment Method </div>
          <div>
            <Button className="shadow-md inset-shadow-2xs">
              <FontAwesomeIcon icon={faPlus} className="font-bold text-sm" />{" "}
              Add New Card
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-5">
          <div className="font-bold text-gray-700 outline-1 rounded-lg p-5 flex justify-between ">
            <span className="flex justify-center items-center"><img src={masterCard} alt="" className="w-[20px]" /></span>
            <span>**** **** **** 1234 </span>
            <span>
              <Tooltip>
                <TooltipTrigger className="cursor-pointer"><FontAwesomeIcon icon={faPen} /></TooltipTrigger>
                <TooltipContent>
                  <p className="font-bold p-1">Edit Card</p>
                </TooltipContent>
              </Tooltip>
              
            </span>
          </div>
          <div className="font-bold text-gray-700 outline-1 rounded-lg p-5 flex justify-between ">
            <span>img</span>
            <span>**** **** **** 1234 </span>
            <span>
              <Tooltip>
                <TooltipTrigger className="cursor-pointer"><FontAwesomeIcon icon={faPen} /></TooltipTrigger>
                <TooltipContent>
                  <p className="font-bold p-1">Edit Card</p>
                </TooltipContent>
              </Tooltip>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default PaymentMethodCom;
