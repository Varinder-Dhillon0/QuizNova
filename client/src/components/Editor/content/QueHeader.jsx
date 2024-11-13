import multiCorrect from "../../../assets/img/multiple_correct.svg"
import caretDown from "../../../assets/img/caret-down.svg"

export default function QueHeader({ form }) {

    console.log(form);

    return (
        <div className="flex justify-between pt-4 pb-4 border-b-[1.5px]">
            <div className="flex bg-[#F3F3F3] p-[6px] pl-3 pr-3 rounded-sm items-center">
                <img src={multiCorrect} alt="" />
                <p className="text-[12px] ml-2">{form.value == 1 ? "Multiple choice" : "Fill in the Blanks"}</p>
                <img className="ml-3" src={caretDown} alt="" />
            </div>
        </div>
    )
}