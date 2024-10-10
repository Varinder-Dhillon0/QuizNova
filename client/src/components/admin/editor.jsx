import Content from "../QuizEditor/content";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import QuesProvider from "../../context/quesContext";
import Contentbar from "./contentbar";

export default function Editor(){

    return(
        <QuesProvider>
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
        
                    {/* DropZoneBar */}
                    <div className="w-[60%] p-6">
                        <Content/>
                    </div>
        
                    {/* Content Bar */}
                    <div className="w-[20%]">
                        <Contentbar/>
                    </div>
                </div>
            </div>
        </QuesProvider>
    )
}