import Link from "next/link";
import {BiRightArrow} from "react-icons/bi";
import {MdKeyboardArrowRight} from "react-icons/md";

export default function heroSection(){
    return(
        <>
            <div className="max-w-4xl mx-auto flex items-center md:flex-row lg:flex-row flex-col gap-x-4 mt-32 md:mt-16" id="home">
                <div className="px-16 max-w-lg">
                    <h2 className=" text-gray-300 mb-3 font-thinFont font-medium md:text-4xl text-2xl mt-10">Software Engineer</h2>
                            <p className=" text-gray-500 tracking-wider leading-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Exercitationem obcaecati magni, quaerat inventore omnis asperiores et harum reiciendis 
                                aspernatur iste mollitia error, voluptatibus adipisci atque rem quo quia debitis tenetur! Eos mollitia dolorum consectetur, alias fugiat laborum, 
                                impedit libero debitis quod dicta magnam! Officiis facere magni vel aut voluptatibus molestiae.
                            </p>
                        <Link href='/CV-Saud-Ahmed.pdf' target="_blank" rel="noopener noreferrer" download>
                            <button className="max-w-lg mx-auto font-thinFont text-lg font-semibold flex items-center text-gray-300 mt-8 px-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">Resume
                            <MdKeyboardArrowRight size={25} className="hover:rotate-90 duration-200 text-gray-300"/>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <div className="p-5">
                            <img className="h-56 w-56 md:w-full mx-auto rounded-full bg-gray-700 object-cover" src="../profile1.png" alt="Saud Ahmed" />
                        </div>
                    </div>
                </div>

        </>
    )
}