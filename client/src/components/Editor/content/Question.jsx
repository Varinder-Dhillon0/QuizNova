import { useQues } from "../../../hooks/useQues";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import MultipleChoice from "./MutipleChoice";
import QueHeader from "./QueHeader";
import QueFooter from "./QueFooter";
import FillInTheBlank from "./FillintheBlank";

export default function Question({ question, index }) {

    const { setSelectedQue } = useQues();

    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.5 });

    useEffect(() => {
        if (isInView) {
            setSelectedQue(index);
        }
    }, [isInView, setSelectedQue]);

    const renderQuestion = () => {
        switch (question.type) {
            case 1:
                return <MultipleChoice key={index} que={question} index={index} />;
            case 2:
                return <FillInTheBlank key={index} que={question} index={index}/>;
            default:
                return <div>No question found</div>;
        }
    };


    return (
        <div className="p-5 pb-0">
            <div className="border-[#DDDDDD] border-[1.5px] rounded-lg w-[100%] overflow-auto flex mb-10" ref={ref} id={"que" + index}>
                <div className="flex flex-col font-Satoshi-Bold ml-5 w-[100%] mr-5" >
                    {question && renderQuestion()}
                </div>
            </div>
        </div>
    )
}