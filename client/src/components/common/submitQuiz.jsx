import { X } from "lucide-react";
import ChatIcon from "../../assets/img/chats.svg";
import Dot from "../../assets/img/dot.svg";
import Score from "../../assets/img/score.svg";
import Clock from "../../assets/img/clock.svg";
import Chart from "../../assets/img/chart-donut.svg";

export default function submitQuiz() {
    return (
        <div className="main-wrapper flex items-center justify-center mt-4">
            <div className="sub-wrapper flex flex-col w-1/3 shadow-lg p-4 border rounded-lg">
                <div className="top-bar flex items-center justify-between">
                    <p className="font-Satoshi-Bold">Submit Quiz</p>
                    <button className="text-gray-500 hover:text-gray-700">
                        <X size={20} />
                    </button>
                </div>
                <div className="w-full border-t border-gray-400 mt-3"></div>
                <div className="flex gap-2 items-center">
                    <img src={ChatIcon} alt="" className="h-6 w-6" />
                    <div className="flex flex-col mt-4">
                        <p className="font-Satoshi-Medium text-sm">
                            Design Mastery Hub: Unleashing the Power of UI/UX
                        </p>
                        <div className="flex gap-1 items-center font-Satoshi-Regular text-gray-600 text-sm">
                            <p>Estimated Time: 1 hours </p>
                            <img src={Dot} alt="" className="h-6 w-6" />
                            <img src={Score} alt="" className="h-5 w-5" />
                            <p>300 points</p>
                        </div>
                    </div>
                </div>
                <div className="main-summary-section bg-gray-100 flex flex-col w-full items-center mt-6 rounded-md  overflow-hidden">
                    <div className="upper-part w-full p-2 flex it justify-between">
                        <div className="flex flex-col">
                            <p className="text-gray-600 font-Satoshi-Regular text-sm">
                                You start this quiz:
                            </p>
                            <p className="font-Satoshi-Medium text-sm">
                                22/10/2024 at 14:53 PM
                            </p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={Clock} alt="" className="h-6 w-6" />
                            <p className="text-sm text-gray-600 font-Satoshi-Regular">
                                Time left :
                            </p>
                            <div className="flex items-center justify-center bg-black rounded-md p-1 text-sm text-white font-Satoshi-Regular">
                                00
                            </div>
                            <span>:</span>
                            <div className="flex items-center justify-center bg-black rounded-md p-1 text-sm text-white font-Satoshi-Regular">
                                00
                            </div>
                            <span>:</span>
                            <div className="flex items-center justify-center bg-black rounded-md p-1 text-sm text-white font-Satoshi-Regular">
                                00
                            </div>
                        </div>
                    </div>
                    <div className="lower-part bg-white flex items-center border rounded-md w-full px-4 py-2">
                        <img src={Chart} alt="" className="h-20 " />
                        <div className="flex flex-col">
                            <p className="font-Satoshi-Bold text-md">20</p>
                            <p className="font-Satoshi-Regular text-gray-600 text-sm">
                                Question
                            </p>
                        </div>
                        <div className="border border-l-[1px] h-14 mx-4 border-gray-300"></div>
                        <div className="flex justify-between w-full ">
                            <div className="flex flex-col font-Satoshi-Bold">
                                <h1>15</h1>
                                <div className="flex items-center gap-1 font-Satoshi-Regular text-gray-600 text-sm">
                                    <div className="bg-cyan-600 rounded-lg w-1.5 h-1.5"></div>
                                    <p>Answered</p>
                                </div>
                            </div>
                            <div className="flex flex-col font-Satoshi-Bold">
                                <h1>15</h1>
                                <div className="flex items-center gap-1 font-Satoshi-Regular text-gray-600 text-sm">
                                    <div className="bg-cyan-600 rounded-lg w-1.5 h-1.5"></div>
                                    <p>Answered</p>
                                </div>
                            </div>
                            <div className="flex flex-col font-Satoshi-Bold">
                                <h1>15</h1>
                                <div className="flex items-center gap-1 font-Satoshi-Regular text-gray-600 text-sm">
                                    <div className="bg-cyan-600 rounded-lg w-1.5 h-1.5"></div>
                                    <p>Answered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="font-Satoshi-Bold">5 skipped questions</h1>
                    <h1 className="text-sm text-gray-600 font-Satoshi-Regular">
                        Complete your skipped questions fro max score!
                    </h1>
                    <div className="flex gap-4 mt-5 font-Satoshi-Bold text-sm">
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
                <div className="mt-5">
                    <h1 className="font-Satoshi-Bold">
                        5 answer are still not sure
                    </h1>
                    <h1 className="text-sm text-gray-600 font-Satoshi-Regular">
                        Make sure you're believe these answer
                    </h1>
                    <div className="flex gap-4 mt-5 font-Satoshi-Bold text-xs border-b border-gray-300 pb-4">
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
                <div className="w-full flex items-center gap-6 mt-3 font-Satoshi-Bold">
                    <button className="w-full p-2 border rounded-md">Back to Quiz</button>
                    <button className="w-full p-2 border rounded-md bg-violet-700 text-white">Finish!</button>
                </div>
            </div>
        </div>
    );
}
