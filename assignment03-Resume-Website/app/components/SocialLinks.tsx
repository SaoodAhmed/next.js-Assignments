import Link from "next/link";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

const socialLinks = ()=>{
    return (
        <div className="fixed top-[40vh]">
            <Link href={'https://www.linkedin.com/in/saud-ahmed-b20a8b206'} target={"_blank"}>
            <div className="ml-[-90px] text-lg hover:ml-0 duration-200 left-0 bg-gray-600 text-gray-100 w-36 px-3 py-3 rounded-r-lg font-semibold flex justify-between items-center">LinkedIn
            <BsLinkedin size={30}/>
            </div>
            </Link>

            <Link href={'https://github.com/SaoodAhmed'} target={"_blank"}>
            <div className="flex justify-between my-2 items-center text-lg  ml-[-90px] hover:ml-0 w-[144px] duration-200  left-0 text-gray-100 bg-gray-600 rounded-r-lg px-3 py-3 font-semibold "> GitHub
                <BsGithub size={30}/>
            </div>
            </Link>

            <Link href={'https://twitter.com/SAUDAHM46283400'} target={"_blank"}>
            <div className="flex items-center justify-between text-lg ml-[-90px] hover:ml-0 w-[144px] duration-200 left-0 text-gray-100 bg-gray-600 rounded-r-lg px-3 py-3 font-semibold"> Twitter
                <BsTwitter size={30}/>
            </div>
            </Link>
        </div>
    )
}

export default socialLinks;