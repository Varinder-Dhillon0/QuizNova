import User from "../common/user";

export default function Navbar(){

    return(
        <div className="flex h-[60px] justify-between items-center bg-white w-[100%] pl-7 pr-7 font-Satoshi-Medium">
            <div className="w-[30%]">
                QuizNova
            </div>
            <div className="ml-[10%] w-[20%]  flex justify-around text-[13px] items-center font-Satoshi-Bold">
                <button>View Plans</button>
                <User/>
            </div>
        </div>
    )
}