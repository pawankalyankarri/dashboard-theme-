import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DashboardHeadData, type DashboardTopType } from "../AllData";
import { Separator } from "@/components/ui/Separator";
const DashBoardHeader = () => {
  const DashboardHeaderData = DashboardHeadData as DashboardTopType[];

  return (
    <section className="grid grid-cols-4 py-9 items-center gap-4 w-full">
      {DashboardHeaderData.map((item, idx) => {
        return (
          <Card key={idx} className="gap-1.5">
            <CardHeader className="relative">
              <CardTitle
                className={cn(
                  "p-3  shadow inset-shadow-sm  text-xl w-fit rounded-lg text-white absolute -top-12 left-5",
                  item.color
                )}
              >
                <FontAwesomeIcon icon={item.icon} />
              </CardTitle>

              <CardAction className="flex flex-col">
                <span className="capitalize text-gray-400 text-md">
                  {item.title}
                </span>
                <span className="m-auto font-bold text-2xl">{item.number}</span>
              </CardAction>
            </CardHeader>
            <Separator className="w-[80%] m-auto " />
            <CardFooter>
              <p>
                <span className="text-green-500 font-bold">
                  {item.footerpercent}
                </span>
                <span className="text-gray-500 text-md">{item.footertext}</span>
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
};
export default DashBoardHeader;
