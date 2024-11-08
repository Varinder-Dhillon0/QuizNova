import React from "react";

const AttemptQuiz = () => {
    return (
        <div className="bg-[#e0e0e0] h-screen">
            <div className="flex flex-col gap-12 bg-[#f3f3f3] p-10 rounded-xl shadow-md ">
                <div className="main-wrapper">
                    <div className="navbar flex items-center justify-between">
                        <div className="nav-left flex items-center gap-6">
                            <div className="cross-icon h-6 w-6 rounded-md bg-[#e6e6e6]"></div>
                            <div className="flex items-center gap-1">
                                <div className="h-5 w-5 rounded-full bg-[#e6e6e6]"></div>
                                <h1 className="text-gray-500 font-Satoshi-Bold">
                                    Time left:
                                </h1>
                                <div className="h-6 w-6 rounded-md bg-black text-white flex items-center justify-center font-Satoshi-Medium text-sm">
                                    00
                                </div>
                                <h1>:</h1>
                                <div className="h-6 w-6 rounded-md bg-black text-white flex items-center justify-center font-Satoshi-Medium text-sm">
                                    00
                                </div>
                                <h1>:</h1>
                                <div className="h-6 w-6 rounded-md bg-black text-white flex items-center justify-center font-Satoshi-Medium text-sm">
                                    00
                                </div>
                            </div>
                        </div>
                        <div className="nav-right flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                            <h1 className="font-Satoshi-Bold">1</h1>
                            <div className="flex items-center justify-center gap-1 border border-1 border-bg-[#e6e6e6] rounded-md p-3 shadow-md bg-[#fefefe]">
                                <div className="h-4 w-4 rounded-md bg-[#e6e6e6]"></div>
                                <h1 className="font-Satoshi-Bold text-sm">
                                    Quiz Nav
                                </h1>
                            </div>
                            <div className="flex items-center justify-center border gap-2 border-1 border-bg-[#e6e6e6] rounded-md p-3 shadow-md bg-[#fefefe]">
                                <div className="h-4 w-4 rounded-md bg-[#e6e6e6]"></div>
                                <h1 className="font-Satoshi-Bold text-sm">
                                    Focus Mode
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mid-part-container w-full h-[80%] px-48 py-3">
                    <div className="mid-left flex flex-col w-[50%] gap-5">
                        <div className="flex gap-2 items-center">
                            <div className="h-4 w-4 rounded-md bg-black"></div>
                            <h1 className="font-Satoshi-Bold text-sm ">
                                Question 7 of 20
                            </h1>
                        </div>
                        <h1 className="font-Satoshi-Bold text-2xl">
                            Which of the following is NOT a key principle of a
                            responsive design?
                        </h1>
                        <h1 className="font-Satoshi-Medium text-[#6b6b6b] text-sm mt-3">
                            Select the correct answer
                        </h1>
                        <div className="flex flex-col gap-3">
                            <div className="flex bg-[#fefefe] rounded-lg gap-4 items-center px-6 py-3 shadow-md">
                                <div className="circle-marrker-option h-4 w-4 border border-1 border-[#6b6b6b] rounded-full"></div>
                                <h1 className="font-Satoshi-Bold">
                                    Fluids Grids
                                </h1>
                            </div>
                            <div className="flex bg-[#fefefe] rounded-lg gap-4 items-center px-6 py-3 shadow-md">
                                <div className="circle-marrker-option h-4 w-4 border border-1 border-[#6b6b6b] rounded-full"></div>
                                <h1 className="font-Satoshi-Bold">
                                    Flexible images
                                </h1>
                            </div>
                            <div className="flex bg-[#fefefe] rounded-lg gap-4 items-center px-6 py-3 shadow-md">
                                <div className="circle-marrker-option h-4 w-4 border border-1 border-[#6b6b6b] rounded-full"></div>
                                <h1 className="font-Satoshi-Bold">
                                    Fixed Layouts
                                </h1>
                            </div>
                            <div className="flex bg-[#fefefe] rounded-lg gap-4 items-center px-6 py-3 shadow-md">
                                <div className="circle-marrker-option h-4 w-4 border border-1 border-[#6b6b6b] rounded-full"></div>
                                <h1 className="font-Satoshi-Bold">
                                    Scalable Typography
                                </h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <button className="font-Satoshi-Bold text-sm flex items-center justify-center bg-[#fefefe] shadow-md rounded-md px-5 py-3">
                                Previous
                            </button>
                            <button className="font-Satoshi-Bold text-sm flex items-center justify-center bg-[#4e41e8] shadow-md rounded-md px-5 py-3 text-white">
                                Continue
                            </button>
                            <div className="flex items-center gap-1">
                                <h1 className="text-[#6b6b6b] font-Satoshi-Medium text-sm">
                                    Press
                                </h1>
                                <h1 className="font-Satoshi-Bold text-base">
                                    Cmd
                                </h1>
                                <div className="h-3 w-3 bg-black rounded-full"></div>
                                <h1 className="text-[#6b6b6b] font-Satoshi-Medium text-sm">
                                    +
                                </h1>
                                <h1 className="font-Satoshi-Bold text-base">
                                    Enter
                                </h1>
                                <div className="h-3 w-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-4 w-4 rounded-md border border-1 border-[#6b6b6b]"></div>
                            <h1 className="font-Satoshi-Medium text-[#6b6b6b] text-sm">
                                I'm not sure about the answer yet.
                            </h1>
                        </div>
                    </div>
                    <div className="mid-right w-[50%]"></div>
                </div>
                <div className="footer flex items gap-5">
                    <h1 className="font-Satoshi-Medium text-[#6b6b6b] text-sm">
                        Have an issue with this question?
                    </h1>
                    <div className="flex items-center gap-2 border-b border-b-[black]">
                        <div className="h-4 w-4 rounded-full bg-black"></div>
                        <h1 className="font-Satoshi-Bold text-black text-sm">
                            Report An Issue
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttemptQuiz;
