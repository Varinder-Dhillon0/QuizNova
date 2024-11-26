import React from "react";
import SideLeftImg from "../../../assets/img/side-left-img.svg";
import SideRightImg from "../../../assets/img/side-right-img.svg";

export default function MoreFeatures() {
    return (
        <>
            <div className="flex items-center gap-6 p-32 py-16" id="moreFeatures">
                <div className="w-6/12">
                    <img src={SideLeftImg} alt="" />
                </div>
                <div className="w-6/12 flex flex-col font-Satoshi-Medium gap-10 px-5">
                    <h1 className="text-6xl/tight font-Satoshi-Bold">
                        Manage{" "}
                        <span className="font-Boska-BoldItalic">
                            all your quizzes{" "}
                        </span>
                        at one place
                    </h1>
                    <p className="font-Satoshi-Regular text-xl">
                        Attempt and make custom Quizzes, and get comprehensive
                        insights on your dashboards. Connect with people around
                        th globe.
                    </p>
                    <div className="flex flex-col gap-5">
                        <div className="flex text-xl gap-4">
                            <img
                                src={
                                    "https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
                                }
                                alt=""
                            />
                            <p>Join discussions, share tips.</p>
                        </div>
                        <div className="flex text-xl gap-4">
                            <img
                                src="https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
                                alt=""
                            />
                            <p>Unlock premium quizzes.</p>
                        </div>
                        <div className="flex text-xl gap-4">
                            <img
                                src="https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
                                alt=""
                            />
                            <p>Track your progress and compete with others.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6 p-32 py-16">
                <div className="flex flex-col w-6/12 gap-10 px-5">
                    <h1 className="font-Satoshi-Bold text-6xl/tight">
                        Create quizzes,{" "}
                        <span className="font-Boska-BoldItalic">
                            effortlessly, anytime, anywhere{" "}
                        </span>
                    </h1>
                    <p className="font-Satoshi-Regular text-xl">
                        Design and share quizzes with ease, in any format,
                        without limits, and get instant feedback in real-time.
                        Making learning fun and interactive has never been
                        simpler.
                    </p>
                    <p className="font-Satoshi-Regular text-xl">
                        Stay ahead of deadlines and boost engagement with
                        automated reminders, detailed analytics, and seamless
                        collaboration features.
                    </p>
                    <div className="flex items-center gap-4">
                            <img
                                src="https://assets.website-files.com/623865af2eee366912508587/6238747d9d3f5e4e5097b087_ArrowUpRight.svg"
                                alt=""
								className="h-5 w-5 bg-black p-0.5 rounded-full"
                            />
                        <p className="font-Satoshi-Bold">LEARN MORE</p>
                    </div>
                </div>
                <div className="w-6/12">
                    <img src={SideRightImg} alt="" />
                </div>
            </div>
        </>
    );
}
