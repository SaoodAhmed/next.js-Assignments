import Wraper from "./shared/Wraper";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import {BsYoutube} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai"


export default function(){
    return(
        <>
        
            <section className="border-slate-200 border-b mb-10 mt-32" ></section>
            
            <Wraper>
                <div className="grid grid-cols-1 xl:grid-cols-[40%,25%,25%]  gap-x-8 gap-y-8 justify-center mb-5">
                    <div className="flex flex-col gap-y-6">
                        <img src="../logo.png" alt="Panaverse Logo" height={150} width={150}/>
                        <h3 className="text-xl text-slate-700 text-justify">Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</h3>
                        <div className="grid grid-cols-[10%,10%,10%,10%] items-center cursor-pointer gap-x-2">
                            <div>
                                 <FaFacebook className="hover:scale-105 duration-300 " size={40}/>
                            </div>
                            <div>
                                < BsYoutube className="hover:scale-105 duration-300 " size={40}/>
                            </div>
                            <div>
                                <AiFillGithub className="hover:scale-105 duration-300" size={40}/>
                            </div>
                            <div>
                                 <BsTwitter className="hover:scale-105 duration-300 " size={40}/>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4"> 
                        <h2 className="text-xl font-bold ">Programs</h2>
                        <div className="text-slate-700 text-lg leading-relaxed space-y-2">
                            <p>Web 3.0 and Metaverse Developer</p>
                            <p>Artificial Intelligence</p>
                            <p>Cloud-Native Computing</p>
                            <p>Ambient Computing and IoT</p>
                            <p>Genomics and Bioinformatics</p>
                            <p>Network Programmability and Automation</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold">Pages</h2>
                        <div className="text-lg text-slate-700 space-y-2">
                            <p>Home</p>
                            <p>Quarter 1</p>
                            <p>Quarter 2</p>
                            <p>Quarter 3</p>
                        </div>
                       
                    </div>
                </div>
            </Wraper>
            
        </>    
    
            
        
    )
}