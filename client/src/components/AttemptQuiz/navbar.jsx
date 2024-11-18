import { ClockCountdown, SquaresFour, Star, X } from "@phosphor-icons/react";
import { useState } from "react";
import {AnimatePresence} from "framer-motion"
import Popup from "../common/popup"
import QuizNavigation from "./quizNavigation";

export default function Navbar({ques, response}) {

    const [quesNav, setQuesNav] = useState(false);

    return (
        <>
            <div className="flex items-center h-[10%] pt-5 pl-10 pr-10 justify-between">

                {/* left part */}
                <div className="flex items-center gap-6">
                    <button className="p-[6px] rounded-md bg-[#e6e6e6]"><a href="/admin/dashboard"><X size={16} /></a></button>
                    <div className="flex items-center gap-1">
                        <ClockCountdown size={16} color="#747474" />
                        <h1 className="text-[#747474] text-sm font-Satoshi-Bold">
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
                <div className="nav-right flex items-center gap-4">
                    <div className="flex items-center gap-1 font-Satoshi-Bold text-sm">
                        <div className="h-4 w-4 flex justify-center  items-center rounded-full bg-yellow-500"><Star size={8} weight="fill" /></div>
                        <h1 className="">1</h1>
                    </div>

                    <button className="text-[13px] rounded-lg border-2 font-Satoshi-Bold flex items-center gap-2 bg-white px-2.5 py-1.5" onClick={() => setQuesNav(!quesNav)}>
                        <SquaresFour size={16} weight="bold" />Quiz Nav
                    </button>

                    <button className="text-[13px] rounded-lg border-2 font-Satoshi-Bold flex items-center gap-2 bg-white px-2.5 py-1.5">
                        <SquaresFour size={16} weight="bold" />Focus Mode
                    </button>

                </div>
            </div>
            <AnimatePresence>
                {quesNav &&
                    <Popup title="Create New Workspace" action={() => setQuesNav(false)}>
                        <QuizNavigation setQuesNav={setQuesNav} ques={ques} response={response}/>
                    </Popup>
                }
            </AnimatePresence>
        </>

    )
}