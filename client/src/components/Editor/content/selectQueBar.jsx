import { useQues } from "../../../hooks/useQues";
import multiCorrect from "../../../assets/img/multiple_correct.svg"
import { motion } from "framer-motion";
import RenderQueType from "../renderQueType";
import { scrolltoQue } from "../sidebar";
import { useState } from "react";

export const QueTypes = [
    //MultipleChoice
    {
        type: 1,
        que: "",
        choices: [{ id: Date.now(), text: "" }],
        correct: []
    },
    //Fill in the Blanks
    {
        type: 2,
        que: "",
        Blanks: [{ id: Date.now(), text: "" }],
        correct: ""
    },
    // True / false
    {
        type: 3,
        que: "",
        OneCorrect: "1"
    },
    //Matching
    {
        type: 4,
        que: "",
        matchFields: [{ id: Date.now(), field: "", match: "" }]
    }]

export default function SelectQueBar({ setShowTypes, position , actionType, index}) {

    const { setQues,selectedQue ,setSelectedQue } = useQues();

    const addQuestion = (e) => {
        const id = parseInt(e.currentTarget.id);

        setQues((prevQues) => {
            const updatedQues = [...prevQues, QueTypes[id - 1]];
            setSelectedQue(updatedQues.length - 1);

            return updatedQues;
        });
        
        setShowTypes(false);
    }

    const replaceQuestion = (index, typeId) => {
        setQues((prevQues) => {
            const updatedQues = [...prevQues];
            updatedQues[index] = { ...QueTypes[typeId - 1] };
            console.log(updatedQues , index, typeId)

            return updatedQues;
        });
    
        setShowTypes(false);
    };
    

    const action = (e) => {
        const id = parseInt(e.currentTarget.id);
        
        if (actionType === "add") {
            addQuestion(e);
        } else if (actionType === "replace") {
            replaceQuestion(index, id);
        }
    }

    return (
        <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "circInOut", duration: 0.15 }}
            exit={{ y: -10, opacity: 0 }}
            className={`${position == "top" ? "top-12" : position == "bottomleft" ? "-ml-2 mt-2" : "bottom-8 -left-1/4"} z-50 cursor-default text-sm font-Satoshi-Bold flex flex-col items-start h-40 overflow-auto scrollbar mb-2 bg-white absolute w-[250px] p-2 rounded-md border-[#dbdce1] border-[1px]`}
        >
            <h3 className="!text-xs font-Satoshi-Bold text-[#a4a4a4]">Types</h3>
            <div id="1" className="flex justify-between mt-4 gap-3 pr-5 items-center cursor-pointer" onClick={(e) => { action(e) }}>
                <RenderQueType type={1} iconsize={20} />
            </div>
            <div id="2" className="flex justify-between mt-4 gap-3 pr-5 items-center cursor-pointer" onClick={(e) => { action(e) }}>
                <RenderQueType type={2} iconsize={20} />
            </div>
            <div id="3" className="flex justify-between mt-4 gap-3 pr-5 items-center cursor-pointer" onClick={(e) => { action(e) }}>
                <RenderQueType type={3} iconsize={20} />
            </div>
            <div id="4" className="flex justify-between mt-4 gap-3 pr-5 items-center cursor-pointer" onClick={(e) => { action(e) }}>
                <RenderQueType type={4} iconsize={20} />
            </div>
            <div id="5" className="flex justify-between mt-4 gap-3 pr-5 items-center cursor-pointer" onClick={(e) => { action(e) }}>
                <RenderQueType type={5} iconsize={20} />
            </div>
        </motion.div>
    )
}