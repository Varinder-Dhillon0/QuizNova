import { useEffect, useState } from "react"
import { QuizContext } from "..";
import { useContext } from "react";
import NotSure from "../notsure";


export default function FillInTheBlank({ que , response}) {

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
        console.log(correct)
        updateResponse({queId : que._id , correct : correct, notsure : response?.notsure || 0});
    }, [correct, setCorrect])

    return (
        <>
            <h1 className="font-Satoshi-Bold text-xl/tight whitespace-nowrap">
            {que.que.split(/\[Blank\]/g).map((str , i) =>{
                if(str == ''){
                    return <span className="-tracking-[2.5px] ml-2">_________</span>
                }else{
                    return str;
                }
            })}
            </h1>
            <h1 className="font-Satoshi-Medium text-[#6b6b6b] text-sm mt-5">
                Fill out the answers in following
            </h1>
            <div className="flex flex-col gap-3">
                {que.Blanks.map((blank, i) => {
                    return <div className="flex relative items-center gap-3 font-Satoshi-Bold w-full text-base">
                        <h1 className="absolute left-4">{i + 1}.</h1>
                        <input type="text" className=" bg-[#fefefe] rounded-lg w-full outline-none px-8 py-3 " 
                        id={blank._id} 
                        value={correct[i]?.text}
                        onChange={(e) => setCorrect((prev) => {
                            const updated = [...prev];
                            updated[i] = {id : blank.id, text : e.target.value};
                            return updated;
                        }) }
                        />
                    </div>
                })}
                <NotSure que={response}/>
            </div>
        </>
    )
}