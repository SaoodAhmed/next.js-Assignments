"use client"
import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
export default function header(){
    const [toggle,setToggle] = useState(true);
    return (

        
        <><div className="max-w-7xl mx-auto flex justify-between items-center">

            <div>
                <img className="h-[150px] w-[150px] rounded-full object-cover" src= "../logo (2).png" alt="logo"/>
            </div>
            <div className="font-thinFont text-xl gap-x-10 m-7 text-gray-300 font-semibold md:flex hidden">
                <a href='#home'><p className="hover:scale-150 duration-300 cursor-pointer">Home</p></a>
                
                <a href="#about">
                    <p className="hover:scale-150 duration-300 cursor-pointer">About</p>
                </a>
                
                <a href="#portfolio">
                    <p className="hover:scale-150 duration-300 cursor-pointer">Portfolio</p>
                </a>
                
                <a href="#skills">
                    <p className="hover:scale-150 duration-300 cursor-pointer">Skills</p>
                </a>
                

                <a href="#contact">
                    <p className="hover:scale-150 duration-300 cursor-pointer">Contact</p>
                </a>
                
                
            </div>
            <div className="pr-5 md:hidden text-gray-100 align-middle z-10 flex flex-col" onClick={()=>{ setToggle(!toggle)}}>
                {toggle? <GiHamburgerMenu size={30} /> : <RxCross2 size={30}/>}
            </div>
            {!toggle ? (
                 <div className="font-thinFont text-lg font-semibold flex flex-col md:hidden justify-center items-center text-gray-300 h-46 w-full absolute top-12 right-0 left-20">
                 <p className="text-2xl my-1">Home</p>
                 <p className="text-2xl mb-1">About</p>
                 <p className="text-2xl mb-1">Portfolio</p>
                 <p className="text-2xl mb-1">Skills</p>
                 <p className=" text-2xl mb-1">Contact</p>
             </div>
            ):null
            }
           
        </div>
            
        </>
    )
}