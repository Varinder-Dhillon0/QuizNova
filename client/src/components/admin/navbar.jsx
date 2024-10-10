
export default function Navbar(){

    return(
        <div className="flex h-[60px] justify-between items-center bg-white w-[100%] pl-7 pr-7">
            <div className="w-[30%]">
                <h1>QuizNova</h1>
            </div>
            <div className="w-[30%] flex justify-around">
                <button>Create</button>
                <button>Share</button>
                <button>Analytics</button>
            </div>
            <div className="ml-[10%] w-[20%]  flex justify-between">
                <button>Publish</button>
                <button>View Plans</button>
                <div>
                    <img className="w-5 h-5" src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-600nw-2463868847.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}