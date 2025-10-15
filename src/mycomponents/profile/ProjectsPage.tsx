import { Button } from "@/components/ui/Button";
import { ProfilePageData, type ProfilePageDataTypes } from "../AllData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const ProjectsPage = () => {
  const profileData = ProfilePageData as ProfilePageDataTypes;
  return (
    <div className="w-full grid gap-5">
      <div className="flex flex-col text-gray-500">
        <span className="font-bold text-gray-800">Projects</span>
        <span>Architects design houses</span>
      </div>
      <div className=" w-full grid grid-cols-4 gap-5">
        {profileData.projects.map((item) => {
          return (
            <div key={item.id} className="w-full grid gap-3 text-gray-500 p-1">
              <div className="w-full">
                <img
                  src={item.icon}
                  alt=""
                  className="w-[180px] rounded-lg shadow-lg"
                />
              </div>
              <div>Project # {item.id}</div>
              <div className="font-bold text-gray-800 capitalize text-lg">
                {item.name}
              </div>
              <div className="text-sm">{item.description}</div>
              <div className="grid grid-cols-2 place-items-center w-full gap-1">
                <Button className="text-blue-500 bg-white hover:bg-white border-1 border-blue-500 uppercase text-xs font-bold cursor-pointer">
                  View Project
                </Button>
                <div className="w-full flex -space-x-3 " >
                  {item.client.map((i, idx) => {
                    return (
                      <Avatar key={idx} className="w-6 h-6">
                        <AvatarImage src={i} className="w-full h-full cursor-pointer" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectsPage;
