import { FC } from "react";

interface QTrack  {
    text:string,
    desc:string,
    num:number,
    borderLine?:boolean
}

const border:FC<QTrack>=({text,desc,num,borderLine=true})=>{
    return(

        <>
            <div className={`rounded-md px-8 py-28 relative flex flex-1 flex-col justify-center ${borderLine?"border":""}`}>  {/*w-4/12(w-[33.33%] ) divide width in 12 cols and one column get 4 cols width(percentage process)   */}
                <h3 className="text-lg font-bold">{text}</h3>
                <p className="mt-2">{desc}</p>
                <div className="absolute top-6 -z-10 text-gray-200 right-28 font-bold text-[170px]">{num}</div>
            </div>
        </>
    )

}
export default border;
{/*flex-1 arrange elements in equal width when it grow or shrink so, get's equal width */}