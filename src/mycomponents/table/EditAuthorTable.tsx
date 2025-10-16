import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SingleUserAPI } from "../Allapis";
import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SingleUserDataType {
  name: string;
  email: string;
  company_name: string;
  website: string;
  phone: string;
  status: string;
}
const EditAuthorTable = () => {
  const [authorData, setAuthorData] = useState<SingleUserDataType >();
  const location = useLocation();
  const navigate = useNavigate();
  const authorId = location.state.authorId;
  const [formdata, setFormdata] = useState<SingleUserDataType>({
    name: "",
    email: "",
    company_name: "",
    website: "",
    phone: "",
    status: "",
  });
  useEffect(() => {
    axios
      .get(`${SingleUserAPI}/${authorId}`)
      .then((res) => setFormdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleChange( e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>){
        console.log(e.target.name)
        console.log(e.target.value)
        setFormdata((prev)=>({...prev,[e.target.name]: e.target.value}))
        console.log(formdata)
  }

  return (
    <div className="w-full">
      <Dialog defaultOpen>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Edit Author Details...</DialogTitle>
            <DialogDescription asChild>
              <div className="w-full pt-5">
                <form action="" className=" w-full grid gap-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex gap-2 flex-col">
                      <Label>Name</Label>
                      <Input
                        type="text"
                        name="name"
                        value={formdata?.name}
                        onChange={handleChange}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-2 flex-col">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formdata.email}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-2 flex-col">
                      <Label>Company name</Label>
                      <Input
                        type="text"
                        name="company_name"
                        value={formdata.company_name}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-2 flex-col">
                      <Label>Website</Label>
                      <Input
                        type="text"
                        name="website"
                        value={formdata.website}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-2 flex-col justify-center">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="offline">Offline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <Label>Phone Number</Label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formdata.phone}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-5 place-items-center">
                    <span
                      className="bg-blue-500 hover:bg-blue-500 text-white w-[80%] p-2.5 font-bold cursor-pointer flex justify-center rounded "
                      onClick={() => navigate("/table")}
                    >
                      Close
                    </span>
                    <Button className="bg-blue-500 hover:bg-blue-500 text-white w-[80%]">
                      Update
                    </Button>
                  </div>
                </form>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default EditAuthorTable;
