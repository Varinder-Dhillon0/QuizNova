import { useMutation } from "@tanstack/react-query";
import { useQues } from "../../hooks/useQues";
import axios from "axios";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Backdrop from "../common/backdrop";
import Popup from "../common/popup";
import { useAuth } from "../../hooks/useAuth";
import workspaceimg from "../../assets/img/workspace.svg"
import QuizManager from "./QuizManager";
import plus from "../../assets/img/plus-white.svg"
import { useNavigate } from "react-router-dom";
import Quiz from "./quiz";

export default function Content({selectedworkspace}) {
    const [quizzes, setQuizzes] = useState([]);
    const [popup, setPopup] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const { mutate: getQuizzes, isPending: getPending } = useMutation({
        mutationFn: async () => {
            const res = await axios.get(`http://localhost:5000/quiz/get?workspace=${selectedworkspace.id}&creator=${user.email}`);
            console.log(res.data);
            return res.data;
        },
        onSuccess: (data) => {
            if (data.success) {
                setQuizzes([...data.quizzes]);
            }
        }
    });

    useEffect(() => {
        getQuizzes();
    }, [selectedworkspace]);

    return (
        <>
            <AnimatePresence>
                {popup && <QuizManager setPopup={setPopup} getQuizzes={getQuizzes} selectedworkspace={selectedworkspace}/>}
            </AnimatePresence>
            <div className="overflow-auto">
                <div className="text-2xl flex justify-between">
                    <div className="font-Silka-Bold">
                        <h1>{selectedworkspace.title}</h1>
                    </div>
                    <button className="bg-[#5a4bea] text-white flex justify-between items-center font-Silka-Medium p-[6px] w-[102px] pr-3 pl-3 text-xs rounded-md" onClick={() => setPopup(true)}><img src={plus} /> New Quiz</button>
                </div>

                <div className="grid grid-cols-3 grid-rows-auto gap-4">
                {getPending ? "loading" :
                    quizzes.map((quiz) => {
                        return <Quiz key={quiz._id} quiz={quiz} selectedworkspace={selectedworkspace}/>
                    })}
                </div>
            </div>
        </>

    );
}
