import {RearrangeableItem} from "../../../common/rearrangeable";


export default function Blank({i,blank, handleChanges, remove}) {

    return (
        <RearrangeableItem i={i} value={blank} remove={remove}>
            <input
                type="text"
                onChange={(e) => handleChanges(e)}
                value={blank.text}
                className="font-Satoshi-Medium text-md outline-none w-full ml-4 pl-4 pr-6 p-[2.5px] rounded-sm text-[16px] bg-[#F3F3F3]"
            />
        </RearrangeableItem>
    )
}