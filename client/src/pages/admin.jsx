import Sidebar from "../components/sidebar"
import QuizCreate from "../components/quizcreate"
import DragAndDropApp from "../components/sidebar"

export default function Admin(){

    return(
        <div className="flex w-[100%]">
            <div className="w-[30%]">
            <DragAndDropApp/>
            </div>
            <div className="w-[70%]">
            {/* <QuizCreate></QuizCreate> */}
            </div>
            
        </div>
    )
}