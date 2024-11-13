import { motion } from "framer-motion"
import { CaretDown, StarFour } from "@phosphor-icons/react"
import { ClockCountdown } from "@phosphor-icons/react"

export default function QueFooter() {

    return (
        <motion.div className="mt-5 border-t-2 pt-5 pb-5 flex font-Silka-Semibold">
            <div className="flex flex-col text-xs">
                <p>Randomized Order</p>
                <div className="flex mt-2 gap-14 bg-[#F3F3F3] p-[6px] pl-3 pr-3 rounded-sm items-center w-fit">
                    <p>Keep choices in correct order</p>
                    <CaretDown size={12} weight="bold" />
                </div>
            </div>
            <div className="flex flex-col text-xs ml-7">
                <p>Estimation time</p>
                <div className="flex mt-2 bg-[#F3F3F3] p-[6px] pl-3 pr-3 rounded-sm items-center w-fit">
                    <p className="border-r-2 pr-7">1</p>
                    <div className="flex gap-4">
                    <p className="ml-4">Mins</p>
                    <ClockCountdown size={14} weight="bold" />
                    </div>
                </  div>
            </div>
            <div className="flex flex-col text-xs ml-7">
                <p>Mark as point</p>
                <div className="flex mt-2 bg-[#F3F3F3] p-[6px] pl-3 pr-3 rounded-sm items-center w-fit">
                    <p className="border-r-2 pr-7">1</p>
                    <div className="flex gap-4">
                    <p className="ml-4">Mins</p>
                    <StarFour size={14} weight="bold" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}