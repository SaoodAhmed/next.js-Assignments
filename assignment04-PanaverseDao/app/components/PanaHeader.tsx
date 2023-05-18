import Image from "next/image";
import Wraper from "./shared/Wraper";
// import Logo from "./logo.png";


export default function Header(){
    return(
        <>
        <header className="sticky top-0 bg-white backdrop-blur-md bg-opacity-90 z-10 ">
        <Wraper>
            <div className="flex justify-between items-center pt-6 pb-2">
                <div>
                    <img src="../logo.png" alt="Panaverse Logo" />
                </div>
                <div className="flex gap-x-8 font-medium ">
                    <div>
                        <p>Home</p>
                    </div>
                    <div>
                        <p>Courses</p>
                    </div>
                </div>
            </div>
        </Wraper>        
        </header>
        
        </>
    )
}