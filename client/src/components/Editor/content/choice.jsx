import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import drag from "../../../assets/img/drag.svg";
import trash from "../../../assets/img/trash-simple-fill.svg";

export default function Choice({ choice, handleChanges, index, deleteChoice }) {
  const controls = useDragControls();

  return (
    <Reorder.Item 
        dragListener={false} 
        dragControls={controls} 
        value={choice} 
        initial={{x: 200, opacity : 0}}
        animate={{x : 0, opacity : 1}}
        exit={{x: 200, opacity : 0}}
    >
      <div className="flex items-center mt-2 mb-2" id={choice.id}>
        <div className="inline-flex items-center">
          <label className="flex items-center cursor-pointer relative">
            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none border-[2.5px] border-[#DDDDDD] rounded-full checked:bg-[#6466E9] checked:border-[#6466E9]" id="check" />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </span>
          </label>
        </div>
        <input
          type="text"
          onChange={(e) => handleChanges(e, "choices", index)}
          value={choice.choice}
          className="font-Satoshi-Medium text-md outline-none w-[100%] ml-4 pl-4 pr-6 p-[2.5px] rounded-sm text-[16px] bg-[#F3F3F3]"
        />
        <button>
          <img
            className="bg-[#F3F3F3] p-[6.5px] ml-2 mr-2 no-drag reorder-handle"
            onPointerDown={(e) => controls.start(e)}
            src={drag}
            alt=""
          />
        </button>
        <button>
          <img
            className="bg-[#F3F3F3] p-[7.5px] ml-2 mr-2"
            src={trash}
            onClick={() => deleteChoice(choice.id)}
            alt=""
          />
        </button>
      </div>
    </Reorder.Item>
  );
}
