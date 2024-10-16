import Sidebar from "./Sidebar";
import Navbar from "./navbar";
import Content from "./Content";

export default function Dashboard(){

    return(
        <div className="flex flex-col w-[100vw] h-[100vh] font-Satoshi-Medium bg-white">
        {/* Navbar */}
        <div>
            <Navbar/>
        </div>

        <div className="flex h-[90%]">
            {/* Sidebar */}
            <div className="w-[20%] bg-[#f7f7f6] no-scrollbar h-[100%] overflow-auto p-4 rounded-lg">
                <Sidebar/>
            </div>

            <div className="w-[80%] p-6">
                <Content/>
            </div>
        </div>
    </div>
    )
}