import Sidebar from "./Sidebar";
import Navbar from "./navbar";
import Content from "./content";
import { useState } from "react";

export default function Dashboard() {

    const [selectedworkspace, setselectedWorkspace] = useState({});

    return (
        <div className="flex flex-col w-[100vw] h-[100vh] font-Satoshi-Medium bg-white">
            {/* Navbar */}
            <div className="border-b-[1.5px] border-[#DDDDDD]">
                <Navbar />
            </div>

            <div className="flex h-[90%]">
                {/* Sidebar */}
                <div className="w-[20%] bg-[#F7F7F6] no-scrollbar h-[100%] overflow-auto p-4 border-r-[1.5px] border-[#DDDDDD]">
                    <Sidebar selectedworkspace={selectedworkspace} setselectedWorkspace={setselectedWorkspace}/>
                </div>

                <div className="w-[80%] overflow-hidden p-10 pt-5">
                    <Content selectedworkspace={selectedworkspace}/>
                </div>
            </div>
            
        </div>
    )
}