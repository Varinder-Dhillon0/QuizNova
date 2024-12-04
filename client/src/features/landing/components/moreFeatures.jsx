import React from "react";
import SideLeftImg from "../../../assets/img/side-left-img.svg";
import SideRightImg from "../../../assets/img/side-right-img.svg";
import { motion } from "framer-motion";

export default function MoreFeatures() {
    return (
        <>
            <div className="flex items-center gap-6 p-32 py-16" id="moreFeatures">
                <div className="w-6/12">
                    <img src={SideLeftImg} alt="" />
                </div>
                <div className="w-6/12 flex flex-col font-Satoshi-Medium gap-10 px-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-6xl/tight font-Satoshi-Bold"
                    >
                        Manage{" "}
                        <span className="font-Boska-BoldItalic">
                            all your quizzes{" "}
                        </span>
                        at one place
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="font-Satoshi-Regular text-xl"
                    >
                        Attempt and make custom Quizzes, and get comprehensive
                        insights on your dashboards. Connect with people around
                        th globe.
                    </motion.p>
                    <div className="flex flex-col gap-5">
                        <motion.div
                            className="flex text-xl gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={
                                    "https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
                                }
                                alt=""
                            />
                            <p>Join discussions, share tips.</p>
                        </motion.div>
                        <motion.div
                            className="flex text-xl gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
                                alt=""
                            />
                            <p>Unlock premium quizzes.</p>
                        </motion.div>
                        <motion.div
                            className="flex text-xl gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
                                alt=""
                            />
                            <p>Track your progress and compete with others.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6 p-32 py-16">
                <div className="flex flex-col w-6/12 gap-10 px-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="font-Satoshi-Bold text-6xl/tight"
                    >
                        Create quizzes,{" "}
                        <span className="font-Boska-BoldItalic">
                            effortlessly, anytime, anywhere{" "}
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, staggerChildren: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-5"
                    >
                        <motion.p className="font-Satoshi-Regular text-xl" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                            Design and share quizzes with ease, in any format,
                            without limits, and get instant feedback in real-time.
                            Making learning fun and interactive has never been
                            simpler.
                        </motion.p>
                        <motion.p className="font-Satoshi-Regular text-xl" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                            Stay ahead of deadlines and boost engagement with
                            automated reminders, detailed analytics, and seamless
                            collaboration features.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src="https://assets.website-files.com/623865af2eee366912508587/6238747d9d3f5e4e5097b087_ArrowUpRight.svg"
                            alt=""
                            className="h-5 w-5 bg-black p-0.5 rounded-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        />
                        <motion.p
                            className="font-Satoshi-Bold"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            LEARN MORE
                        </motion.p>
                    </motion.div>
                </div>
                <div className="w-6/12">
                    <img src={SideRightImg} alt="" />
                </div>
            </div>
        </>
    );
}
