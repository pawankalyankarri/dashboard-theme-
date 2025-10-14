import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const PlatformSettings = () => {
    return(
        <div className="w-full h-full grid gap-5">
            <div>
                <span className="capitalize font-bold text-gray-800">platform settings</span>
            </div>
            <div className="w-full flex gap-2 flex-col text-gray-500">
               <h5 className="font-bold uppercase ">application</h5> 
               <div className="flex gap-5  items-center">
                <Switch id="s1"/>
                <Label htmlFor="s1" className="text-sm">Email me when someone follows me</Label>
               </div>
               <div className="flex gap-5  items-center">
                <Switch id="s2"/>
                <Label htmlFor="s2" className="text-sm">Email me when someone answers on my post</Label>
               </div>
               <div className="flex gap-5  items-center">
                <Switch id="s3"/>
                <Label htmlFor="s3" className="text-sm">Email me when someone mentions me</Label>
               </div>

            </div>
            
            
            <div className="w-full flex gap-2 flex-col text-gray-500">
               <h5 className="font-bold uppercase ">Account</h5> 
               <div className="flex gap-5  items-center">
                <Switch id="s4"/>
                <Label htmlFor="s4" className="text-sm">New launches and projects</Label>
               </div>
               <div className="flex gap-5  items-center">
                <Switch id="s5"/>
                <Label htmlFor="s5" className="text-sm">Monthly product updates</Label>
               </div>
               <div className="flex gap-5  items-center">
                <Switch id="s6"/>
                <Label htmlFor="s6" className="text-sm">Subscribe to newsletter</Label>
               </div>

            </div>
            
        </div>
    )
}
export default PlatformSettings;