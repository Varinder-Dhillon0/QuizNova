import { motion } from "framer-motion"
import x from "../../assets/img/x.svg"

export default function Popup({icon,title, action,children}){

    return(
        <motion.div 
        initial={{ y : 50, opacity : 0}}
        animate={{y : 0 , opacity : 1}}
        transition={{ease : "circInOut" , duration : 0.2}}
        exit={{y : 50, opacity : 0}}
        className="bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-[1.2px] relative z-50 p-6 text-md font-Silka-Bold text-[14px] w-[400px]" onClick={(e) => {e.stopPropagation()}}>
            <div className="flex justify-between border-b-[1.2px] pb-4 mb-4">
                <h1 className="text-[16px] flex"><img className="mr-2" src={icon} alt="" /> {title}</h1>
                <button className="z-50" onClick={action}><img src={x} alt="" /></button>
            </div>
            {children}
        </motion.div>
    )
}