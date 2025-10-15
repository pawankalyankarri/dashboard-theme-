import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ProfileInformationPage = () => {
    return(
        <div className="w-full text-gray-500 grid gap-5">
            <div className="w-full flex justify-between">
                <span className="font-bold capitalize text-gray-800">profile information</span>
                <span className="cursor-pointer"><FontAwesomeIcon icon={faPen}/></span>
            </div>
            <div className="w-full text-sm h-full py-2">
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).

            </div>
            <div className="w-full h-full grid gap-2">
                <div className="flex gap-2"><span className="text-gray-800 text-sm font-bold">Full Name:</span> <span>Alec M. Thompson</span></div>
                <div className="flex gap-2"><span className="text-gray-800 text-sm font-bold">Mobile:</span><span> (44) 123 1234 123</span></div>
                <div className="flex gap-2"><span className="text-gray-800 text-sm font-bold">Email</span><span>alecthompson@mail.com</span></div>
                <div className="flex gap-2"><span className="text-gray-800 text-sm font-bold">Location:</span><span>USA</span></div>
                <div className="flex gap-2" ><span className="text-gray-800 text-sm font-bold">Social:</span><span className="flex gap-3"><FaFacebook className="text-blue-500 cursor-pointer"/><FaTwitter className="text-sky-500 cursor-pointer"/><FaInstagram className="text-pink-900 cursor-pointer"/></span></div>
            </div>
        </div>
    )
}

export default ProfileInformationPage;