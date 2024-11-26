import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Quiz from "./quiz";
import { Plus } from "@phosphor-icons/react";
import { WorkspaceContext } from ".";

export default function Content() {
    const [quizzes, setQuizzes] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    const {selectedworkspace} = useContext(WorkspaceContext);

    const { mutate: getQuizzes, isPending: getPending } = useMutation({
        mutationFn: async () => {
            const res = await axios.get(`http://localhost:5000/quiz/get?workspace=${selectedworkspace.id}&creator=${user.email}`);
            console.log(res.data);
            return res.data;
        },
        onSuccess: (data) => {
            if (data.success) {
                setQuizzes([...data.quizzes]);
            }
        },
    });

    useEffect(() => {
        getQuizzes();
    }, [selectedworkspace]);

    return (
        <>
            <div className="relative z-0 pb-10">
                <div className="text-2xl flex justify-between">
                    <div className="font-Silka-Bold">
                        <h1>{selectedworkspace.title}</h1>
                    </div>
                    <button className="bg-[#5a4bea] flex items-center gap-1 h-9 text-white font-Satoshi-Bold px-3 text-sm rounded-md" 
                    onClick={() =>  navigate(`create/${selectedworkspace.id}`)}>
                     <Plus size={16} weight="bold"/> New Quiz 
                     </button>
                </div>

                <div className="grid grid-cols-3 grid-rows-auto gap-4 pt-5">
                    {getPending ? "loading" :
                        quizzes.map((quiz) => {
                            return <Quiz key={quiz._id} quiz={quiz} selectedworkspace={selectedworkspace} getQuizzes={getQuizzes}/>
                        })}
                </div>
            </div>
        </>

    );
}
