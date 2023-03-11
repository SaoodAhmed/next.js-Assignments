export default function Subscribe(){
    return (
        <div className="flex justify-center m-6">
        <div className="flex bg-gray-100 rounded-md justify-center w-9/12 p-4">
            <input type={"email"} placeholder="Enter email" className="flex flex-grow p-4 my-2 ml-2"></input>
            <button className="bg-blue-500 text-gray-200 px-6 py-4 my-2 rounded-md">Subscribe</button>
        </div>
        </div>
    )
}