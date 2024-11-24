import { useState } from "react";
import Backdrop from "../common/backdrop";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ArrowCircleUpRight, ArrowUpRight, ChartDonut, DotsThree, DotsThreeCircle, Info, Scroll, SealQuestion } from "@phosphor-icons/react";
import RoundChart from "../common/roundChart";

export default function Quiz({ quiz, selectedworkspace }) {
    const [popup, showPopup] = useState(false);

    const accuracy_data = [
        { name: 'Accuracy', value: 90 },
        { name: 'No Accuracy', value: 10 },

    ];

    return (
        <div className="bg-white border-2 flex flex-col gap-3 h-auto rounded-xl p-2">
            {/* Line 1: Thumbnail and Stats */}
            <div className="relative bg-yellow-600 z-50 w-full h-32 rounded-xl p-2">
                {quiz.quizThumbnail && (
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                        src={`http://localhost:5000/uploads/${quiz.quizThumbnail}`}
                        alt="Quiz Thumbnail"
                    />
                )}
                <div className="absolute top-3 left-3 bg-opacity-60 bg-gray-700 px-2 text-xs h-6 rounded-md flex font-Satoshi-Medium text-white gap-1 items-center justify-center">
                <Scroll size={14} />
                    <h1>10</h1>
                    <h1>Attempts</h1>
                </div>
            </div>

            <div className="px-3 flex flex-col gap-5 overflow-hidden">
                <h1 className="text-black font-Satoshi-Bold text-xl text-wrap break-all">
                    { 56 > 55 ? "welobkejrqbwgbrewwkjbgolrewepopjf3wlegf4welognf43w4ol3wgbloj4w3bol4wb3tjuolbwj4bojb".substring(0, 55) + "..." : quiz.que.length}
                </h1>

                <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-2 items-center">
                        <RoundChart data={accuracy_data} />
                        <div className="flex flex-col">
                            <h1 className="font-Satoshi-Bold text-gray-700 text-xs">Accuracy</h1>
                            <div className="flex gap-0.5 items-center">
                                <h1 className="font-Satoshi-Black text-black text-base">60%</h1>
                            </div>
                        </div>
                    </div>
                    <div className="h-10 w-0.5 bg-gray-100 rounded-md"></div>
                    <div className="flex gap-2 items-center justify-center">
                        <RoundChart data={accuracy_data} />
                        <div className="flex flex-col">
                            <h1 className="font-Satoshi-Bold text-gray-700 text-xs">Completion Rate</h1>
                            <div className="flex gap-0.5 items-center">
                                <h1 className="font-Satoshi-Black text-black text-base">60%</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line 4: Tags */}
                <div className="flex justify-between">
                    <div className="flex flex-col h-[3.7rem] justify-between">
                        <div className="line4 flex items-center justify-between ">
                            <div className="flex gap-3 items-center">
                                <p className="text-[#797b7c] text-[13px] font-Satoshi-Medium p-[2px] px-[6px] rounded-full bg-[#f0f2f4]">
                                    Ui / Ux
                                </p>
                                <p className="text-[#797b7c] text-[13px] font-Satoshi-Medium p-[2px] px-[6px] rounded-full bg-[#f0f2f4]">
                                    Frontend Development
                                </p>
                            </div>
                        </div>

                        {/* Line 5: Footer */}
                        <div className="line5 flex items-center justify-between">
                            <div className="flex gap-2 items-center text-xs">
                                <p className="font-Satoshi-Medium text-gray-600 ">
                                    Created{" "}
                                    {new Date(quiz.created_at).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </p>
                                <div className="text-[5px]">●</div>
                                <div className="flex items-center font-Satoshi-Bold text-black gap-1">
                                    <SealQuestion size={14} weight="bold" />
                                    15 Questions
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a href={`/admin/editor/${selectedworkspace.id}/${quiz._id}`}>
                            <button className="border-2 p-1 rounded-full">
                                <ArrowUpRight size={14} />
                            </button>
                        </a>
                        <button className="bg-white border-2 p-1 rounded-full" onClick={(e) => { e.stopPropagation(); showPopup(true); }}>
                            <DotsThree size={14} />
                            <div className="text-black gap-2 flex">

                                {popup && (
                                    <AnimatePresence>
                                        <Backdrop action={() => showPopup(false)}>
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: popup ? "auto" : 0, opacity: popup ? 1 : 0 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.05 }}
                                                className="absolute p-1 z-50 w-max mt-1 font-Silka-Medium text-xs rounded-md text-[14px] bg-white shadow-lg"
                                            >
                                                <div>Actions</div>
                                            </motion.div>
                                        </Backdrop>
                                    </AnimatePresence>
                                )}
                            </div>  
                        </button>
                    </div>


                </div>




            </div>
        </div>
    );
}
