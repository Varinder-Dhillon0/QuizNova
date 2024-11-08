import React from "react";

const QuestionSettings = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="border border-1 border-gray-300  w-[35%] flex  flex-col rounded-xl">
                <div className="w-full">
                    <h1 className="font-Satoshi-Bold border p-4 border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 text-xl">
                        Question Settings
                    </h1>
                </div>
                <div className="flex items-center justify-between pt-5 px-4">
                    <h1 className="font-Satoshi-Bold text-lg">Questions</h1>
                    <div className="bg-black h-4 w-4 rounded-full"></div>
                </div>
                <div className="p-4">
                    <div className="border border-1 border-gray-300 rounded-xl flex gap-2 w-full p-4 items-start">
                        <div className="h-4 w-4 rounded-sm bg-black"></div>
                        <div className="flex flex-col items-start justify-start w-[70%] ml-2">
                            <h1 className="font-Satoshi-Bold leading-none">
                                Shuffle Questions
                            </h1>
                            <p className="font-Satoshi-Regular text-gray-600">
                                Let the system randomly select a defined amount
                                of questions from your question pool
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
                </div>
            </div>
        </div>
    );
};

export default QuestionSettings;
