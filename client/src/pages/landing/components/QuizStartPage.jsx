import React from "react";
import QuizStart from "../../../assets/img/QuizStart.png";

const QuizStartPage = () => {
    return (
        <div className="w-full h-screen bg-[#f4f6fb] object-contain overflow-hidden">
            <div className="w-2/3 h-full flex flex-col object-contain">
                <div className="px-8 py-6">
                    <h1 className="font-Satoshi-Bold text-7xl">Welcome</h1>
                    <h1 className="font-Boska-MediumItalic text-xl">
                        Test yourself on the skills in this course and earn
                        matery points for what you already know!
                    </h1>
                </div>
                <div className="flex-1 overflow-y-hidden">
                    <img
                        src={QuizStart}
                        alt=""
                        className="h-full object-contain object-[-45px,45px] scale-125"
                    />
                </div>
            </div>
        </div>
    );
};

export default QuizStartPage;
