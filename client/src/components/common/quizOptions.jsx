import { ArrowLeft, ArrowsClockwise, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shuffle, ArrowDown } from "@phosphor-icons/react";

export default function QuizOptions({ settings, updateSetting }) {

    const [showOptions, setShowOptions] = useState(false);

    return (

        <motion.div className="relative h-full">

            {/* button to open options */}
            <motion.div
                layout
                transition={{ duration: 0.2 }}
                className={`absolute h-full  ${showOptions ? "-left-4" : "right-10"}`}>
                <button className="border-2 p-2 mt-6 rounded-full relative z-10 bg-white" onClick={() => setShowOptions(!showOptions)}>
                    <ArrowLeft size={10} weight="bold" className={`${showOptions ? "rotate-180" : "rotate-0"}`} />
                </button>
                <div className="h-full bg-[#e9e8e8] w-[1px] absolute z-0 left-3.5 top-0" />
            </motion.div>

            {/* Options */}
            <AnimatePresence>
                {showOptions && <motion.div
                    layout
                    initial={{ width: "0px" }}
                    animate={{ width: "400px" }}
                    exit={{ width: "0px" }}
                    transition={{ duration: 0.2 }}
                    className="h-full ">
                    <div className="flex items-center justify-center">
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
                                    <div onClick={() => updateSetting("shuffleQues", !settings.value.shuffleQues)} className={`flex w-[32px] cursor-pointer p-0.5 h-[17px] rounded-full items-center ${settings.value.shuffleQues ? "justify-end bg-[#14ae7f]" : "justify-start bg-[#cccccc]"}`}>
                                        <motion.div layout transition={{
                                            type: "spring",
                                            stiffness: 700,
                                            damping: 30
                                        }}
                                            className="w-1/2 h-full rounded-full bg-white"></motion.div>
                                    </div>
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
                                    <div onClick={() => updateSetting("shuffleQues", !settings.value.shuffleQues)} className={`flex w-[32px] cursor-pointer p-0.5 h-[17px] rounded-full items-center ${settings.value.shuffleQues ? "justify-end bg-[#14ae7f]" : "justify-start bg-[#cccccc]"}`}>
                                        <motion.div layout transition={{
                                            type: "spring",
                                            stiffness: 700,
                                            damping: 30
                                        }}
                                            className="w-1/2 h-full rounded-full bg-white"></motion.div>
                                    </div>
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
                                    <div onClick={() => updateSetting("shuffleQues", !settings.value.shuffleQues)} className={`flex w-[32px] cursor-pointer p-0.5 h-[17px] rounded-full items-center ${settings.value.shuffleQues ? "justify-end bg-[#14ae7f]" : "justify-start bg-[#cccccc]"}`}>
                                        <motion.div layout transition={{
                                            type: "spring",
                                            stiffness: 700,
                                            damping: 30
                                        }}
                                            className="w-1/2 h-full rounded-full bg-white"></motion.div>
                                    </div>
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
                                    <div onClick={() => updateSetting("shuffleQues", !settings.value.shuffleQues)} className={`flex w-[32px] cursor-pointer p-0.5 h-[17px] rounded-full items-center ${settings.value.shuffleQues ? "justify-end bg-[#14ae7f]" : "justify-start bg-[#cccccc]"}`}>
                                        <motion.div layout transition={{
                                            type: "spring",
                                            stiffness: 700,
                                            damping: 30
                                        }}
                                            className="w-1/2 h-full rounded-full bg-white"></motion.div>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="p-4 -mt-3">
                    <div className="border border-1 border-gray-300 rounded-xl flex gap-2 w-full p-4 items-start">
                        <div className="h-4 w-4 rounded-sm bg-black"></div>
                        <div className="flex flex-col items-start justify-start w-[70%] ml-2">
                            <h1 className="font-Satoshi-Bold leading-none">
                                Redemption Questions
                            </h1>
                            <p className="font-Satoshi-Regular text-gray-600">
                                Allow leaners to reattempt a few incorrect
                                questions.
                            </p>
                        </div>
                        <div className="flex w-11 h-6 bg-gray-600 rounded-full ml-14">
                            <span className="h-6 w-6 bg-white rounded-full"></span>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="border border-1 border-gray-300 rounded-xl flex flex-col w-full p-2">
                        <div className="flex gap-5">
                            <div className="h-11 w-11 bg-yellow-500 rounded-full"></div>
                            <div className="flex flex-col">
                                <div className="flex gap-3">
                                    <h1 className="font-Satoshi-Bold text-base leading-none">
                                        Improve test scores
                                    </h1>
                                    <div className="bg-yellow-500 text-white font-Satoshi-Bold px-3 rounded-lg flex items-center justify-center">
                                        Pro
                                    </div>
                                </div>
                                <h1 className="font-Satoshi-Regular text-gray-600">
                                    Try out these super features to promote
                                    mastery
                                </h1>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2 w-full p-4 items-start">
                            <div className="h-4 w-4 rounded-sm bg-black"></div>
                            <div className="flex flex-col items-start justify-start w-[70%] ml-2">
                                <h1 className="font-Satoshi-Bold leading-none">
                                    Skip Questions & Attempt later
                                </h1>
                                <p className="font-Satoshi-Regular text-gray-600">
                                    Allow students to skip questions and revisit
                                    them late during the quiz.
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 border-b border-b-blue-600"
                                >
                                    See how it works
                                </a>
                            </div>
                            <div className="flex w-11 h-6 bg-gray-600 rounded-full ml-14">
                                <span className="h-6 w-6 bg-white rounded-full"></span>
                            </div>
                        </div>
                        <div className="border-t-[0.5px] border-gray-400 w-full"></div>
                        <div className="flex gap-2 w-full p-4 items-start">
                            <div className="h-4 w-4 rounded-sm bg-black"></div>
                            <div className="flex flex-col items-start justify-start w-[70%] ml-2">
                                <h1 className="font-Satoshi-Bold leading-none">
                                    Adaptive question bank mode
                                </h1>
                                <p className="font-Satoshi-Regular text-gray-600">
                                    Generate a unique set of questions every
                                    time to prevent copying and rote learning.
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 border-b border-b-blue-600"
                                >
                                    Preview templates
                                </a>
                            </div>
                            <div className="flex w-11 h-6 bg-gray-600 rounded-full ml-14">
                                <span className="h-6 w-6 bg-white rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t-[0.5px] border-gray-400 w-[92%] mx-auto"></div>
                <div className="flex items-center justify-between pt-5 px-4">
                    <h1 className="font-Satoshi-Bold text-lg">Answer</h1>
                    <div className="bg-black h-4 w-4 rounded-full"></div>
                </div>
                <div className="p-4">
                    <div className="border border-1 border-gray-300 rounded-xl flex gap-2 w-full p-4 items-start">
                        <div className="h-4 w-4 rounded-sm bg-black"></div>
                        <div className="flex flex-col items-start justify-start w-[70%] ml-2">
                            <h1 className="font-Satoshi-Bold leading-none">
                                Pass mark
                            </h1>
                            <p className="font-Satoshi-Regular text-gray-600">
                                This will let you set minimum point to your
                                learners to earn to pass through this quiz.
                            </p>
                        </div>
                        <div className="flex w-11 h-6 bg-gray-600 rounded-full ml-14">
                            <span className="h-6 w-6 bg-white rounded-full"></span>
                        </div>
                    </div>
                </div>
                <div className="p-4 -mt-3">
                    <div className="border border-1 border-gray-300 rounded-xl flex gap-2 w-full p-4 items-start">
                        <div className="h-4 w-4 rounded-sm bg-black"></div>
                        <div className="flex flex-col items-start justify-start w-[70%] ml-2">
                            <h1 className="font-Satoshi-Bold leading-none">
                                Attempt
                            </h1>
                            <p className="font-Satoshi-Regular text-gray-600">
                                Let the sysstem randomly select a defined amount
                                of questions from your questions pool.
                            </p>
                        </div>
                        <div className="flex w-11 h-6 bg-gray-600 rounded-full ml-14">
                            <span className="h-6 w-6 bg-white rounded-full"></span>
                        </div>
                    </div>
                </div> */}
                        </div>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}