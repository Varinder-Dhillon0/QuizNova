import { useState } from "react"
import QueTypes from "./queTypes";
import { useQues } from "../../hooks/useQues";

export default function Menu({id , item}){

    const {ques, setQues} = useQues();
    const [showTypes , setShowTypes] = useState(false);

    return(
        <>
            <div className="w-[100%] text-sm">
                <div className="flex items-center h-[40px] bg-[#f7f7f6] pl-5 pr-5 p-3 rounded-full">
                    <div>
                        <button onClick={() => setShowTypes(!showTypes)} className="bg-black rounded-full pl-3 pr-3 p-1.5 text-white text-xs">
                            + Add Content
                        </button>
                        {showTypes && <QueTypes/>}
                    </div>
                    <button>
                        
                    </button>
                    <button></button>
                </div>
            </div>
        </>

    )
}