import { FC } from "react";

const button:FC<{text:string}> = ({text}) =>{

    return(
    <>
       <div>
            <button className="text-gray-700 shadow-lg font-medium text-lg px-7 py-4 rounded-full mt-6 bg-gradient-to-r  hover:from-pink-400 hover:to-yellow-400 from-pink-500 to-yellow-500">{text}</button>
       </div> 
    
    </>



// const button:FC<{text:string}> = (props) =>{
//     const {text} = props; // we get key from props and data of key renderd from any route(page)

//     return(
//     <>
//        <div>
//             <button className="text-gray-700 font-medium text-lg px-6 py-4 rounded-full mt-6 bg-gradient-to-r  hover:from-pink-400 hover:to-yellow-400 from-pink-500 to-yellow-500">{text}</button>
//        </div> 
    
//     </>

    )
    
}
export default button;