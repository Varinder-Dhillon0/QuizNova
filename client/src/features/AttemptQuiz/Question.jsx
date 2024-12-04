import { QuestionMark } from "@phosphor-icons/react";
import { useCallback, useContext } from "react";
import { QuizContext } from ".";
import NavigationBtns from "./navigateQuizBtns";
import MultipleChoice from "./queTypes/MultipleChoice";
import FillInTheBlank from "./queTypes/FillInTheBlank";
import TrueFalse from "./queTypes/TrueFalse";
import Matching from "./queTypes/Matching";
import { useDebounce } from "../../hooks/useDebounce";

export default function Question() {

    const { selectedQue, previewMode, response, ques, updateServerResponse, setResponse } = useContext(QuizContext);
    const [saveDebounce, cancelSaveDebounce] = useDebounce(async (updated) => {
        updateServerResponse(updated);
    }, 1000)

    const renderQuestion = (question) => {
        const existingRes = response.find((ele) => ele.queId === question._id) || {};

        switch (question.type) {
            case 1:
                return <MultipleChoice key={question._id} updateResponse={updateResponse} que={question} response={existingRes} />;
            case 2:
                return <FillInTheBlank key={question._id} updateResponse={updateResponse} que={question} response={existingRes} />;
            case 3:
                return <TrueFalse key={question._id} updateResponse={updateResponse} que={question} response={existingRes} />;
            case 4:
                return <Matching key={question._id} updateResponse={updateResponse} que={question} response={existingRes} />;
            default:
                return null;
        }
    };

    const updateResponse = useCallback((obj) => {
        if (!previewMode) {
            cancelSaveDebounce();

            setResponse((prev) => {
                const existingIndex = prev.findIndex((res) => res.queId === obj.queId);

                if (existingIndex !== -1) {
                    const updated = [...prev];
                    updated[existingIndex] = obj;

                    saveDebounce({ quizResponse: updated });

                    return updated;
                }
                return [...prev, obj];
            });

        }
    }, [response]);

    return (
        <div className="w-full px-48 py-3 flex gap-10 h-full relative">
            <div className="mid-left flex w-1/2 flex-col gap-3">
                <div className="flex gap-1 items-center pb-1">
                    <QuestionMark size={19} weight="fill" />
                    <h1 className="font-Satoshi-Bold text-sm">
                        Question {selectedQue} of {ques?.length}
                    </h1>
                </div>

                {ques && renderQuestion(ques[selectedQue - 1])}

                <NavigationBtns />
            </div>


            <div className="bg-[#d4d4d4] rounded-xl h-[400px] w-1/2">
            </div>
        </div>
    )
}