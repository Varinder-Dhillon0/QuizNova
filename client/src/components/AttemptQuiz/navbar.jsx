import { ClockCountdown, SealCheck, SquaresFour, Star, X } from "@phosphor-icons/react";
import { useState, useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import Popup from "../common/popup";
import QuizNavigation from "./quizNavigation";
import { QuizContext } from ".";
import QuizTimer from "./quizTimer";

export default function Navbar() {
    const [quesNav, setQuesNav] = useState(false);
    const {ques, response, timer} = useContext(QuizContext);


    return (
        <>
            <div className="flex items-center h-[10%] pt-5 pl-10 pb-5 pr-10 border-b-2 bg-white/50 justify-between">
                {/* left part */}
                <div className="flex items-center gap-6">
                    <button className="p-[6px] rounded-md bg-[#e6e6e6]">
                        <a href="/admin/dashboard"><X size={19} /></a>
                    </button>
                    <div className="flex items-center gap-1">
                        <ClockCountdown size={19} color="#747474" />
                        <QuizTimer/>
                    </div>
                </div>
                <div className="nav-right flex items-center gap-4">
                    <div className="flex items-center gap-2 font-Satoshi-Bold text-sm">
                        <div className="h-5 w-5 flex justify-center items-center rounded-full bg-yellow-500">
                            <Star size={11} weight="fill" />
                        </div>
                        <h1 className="text-base">1</h1>
                    </div>

                    {timer.started ? (<>
                        <button
                            className="text-base rounded-lg border-2 font-Satoshi-Bold flex items-center gap-2 bg-white px-2.5 py-1.5"
                            onClick={() => setQuesNav(!quesNav)}
                        >
                            <SquaresFour size={19} weight="bold" />Quiz Nav
                        </button>

                        <button className="text-base rounded-lg border-2 font-Satoshi-Bold flex items-center gap-2 bg-white px-2.5 py-1.5">
                            <SealCheck size={19} weight="bold" />Submit Quiz
                        </button>
                    </>) : ""}
                </div>
            </div>
            <AnimatePresence>
                {quesNav && timer.started ?
                    <Popup title="Create New Workspace" action={() => setQuesNav(false)}>
                        <QuizNavigation setQuesNav={setQuesNav} ques={ques} response={response} />
                    </Popup>
                    : ""}
            </AnimatePresence>
        </>
    );
}