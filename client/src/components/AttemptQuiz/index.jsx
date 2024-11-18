import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Navbar from "./navbar";
import { QuestionMark } from "@phosphor-icons/react";
import MultipleChoice from "./queTypes/MultipleChoice";
import FillInTheBlank from "./queTypes/FillInTheBlank";

export const QuizContext = createContext();

export default function AttemptQuiz() {

    const { quizId } = useParams();
    const [quiz, setQuiz] = useState();
    const [ques, setQues] = useState();
    const [response, setResponse] = useState([]);
    const [selectedQue, setSelectedQue] = useState(1);

    const { isLoading, refetch } = useQuery({
        queryKey: ["quiz"],
        queryFn: async () => {
            console.log("ii am here");
            const res = await axios.get(`http://localhost:5000/quiz/getQuiz?id=${quizId}`, {});
            console.log("ii am here");
            if (res.data.quiz) {
                console.log(res.data.quiz.questions)
                setQuiz(res.data.quiz);
                setQues(quiz.questions);
            }

            return res.data.quiz;
        },
        refetchOnWindowFocus: false
    });

    const renderQuestion = (question) => {
        const existingRes = response.find((ele) => ele.queId == question._id) || {};

        switch (question.type) {
            case 1:
                return <MultipleChoice key={question._id} que={question} response={existingRes} />;
            case 2:
                return <FillInTheBlank key={question._id} que={question} response={existingRes} />;
            case 3:
                return <TrueFalse key={question._id} que={question} response={existingRes} />;
            case 4:
                return <Matching key={question._id} que={question} response={existingRes} />;
        }
    };

    useEffect(() => {
        // console.log(response)
    }, [response, setResponse])

    const updateResponse = (obj) => {
        setResponse((prev) => {
            const existingIndex = prev.findIndex((res) => res.queId === obj.queId);

            if (existingIndex !== -1) {
                // Update existing response
                const updated = [...prev];
                updated[existingIndex] = obj;
                return updated;
            } else {
                // Add new response
                return [...prev, obj];
            }
        });
    };


    return (
        <QuizContext.Provider value={{ quiz, updateResponse, ques, response  , selectedQue , setSelectedQue}}>
            <div>
                {isLoading ? "loading"

                    // rendred question
                    : quiz?.published ?
                        <div className="bg-[#f3f3f3] h-screen">
                            <div className="flex flex-col gap-12 h-screen rounded-xl shadow-md ">
                                <Navbar ques={ques} response={response} />

                                {/* question part */}
                                <div className="w-full h-full px-48 py-3 flex gap-10">
                                    <div className="mid-left flex flex-col w-[50%] gap-3">
                                        <div className="flex gap-1 items-center">
                                            <QuestionMark size={19} weight="fill" />
                                            <h1 className="font-Satoshi-Bold text-[12.5px]">
                                                Question {selectedQue} of {ques?.length}
                                            </h1>
                                        </div>

                                        {ques && renderQuestion(ques[selectedQue - 1])}

                                        <div className="flex items-center gap-5">
                                            <button onClick={() => { selectedQue > 1 ? setSelectedQue(selectedQue - 1) : setSelectedQue(selectedQue) }} className="font-Satoshi-Bold text-sm gap-2 flex items-center justify-center bg-[#fefefe] shadow-md rounded-md px-4 py-2">
                                                Previous
                                            </button>
                                            <button onClick={() => { selectedQue < ques.length ? setSelectedQue(selectedQue + 1) : setSelectedQue(selectedQue) }} className="font-Satoshi-Bold gap-2 text-sm flex items-center justify-center bg-[#4e41e8] shadow-md rounded-md px-4 py-2 text-white">
                                                Continue
                                            </button>
                                        </div>

                                    </div>

                                    {/* photo if any */}
                                    <div className="bg-[#d4d4d4] rounded-xl h-[400px] w-[50%]">

                                    </div>

                                </div>
                            </div>
                        </div>

                        : <div>The quiz you are looking for is not found</div>}
            </div>
        </QuizContext.Provider>
    )
}