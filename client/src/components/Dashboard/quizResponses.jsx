import { ArrowLeft, Check, SealQuestion, X } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { parseDate } from "../helpers/parseDate";
import { AnimatePresence } from "framer-motion";
import Popup from "../common/popup";
import UserQuizDetails from "../common/UserQuizDetails";
import { useState } from "react";


export default function QuizResponses() {

    const { quizId } = useParams();
    const navigate = useNavigate();
    const [showResults, setShowResults] = useState(false);


    const { data: quiz, isLoading, error, refetch: refetchQuiz } = useQuery({
        queryKey: [`${quizId}`, quizId],
        queryFn: async () => {
            try {
                const serverResponse = await axios.get(`http://localhost:5000/quiz/getQuiz?id=${quizId}`);
                console.log(serverResponse.data);
                return serverResponse.data.quiz;
            } catch (err) {
                console.log("error finding result ", err);
            }
        }, onError: (err) => {
            console.log(err)
        },
        refetchOnWindowFocus: false
    })

    const { data: results, isLoading: isResultLoading, refetch: refetchResult } = useQuery({
        queryKey: [`${quizId}` ,quizId],
        queryFn: async () => {
            try {
                const serverResponse = await axios.post(`http://localhost:5000/response/results`, {
                    quizId: quizId
                });
                console.log("server response : ", serverResponse.data.results)
                return serverResponse.data.results;
            } catch (err) {
                console.log("error finding result ", err);
            }
        }, onError: (err) => {
            console.log(err)
        },
        refetchOnWindowFocus: false
    })


    return (
        <div className="w-full flex gap-20 mt-10 ">

            {isLoading && isResultLoading ? "loading"
                :
                <>
                    <div className="w-[35%] flex flex-col gap-4 h-full">
                        <button className="p-1 rounded-md bg-[#f3f3f3] w-fit" onClick={() => navigate("/admin/dashboard")}><ArrowLeft size={18} weight="bold" /></button>

                        <div className="w-full h-full">
                            <img className="object-cover w-full h-full" src={`http://localhost:5000/uploads/${quiz.quizThumbnail}`} alt="" />
                        </div>

                        <p className="bg-[#d6fff2] gap-1 flex items-center w-fit text-[#16ab82] text-[13px] py-0.5 px-2 rounded-full">
                            {quiz.published ? <>
                                <Check size={13} weight="bold" />
                                Published
                            </> : <>
                                <X size={13} color="#00d659" />
                                Not Published
                            </>}
                        </p>
                        <h1 className="font-Satoshi-Black text-2xl/tight">{quiz.title}</h1>
                        <div className="flex items-center justify-between ">
                            <div className="flex gap-3 items-center">
                                {quiz.category.map((cate, i) => {
                                    return <p key={i} className="text-[#797b7c] text-sm font-Satoshi-Medium p-[2px] px-[6px] rounded-full bg-[#f0f2f4]">
                                        {cate}
                                    </p>
                                })}
                            </div>

                        </div>
                        <div className="flex items-center text-[13px]  gap-1.5">
                            <div className="flex items-center font-Satoshi-Bold gap-1.5 text-black">
                                <SealQuestion size={17} weight="bold" />
                                {quiz.questions.length} questions
                            </div>
                            <p className="text-gray-400 font-Satoshi-Medium">• Start Date {parseDate(quiz.startTime)}</p>
                        </div>
                        <div className="flex items-center mt-5 gap-10">
                            {/* <div className="border-r-2 pr-10 h-full">
                                <p className="text-gray-400 font-Satoshi-Medium text-sm">Accuracy</p>
                                <h1 className="font-Satoshi-Bold text-xl">50%</h1>
                            </div> */}
                            <div>
                                <p className="text-gray-400 font-Satoshi-Medium text-sm">Submissions</p>
                                <h1 className="font-Satoshi-Bold text-xl">{results?.length || 0}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[65%] pt-10">
                        <h1 className="text-xl font-Satoshi-Black">Responses</h1>
                        {results.length > 0 ? <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                            <table className="w-full text-sm text-left rtl:text-right text-black">
                                <thead className="text-xs text-black uppercase bg-[#f3f3f3] border-2">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Participant
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Status
                                                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg></a>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Accuracy
                                                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg></a>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Marks
                                                <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg></a>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    results.map((response, i) => {
                                        return <><tbody>
                                            <tr className="bg-white border-b ">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {response.firstname} {response.lastname}
                                                </th>
                                                <td className="px-6 py-4">
                                                    <p className="bg-[#d6fff2] gap-1 flex items-center w-fit text-black text-[13px] py-0.5 px-2 rounded-full">

                                                        <Check size={13} weight="bold" />
                                                        Submitted
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {response.grades.percentage}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {response.grades.earnedPoints}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setShowResults(true)}>View Details</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                            <AnimatePresence>
                                                {showResults &&
                                                    <Popup action={() => setShowResults(false)}>
                                                        <UserQuizDetails result={response} setShowResults={setShowResults} />
                                                    </Popup>
                                                }
                                            </AnimatePresence>
                                        </>
                                    })
                                }
                            </table>
                        </div> : <>No Data to show</>}
                    </div>

                </>

            }
        </div>
    )
}