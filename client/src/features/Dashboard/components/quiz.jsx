import { useState } from "react";
import { ArrowUpRight, DotsThree, Pencil, SealQuestion, Trash } from "@phosphor-icons/react";
import DropdownMenu from "../../../components/dropdownMenu";
import HamburgerLink from "../../../components/hamburgerLink";
import { useNavigate } from "react-router-dom";
import { useDeleteQuiz } from "../api/useDeleteQuiz";
import { useAuth } from "../../../hooks/useAuth";

export default function Quiz({ quiz, selectedworkspace, getQuizzes }) {
    const [dropdown, showDropdown] = useState(false);
    const navigate = useNavigate();
    const {user} = useAuth();

    const { mutate: deleteQuiz } = useDeleteQuiz({
        onSuccess: (data) => {
            if (data.success) {
                getQuizzes();
            }
        },
        onError: (err) => {
            console.log("error while deleting quiz : ", err);
        }
    });

    return (
        <div className="bg-white border-2 flex flex-col gap-3 h-auto rounded-xl p-2 cursor-pointer" onClick={(e) => { navigate(`${quiz._id}`); e.stopPropagation() }}>
            {/* Line 1: Thumbnail and Stats */}
            <div className="relative bg-yellow-600 h-32 rounded-xl p-2">
                {quiz.quizThumbnail && (
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                        src={`http://localhost:5000/uploads/${user.email}/${selectedworkspace.id}/${quiz.quizThumbnail}`}
                        alt="Quiz Thumbnail"
                    />
                )}
            </div>

            <div className="px-3 flex flex-col gap-5 overflow-hidden">
                <h1 className="text-black font-Satoshi-Bold text-xl text-wrap break-all">
                    {quiz.title.length > 55 ? quiz.title.substring(0, 55) + "...": quiz.title}
                </h1>

                {/* Line 4: Tags */}
                <div className="flex justify-between">
                    <div className="flex flex-col h-[3.7rem] justify-between">
                        <div className="line4 flex items-center justify-between ">
                            <div className="flex gap-3 items-center">
                                {quiz.category.map((cate, i) => {
                                    return <p key={i} className="text-[#797b7c] text-[13px] font-Satoshi-Medium p-[2px] px-[6px] rounded-full bg-[#f0f2f4]">
                                        {cate}
                                    </p>
                                })}
                            </div>
                        </div>

                        {/* Line 5: Footer */}
                        <div className="line5 flex items-center justify-between">
                            <div className="flex gap-2 items-center text-xs">
                                <p className="font-Satoshi-Medium text-gray-600 ">
                                    Created{" "}
                                    {new Date(quiz.created_at).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </p>
                                <div className="text-[5px]">●</div>
                                <div className="flex items-center font-Satoshi-Bold text-black gap-1">
                                    <SealQuestion size={14} weight="bold" />
                                    {quiz.questions.length} Questions
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a href={`/admin/editor/${selectedworkspace.id}/${quiz._id}`} onClick={(e) => e.stopPropagation()}>
                            <button className="border-2 p-1 rounded-full">
                                <ArrowUpRight size={14} />
                            </button>
                        </a>
                        <button className="bg-white border-2 p-1 rounded-full" onClick={(e) => { e.stopPropagation(); showDropdown(true); }}>
                            <DotsThree size={14} />
                            <div className="text-black gap-2 flex">
                                {dropdown && (
                                    <DropdownMenu dropdown={dropdown} setDropdown={showDropdown}>
                                        {/* <HamburgerLink icon={<Pencil size={18} />} title="Edit" action={() => {  }} /> */}
                                        <HamburgerLink icon={<Trash size={18} color="#ff0000" />} title="Delete" action={() => deleteQuiz(quiz._id)} />
                                    </DropdownMenu>
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
