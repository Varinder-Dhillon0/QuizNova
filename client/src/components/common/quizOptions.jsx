import { ArrowLeft, ArrowsClockwise, CaretDown, ShuffleSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shuffle, ArrowDown } from "@phosphor-icons/react";
import ToggleButton from "./toggleButton";

export default function QuizOptions({ settings, updateSetting }) {

    const [showOptions, setShowOptions] = useState(false);

    return (

        <motion.div className={`relative h-full`} initial={{width : "10px"}} animate={showOptions ? {width : "400px"} : {width : "10px"}} exit={{width : "10px"}}>

            {/* button to open options */}
            <motion.div
                layout
                transition={{ duration: 0.2 }}
                className={`absolute h-full  ${showOptions ? "-left-4" : "right-10"}`}>
                <button className="border-2 p-2 mt-8 rounded-full relative z-10 bg-white" onClick={() => setShowOptions(!showOptions)}>
                    <ArrowLeft size={10} weight="bold" className={`${showOptions ? "rotate-180" : "rotate-0"}`} />
                </button>
                <div className="h-full bg-[#e9e8e8] w-[1px] absolute z-0 left-3.5 top-0" />
            </motion.div>

            {/* Options */}
            <AnimatePresence>
                {showOptions && <motion.div
                    layout
                    initial={{opacity : 0, right : -400 }}
                    animate={{opacity : 1, right : 0 }}
                    exit={{opacity : 0, right : -400}}
                    transition={{ duration: 0.2 }}
                    className="h-full relative">
                    <div className="flex w-[400px] items-center justify-center">
                        <div className="overflow-auto w-full flex  flex-col rounded-xl">

                            <div className="w-full">
                                <h1 className="font-Satoshi-Bold text-md p-3 border-b-2 border-[#E9E8E8]">
                                    Quiz Settings
                                </h1>
                            </div>

                            {/* question settings */}
                            <div className="p-4 pt-5">
                                <div className="flex items-center justify-between text-base mb-2">
                                    <h1 className="font-Satoshi-Bold ">Question</h1>
                                    <CaretDown size={14} weight="bold" />
                                </div>

                                {/* different settings */}
                                {/* shuffleQues */}
                                <div className="border p-3 border-1 mt-4 border-gray-300 rounded-xl flex gap-4 w-full items-start justify-between">

                                    <div className="flex items-start gap-3 w-[85%]">
                                        <Shuffle weight="bold" size={28} />
                                        <div>
                                            <h1 className="font-Satoshi-Bold text-sm leading-none">
                                                Shuffle Questions
                                            </h1>
                                            <p className="font-Satoshi-Medium text-xs pt-1 text-gray-600">
                                                Let the system randomly select a defined amount
                                                of questions from your question pool
                                            </p>
                                        </div>
                                    </div>
                                    <ToggleButton action={() => updateSetting("shuffleQues", !settings.value.shuffleQues)} value={settings.value.shuffleQues} />
                                </div>

                                <div className="border p-3 border-1 mt-4 border-gray-300 rounded-xl flex gap-4 w-full items-start justify-between">

                                    <div className="flex items-start gap-3 w-[85%]">
                                        <ArrowsClockwise weight="bold" size={24.5} />

                                        <div>
                                            <h1 className="font-Satoshi-Bold text-sm leading-none">
                                                Adaptive Question Bank Mode
                                            </h1>
                                            <p className="font-Satoshi-Medium text-xs pt-1 text-gray-600">
                                                Let us select different set of questions to prevent copying and rote learning
                                            </p>
                                        </div>
                                    </div>
                                    <ToggleButton action={() => updateSetting("adaptiveQueBank", !settings.value.adaptiveQueBank)} value={settings.value.adaptiveQueBank} />
                                </div>
                            </div>

                            <div className="p-4 pt-5">
                                <div className="flex items-center justify-between text-base mb-2">
                                    <h1 className="font-Satoshi-Bold ">Answer</h1>
                                    <CaretDown size={14} weight="bold" />
                                </div>
 
                                {/* different settings */}
                                {/* shuffleQues */}
                                <div className="border p-3 border-1 mt-4 border-gray-300 rounded-xl flex gap-4 w-full items-start justify-between">

                                    <div className="flex items-start gap-3 w-[85%]">
                                    <ShuffleSimple weight="bold" size={16} />
                                        <div>
                                            <h1 className="font-Satoshi-Bold text-sm leading-none">
                                                Shuffle Answer Options
                                            </h1>
                                            <p className="font-Satoshi-Medium text-xs pt-1 text-gray-600">
                                                Options will be rearranged randomly for each learner.
                                            </p>
                                        </div>
                                    </div>
                                        <ToggleButton action={() => updateSetting("shuffleOptions", !settings.value.shuffleOptions)} value={settings.value.shuffleOptions} />
                                </div>

                                <div className="border p-3 border-1 mt-4 border-gray-300 rounded-xl flex gap-4 w-full items-start justify-between">

                                    <div className="flex items-start gap-3 w-[85%]">
                                        <ArrowsClockwise weight="bold" size={24.5} />

                                        <div>
                                            <h1 className="font-Satoshi-Bold text-sm leading-none">
                                                Show answers after quiz
                                            </h1>
                                            <p className="font-Satoshi-Medium text-xs pt-1 text-gray-600">
                                                Allow participants to view questions ans answers at the end
                                            </p>
                                        </div>
                                    </div>
                                    <ToggleButton action={() => updateSetting("showQueAnswers", !settings.value.showQueAnswers)} value={settings.value.showQueAnswers} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}