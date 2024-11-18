import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Navbar from "./navbar";
import { QuestionMark } from "@phosphor-icons/react";
import MultipleChoice from "./queTypes/MultipleChoice";

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
        const existingRes = response.find((ele) => ele.queId == question._id)?.correct || [];

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
        <QuizContext.Provider value={{ quiz, updateResponse }}>
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

                                        <div className="flex items-center gap-5 mt-11">
                                            <button onClick={() => { selectedQue > 1 ? setSelectedQue(selectedQue - 1) : setSelectedQue(selectedQue) }} className="font-Satoshi-Bold text-sm gap-2 flex items-center justify-center bg-[#fefefe] shadow-md rounded-md px-4 py-2">
                                                Previous
                                            </button>
                                            <button onClick={() => { selectedQue < ques.length ? setSelectedQue(selectedQue + 1) : setSelectedQue(selectedQue) }} className="font-Satoshi-Bold gap-2 text-sm flex items-center justify-center bg-[#4e41e8] shadow-md rounded-md px-4 py-2 text-white">
                                                Continue
                                            </button>
                                        </div>

                                        <div className="flex gap-2 font-Satoshi-Medium text-[#6b6b6b] text-sm" onClick={() => updateResponse({...response.find((prev) => prev.queId === ques[selectedQue - 1]._id), notsure : 1}) }>
                                            <label className="flex items-center cursor-pointer relative">
                                                <input type="checkbox" readOnly className="peer h-4 w-4 cursor-pointer transition-all appearance-none border-[1.5px] border-gray-400 rounded-full checked:bg-[#6466E9] checked:border-[#6466E9]" id="check" />

                                                {/* above input renders this folllowing component to show checked mark */}
                                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>

                                            </label>
                                            I am not sure about this one
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