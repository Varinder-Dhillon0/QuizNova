import ChatIcon from "../../assets/img/chats.svg";
import Dot from "../../assets/img/dot.svg";
import Score from "../../assets/img/score.svg";
import Clock from "../../assets/img/clock.svg";
import Chart from "../../assets/img/chart-donut.svg";
import { X } from "@phosphor-icons/react";

export default function SubmitQuiz() {
    return (
        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl bg-white border-[1.2px] p-4 pb-10 w-[500px]  flex flex-col">

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-4">
                <div className="flex items-center gap-3 mb-2 md:mb-0 ">
                    <h2 className="font-Satoshi-Bold text-md">Submit Quiz</h2>
                    <div className="h-4 hidden md:block"></div>
                </div>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setQuesNav(false)}>
                    <X size={16} weight="bold" />
                </button>
            </div>

            <div className="w-full border-t-2 border-[#ececec]"></div>

            <div className="flex gap-2 items-center">
                <img src={ChatIcon} alt="" className="h-6 w-6" />
                <div className="flex flex-col mt-4">
                    <p className="font-Satoshi-Bold text-sm">
                        Design Mastery Hub: Unleashing the Power of UI/UX
                    </p>
                    <div className="flex gap-1 items-center font-Satoshi-Regular text-gray-600 text-[12.2px]">
                        <p>Estimated Time: 1 hours </p>
                        <img src={Dot} alt="" className="h-6 w-6" />
                        <img src={Score} alt="" className="h-5 w-5" />
                        <p>300 points</p>
                    </div>
                </div>
            </div>
            <div className="main-summary-section bg-[#f3f3f3] flex flex-col w-full items-center mt-6 rounded-md  overflow-hidden">
                <div className="upper-part w-full p-2 pl-3.5 pr-3.5 flex it justify-between">
                    <div className="flex flex-col">
                        <p className="text-gray-600 font-Satoshi-Regular text-xs">
                            You started this quiz at:
                        </p>
                        <p className="font-Satoshi-Medium text-[13px]">
                            22/10/2024 at 14:53 PM
                        </p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img src={Clock} alt="" className="h-4 w-4" />
                        <p className="text-xs text-gray-600 font-Satoshi-Medium">
                            Time left :
                        </p>
                        <div className="flex items-center justify-center bg-black rounded p-[2.3px] text-xs text-white font-Satoshi-Regular">
                            00
                        </div>
                        <span>:</span>
                        <div className="flex items-center justify-center bg-black rounded p-[2.3px] text-xs text-white font-Satoshi-Regular">
                            00
                        </div>
                        <span>:</span>
                        <div className="flex items-center justify-center bg-black rounded p-[2.3px] text-xs text-white font-Satoshi-Regular">
                            00
                        </div>
                    </div>
                </div>
                <div className="lower-part bg-white gap-2 flex items-center border rounded-md w-full px-4 py-2">
                    <img src={Chart} alt="" className="h-20 " />
                    <div className="flex flex-col">
                        <p className="font-Satoshi-Bold text-md">20</p>
                        <p className="font-Satoshi-Medium text-gray-600 text-xs">
                            Question
                        </p>
                    </div>
                    <div className="border border-l-[1px] h-10 mx-5 border-gray-300"></div>

                    <div className="flex justify-between w-full ">
                        <div className="flex flex-col font-Satoshi-Bold">
                            <h1>15</h1>
                            <div className="flex items-center gap-1 font-Satoshi-Medium text-gray-600 text-xs">
                                <div className="bg-cyan-600 rounded-lg w-1.5 h-1.5"></div>
                                <p>Answered</p>
                            </div>
                        </div>
                        <div className="flex flex-col font-Satoshi-Bold">
                            <h1>15</h1>
                            <div className="flex items-center gap-1 font-Satoshi-Medium text-gray-600 text-xs">
                                <div className="bg-[#ffa800] rounded-lg w-1.5 h-1.5"></div>
                                <p>Not Sure</p>
                            </div>
                        </div>
                        <div className="flex flex-col font-Satoshi-Bold">
                            <h1>15</h1>
                            <div className="flex items-center gap-1 font-Satoshi-Medium text-gray-600 text-xs">
                                <div className="bg-gray-300 rounded-lg w-1.5 h-1.5"></div>
                                <p>Not Answered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="font-Satoshi-Bold text-base">5 skipped questions</h1>
                <h1 className="text-[12.5px] text-gray-600 font-Satoshi-Medium">
                    Complete your skipped questions for max score!
                </h1>
                <div className="flex gap-3 mt-3 font-Satoshi-Bold text-sm">
                    <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                        1
                    </div>
                    <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                        11
                    </div>
                    <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                        19
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="font-Satoshi-Bold text-base">
                    5 questions are still not sure
                </h1>
                <h1 className="text-[12.5px] text-gray-600 font-Satoshi-Medium">
                    Are you sure about these questions
                </h1>
                <div className="flex gap-3 mt-3 font-Satoshi-Bold text-xs pb-4">
                    <div className="relative">
                        <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                            10
                        </div>
                        <div className="bg-yellow-500 rounded-full h-3 w-3 -top-0.5 -right-0.5 flex items-center justify-center text-[10px] absolute font-Satoshi-Bold">
                            ?
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                            11
                        </div>
                        <div className="bg-yellow-500 rounded-full h-3 w-3 -top-0.5 -right-0.5 flex items-center justify-center text-[10px] absolute font-Satoshi-Bold">
                            ?
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                            20
                        </div>
                        <div className="bg-yellow-500 rounded-full h-3 w-3 -top-0.5 -right-0.5 flex items-center justify-center text-[10px] absolute font-Satoshi-Bold">
                            ?
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                            13
                        </div>
                        <div className="bg-yellow-500 rounded-full h-3 w-3 -top-0.5 -right-0.5 flex items-center justify-center text-[10px] absolute font-Satoshi-Bold">
                            ?
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                            15
                        </div>
                        <div className="bg-yellow-500 rounded-full h-3 w-3 -top-0.5 -right-0.5 flex items-center justify-center text-[10px] absolute font-Satoshi-Bold">
                            ?
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-full border border-gray-600 w-7 h-7 flex items-center justify-center">
                            19
                        </div>
                        <div className="bg-yellow-500 rounded-full h-3 w-3 -top-0.5 -right-0.5 flex items-center justify-center text-[10px] absolute font-Satoshi-Bold">
                            ?
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mt-2 border-t-2 border-[#ececec]"></div>

            <div className="w-full flex items-center text-sm gap-6 mt-5 font-Satoshi-Bold">
                <button className="w-full p-1.5 border rounded-md">Back to Quiz</button>
                <button className="w-full p-1.5 border rounded-md bg-[#4e41e6] text-white">Finish!</button>
            </div>
        </div>
    );
}
