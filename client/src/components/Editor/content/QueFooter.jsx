import timer from "../../../assets/img/timer-fill.svg"
import caretDown from "../../../assets/img/caret-down.svg"

export default function QueFooter() {

    return (
        <div className="mt-5 border-t-2 pt-5 pb-5 flex">
            <div className="flex flex-col text-sm">
                <p>Randomized Order</p>
                <div className="flex text-xs mt-2 bg-[#F3F3F3] p-[6px] pl-3 pr-3 rounded-sm items-center w-fit">
                    <p className="border-r-2 pr-14">Keep choices in correct order</p>
                    <img className="ml-4" src={caretDown} alt="" />
                </div>
            </div>
            <div className="flex flex-col text-sm ml-7">
                <p>Estimation time</p>
                <div className="flex text-xs mt-2 bg-[#F3F3F3] p-[6px] pl-3 pr-3 rounded-sm items-center w-fit">
                    <p className="border-r-2 pr-7">1</p>
                    <p className="ml-4">Mins</p>
                    <img className="ml-2" src={timer} alt="" />
                </  div>
            </div>
            <div className="flex flex-col text-sm ml-7">
                <p>Mark as point</p>
                <div className="flex text-xs mt-2 bg-[#F3F3F3] p-[6px] pl-3 pr-3 rounded-sm items-center w-fit">
                    <p className="border-r-2 pr-7">1</p>
                    <p className="ml-4">Mins</p>
                    <img className="ml-2" src={timer} alt="" />
                </div>
            </div>
        </div>
    )
}