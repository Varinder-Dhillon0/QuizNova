import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function RenderFormikError({field,formik}){
    return formik.touched[field] &&
        formik.errors[field] &&
        formik.errors[field] !== "required" ? (
        <div className="flex items-center mt-1">
            <BsFillExclamationDiamondFill fill="red" size={14} />
            <p className="text-red-500 text-[13px] ml-[7px]">
                {formik.errors[field]}
            </p>
        </div>
    ) : null;
};