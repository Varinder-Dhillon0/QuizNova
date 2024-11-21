import React from 'react'

const QuizOverviewCard = () => {
  return (
    <div className='overview-container bg-white shadow-md flex flex-col gap-3 w-96 h-[340px] rounded-xl p-2'>
        <div className='line1 relative bg-yellow-600 w-full h-2/6 rounded-xl p-2'>
            <div className='line1box absolute bg-gray-700 w-[106px] text-sm h-6 rounded-md flex font-Satoshi-Medium text-white gap-1 items-center justify-center'>
                <h1>10</h1>
                <h1>Enrolled</h1>
                <div className='bg-white w-4 h-4 rounded-full'></div>
            </div>
        </div>
        <h1 className='line2 text-black font-Satoshi-Bold text-[21px] leading-[28px]'>Master Daily Life Hacks with this Simple Quiz</h1>
        <div className='line3 flex items-center justify-around gap-2 mt-3'>
            <div className='flex gap-2 items-center justify-center'>
                <div className='w-8 h-8 rounded-full bg-gray-700'></div>
                <div className='flex flex-col'>
                    <h1 className='font-Satoshi-Medium text-gray-700 text-base'>Accuracy</h1>
                    <div className='flex gap-1 items-center justify-start'>
                        <h1 className='font-Satoshi-Bold text-black text-md'>40%</h1>
                        <div className='bg-gray-700 h-4 w-4 rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='h-10 w-0.5 bg-gray-100 rounded-md'></div>
            <div className='flex gap-2 items-center justify-center'>
                <div className='w-8 h-8 rounded-full bg-gray-700'></div>
                <div className='flex flex-col'>
                    <h1 className='font-Satoshi-Medium text-gray-700 text-base'>Completion Rate</h1>
                    <div className='flex gap-1 items-center justify-start'>
                        <h1 className='font-Satoshi-Bold text-black text-md'>60%</h1>
                        <div className='bg-gray-700 h-4 w-4 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='line4 flex items-center justify-between px-3 mt-3'>
            <div className='flex gap-3 items-center justify-between'>
                <h1 className='bg-[#f0f3f4] rounded-2xl font-Satoshi-Medium text-gray-600 text-base py-1 px-2'>Daily-Life</h1>
                <h1 className='bg-[#f0f3f4] rounded-2xl font-Satoshi-Medium text-gray-600 text-base py-1 px-2'>Science</h1>
            </div>
            <div className='w-7 h-7 bg-gray-700 rounded-full'></div>
        </div>
        <div className='line5 flex items-center justify-between px-3'>
            <div className='flex gap-1 items-center justify-between'>
                <h1 className='font-Satoshi-Medium text-gray-600 text-base'>Edited 2h ago •</h1>
                <div className='flex gap-1 items-center justify-between'>
                    <div className='h-4 w-4 rounded-full bg-gray-600'></div>
                    <h1 className='text-black font-Satoshi-Bold text-base'>10 Question</h1>
                </div>
            </div>
            <div className='w-7 h-7 bg-gray-700 rounded-full'></div>
        </div>
    </div>
  )
}

export default QuizOverviewCard
