import { useState } from "react";
import Backdrop from "../common/backdrop";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ArrowCircleUpRight, ChartDonut, DotsThreeCircle, Info, SealQuestion } from "@phosphor-icons/react";

export default function Quiz({ quiz, selectedworkspace }) {

    const [popup, showPopup] = useState(false);

    return (
        <div className="w-full p-5 flex items-center cursor-pointer justify-between rounded-md font-Silka-Bold bg-white border-[2px] mt-4 mb-4">
            <div className="flex flex-col">

                {/* thumbnail and title display */}
                {quiz.quizThumbnail && <div className="w-full h-20 mb-5 overflow-hidden rounded-md"><img className="" src={`http://localhost:5000/uploads/${quiz.quizThumbnail}`} alt="" /></div>}
                <h1 className="h-10">{quiz.title}</h1>

                {/* accuracy and completion rate */}
                <div className="text-xs flex  gap-4 font-Satoshi-Medium">
                    <div className="flex items-center gap-2 pr-10 border-r-2">
                        <ChartDonut size={16} />
                        <div>
                            <h3 className="text-[#abacac]">Accuracy</h3>
                            <p className="flex gap-1 text-[11px] font-Satoshi-Bold items-center">60% <Info size={12} weight="bold" /></p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <ChartDonut size={16} />
                        <div>
                            <h3 className="text-[#abacac]">Completion Rate</h3>
                            <p className="flex gap-1 text-[11px] font-Satoshi-Bold items-center">60% <Info size={12} weight="bold" /></p>
                        </div>
                    </div>
                </div>

                {/* categories of quiz */}
                <div className="flex mt-4 mb-1 gap-3">
                    <p className="bg-[#f0f2f4] text-[#717374] p-1 rounded-md w-fit text-xxs font-Satoshi-Medium">Ui / Ux</p>
                    <p className="bg-[#f0f2f4] text-[#717374] p-1 rounded-md w-fit text-xxs font-Satoshi-Medium">Frontend Development</p>
                </div>

                {/* down element */}
                <div className=" text-[#717374] text-xxs flex justify-between items-end font-Satoshi-Medium">

                    <div className="flex gap-2 items-center">
                        <p className="font-Silka-Medium text-[#717374]">
                            Created {new Date(quiz.created_at).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                            })}
                        </p>
                        <div className="text-[5px]">●</div>
                        <div className="flex text-black gap-1">
                            <SealQuestion size={14} weight="bold" />
                            15 Questions
                        </div>
                    </div>

                    {/* button for actions of delete and edit on quiz */}
                    <div className="text-black gap-2 flex">
                        <a href={`/admin/editor/${selectedworkspace.id}/${quiz._id}`}>
                            <button><ArrowCircleUpRight size={25} /></button>
                        </a>
                        <button className="bg-white" onClick={(e) => { e.stopPropagation(); showPopup(true) }}>
                            <DotsThreeCircle size={25} />
                        </button>
                        {popup && <AnimatePresence>
                            <Backdrop action={() => showPopup(false)}>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: popup ? "auto" : 0, opacity: popup ? 1 : 0 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.05 }}
                                    className="absolute p-1 z-50 w-max mt-1  font-Silka-Medium text-xs rounded-md text-[14px] bg-white shadow-lg"
                                >
                                    <div>
                                        actions
                                    </div>
                                    {/* <HamburgerLink icon={pencil} title="Edit" action={() => { seteditingWorkspace(true) }} />
                                <HamburgerLink icon={trash} title="Delete" action={() => { deleteWorkspace()}} /> */}
                                </motion.div>
                            </Backdrop>
                        </AnimatePresence>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}