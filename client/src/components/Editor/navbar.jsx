import paperplane from "../../assets/img/paper-plane-right.svg"
import User from "../common/user";

export default function Navbar(){

    return(
        <div className="flex h-[60px] justify-between items-center bg-white w-[100%] pl-7 pr-7 font-Satoshi-Medium">
            <div className="w-[30%]">
                <h1>QuizNova</h1>
            </div>
            <div className="w-[30%] flex justify-around text-[14px] items-center">
                <button>Create</button>
                <button>Share</button>
                <button>Analytics</button>
            </div>
            <div className="ml-[10%] w-[20%]  flex justify-between text-[13px] items-center font-Satoshi-Bold">
                <button className="flex items-center bg-black text-white p-1 pl-2 pr-2 rounded-lg w-[80px] justify-around ">
                    <img src={paperplane} alt="" /> Publish
                </button>
                <button>View Plans</button>
                <User/>
            </div>
        </div>
    )
}