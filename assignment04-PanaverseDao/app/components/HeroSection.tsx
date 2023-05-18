import Wraper from "./shared/Wraper";
import Button from "./Button";

export default function Hero(){
    return(
        <>
        <Wraper>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center gap-x-3 mt-16 lg:mt-24 ">
                <div className="p-4 leading-7 max-w-screen-sm">
                    <h4 className="font-semibold text-orange-700 mb-3 text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                    <h1 className="text-3xl sm:text-5xl font-bold">Certified Web 3.0 and<br/>Metaverse Developer</h1>
                    <p className="my-6 text-justify text-lg">
                        A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting <br/>
                        Ready for the Next Generation of the Internet
                    </p>
                    <p className="text-justify text-lg"> 
                    Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), <br/>
                    Cloud, Edge, Ambient Computing/IoT, Network Automation, and <br/>
                    Bioinformatics Technologies
                    </p>
                    <Button text="Enroll Now"/>
                </div>
                <div className="rounded-xl p-4">
                    <img className="rounded-xl object-cover" src="../OIG.png" alt="metaverse"/>
                </div>
            </div>
        </Wraper>
        </>
    )
}