import { useEffect, useState } from "react"
import { useQues } from "../../../hooks/useQues";
import { GoPlus } from "react-icons/go";


export default function MultipleChoice() {

    const { ques ,  selectedQue, updateQuesContext } = useQues();
    const [edited, setEdited] = useState({ ...ques[selectedQue]});

    //updating edited for new question
    useEffect(() =>{
        setEdited({ ...ques[selectedQue]});
    }, [selectedQue])

    // handle any changes made to que
    const handleChanges = (e, field , index=null) => {
        const newValue = e.target.value;

        setEdited((prev) => {
            const updated = {...prev};

            if(field == "que"){
                updated.que = newValue;
            }

            if(field == "choices" && index != null){
                updated.choices[index] = newValue;
            }

            return updated;
        })

        console.log("updated edited : " , edited);
    }

    //handle size of textarea
    const handleSize = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        handleChanges(e , "que");
    };

    //add new choice
    const addChoice = () =>{
        setEdited((prev) => ({
            ...prev,
            choices : [...prev.choices , ""]
        }));
    }

    //update ques in original ques 
    //debouncing
    useEffect(() =>{

        const timer = setTimeout(() => {
            updateQuesContext(edited);
            console.log("updatedContext");
        }, 400);

        return () => clearTimeout(timer);

    }, [edited,selectedQue])

    return (
        <div className="flex flex-col font-Satoshi-Bold w-[517px] max-h-[100%] ml-5">
            <textarea value={edited.que} onChange={handleSize} type="text" className="pt-2 resize-none min-h-[32px] w-[100%] overflow-hidden font-Satoshi-Bold text-2xl !leading-4 outline-none border-dashed border-b-[1.5px] " placeholder="Question here" />
            <div className="mt-3 flex flex-col">
                    {edited.choices.map((cho, i) => {
                        return <>
                            <input type="text" onChange={(e) => {handleChanges(e, "choices" , i)}} value={edited.choices[i]} className="font-Satoshi-Bold text-lg outline-none border-[2px] border-black pl-4 pr-6 p-[2.5px] mt-2 text-[16px]"  id={i} placeholder="choice" />
                        </>
                    })}

            </div>
            <button onClick={addChoice} className="mt-3 bg-[#e9e9e9] w-16 flex justify-center"><GoPlus size={23}/></button>
            </div>

    )
}