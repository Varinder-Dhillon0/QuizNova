import Content from "./content";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Editor(){

    return(
            <div className="flex flex-col w-[100vw] h-[100vh] font-Satoshi-Medium bg-white">
                {/* Navbar */}
                <div>
                    <Navbar/>
                </div>

                <div className="flex h-[90%]">
                    {/* Sidebar */}
                    <div className="w-[20%] p-4 pt-0 pb-0 bg-[#f7f7f6]  border-[#DDDDDD] border-r-2">
                        <Sidebar/>
                    </div>
        
                    {/* DropZoneBar */}
                    <div className="w-[80%]">
                        <Content/>
                    </div>
        
                    {/* Content Bar */}
                    {/* <div className="w-[20%]">
                        <OptionsBar/>
                    </div> */}
                </div>
            </div>
    )
}