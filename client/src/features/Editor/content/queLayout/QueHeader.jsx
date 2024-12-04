import { useState } from "react"
import RenderQueType from "../../../../components/renderQueType"
import { CaretDown } from "@phosphor-icons/react"
import { AnimatePresence } from "framer-motion"
import Backdrop from "../../../../components/backdrop"
import SelectQueBar from "../selectQueBar"
import { motion } from "framer-motion"

export default function QueHeader({ form, index }) {

    const [showTypes, setShowTypes] = useState(false)

    return (
        <div className="flex relative pt-4 font-base font-Satoshi-Bold pb-4 border-b-[1.5px]" >
            <div onClick={() =>{ setShowTypes(!showTypes)}} className="flex bg-[#F3F3F3] p-2 gap-5 pl-3 h-7 pr-3 rounded-sm items-center cursor-pointer">
                <div className="text-[12px] flex gap-2">
                    <RenderQueType iconsize={17} type={form.value} />
                </div>
                <motion.div
                    animate={showTypes ? {rotate : 180} : {rotate : 0}}
                >
                    <CaretDown size={11} weight="bold"/>
                </motion.div>
            </div>
            <AnimatePresence>
                    {showTypes && <Backdrop action={() => setShowTypes(false)}> <SelectQueBar setShowTypes={setShowTypes} actionType="replace" index={index} position="top"/></Backdrop>}
            </AnimatePresence>
        </div>
    )
}