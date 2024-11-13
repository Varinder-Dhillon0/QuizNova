import { AnimatePresence } from "framer-motion"
import Backdrop from "./backdrop"
import { motion } from "framer-motion"

export default function DropdownMenu({children , dropdown , setDropdown}) {
    
    return(
        <AnimatePresence>
            <Backdrop action={() => setDropdown(false)}>
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: dropdown ? "auto" : 0, opacity: dropdown ? 1 : 0 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.05 }}
                    className="absolute p-1 z-50 w-max mt-1  font-Silka-Medium text-xs rounded-md text-[14px] bg-white shadow-lg"
                >
                    {children}
                </motion.div>
            </Backdrop>
        </AnimatePresence>
    )
}