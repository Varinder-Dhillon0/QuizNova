import { DotsSixVertical, Trash } from "@phosphor-icons/react";
import { Reorder, motion, useDragControls } from "framer-motion";
import { AnimatePresence } from "framer-motion";

//Renders group where rearrangeable items will be rendered
//Animate resence also to animate exit and entering animations
export function RearrangeableGroup({ children, values, onReorder }) {
    return (
        <Reorder.Group
            axis="y"
            values={values}
            onReorder={onReorder}
        >
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </Reorder.Group>
    )

}

//renders item which are rearrangeable 
//also renders delete and rearrange button with taking logic from above compoentn and also rendering its components
export function RearrangeableItem({ i, value, remove, children }) {

    const controls = useDragControls();

    return (
        <Reorder.Item
            dragListener={false}
            dragControls={controls}
            value={value}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
        >

            <div className="flex mt-3 gap-3" id={value.id}>

                {/* render components of child */}
                {children}

                {/* rearrange button */}
                <button>
                    <div
                        className="bg-[#F3F3F3] p-[7.5px] no-drag reorder-handle cursor-grab"
                        onPointerDown={(e) => controls.start(e)}
                    >
                        <DotsSixVertical size={16} weight="bold" />
                    </div>
                </button>

                {/* delete button */}
                <button>
                    <div
                        className="bg-[#F3F3F3] p-[7.5px]"
                        onClick={() => remove(i)}
                    >
                        <Trash size={16} />
                    </div>
                </button>

            </div>
        </Reorder.Item>

    )
}