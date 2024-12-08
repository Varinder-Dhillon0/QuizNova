import { useRef, useState, useCallback } from "react"
import RenderQueType from "../../../../components/renderQueType"
import { CaretDown, Images, Trash, ArrowsOutSimple, Plus } from "@phosphor-icons/react"
import { AnimatePresence } from "framer-motion"
import Backdrop from "../../../../components/backdrop"
import SelectQueBar from "../selectQueBar"
import { motion } from "framer-motion"
import ToggleButton from "../../../../components/toggleButton"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useAuth } from "../../../../hooks/useAuth"
import { useQues } from "../../../../hooks/useQues"
import Popup from "../../../../components/popup"
import SimpleLoader from "../../../../components/loaders/simpleLoader"
import { useDebounce } from "../../../../hooks/useDebounce"
import { useToast } from "../../../../hooks/useToast"

export default function QueHeader({ formik, index }) {
    const [showTypes, setShowTypes] = useState(false)
    const [showFullImage, setShowFullImage] = useState(false)
    const imageInputRef = useRef(null);
    const { user } = useAuth();
    const { quiz } = useQues();
    const Toast = useToast();
    
    const imagePreview = useRef(formik.values.imageUrl || "");

    const { mutate: uploadQuizImage, isPending: uploadPending } = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post(
                `http://localhost:5000/quiz/ques/uploadImage?creator=${user.email}&workspace_id=${quiz.workspace}&quizId=${quiz._id}&queId=${index}`, 
                formData, 
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                }
            );
            return response.data;
        },
        onSuccess: (data) => {
            if (data.success) {
                console.log("Image uploaded successfully:", data.url);
                console.log(imagePreview.current);
                formik.setFieldValue("imageUrl", data.url);
            }
        },
        onError: (error) => {
            console.error("Error uploading image:", error);
        }
    });

    const { mutate: deleteQuizImage, isPending: deletePending } = useMutation({
        mutationFn: async () => {
            const response = await axios.post(
                `http://localhost:5000/quiz/ques/deleteImage?creator=${user.email}&workspace_id=${quiz.workspace}&quizId=${quiz._id}&queId=${index}`
            );
            return response.data;
        },
        onSuccess: (data) => {
            if (data.success) {
                console.log("Image deleted successfully");

                formik.setFieldValue("imageUrl", "");
                imagePreview.current = "";
            }
        },
        onError: (error) => {
            console.error("Error deleting image:", error);
        }
    });

    const handleImageUpload = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            const validFormats = ['image/jpeg', 'image/png', 'image/webp'];
            if (!validFormats.includes(file.type)) {
                Toast(2, "Invalid file format. Please upload a jpg, png, or webp image.", 5000);
                return;
            }
            imagePreview.current = URL.createObjectURL(file);
            const formData = new FormData();
            formData.append("queImage", file);
            uploadQuizImage(formData);
        }
    }, [uploadQuizImage]);

    return (
        <>
            <div className="flex relative justify-between pt-4 font-base font-Satoshi-Bold pb-4 border-b-[1.5px]" >
                <div 
                    onClick={() => { setShowTypes(!showTypes) }} 
                    className="flex bg-[#F3F3F3] p-2 gap-5 pl-3 h-7 pr-3 rounded-sm items-center cursor-pointer"
                >
                    <div className="text-[12px] flex gap-2">
                        <RenderQueType iconsize={17} type={formik.values.type} />
                    </div>
                    <motion.div
                        animate={showTypes ? { rotate: 180 } : { rotate: 0 }}
                    >
                        <CaretDown size={11} weight="bold" />
                    </motion.div>
                </div>

                <div className="flex gap-5">
                    <input 
                        type="file" 
                        name="quizthumbnail" 
                        ref={imageInputRef} 
                        onChange={handleImageUpload} 
                        hidden 
                        accept="image/*" 
                    />
                    <button 
                        type="button"
                        onClick={() => imageInputRef.current.click()} 
                        className="font-Satoshi-Bold p-1 rounded-md text-xs bg-[#f3f3f3] px-2 flex items-center gap-1"
                        disabled={uploadPending}
                    >
                        {uploadPending ? (
                            <SimpleLoader />
                        ) : (
                            imagePreview ? <Images size={16} /> : <Plus size={12} weight="bold" />
                        )} 
                        {imagePreview.current ? "Update" : "Add"} Image
                    </button>

                    <div className="font-Satoshi-Medium text-sm flex gap-2 items-center">
                        <ToggleButton 
                            action={() => formik.setFieldValue("required", !formik.values.required)} 
                            value={formik.values.required} 
                        /> 
                        Required
                    </div>
                </div>

                <AnimatePresence>
                    {showTypes && (
                        <Backdrop action={() => setShowTypes(false)}> 
                            <SelectQueBar 
                                setShowTypes={setShowTypes} 
                                actionType="replace" 
                                index={index} 
                                position="top" 
                            />
                        </Backdrop>
                    )}
                </AnimatePresence>
            </div>

            {imagePreview.current && (
                <div 
                    className={`w-1/2 mt-3 relative z-10 h-40 mb-5 rounded-tl-xl rounded-tr-xl bg-contain bg-no-repeat bg-[#f3f3f3] bg-center transition-opacity duration-300 ${uploadPending ? 'opacity-50' : 'opacity-100'}`} 
                    style={{ backgroundImage: `url('${imagePreview.current}')` }}
                >
                    <div className="absolute top-2 right-2 flex gap-2">
                        <button 
                            type="button"
                            onClick={() => setShowFullImage(true)} 
                            className="bg-white p-1 rounded-full disabled:opacity-50"
                            disabled={uploadPending}
                        >
                            <ArrowsOutSimple size={16} color="#5a4bea" />
                        </button>
                        <button 
                            type="button"
                            onClick={() => deleteQuizImage()} 
                            className="bg-white p-1 rounded-full disabled:opacity-50"
                            disabled={deletePending}
                        >
                            {deletePending ? <SimpleLoader /> : <Trash size={16} color="red" />}
                        </button>
                    </div>
                </div>
            )}

            <AnimatePresence>
                {showFullImage && (
                    <Popup action={() => setShowFullImage(false)}>
                        <img 
                            src={imagePreview.current} 
                            alt="Full size preview" 
                            className="mx-auto max-w-[80%] object-contain" 
                        />
                    </Popup>
                )}
            </AnimatePresence>
        </>
    )
}