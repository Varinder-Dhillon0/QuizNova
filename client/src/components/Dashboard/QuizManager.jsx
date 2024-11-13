/**
 * <summary>
 * The `QuizManager` component in JavaScript React handles the creation of a new quiz with form inputs
 * for title, description, time limit, category, and settings, utilizing formik for form management and
 * axios for API requests.
 * </summary>
 */
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import axios from "axios";
import { useQues } from "../../hooks/useQues";
import { useAuth } from "../../hooks/useAuth";
import cross from "../../assets/img/cross.svg"
import handleTextboxSize from "../helpers/handleTextboxSize";
import { motion } from "framer-motion";
import { Images } from "@phosphor-icons/react"
import { useRef } from "react";
import QuizOptions from "../common/quizOptions";

export default function QuizManager({ setPopup, getQuizzes, selectedworkspace }) {

    const { user } = useAuth();
    const imageInputRef = useRef(null);

    const formik = useFormik({
        initialValues:
        {
            quizThumbnail: null,
            title: "",
            desc: "",
            timeLimit: "",
            category: [""],
            settings: {
                shuffleQues: false,
                passMarks: 0,
                pickQuesRandom: false,
                showAnswer: false
            }
        },
        onSubmit: (values) => {
            createQuiz(values);
        }
    });

    const updateSetting = (key, value) => {
        formik.setFieldValue('settings', {
            ...formik.values.settings,
            [key]: value
        });
    }

    const { mutate: createQuiz, isPending: createPending } = useMutation({
        mutationFn: async (values) => {

            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                if (key === 'quizThumbnail' && values.quizThumbnail) {
                    formData.append(key, values.quizThumbnail);
                } else {
                    formData.append(key, values[key]);
                }
            });


            const res = await axios.post("http://localhost:5000/quiz/create", formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                },
                params: {
                    creator: user.email,
                    workspace_id: selectedworkspace.id,
                },
            });
            return res.data;
        },
        onSuccess: (data) => {
            console.log("Quiz created successfully", data);
            getQuizzes();
            setPopup(false);
        },
        onError: (error) => {
            console.log("An error occurred while creating the quiz:", error);
        }
    });

    const handleImageUpload = (e) => {
        formik.setFieldValue("quizThumbnail", e.target.files[0])
        console.log(e.target.files[0]);
    }

    return (
        <motion.div className="w-screen h-screen fixed top-0 left-0 bg-white" initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }} >

            {/* Navbar for the quiz maker */}
            <div className="flex justify-between p-3 pl-7 pr-7 font-Silka-Bold border-b-2 items-center relative z-50 bg-white text-sm">
                <button className="p-1 rounded-md bg-[#f3f3f3]" onClick={() => setPopup(false)}><img src={cross} alt="" /></button>
                <h1 className="">Create New Quiz</h1>
                <button className="bg-[#5a4bea] text-white font-Silka-Medium p-[6px] pr-3 pl-3 text-xs rounded-md" onClick={formik.handleSubmit}>Continue</button>
            </div>

            {/* content div for quiz */}
            <div className="flex w-full pl-20">

                {/* quiz creation data */}
                <div className="flex flex-col w-[50%] ml-auto mr-auto  mt-10">

                    <motion.div initial={{ y: 30 }} exit={{ y: 30 }} animate={{ y: 0 }} transition={{ ease: "linear", duration: 0.1 }} className="w-full ">
                        {/* Image selecting logic */}
                        <div className="flex flex-col ml-auto mr-auto">

                            {/* displays image which is selected */}
                            <div
                                className={`w-[100%] relative h-40 mb-5 rounded-tl-xl rounded-tr-xl ${formik.values.quizThumbnail
                                    ? ""
                                    : "bg-[#28a0dc]"
                                    } bg-cover bg-center`}
                                style={{
                                    backgroundImage: formik.values.quizThumbnail
                                        ? `url('${URL.createObjectURL(formik.values.quizThumbnail)}')`
                                        : "none"
                                }}
                            >
                                <input type="file" name="quizthumbnail" ref={imageInputRef} onChange={(e) => handleImageUpload(e)} hidden />
                                <button onClick={() => imageInputRef.current.click()} className="font-Satoshi-Bold p-1 rounded-md text-[10px] bg-white pr-1 pl-1 flex items-center gap-1 absolute bottom-3 right-3"><Images size={16} /> Add Thumbnail</button>
                            </div>

                            {/* catures other details of quiz */}
                            <input
                                className="outline-none text-2xl font-Silka-Bold mb-4"
                                type="text"
                                name="quiz-title"
                                placeholder="Title of this Quiz?"
                                {...formik.getFieldProps("title")}
                            />

                            {/* categories */}
                            <Category title="Category" formik={formik.getFieldProps("category")} />
                            <Category title="Estimated Duration" formik={formik.getFieldProps("timeLimit")} />

                            {/* textarea for capturing description */}
                            <div className="w-full relative text-[#9f9fa3] font-Silka-Medium">
                                <textarea {...formik.getFieldProps("desc")} onChange={(e) => { formik.handleChange(e); handleTextboxSize(e, 40) }} type="text" className="w-full border-b-2 pr-20 border-[#e9e8e8] mt-10 resize-none    [40px]  overflow-hidden font-Silka-Medium text-sm !leading-6 outline-none rounded-sm" placeholder="Type description here..." />
                                <p className="absolute right-0 bottom-10 font-Silka-Medium text-xs text-[#696969]">{formik.values.desc.length} / 400</p>
                                <p className="text-xs">Let learners know more about quiz</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Options bar */}
                <div>
                    <QuizOptions settings={{...formik.getFieldProps("settings")}} updateSetting={updateSetting}/>
                </div>
            </div>

        </motion.div>
    )
}

function Category({ title, formik }) {
    return <div className="text-sm font-Silka-Bold mt-4 flex justify-normal text-[#5f5f5f]">
        <p className="mr-2 w-[30%]">{title}</p>
        <input type="text" placeholder="Empty" {...formik} className="outline-none ml-3 font-Silka-Medium" />
    </div>
}