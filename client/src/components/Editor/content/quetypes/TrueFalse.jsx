import { useEffect, useState } from "react";
import QueTitle from "../queTitle";
import { Formik } from "formik";
import { useQues } from "../../../../hooks/useQues";
import QueHeader from "../queLayout/QueHeader";
import QueFooter from "../queLayout/QueFooter";
import { QuestionMark } from "@phosphor-icons/react";
export default function TrueFalse({ que, index }) {

    const { updateQuesContext } = useQues();

    return (
        <>

            <Formik initialValues={{ ...que }} >
                {(formik) => {
                    useEffect(() => {
                        const timer = setTimeout(() => {
                            updateQuesContext({ ...formik.values }, index);
                        }, 400);

                        return () => clearTimeout(timer);
                    }, [formik.values])

                    return (
                        <>
                            <QueHeader form={{...formik.getFieldProps("type")}} index={index}/>
                            <div className="flex pt-5 pb-2 items-center font-bold">
                                <QuestionMark size={19} weight="fill"/>
                                <p className="ml-1 text-sm">Question {index + 1}</p>
                            </div>

                            <QueTitle form={{...formik.getFieldProps("que")}}/>

                            <div className="flex pt-3 text-sm">
                                <p className="border-r-[2.5px] pr-2 mr-4">Choices *</p>
                            </div>  
                            <div className="flex font-Silka-Medium text-sm gap-2 mt-2">
                                <button className={`${formik.values.OneCorrect == "1" && "bg-[#fde9f7] !border-[#cc8cb9]"} rounded-md border-2 border-transparent bg-[#f3f3f3] w-fit p-2`} onClick={() => {formik.setFieldValue("OneCorrect", "1" ) }}>True</button>
                                <button className={`${formik.values.OneCorrect == "2" && "bg-[#fde9f7] !border-[#cc8cb9]"} rounded-md border-2 border-transparent bg-[#f3f3f3] w-fit p-2`} onClick={() => {formik.setFieldValue("OneCorrect", "2" )}}>False</button>
                            </div>
                            <QueFooter/>
                        </>
                    )
                }}

            </Formik>
        </>
    )
}