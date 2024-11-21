import React from "react";
import brainQuest from "../../../assets/img/brainQuest.svg";
import leaderboard from "../../../assets/img/leaderboard.svg";
import payment from "../../../assets/img/payment.svg";

export default function Features() {
    return (
        <div className="flex justify-center py-20 relative  ">
            <div className="absolute z-[-999] top-[200px] bottom-10 left-[300px]">
                <img src="https://assets.website-files.com/623865af2eee366912508587/6241b2d3e22f1763bfb3a480_Blue%20Gradient%20Image%20(2)-p-500.png" alt="" className=""/>
            </div>
            <div className="absolute z-[-999] top-50 left-420">
                <img src="https://assets.website-files.com/623865af2eee366912508587/6241b2d41327941b39683db0_Peach%20Gradient%20Image%20(1)-p-800.png" alt="" />
            </div>
            <div className="w-9/12 grid grid-cols-3 gap-10">
                <div className="col-span-2 bg-black flex flex-col gap-6 text-white rounded-3xl py-8 px-10">
                    <div>
                        <p className="font-Satoshi-Bold text-5xl">
                            Engage and excel
                        </p>
                        <span className="font-Boska-BoldItalic text-white text-5xl text-opacity-70 leading-snug">
                            with Quiznova.
                        </span>
                    </div>
                    <p className="text-opacity-70 text-white font-Satoshi-Regular w-[80%] text-lg">
                    Beyond that, QuizNova simplifies everything, from creating captivating quizzes to tracking scores and sharing them effortlessly with the world.
                    </p>
                </div>

                <div className="rounded-3xl flex flex-col items-start gap-4 p-6 shadow-custom-light bg-white">
                    <img src={brainQuest} alt="" className="w-24 h-24" />
                    <h1 className="font-Satoshi-Bold text-4xl">
                        Create Custom Quizzes
                    </h1>
                    <p className="font-Satoshi-Regular text-lg">
                        Design quizzes with various question types, including
                        multiple-choice, fill-in-the-blank, and one-word
                        answers.
                    </p>
                </div>
                <div className="rounded-3xl flex flex-col items-start gap-4 p-6 shadow-custom-light bg-white">
                    <img src={leaderboard} alt="" className="w-24 h-24" />
                    <h1 className="font-Satoshi-Bold text-4xl">
                        Interactive Leaderboard
                    </h1>
                    <p className="font-Satoshi-Regular text-lg">
                        Track your progress and compete with others. Climb the
                        leaderboard and showcase your knowledge.
                    </p>
                </div>
                <div className="rounded-3xl flex flex-col items-start gap-4 p-6 shadow-custom-light bg-white">
                    <img
                        src="https://assets.website-files.com/623865af2eee366912508587/623c977a2a8f363f724cb8e1_image%2039.png"
                        alt=""
                        className="w-24 h-24"
                    />
                    <h1 className="font-Satoshi-Bold text-4xl">
                        Community Hub
                    </h1>
                    <p className="font-Satoshi-Regular text-lg">
                        Join discussions, share tips, and connect with quiz
                        enthusiasts to expand your knowledge.
                    </p>
                </div>
                <div className="rounded-3xl flex flex-col items-start gap-4 p-6 shadow-custom-light bg-white">
                    <img src={payment} alt="" className="w-24 h-24" />
                    <h1 className="font-Satoshi-Bold text-4xl">
                        Secure Payment Integration
                    </h1>
                    <p className="font-Satoshi-Regular text-lg">
                        Unlock premium quizzes and features with a secure and
                        seamless payment process.
                    </p>
                </div>
            </div>
        </div>
    );
}
