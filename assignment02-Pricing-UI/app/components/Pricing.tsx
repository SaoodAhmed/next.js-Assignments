import CheckIconMark from "./CheckMarkIcons";

export default function Pricing(){
    return(
        <div className=" max-w-full flex flex-col md:flex-row drop-shadow-xl justify-center mx-2">
            <div className="bg-violet-200 p-12 flex flex-col items-center rounded-xl">
            <p className="font-bold text-2xl mb-2">Premium PRO</p>
            <p className="font-bold text-7xl">$359</p>
            <p className="text-gray-900 mt-1">Billed just once</p>
            <button className=" bg-violet-700 w-80 rounded mt-10 py-3 text-gray-100 font-semibold text-md hover:bg-violet-600 active:bg-violet-500"><p>Get Started</p></button>
            </div>
            <div className="bg-white pt-12 pl-4 pr-2 rounded-xl "> 
            <p>Access these features when you get this pricing package for your business.</p>
            <div className="mt-4">
            <div>
                <div className="flex">
                <CheckIconMark/>
                <p className="mb-4">International calling and messaging API</p>
                </div>
                <div className="flex">
                <CheckIconMark/>
                <p className="mb-4">Additional phone numbers</p>
                </div>
                <div className="flex">
                <CheckIconMark/>
                    <p className="mb-4">Automated messages via Zapier</p>
                </div>
                <div className="flex"> 
                <CheckIconMark/>
                <p className="mb-4">24/7 support and consulting</p>
                </div>
                
                </div>
            </div>

            </div>
        </div>
    )
}