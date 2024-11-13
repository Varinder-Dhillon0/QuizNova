import { useState } from "react";
import questionmark from "../../../assets/img/question-mark-fill.svg"
import QueTitle from "./queTitle";

export default function FillInTheBlank({ que, index }) {

    const [ques, setQues] = useState("");

    const handleChanges = (e, field, choiceIndex = null) => {
        const newValue = e.target.value;

        if (field === "que") {
            setQues(newValue);
        }

        // if (field === "choices" && choiceIndex !== null) {
        //   setChoices(prevChoices =>
        //     prevChoices.map((choice, idx) =>
        //       idx === choiceIndex ? { ...choice, text: newValue } : choice
        //     )
        //   );
        // }
    };

    return (
        <>
            <div className="flex pt-5 pb-2 items-center font-bold">
                <img src={questionmark} alt="" />
                <p className="ml-1 text-sm">Question {index + 1}</p>
            </div>

            <QueTitle ques={ques} handleChanges={handleChanges} />

            <div className="flex pt-3 text-sm">
                <p className="border-r-[2.5px] pr-2 mr-4">Choices *</p>
                <div>
                    <p>Multiple answers</p>
                </div>
            </div>

            {/* <div className="mt-3 flex flex-col mb-3 overflow-x-hidden">
                    <Reorder.Group axis="y" values={choices} onReorder={setChoices}>
                        <AnimatePresence>
                            {choices.map((choice, i) => {
                                return <Choice choice={choice} key={choice.id} index={i} setChoices={setChoices} handleChanges={handleChanges} deleteChoice={deleteChoice}/>
                            })}
                        </AnimatePresence>
                    </Reorder.Group>
                </div> */}
            {/* <button onClick={addChoice} className="border-dashed rounded-md border-[2px] font-Satoshi-Bold border-[#D7D9DB] text-xs ml-10 pr-4 pl-4 w-fit p-2 flex justify-center">+ Add Choice</button> */}
        </>
    )
}