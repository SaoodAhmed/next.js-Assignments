import { FC } from "react";

const Wraper:FC<{children:React.ReactNode}> = ({children})=>{  // React.ReactNode is a type that given to children it means children can be stringify,number,null or any html tag etc 
    return (
        <div className="max-w-screen-2xl mx-auto px-4">
            {children}
        </div>
    )
}

export default Wraper;

