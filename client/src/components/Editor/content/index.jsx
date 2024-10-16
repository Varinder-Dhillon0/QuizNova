import Menu from "./menu"
import Que from "./que"

export default function Content(){

    return(
        <div className="flex flex-col align-middle h-[100%]">
            <Menu/>
            <div className="w-[100%] h-[100%] p-5">
                <Que/>
            </div>
        </div>
    )
}