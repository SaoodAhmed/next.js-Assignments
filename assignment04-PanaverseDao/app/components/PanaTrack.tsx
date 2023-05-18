import Wraper from "./shared/Wraper";
import Button from "./Button";
import Borderbox from "./Borderbox";

const coreTracks =  [
    {
        text:"Quarter-I",
        desc:"CS-101: Object Oriented Programming Using TypeScript",
        num:1
    },

    {
        text:"Quarter-II",
        desc:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        num:2
    },

    {
        text:"Quarter-III",
        desc:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        num:3
    },


]

export default function track(){
    const h1 = "Core Courses \n \t (Common in All Specialization):"
    return (
        <>
        <Wraper>
        <div className="mt-16 lg:mt-24 p-4 ">
            <h4 className="font-semibold text-orange-700 mb-2 text-lg ">Program Of Studies</h4>
            <h1 className="text-3xl md:text-4xl  font-bold whitespace-pre-wrap">{h1}</h1>
            <p className="text-lg mt-2">Every participants of the program will start by completing the following three core courses</p>
            <Button text="Learn More"/>
        </div>

         <div className="my-20 p-4 flex flex-col md:flex-row gap-x-8 gap-y-6">
             
          {
            coreTracks.map((item,i)=>{
                return(
                    <Borderbox 
                    text = {item.text} 
                    desc={item.desc}
                    num={i+1}
                    borderLine={true}
                    />
                )
            })
          }
             
             {/* <Borderbox text="Quarter-I" desc="CS-101: Object Oriented Programming Using TypeScript" num={1}/>
             <Borderbox text="Quarter-II" desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform" num={2}/>
             <Borderbox text="Quarter-III" desc="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development" num={3}/> */}
        </div>
        </Wraper>
        </>
        
    )
}