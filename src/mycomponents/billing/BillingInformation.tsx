import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserAPI } from "../Allapis";
import type{ UserDataType } from "../table/AuthorsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const BillingInformation = () => {
    const [usersData,setUsersData] = useState<UserDataType[]>([])
    useEffect(()=>{
        axios.get(UserAPI).then(res=>setUsersData(res.data["employees"])).catch(err=>console.log(err))
    },[usersData])
    return(
        <div>
            <Card>
                <CardHeader className="font-bold">
                    <span>Billing Information</span>
                </CardHeader>
                {
                    usersData.map((item)=>{
                        return(
                            <CardContent key={item.id} className="bg-gray-50 w-[90%] m-auto rounded-md h-full p-8">
                                <div className="w-full h-full flex flex-col gap-5">
                                    <div className="w-full h-full grid grid-cols-4  ">
                                        <span className="font-bold text-sm col-span-2">{item.name}</span>
                                        <span className="text-red-500 uppercase text-center text-xs font-bold cursor-pointer"><FontAwesomeIcon icon={faTrash} /> Delete </span>
                                        <span className="text-gray-700 uppercase text-center text-xs font-bold cursor-pointer"><FontAwesomeIcon icon={faPen} /> Edit</span>
                                    </div>
                                    <div className="w-full h-full flex flex-col text-xs text-gray-400">
                                        <span>Company Name :&emsp; <span className="text-gray-700 font-bold">{item.company.name}</span></span>
                                        <span>Email Address : &emsp;<span className="text-gray-700 font-bold">{item.email}</span></span>
                                        <span>VAT Number :&emsp; <span className="text-gray-700 font-bold">{item.address.zipcode}</span></span>
                                    </div>
                                </div>
                            </CardContent>
                        )
                    })
                }
            </Card>
        </div>
    )
}

export default BillingInformation;