import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";

import Popup from "../common/popup";
import SubmitQuiz from "./submitQuiz";
import StartQuiz from "./startQuiz";
import Question from "./Question";
import Navbar from "./navbar";
import calculateRemainingTime from "../helpers/calculateRemainingTime";
import QuizNavigation from "./quizNavigation";

const API_BASE_URL = "http://localhost:5000";

export const QuizContext = createContext();

export default function AttemptQuiz() {
    const { quizId } = useParams();
    const { user } = useAuth();

    const [quiz, setQuiz] = useState(null);
    const [ques, setQues] = useState(null);
    const [serverResponse, setServerResponse] = useState();
    const [quesNav, setQuesNav] = useState(false);

    const [response, setResponse] = useState([]);
    const [selectedQue, setSelectedQue] = useState(1);
    const [QuizNotAvailable, QuizNotFound, QuizNotStarted, QuizAlreadyStarted,QuizAlreadySubmitted] =
        [new Date(quiz?.startTime).getTime() > Date.now(),
        quiz?.published === 0,
        quiz?.published === 1 && serverResponse === undefined,
        quiz?.published === 1 && serverResponse,
        serverResponse?.submitted
    ];

    const [endQuiz, setEndQuiz] = useState(false);
    const [timer, setTimer] = useState({
        time: 0,
        started: false
    })

    // fetch quiz and rsponse from server if exists
    const { isLoading, error, refetch : refetchQuiz } = useQuery({
        queryKey: ["quiz", quizId, user?.email],
        queryFn: async () => {
            try {
                const [quizRes, userResponse] = await Promise.all([
                    axios.get(`${API_BASE_URL}/quiz/getQuiz?id=${quizId}`),
                    axios.get(`${API_BASE_URL}/response/get?userId=${user.email}&&quizId=${quizId}`)
                ]);

                if (quizRes.data.quiz) {
                    const remainingTime = calculateRemainingTime(quizRes.data.quiz.startTime,0, quizRes.data.quiz.timeLimit, quizRes.data.quiz.lineantTime, new Date(), false);
                    console.log( new Date().getTime() ,new Date(quiz?.startTime).getTime() + quiz?.timeLimit  * 1000)
                    setTimer({ time: remainingTime});

                    setQuiz(quizRes.data.quiz);
                    setQues(quizRes.data.quiz.questions);
                }

                if (userResponse.data.response) {

                    const remainingTime = calculateRemainingTime(quizRes.data.quiz.startTime,userResponse.data.response.createdAt, quizRes.data.quiz.timeLimit, quizRes.data.quiz.lineantTime, new Date(), true);
                    console.log("remainingTime : ", remainingTime)
                    setTimer({ time: remainingTime, started: true });
    
                    setServerResponse(userResponse.data.response);
                    setResponse(userResponse.data.response.quizResponse);
                }

                return quizRes.data.quiz;
            } catch (error) {
                console.error("Error fetching quiz:", error);
                throw error;
            }
        },onError: (err) => {
            console.log(err)
        },
        refetchOnWindowFocus: false
    });

    const { mutate: updateServerResponse, isPending: updatingServerResponse } = useMutation({
        mutationFn: async (updated) => {
            await axios.post("http://localhost:5000/response/update", {
                responseId: serverResponse._id,
                updated: { ...updated }
            },)

        }, onError: (err) => {
            console.log(err)
        }
    })

    const contextValue = useMemo(() => ({
        quiz,
        ques,
        selectedQue,
        setSelectedQue,
        serverResponse,
        setServerResponse,
        setResponse,
        setTimer,
        setEndQuiz,
        response,
        refetchQuiz,
        setQuesNav,
        updateServerResponse,
        updatingServerResponse
    }), [quiz, ques, response, selectedQue]);


    if (isLoading) return <div>Loading...</div>;
    if (QuizNotFound || error) return <div>The quiz you are looking for is not found</div>;
    if(QuizAlreadySubmitted) return <div>You have already attempted this quiz</div>;

    return (
        <QuizContext.Provider value={{ ...contextValue, timer }}>
            <div className="flex bg-[#f3f3f3] flex-col gap-12 h-screen rounded-xl shadow-md">

                {(QuizNotStarted || QuizNotAvailable) &&
                    <StartQuiz />
                }

                {(QuizAlreadyStarted && !QuizAlreadySubmitted) && (
                    <>
                        <Navbar />
                        <Question />
                    </>
                )}

                <AnimatePresence>
                    {endQuiz && (
                        <Popup action={() => setEndQuiz(!(timer.time > 0))}>
                            <SubmitQuiz closeQuiz={() => setEndQuiz(!(timer.time > 0))}/>
                        </Popup>
                    )}
                    {quesNav &&
                    <Popup title="Create New Workspace" action={() => setQuesNav(false)}>
                        <QuizNavigation setQuesNav={setQuesNav} ques={ques} response={response} />
                    </Popup>
                    }
                </AnimatePresence>
                
            </div>
        </QuizContext.Provider>
    );
}