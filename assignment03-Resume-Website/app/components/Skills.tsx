
const skills = ()=>{
    return (
        <>
        <div className="max-w-7xl mx-auto mt-24 mb-10 px-16" id="skills">
        <h2 className="text-gray-200 mb-10 font-thinFont font-medium md:text-4xl text-xl text-center ">Skills</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 mx-auto w-full gap-x-24 gap-y-24">
                <div className="flex flex-col justify-center items-center">
                    <img className="object-contain h-20 w-20 hover:-translate-y-2 duration-300" src="../../images/skills/html-5.png" alt="HTML-5 icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">HTML</p>
                    
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="object-contain h-20 w-20 hover:-translate-y-2 duration-300" src="../../images/skills/css-3.png " alt="css-3 icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl">CSS</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                <img className="object-contain h-20 w-20 hover:-translate-y-2 duration-300" src="../../images/skills/js.png " alt="css-3 icon"/>
                <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">Javascript</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="object-contain h-20 w-20 hover:-translate-y-2 duration-300" src="../../images/skills/typescript.png" alt="typescrpt icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">Typescript</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="rounded-full h-20 w-20 object-contain hover:-translate-y-2 duration-300" src="../../images/skills/next.png" alt="next.js icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">Next.js</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="rounded-full h-20 w-20 object-contain hover:-translate-y-2 duration-300" src="../../images/skills/nodejs.png" alt="node.js icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">Node.js</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className=" h-20 w-20 object-contain hover:-translate-y-2 duration-300" src="../../images/skills/tailwindcss.png" alt="tailwindcss icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">TailwindCSS</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="h-20 w-20 object-contain hover:-translate-y-2 duration-300" src="../../images/skills/python.png" alt="python icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">Python</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className=" h-20 w-20 object-contain hover:-translate-y-2 duration-300" src="../../images/skills/java.png" alt="java icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">Java</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="rounded-full h-20 w-20 object-contain hover:-translate-y-2 duration-300" src="../../images/skills/graphic.png" alt="Graphic Design icon"/>
                    <p className="font-thinFont font-medium  mt-4 flex justify-between text-white text-xl ">Graphic Design</p>
                </div>
            </div>
        </div>
            


        </>
    )
}

export default skills;