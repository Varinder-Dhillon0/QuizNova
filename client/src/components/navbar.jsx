
export default function Navbar(){
    return(
        <div className="w-100">
            <div className="w-[80%] border-cyan-600 border-[2px] justify-between flex items-center pl-[20px] pr-[20px] rounded-full h-[50px] ml-auto mr-auto mt-[10px]">
                <div className="font-bold">
                    <h1 className="text-lg">QuizNova</h1>
                </div>
                <div className="">
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    )
}