"use client"
import Link from "next/link";
import Borderbox from "./Borderbox";
import Wraper from "./shared/Wraper";
import { useState } from "react";
import Image from "next/image";

// import AiImg from "../../ai.png";
// import BiImg from "../../images/bi.png";
// import CdImg from "../../images/cd.png";
// import GiImg from "../../images/gi.png";
// import NtImg from "../../images/nt.png";
// import WebImg from "../../images/web.png";

export const programData = [
    {
        header:"Web 3.0 (Blockchain) and Metaverse Specialization",
        desc:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.", 
        slug:"wmd",
        image:"../../ai.png",
        quarter:[
            {
            text:"Quarter-IV",
            desc:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
            num:4
        },
        {
            text:"Quarter-V",
            desc:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences ",
            num:5
        }
        ]

    },

    {
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        desc:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image:"../../bi.png",
        slug:"ai",
        quarter:[
            {
            text:"Quarter-IV",
            desc:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
            num:4
        },
        {
            text:"Quarter-V",
            desc:"AI-361: Deep Learning and MLOps",
            num:5
        }
        ]

    },
    {
        header:"Cloud-Native Computing Specialization ",
        desc:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image:"../../gi.png",
        slug:"cc",
        quarter:[
            {
            text:"Quarter-IV",
            desc:"CN-351: Certified Kubernetes Application Developer (CKAD)",
            num:4
        },
        {
            text:"Quarter-V",
            desc:"CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
            num:5
        }
        ]

    },
    {
        header:"Ambient Computing and IoT Specialization",
        desc:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image:"../../nt.png",
        slug:"ac",
        quarter:[
            {
            text:"Quarter-IV",
            desc:"AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            num:4
        },
        {
            text:"Quarter-V",
            desc:"AC-361: Embedded Programming using C and Rust",
            num:5
        }
        ]

    },
    {
        header:"Genomics and Bioinformatics Specialization  ",
        desc:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image:"../../cd.png",
        slug:"gb",
        quarter:[
            {
            text:"Quarter-IV",
            desc:"Bio-351: Python for Biologists",
            num:4
        },
        {
            text:"Quarter-V",
            desc:"Bio-361: Bioinformatics with Python",
            num:5
        }
        ]

    },
    {
        header:"Network Programmability and Automation Specialization",
        desc:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image:"../../web.png",
        slug:"na",
        quarter:[
            {
            text:"Quarter-IV",
            desc:"NPA-351: CCNA 200-301 Certification",
            num:4
        },
        {
            text:"Quarter-V",
            desc:"NPA-361: Network Programmability and Automation",
            num:5
        }
        ]

    },
    {
        header:"Network Programmability and Automation Specialization",
        desc:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image:"../../web.png",
        slug:"na",
        quarter:[
            {
            text:"Quarter-IV",
            desc:"NPA-351: CCNA 200-301 Certification",
            num:4
        },
        {
            text:"Quarter-V",
            desc:"NPA-361: Network Programmability and Automation",
            num:5
        }
        ]

    },
    

]

const specTrackor = ()=>{

    const [data,setData] = useState("wmd")
    const selectedData = programData.find((item)=>item.slug === data)
    console.log(data)
    

    return(
        
        <>
        
            <Wraper>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">Specialized Tracks:</h1>
                    <p className="mt-3 text-lg max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>                
                </div>
                <div className="mt-6 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
                    <div className="border self-start sticky top-32 shadow-lg border-orange-400 rounded-xl p-8 basis-8/12">
                        <h4 className="font-medium text-orange-700 mb-2 text-lg ">Specialized Program</h4>
                        <h3 className="text-2xl font-semibold">{selectedData?.header}</h3>
                        <p className="mt-2 text-lg">{selectedData?.desc}</p>
                        <a href={"/"}><button className="text-lg text-orange-700 mt-2 underline font-semibold flex items-center gap-x-2">Learn More
                        <svg className="mt-0.5 mb-0.5 hover:translate-x-2 duration-200" width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#D84315" strokeWidth="2"/>
                        </svg>
                        </button></a>
                        <div className=" mt-20 flex flex-col sm:flex-row gap-x-8 gap-y-6">

                            {
                                selectedData?.quarter.map((item,i)=>(
                                    <Borderbox 
                                    key={item.num}
                                    text={item.text}
                                    desc={item.desc}
                                    num={item.num}
                                    borderLine={false}
                                />
                                )

                                )
                            }
                    
                        </div>
                    </div>
                    {/* right */}
                    <div className="px-4 py-6 basis-4/12 space-y-8 rounded-xl">
                        {
                            programData.map((item,i)=>(
                                <div onClick={()=>setData(item.slug)} key={item.slug} className="flex gap-x-4 items-center cursor-pointer ">
                                    <div className="rounded-md bg-gradient-to-t from-blue-700 to-cyan-400">
                                        <div className="w-40 h-24 flex-shrink-0 relative ">
                                            {/* <div className="h-16 w-20 rounded bg-red-300"></div> */}


                                            <img className="object-cover w-40 h-24 rounded-md hover:translate-x-1 hover:-translate-y-1 absolute duration-150 " src={item.image} alt={item.header}/>
    
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-medium text-orange-700  text-lg">Specialized Program</h4>
                                        <h3 className="text-xl font-semibold">{item.header}</h3>
                                    </div>
                                    
                                </div>
                                

                            ))
                            
                        }

                        
                    </div>
                    
                </div>
                
                
            </Wraper>
        </>
    )
}


export default specTrackor;