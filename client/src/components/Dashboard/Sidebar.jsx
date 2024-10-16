import Workspace from "./workspace";
import workspaceimg from "../../assets/img/workspace.svg"
import plus from "../../assets/img/plus.svg"

export default function Sidebar(){

    return(
        <div className="bg-[#f7f7f6] h-[100%] w-[100%]">
            <div className="flex justify-between items-center">
                <div className="flex items-center font-Satoshi-Medium text-[15px]">
                    <img src={workspaceimg} alt="" />
                    <p className="ml-2">Workspaces</p>
                </div>
                <button><img src={plus} alt="" /></button>
            </div>
            <Workspace/>
        </div>
    )
}