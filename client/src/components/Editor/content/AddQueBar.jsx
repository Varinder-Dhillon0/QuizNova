import { useQues } from "../../../hooks/useQues";
import listDashes from "../../../assets/img/list-dashes.svg"

export default function AddQueBar(){

    const {ques ,setQues , setSelectedQue} = useQues();

    const Types = [{
        type : 1,
        que : "",
        choices : [""],
        correct : ""
    }, {
        type : 2,
        que : "",
        correct : ""
    }]

    const addQuestion = (e) =>{
        const id = parseInt(e.currentTarget.id);

        setQues((prevQues) => {
            const updatedQues = [...prevQues, Types[id - 1]];
            setSelectedQue(updatedQues.length - 1);
            console.log("adding new question : ", updatedQues);
            return updatedQues;
        });
    }

    return(
            <div className="flex flex-col bg-white absolute mt-[10px] p-4 rounded-md border-[#dbdce1] border-[1px]">
                <div id="1" className="flex justify-between items-center cursor-pointer" onClick={(e) => {addQuestion(e)}}>
                    <img className="w-5 h-5" src={listDashes} alt="multiple-choice"/>
                    <h3 className="ml-3 font-semibold text-[13px]">Multiple choice</h3>
                </div>
            </div>
    )
}