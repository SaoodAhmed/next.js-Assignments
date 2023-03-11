import CheckIconMark from "./CheckMarkIcons";

export default function Pricing(){
    return(
        <div className="flex justify-center drop-shadow-2xl flex-wrap">
            <div className="bg-violet-200 p-16 flex flex-col items-center rounded-xl"> 
            <p className="font-bold text-2xl">Premium PRO</p>
            <p className="font-bold text-7xl">$359</p>
            <p>Billed just once</p>
            <button className="bg-violet-700 w-80 rounded mt-6 py-3 text-gray-100 font-semibold text-md hover:bg-violet-600 active:bg-violet-500">Get Started</button>
            </div>
            <div className="bg-white pt-12 pl-4 pr-8 rounded-xl "> 
            <p>Access these features when you get this pricing package for your business.</p>
            <div className="mt-4">
            <div>
                <div className="flex">
                <CheckIconMark/>
                <p className="mb-2">International calling and messaging API</p>
                </div>
                <div className="flex">
                <CheckIconMark/>
                <p className="mb-2">Additional phone numbers</p>
                </div>
                <div className="flex">
                <CheckIconMark/>
                    <p className="mb-2">Automated messages via Zapier</p>
                </div>
                <div className="flex"> 
                <CheckIconMark/>
                <p className="mb-2">24/7 support and consulting</p>
                </div>
                
                </div>
            </div>

            </div>
        </div>
    )
}