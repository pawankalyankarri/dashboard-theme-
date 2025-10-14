import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa"

const SignInPage = () => {
    return(
        <div className="w-full h-full flex items-center justify-center mt-10">
            <Card className="w-[35%] h-full relative grid gap-10">
               <div className=" w-full flex justify-center">
                    <div className="w-[90%]  bg-blue-500 p-5 rounded flex justify-center items-center gap-5 absolute -top-5 text-white">
                        <span className="cursor-pointer"><FaFacebookF size={24}/></span>
                        <span className="cursor-pointer"><FaGithub size={24}/></span>
                        <span className="cursor-pointer"><FaGoogle size={24}/></span>
                    </div>
               </div>
               <CardContent className="">
                <div className="w-full h-full">
                    <form action="" className=" w-full h-full grid gap-7 text-gray-400 ">
                        <div className="w-full">
                            <Input type="email" className="p-5.5 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus:outline-none  " placeholder="Email"/>
                        </div>
                        <div>
                            <Input type="password" className="p-5.5 w-full focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus:outline-none" placeholder="Password" />
                        </div>
                        <div className="w-full flex gap-3">
                            <Switch id="rm"/>
                            <Label htmlFor="rm" >Remember Me</Label>
                            
                        </div>
                        <div className="w-full  ">
                            <Button className="bg-blue-500 hover:bg-blue-500 w-full cursor-pointer uppercase font-bold shadow-sm">Sign In</Button>
                        </div>
                    </form>
                </div>
                </CardContent>
                <CardFooter className="text-gray-500 text-sm flex justify-center ">
                    <span >Don't have an account?</span><span className="font-bold cursor-pointer">&nbsp; SIGN UP</span>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignInPage;