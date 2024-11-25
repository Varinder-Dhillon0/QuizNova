import paperplane from "../../assets/img/paper-plane-right.svg"
import User from "../common/user";
import play from "../../assets/img/play.svg"
import gear from "../../assets/img/gear.svg"
import { ArrowLeft, CloudArrowUp, CloudCheck } from "@phosphor-icons/react"
import { useQues } from "../../hooks/useQues";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Popup from "../common/popup";
import ShareLink from "./ShareLink";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {

    const { quiz, setQuiz, setQues, updatingQuiz, updateQuiz } = useQues();
    const [sharePopup, setSharePopup] = useState(false);

    const { quizId } = useParams();

    const { isLoading, refetch } = useQuery({
        queryKey: ["quiz"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/quiz/getQuiz?id=${quizId}`, {});
            console.log("res is ", res.data);
            setQuiz(res.data.quiz);
            setQues(res.data.quiz.questions)
            return res.data;
        },
        refetchOnWindowFocus: false
    });

    return (
        <>
            <div className="flex h-[60px] justify-between items-center border-[#DDDDDD] border-b-2 bg-white w-[100%] pl-7 pr-7 font-Silka-Medium">
                <div className="w-[30%]">
                    <button className="p-[6px] rounded-md bg-[#f3f3f3]"><a href="/admin/dashboard"><ArrowLeft size={17} /></a></button>
                </div>
                <div className="flex justify-around text-[14px] items-center gap-2 absolute left-1/2 -translate-x-1/2">
                    <h1 className="font-Satoshi-Bold text-sm">{quiz?.title}</h1>
                    {updatingQuiz ? <CloudArrowUp size={16} /> : <CloudCheck size={18} />}
                </div>
                <div className="flex text-[13px] gap-4 justify-between items-center font-Silka-SemiBold">
                    <User />
                    <button className="flex items-center p-[5.5px] border-2 rounded-lg ">
                        <img src={gear} alt="" />
                    </button>
                    <button className="flex items-center p-[4px] border-2 pl-2 pr-2 rounded-lg ">
                        <img src={play} className="mr-1" alt="" /> Preview
                    </button>
                    {quiz?.published ?
                        <button className="flex items-center bg-black text-white p-[4px] pl-2 pr-2 rounded-lg " onClick={() => {setSharePopup(true)}}>
                            <img src={paperplane} className="mr-1" alt="" />Share Link
                        </button>
                        :
                        <button className="flex items-center bg-black text-white p-[4px] pl-2 pr-2 rounded-lg " onClick={() => { updateQuiz({ quizId, updates: { published: 1 } }); setSharePopup(true) }}>
                            <img src={paperplane} className="mr-1" alt="" /> {updatingQuiz ? "Loading" : "Publish"}
                        </button>}
                </div>
            </div>
            <AnimatePresence>
                {sharePopup &&
                    <Popup action={() => setSharePopup(false)}>
                        <ShareLink url={`http://localhost:5173/attempt/${quizId}`} setSharePopup={setSharePopup} />
                    </Popup>}
            </AnimatePresence>
        </>



    )
}