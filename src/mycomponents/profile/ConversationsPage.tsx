import { ProfilePageData } from "../AllData";
import type { ProfilePageDataTypes } from "../AllData";
const ConversationsPage = () => {
    const profiledata = ProfilePageData as ProfilePageDataTypes
    return(
        <div className="grid w-full h-full gap-5">
            <div className="w-full">ConversationsPage</div>
            <div className="w-full grid gap-5 px-2">
                {profiledata.conversation.map((item,idx)=>{
                    return(
                        <div key={idx} className="flex gap-4">
                            <div><img src={item.icon} alt="" className="w-[80px] rounded-full" /></div>
                            <div className="flex flex-col w-full text-sm "><span className="font-bold">{item.name}</span><span className="text-gray-500">{item.msg}</span></div>
                            <div className="uppercase font-bold text-blue-500 text-xs">reply</div>
                        </div>
                
                    )
                })}
            </div>
        </div>
    )
}
export default ConversationsPage;