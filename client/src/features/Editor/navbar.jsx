import paperplane from "../../assets/img/paper-plane-right.svg"
import User from "../../components/user";
import { ArrowLeft, CloudArrowUp, CloudCheck, Gear, PaperPlaneRight, Play } from "@phosphor-icons/react"
import { useQues } from "../../hooks/useQues";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Popup from "../../components/popup";
import ShareLink from "./ShareLink";
import { AnimatePresence } from "framer-motion";
import QuizManager from "../createQuiz/QuizManager";

export default function Navbar({setEditQuizSettings}) {

    const { quiz, setQuiz, setQues, updatingQuiz, updateQuiz } = useQues();
    const [sharePopup, setSharePopup] = useState(false);

    const { quizId } = useParams();
    const navigate = useNavigate();

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
                <div className="flex text-[13px] gap-4 justify-between items-center ">
                    <User />
                    <button className="p-1 rounded-md border-2" onClick={() => {setEditQuizSettings(true)}}>
                        <Gear size={20} />
                    </button>
                    <button
                        className="flex items-center justify-center gap-2 py-2 font-Satoshi-Bold leading-none border-2 pl-2 pr-2 rounded-lg"
                        onClick={() => window.open(`/preview/${quizId}`, '_blank')}
                    >
                        <Play size={14} weight="bold" />Preview
                    </button>
                    {quiz?.published ?
                        <button className="flex items-center justify-center bg-black text-white gap-1 py-2 font-Satoshi-Bold leading-none border-2 pl-2 pr-2 rounded-lg " onClick={() => { setSharePopup(true) }}>
                            <PaperPlaneRight weight="bold" size={14} />Share Link
                        </button>
                        :
                        <button className="flex items-center justify-center bg-black text-white gap-1 py-2 font-Satoshi-Bold leading-none border-2 pl-2 pr-2 rounded-lg " onClick={() => { updateQuiz({ quizId, updates: { published: 1 } }); setSharePopup(true) }}>
                            <PaperPlaneRight weight="bold" size={14} /> {updatingQuiz ? "Loading" : "Publish"}
                        </button>}
                </div>
            </div>
            <AnimatePresence>
                {sharePopup &&
                    <Popup action={() => setSharePopup(false)}>
                        <ShareLink url={`http://localhost:5173/attempt/${quizId}`} setSharePopup={setSharePopup} />
                    </Popup>
                }
            </AnimatePresence>
            
        </>
    )
}