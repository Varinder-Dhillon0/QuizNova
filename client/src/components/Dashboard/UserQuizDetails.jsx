import React from "react";

const QuestionBox = ({ number }) => {
    return (
        <div className="relative w-16 h-8 bg-[#f3f3f3] font-Satoshi-Bold flex items-center justify-center rounded-sm text-sm">
            {number}
            <div className="bg-[#26a67e] w-4 h-4 absolute top-0 right-0 rounded-tr-sm rounded-bl-sm"></div>
        </div>
    );
};

const UserQuizDetails = () => {
    const questionNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center">
            <div className="main-user-wrapper flex flex-col w-[50%] h-[75%] border border-1 border-black rounded-2xl p-4 gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center gap-1">
                                <p className="font-Satoshi-Medium text-lg">
                                    Adit Irawan
                                </p>
                                <div className="bg-[#f0f0f0] text-[#a1a1a1] px-2 rounded-2xl text-base font-Satoshi-Medium">
                                    Design
                                </div>
                            </div>
                            <p className="text-[#a1a1a1] font-Satoshi-Regular">
                                Jr UI/UX Designer
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 border-2 border-gray-400 rounded-lg"></div>
                        <div className="w-8 h-8 border-2 border-gray-400 rounded-lg"></div>
                        <div className="w-8 h-8 border-2 border-gray-400 rounded-lg"></div>
                        <div className="cross w-7 h-7 bg-black rounded-full"></div>
                    </div>
                </div>
                <div className="w-full bg-[#e3e0e0] h-0.5"></div>
                <div className="flex items-center justify-between">
                    <p className="font-Satoshi-Bold text-3xl leading-tight">
                        UI Design Fundamentals & <br /> Best Practice
                    </p>
                    <div className="flex items-center justify-center font-Satoshi-Medium text-[#807f7f] gap-8">
                        <div className="flex flex-col items-start justify-center">
                            <p>Accuracy</p>
                            <div className="flex items-center justify-center gap-1">
                                <div className="w-7 h-7 rounded-full bg-[#26a67e]"></div>
                                <p className="text-black">85%</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <p>Point</p>
                            <div className="flex items-center justify-center gap-1">
                                <div className="w-7 h-7 rounded-full bg-[#ee9626]"></div>
                                <p className="text-black">85%</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <p>Answered</p>
                            <p className="text-black">
                                19/<span className="text-[#807f7f]">20</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-2 text-sm">
                    <p className="font-Satoshi-Medium text-[#807f7f]    ">
                        Finished Oct 03, 2024 • 10:00 AM •
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 bg-black rounded-full"></div>
                        <p className="text-black font-Satoshi-Bold">
                            20 Questions
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-start gap-2 mt-10">
                    {questionNumbers.map((number) => (
                        <QuestionBox key={number} number={number} />
                    ))}
                </div>
                <div className="flex items-center justify-start gap-16">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-[#26a67e]"></div>
                        <p className="font-Satoshi-Medium text-sm text-[#807f7f]">
                            Correct 16{" "}
                            <span className="text-[#bebbbb]">• 72%</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-[#26a67e]"></div>
                        <p className="font-Satoshi-Medium text-sm text-[#807f7f]">
                            Half Correct 1{" "}
                            <span className="text-[#bebbbb]">• 3%</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-[#807f7f]"></div>
                        <p className="font-Satoshi-Medium text-sm text-[#807f7f]">
                            Need Review 0{" "}
                            <span className="text-[#bebbbb]">• 0%</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-16">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-[#cf3938]"></div>
                        <p className="font-Satoshi-Medium text-sm text-[#807f7f]">
                            Incorrect 2{" "}
                            <span className="text-[#bebbbb]">• 12%</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-[#d6d4d4]"></div>
                        <p className="font-Satoshi-Medium text-sm text-[#807f7f]">
                            Skipped 1{" "}
                            <span className="text-[#bebbbb]">• 3%</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-5 mt-10">
                    <div className="border border-1 border-[#d6d4d4] flex flex-col rounded-md p-4 gap-8 w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 bg-black rounded-sm"></div>
                                <p className="font-Satoshi-Medium text-black text-sm">
                                    Question 1{" "}
                                    <span className="text-[#807f7f]">•</span>
                                </p>
                                <div className="bg-[#26a67e] h-4 w-4 rounded-sm"></div>
                                <p className="font-Satoshi-Medium text-sm text-[#807f7f]">
                                    Correct
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex items-center justify-center bg-[#f2f2f3] rounded-md gap-2 py-1 px-2">
                                    <div className="h-3 w-3 rounded-sm bg-black"></div>
                                    <p className="font-Satoshi-Medium text-sm">
                                        Multiple Choice
                                    </p>
                                </div>
                                <p className="text-[#807f7f] text-sm font-Satoshi-Medium">
                                    • Time 32s •
                                </p>
                                <div className="h-4 w-4 rounded-full bg-[#eda21c] "></div>
                                <p className="text-[#807f7f] text-sm font-Satoshi-Medium">
                                    1 Point
                                </p>
                                <div className="h-4 w-4 rounded-full bg-black"></div>
                            </div>
                        </div>
                        <p className="text-black text-lg font-Satoshi-Bold">
                            What does UI stand for in the context of design?
                        </p>
                    </div>
                    <div className="border border-1 border-[#d6d4d4] flex flex-col rounded-md p-4 gap-8 w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 bg-black rounded-sm"></div>
                                <p className="font-Satoshi-Medium text-black text-sm">
                                    Question 1{" "}
                                    <span className="text-[#807f7f]">•</span>
                                </p>
                                <div className="bg-[#26a67e] h-4 w-4 rounded-sm"></div>
                                <p className="font-Satoshi-Medium text-sm text-[#807f7f]">
                                    Correct
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex items-center justify-center bg-[#f2f2f3] rounded-md gap-2 py-1 px-2">
                                    <div className="h-3 w-3 rounded-sm bg-black"></div>
                                    <p className="font-Satoshi-Medium text-sm">
                                        Multiple Choice
                                    </p>
                                </div>
                                <p className="text-[#807f7f] text-sm font-Satoshi-Medium">
                                    • Time 32s •
                                </p>
                                <div className="h-4 w-4 rounded-full bg-[#eda21c] "></div>
                                <p className="text-[#807f7f] text-sm font-Satoshi-Medium">
                                    1 Point
                                </p>
                                <div className="h-4 w-4 rounded-full bg-black"></div>
                            </div>
                        </div>
                        <p className="text-black text-lg font-Satoshi-Bold">
                            What aspect of UI design involves choosing colors,
                            typography, and creating icons for a digital
                            interface??
                        </p>
                    </div>
                    <div className="border border-1 border-[#d6d4d4] flex flex-col rounded-md p-4 gap-8 w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1 items-center justify-center">
                                <div className="h-4 w-4 bg-black rounded-sm"></div>
                                <p className="font-Satoshi-Medium text-black text-sm">
                                    Question 1{" "}
                                    <span className="text-[#807f7f]">•</span>
                                </p>
                                <div className="bg-[#26a67e] h-4 w-4 rounded-sm"></div>
                                <p className="font-Satoshi-Medium text-sm text-[#807f7f]">
                                    Correct
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex items-center justify-center bg-[#f2f2f3] rounded-md gap-2 py-1 px-2">
                                    <div className="h-3 w-3 rounded-sm bg-black"></div>
                                    <p className="font-Satoshi-Medium text-sm">
                                        Multiple Choice
                                    </p>
                                </div>
                                <p className="text-[#807f7f] text-sm font-Satoshi-Medium">
                                    • Time 32s •
                                </p>
                                <div className="h-4 w-4 rounded-full bg-[#eda21c] "></div>
                                <p className="text-[#807f7f] text-sm font-Satoshi-Medium">
                                    1 Point
                                </p>
                                <div className="h-4 w-4 rounded-full bg-black"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <p className="text-black text-lg font-Satoshi-Bold">
                                UI design is focused on creating
                            </p>
                            <div className="bg-[#e6e6e6] rounded-lg w-32 h-8"></div>
                        </div>
                        <p className="text-black text-lg font-Satoshi-Bold leading-none -mt-6">
                            and interactive elements of a digital product.
                        </p>
                        <div className="flex items-center justify-start flex-wrap gap-3">
                            <div className="flex items-center justify-center gap-2 border border-1 border-[#d6d4d4] rounded-md p-2">
                                <div className="w-6 h-6 rounded-full bg-[#26a67e]"></div>
                                <p className="text-md font-Satoshi-Medium leading-none">
                                    Align Left
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 border border-1 border-[#d6d4d4] rounded-md p-2">
                                <div className="w-6 h-6 rounded-full bg-[#26a67e]"></div>
                                <p className="text-md font-Satoshi-Medium leading-none">
                                    Align Horizontal Centers
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 border border-1 border-[#d6d4d4] rounded-md p-2">
                                <div className="w-6 h-6 rounded-full bg-[#df2f2e]"></div>
                                <p className="text-md font-Satoshi-Medium leading-none">
                                    Align Right
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserQuizDetails;
