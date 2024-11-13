import React from "react";
import brainQuest from "../../../assets/img/brainQuest.svg";
import leaderboard from "../../../assets/img/leaderboard.svg";
import payment from "../../../assets/img/payment.svg";

export default function Features() {
    return (
        <div className="flex justify-center py-20">
            <div className="w-9/12 grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-black flex flex-col gap-6 text-white rounded-3xl py-10 px-10">
                    <div>
                        <p className="font-Satoshi-Bold text-5xl">
                            Engage and excel
                        </p>
                        <span className="font-Boska-BoldItalic text-white text-5xl text-opacity-70 leading-snug">
                            with Quiznova.
                        </span>
                    </div>
                    <p className="text-opacity-70 text-white font-Satoshi-Regular w-[80%] text-lg">
                    On top of all that, we takes care of other common issues such as missing system-fonts, missing
                    </p>
                </div>

                <div className="border-2 border-black rounded-3xl flex flex-col items-start gap-4">
                    <img src={brainQuest} alt="" className="w-24 h-24" />
                    <h1 className="font-Satoshi-Bold text-4xl">
                        Create Custom Quizzes
                    </h1>
                    <p className="font-Satoshi-Regular text-xl">
                        Design quizzes with various question types, including
                        multiple-choice, fill-in-the-blank, and one-word
                        answers.
                    </p>
                </div>
                <div className="border-2 border-black rounded-3xl flex flex-col items-start gap-4 p-12">
                    <img src={leaderboard} alt="" className="w-24 h-24" />
                    <h1 className="font-Satoshi-Bold text-4xl">
                        Interactive Leaderboard
                    </h1>
                    <p className="font-Satoshi-Regular text-xl">
                        Track your progress and compete with others. Climb the
                        leaderboard and showcase your knowledge.
                    </p>
                </div>
                <div className="border-2 border-black rounded-3xl flex flex-col items-start gap-4 p-11">
                    <img
                        src="https://assets.website-files.com/623865af2eee366912508587/623c977a2a8f363f724cb8e1_image%2039.png"
                        alt=""
                        className="w-24 h-24"
                    />
                    <h1 className="font-Satoshi-Bold text-4xl">
                        Community Hub
                    </h1>
                    <p className="font-Satoshi-Regular text-xl">
                        Join discussions, share tips, and connect with quiz
                        enthusiasts to expand your knowledge.
                    </p>
                </div>
                <div className="border-2 border-black rounded-3xl flex flex-col items-start gap-4 p-11">
                    <img src={payment} alt="" className="w-24 h-24" />
                    <h1 className="font-Satoshi-Bold text-4xl">
                        Secure Payment Integration
                    </h1>
                    <p className="font-Satoshi-Regular text-xl">
                        Unlock premium quizzes and features with a secure and
                        seamless payment process.
                    </p>
                </div>
            </div>
        </div>
    );
}
