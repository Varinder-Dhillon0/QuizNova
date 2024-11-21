import { useEffect, useState } from "react"
import { QuizContext } from "..";
import { useContext } from "react";
import NotSure from "../notsure";

export default function MultipleChoice({ que , response}) {

    console.log(response)

    const [correct , setCorrect] = useState(response?.correct || []);
    const {updateResponse} = useContext(QuizContext);

    const handleCorrect = (choice) => {
        if(correct.includes(choice.id)){
            setCorrect(correct.filter((prev) => prev !== choice.id))
        }else{
            setCorrect([...correct , choice.id]);
        }
    }

    useEffect(() => {
        updateResponse({queId : que._id , correct : correct, notsure : response?.notsure || 0});
    }, [correct, setCorrect])

    return (
        <>
            <h1 className="font-Satoshi-Bold text-xl/tight">
                {que.que}
            </h1>
            <h1 className="font-Satoshi-Medium text-[#6b6b6b] text-sm mt-5">
                Select the correct answer
            </h1>
            <div className="flex flex-col gap-3">
                {que.choices.map((choice, i) => {
                    return <div key={choice._id} className="flex bg-[#fefefe] rounded-lg gap-3 cursor-pointer items-center px-4 py-3" onClick={() => handleCorrect(choice)}>
                            <label className="flex items-center cursor-pointer relative">
                                <input type="checkbox" readOnly checked={correct.includes(choice.id)} className="peer h-4 w-4 cursor-pointer transition-all appearance-none border-[1.5px] border-gray-400 rounded-full checked:bg-[#6466E9] checked:border-[#6466E9]" id="check" />

                                {/* above input renders this folllowing component to show checked mark */}
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>

                            </label>

                        <h1 className="font-Satoshi-Bold text-base">
                            {choice.text}
                        </h1>
                    </div>
                })}
                <NotSure que={response}/>
            </div>
        </>
    )
}