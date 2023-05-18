
const portfolio = ()=>{
    return (
        <div id="portfolio">

        <h3 className="text-xl md:text-4xl font-medium font-thinFont text-gray-200 flex justify-center items-center mt-32 mb-6">Portfolio</h3>
        <div className=" flex items-center max-w-7xl mx-auto px-10 mb-10">
            
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-x-24 gap-y-24 mx-auto w-full px-6">
                <div className="shadow-md shadow-gray-400 h-60 hover:scale-105 duration-200">
                    <div>
                        <img className="w-full object-cover rounded-t-lg h-40" src="../../images/portfolio/port1.jpg" alt="port2"/>
                    </div>
                    <div className="font-thinFont font-bold  p-5 flex justify-between text-white ">
                        <button className="hover:scale-110 duration-200">Demo</button>
                        <button className="hover:scale-110 duration-200">Code</button>
                    </div>
                </div>
                <div className="shadow-md shadow-gray-400 h-60 hover:scale-105 duration-200">
                    <div>
                        <img className="w-full object-cover rounded-t-lg h-40" src="../../images/portfolio/port2.jpg" alt="port2"/>
                    </div>
                    <div className="font-thinFont font-bold  p-5 flex justify-between text-white ">
                        <button className="hover:scale-110 duration-200">Demo</button>
                        <button className="hover:scale-110 duration-200">Code</button>
                    </div>
                </div>
                <div className="h-60 shadow-md shadow-gray-400 hover:scale-105 duration-200">
                    <div>
                        <img className="h-40 w-full object-cover rounded-t-lg" src="../../images/portfolio/port3.jpg"/>
                    </div>
                    <div className="text-white font-thinFont font-bold flex justify-between p-5">
                        <button className="hover:scale-110  duration-200">Demo</button>
                        <button className="hover:scale-110 duration-200">Code</button>
                    </div>
                </div>

                <div className="shadow-md shadow-gray-400 h-60 hover:scale-105 duration-200">
                    <div>
                        <img className="object-cover w-full h-40 rounded-t-lg" src="../../images/portfolio/port4.jpg" alt="port1"/>
                    </div>
                    <div className="flex font-thinFont justify-between items-center p-5 font-bold text-white">
                        <button className="hover:scale-110 duration-200">Demo</button>
                        <button className="hover:scale-110 duration-200">Code</button>
                    </div>
                </div>
                <div className="shadow-md shadow-gray-400 h-60 hover:scale-105 duration-200">
                    <div>
                        <img className="w-full object-cover rounded-t-lg h-40" src="../../images/portfolio/port5.jpg" alt="port2"/>
                    </div>
                    <div className="font-thinFont font-bold  p-5 flex justify-between text-white ">
                        <button className="hover:scale-110 duration-200">Demo</button>
                        <button className="hover:scale-110 duration-200">Code</button>
                    </div>
                </div>
                <div className="h-60 shadow-md shadow-gray-400 hover:scale-105 duration-200">
                    <div>
                        <img className="h-40 w-full object-cover rounded-t-lg" src="../../images/portfolio/port6.jpg"/>
                    </div>
                    <div className="text-white font-thinFont font-bold flex justify-between p-5">
                        <button className="hover:scale-110  duration-200">Demo</button>
                        <button className="hover:scale-110 duration-200">Code</button>
                    </div>
                </div>
            </div>
        </div>


        </div>
    )
}

export default portfolio;