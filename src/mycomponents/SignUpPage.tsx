import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUpPage = () => {
    return(
        <div className="w-full h-full flex justify-center mt-10">
            <Card className=" w-[35%] h-full relative flex gap-5 items-center">
                <div className="bg-blue-500 absolute -top-5 w-[90%] rounded-lg p-6 text-white flex flex-col text-center gap-3 ">
                    <span className="font-bold text-2xl">Join us today</span>
                    <span className="text-sm">Enter your email and password to register</span>
                </div>
                <CardContent className="w-full pt-32">
                    <form action="" className="w-full text-gray-500 grid gap-10">
                        <div className="w-full flex gap-5 flex-col">
                            <Input type="text" placeholder="Name" className="w-full p-5  border-0  ring-0  ring-offset-0 focus-visible:border-blue-500 rounded-none border-b-1 border-black focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pl-0" />
                            <Input type="email" placeholder="Email" className="w-full p-5 border-0  focus-visible:border-blue-500 rounded-none border-b-1 border-black focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pl-0" />
                            <Input type="password" placeholder="Pssword" className="w-full p-5 border-0  focus-visible:border-blue-500 rounded-none border-b-1 border-black focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none pl-0" />
                            <div className="w-full flex gap-5">
                                <Checkbox id="tc" className="font-bold data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 [&_svg]:stroke-[3]"/>
                                <Label htmlFor="tc" ><span className="">I agree the</span><span className="font-bold text-blue-500 cursor-pointer">Terms and Conditions</span></Label>
                            </div>
                        </div>
                        <div className="w-full">
                            <Button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-500 uppercase font-bold shadow-lg">Sign In</Button>
                        </div>


                        
                    </form>
                    

                </CardContent>
                <CardFooter>
                    <span className="text-gray-500 text-sm">Already have an account? </span><span className="font-bold text-blue-500 cursor-pointer">&nbsp;Sign In</span>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignUpPage;