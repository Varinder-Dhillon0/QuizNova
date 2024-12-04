/**
 * <summary>
 * The `QuizManager` component in JavaScript React handles the creation of a new quiz with form inputs
 * for title, description, time limit, category, and settings, utilizing formik for form management and
 * axios for API requests.
 * </summary>
 */
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import cross from "../../assets/img/cross.svg"
import handleTextboxSize from "../../helpers/handleTextboxSize";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Images } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react";
import QuizOptions from "./quizOptions";
import QuizTime from "./components/quizTime";
import quizValidationSchema from "../../schemas/quiz";
import { useNavigate, useParams } from "react-router-dom";
import RenderFormikError from "../../components/renderFormikError"; // Updated import
import { useCreateQuiz } from "./api/createQuiz";

export default function QuizManager() {

    const { user } = useAuth();
    const imageInputRef = useRef(null);
    const { workspaceId } = useParams();
    const navigate = useNavigate();
    const now = new Date();

    const [thumbnailPreview, setThumbnailPreview] = useState('');

    const formik = useFormik({
        initialValues: {
            quizThumbnail: "",
            title: "",
            desc: "",
            timeLimit: 0,
            category: [],
            settings: {
                shuffleQues: false,
                adaptiveQueBank: false,
                shuffleOptions: false,
                showQueAnswers: false,
            },
            startTime: new Date().toISOString(),
            lineantTime: 0,
        },
        validationSchema: quizValidationSchema,
        onSubmit: (values) => {
            createQuiz({values, user, workspaceId});
        },
    });

    const updateSetting = (key, value) => {
        formik.setFieldValue('settings', {
            ...formik.values.settings,
            [key]: value
        });
    }

    const { mutate: createQuiz, isPending: createPending } = useCreateQuiz({
        onSuccess: (data) => {
            if (data.success) {
                navigate("/admin/dashboard")
            }
        },
        onError: (error) => {
            console.log("An error occurred while creating the quiz:", error);
        }
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          formik.setFieldValue('quizThumbnail', file);
          setThumbnailPreview(URL.createObjectURL(file));
        }
      };

    const modifyCategory = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            formik.setFieldValue("category", [
                ...formik.values.category,
                e.target.value.trim(),
            ]);
            e.target.value = "";
        }

        if (e.key === "Backspace" && e.target.value === "" && formik.values.category.length > 0) {
            formik.setFieldValue("category", formik.values.category.slice(0, -1));
        }
    }

    return (
        <AnimatePresence>
            <motion.div className="w-screen relative h-full scrollbar bg-white" initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }} >

                {/* Navbar for the quiz maker */}
                <div className="flex z-50 justify-between sticky top-0 p-3 pl-7 pr-7 font-Satoshi-Bold border-b-2 items-center bg-white text-sm">
                    <button className="p-1 rounded-md bg-[#f3f3f3]" onClick={() => navigate("/admin/dashboard")}><img src={cross} alt="" /></button>
                    <h1 className="text-md font-Satoshi-Black">Create New Quiz</h1>
                    <button type="submit" className="bg-[#5a4bea] text-white font-Satoshi-Bold p-[6px] pr-3 pl-3 text-sm rounded-md" onClick={formik.handleSubmit}>{createPending ? "Loading" : "Continue"}</button>
                </div>

                {/* content div for quiz */}
                <div className="flex w-full pb-10 pl-20">

                    {/* quiz creation data */}
                    <div className="flex flex-col w-[50%] ml-auto mr-auto  mt-10">

                        <motion.div layout initial={{ y: 30 }} exit={{ y: 30 }} animate={{ y: 0 }} transition={{ ease: "linear", duration: 0.1 }} className="w-full">
                            {/* Image selecting logic */}
                            <div className="flex flex-col gap-5 ml-auto mr-auto">

                                {/* displays image which is selected */}
                                <div
                                    className={`w-[100%] relative z-50 h-40 mb-5 rounded-tl-xl rounded-tr-xl ${thumbnailPreview
                                        ? ""
                                        : "bg-[#28a0dc]"
                                        } bg-cover bg-center`}
                                    style={{
                                        backgroundImage: thumbnailPreview
                                            ? `url('${thumbnailPreview}')`
                                            : "none"
                                    }}
                                >
                                    <input type="file" name="quizthumbnail" ref={imageInputRef} onChange={(e) => handleImageUpload(e)} hidden />
                                    <button onClick={() => imageInputRef.current.click()} className="font-Satoshi-Bold p-1 rounded-md text-xs bg-white pr-1 pl-1 flex items-center gap-1 absolute bottom-3 right-3"><Images size={16} /> Add Thumbnail</button>
                                </div>
                                <RenderFormikError field="quizThumbnail" formik={formik} /> {/* Updated usage */}

                                {/* captures other details of quiz */}
                                <input
                                    className="outline-none text-3xl font-Satoshi-Black mb-4"
                                    type="text"
                                    name="quiz-title"
                                    placeholder="Title of this Quiz?"
                                    {...formik.getFieldProps("title")}
                                />
                                <RenderFormikError field="title" formik={formik} /> {/* Updated usage */}


                                {/* categories */}
                                <div className="text-base h-fit font-Silka-Bold flex justify-normal text-[#5f5f5f]">
                                    <p className="mr-2 w-[30%]">Category</p>
                                    <div className="flex flex-wrap gap-y-2 w-[70%]">
                                        {formik.values.category.map((cate, i) => {
                                            return <div className="mr-1 ml-1 text-[#797b7c] text-sm font-Satoshi-Medium p-[2px] px-[9px] rounded-full bg-[#f0f2f4]" key={i}>
                                                {cate.length > 16 ? cate.substring(0, 16) + "..." : cate}
                                            </div>
                                        })}
                                        <input type="text" placeholder="Empty" onKeyDown={(e) => modifyCategory(e)} className="outline-none h-7 text-base ml-3 font-Silka-Medium" />

                                    </div>

                                </div>
                                <RenderFormikError field="category" formik={formik} /> {/* Updated usage */}


                                <div className="text-base h-11 items-center font-Silka-Bold flex justify-normal text-[#5f5f5f]">
                                    <p className="mr-2 w-[30%]">Expected Duration</p>
                                    <QuizTime updateTimeLimit={(value) => formik.setFieldValue("timeLimit", value)} />
                                </div>
                                <RenderFormikError field="timeLimit" formik={formik} /> {/* Updated usage */}


                                <div className="text-base items-center h-11 relative font-Silka-Bold flex justify-normal text-[#5f5f5f]">
                                    <p className="mr-2 w-[30%]">Start Time</p>
                                    <button onClick={() => { document.getElementById("datePicker").showPicker() }} className="ml-2 relative z-50 flex items-center gap-3">
                                        <Calendar size={22} color="#5f5f5f" weight="bold" />
                                        <p>{formik.values.startTime && new Date(formik.values.startTime).toLocaleString(undefined, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}</p>
                                    </button>

                                    <input id="datePicker" type="datetime-local"
                                        className="border absolute cursor-pointer transform translate-x-1/2 opacity-0 z-10 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                        min={now.toISOString().slice(0, 16)}
                                        value={formik.values.startTime || new Date()}
                                        onChange={(e) => {
                                            if (new Date(e.target.value) > now) {
                                                formik.setFieldValue("startTime", e.target.value);
                                            }
                                        }}
                                    />
                                </div>
                                <RenderFormikError field="startTime" formik={formik} /> {/* Updated usage */}

                                <div className="text-base items-center font-Silka-Bold flex justify-normal text-[#5f5f5f]">
                                    <p className="mr-2 w-[30%]">Start till</p>
                                    <QuizTime updateTimeLimit={(value) => formik.setFieldValue("lineantTime", value)} />
                                </div>
                                <RenderFormikError field="lineantTime" formik={formik} /> {/* Updated usage */}


                                {/* textarea for capturing description */}
                                <div className="w-full relative text-[#5f5f5f] mt-7">
                                    <textarea {...formik.getFieldProps("desc")} onChange={(e) => { formik.handleChange(e); handleTextboxSize(e, 40) }} type="text" className="w-full pb-5 border-b-2 resize-none  overflow-hidden font-Satoshi-Medium text-md !leading-6 outline-none rounded-sm" placeholder="Type description here..." />
                                    <p className="absolute right-0 bottom-[-10] font-Satoshi-Bold text-xs text-gray-700"><span className={`${formik.values.desc.length > 400 && "text-red-500"}`}>{formik.values.desc.length}</span> / 400</p>
                                </div>
                                <RenderFormikError field="desc" formik={formik} /> {/* Updated usage */}

                            </div>
                        </motion.div>
                    </div>

                    {/* Options bar */}
                    <QuizOptions settings={{ ...formik.getFieldProps("settings") }} updateSetting={updateSetting} />
                </div>

            </motion.div>
        </AnimatePresence>
    )
}

// function Category({ title, formik }) {
//     return <div className="text-sm font-Silka-Bold mt-4 flex justify-normal text-[#5f5f5f]">
//         <p className="mr-2 w-[30%]">{title}</p>
//         <input type="text" placeholder="Empty" {...formik} className="outline-none ml-3 font-Silka-Medium" />
//     </div>
// }1