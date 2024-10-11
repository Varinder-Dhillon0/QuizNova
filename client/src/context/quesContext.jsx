import { createContext, useContext, useState } from "react";

export const QuesContext = createContext();   

export default function QuesProvider({children}){

    const [ques, setQues] = useState([]);
    const [selectedQue , setSelectedQue] = useState();

    const updateQuesContext = (edited) =>{
        setQues((prev) =>{
            const updated = [...prev];

            updated[selectedQue] = edited;
            console.log("updated in quescontext wekwhere  ", selectedQue - 1, ": " , updated);
            return updated;
        })
    }

    return(
        <QuesContext.Provider value={{ques, setQues , selectedQue , setSelectedQue, updateQuesContext}}>
            {children}
        </QuesContext.Provider>
    )
}
