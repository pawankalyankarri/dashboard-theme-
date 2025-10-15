import { Card, CardContent, CardHeader } from "@/components/ui/card";
import mountain from "../../assets/mountain.jpg";
import { ProfilePageData } from "../AllData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import PlatformSettings from "./PlatformSettings";
import ProfileInformationPage from "./ProfileInformationPage";
import ConversationsPage from "./ConversationsPage";
import ProjectsPage from "./ProjectsPage";
import { Separator } from "@/components/ui/Separator";
const ProfilePage = () => {
  const ProfileData = ProfilePageData;
  return (
    <div className="w-full h-full mt-5">
      <div className="w-full h-full relative">
        <div className="w-full h-full"><img src={mountain} alt="" className="w-full h-[300px] rounded-lg" /></div>        
        <div className="w-full h-full  flex justify-center">
          <Card className="absolute top-50 w-[95%] shadow-md">
            <CardHeader className=" w-full grid grid-cols-2">
              <div className="w-full flex gap-5">
                <img
                  src={ProfileData.profileImg}
                  alt=""
                  className="w-[70px] rounded-full shadow-sm cursor-pointer"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xl">Richard Davis</span>
                  <span className="text-gray-500 text-sm">
                    CEO / Co-Founder
                  </span>
                </div>
              </div>
              <div className=" w-full flex justify-end ">
                <Tabs defaultValue="account" className="">
                  <TabsList>
                    <TabsTrigger value="app" className="cursor-pointer">
                      <FontAwesomeIcon icon={faHouse} /> App
                    </TabsTrigger>
                    <TabsTrigger value="message" className="cursor-pointer">
                      <FontAwesomeIcon icon={faEnvelope} /> Message
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="cursor-pointer">
                      
                      <FontAwesomeIcon icon={faGear} /> Settings
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="app">
                    {/* app */}
                  </TabsContent>
                  <TabsContent value="message">
                    {/* message */}
                  </TabsContent>
                  <TabsContent value="settings">
                    {/* settings */}
                  </TabsContent>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className=" w-full grid grid-cols-3 gap-5">
              <div className="w-full flex justify-center items-center gap-5">
                <PlatformSettings /> <Separator className=" h-[60%] w-1 shadow-lg" orientation="vertical"/>
              </div>
              <div className="w-full flex justify-center items-center gap-5">
                <ProfileInformationPage /><Separator className=" h-[60%] w-1 shadow-lg" orientation="vertical"/>
              </div>
              <div className="w-full">
                <ConversationsPage />
              </div>
              <div className="w-full col-span-3">
                <ProjectsPage />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
