import React from 'react';
import { X, HelpCircle, Info } from 'lucide-react';

const QuestionButton = ({ number }) => {
  return (
    <div className="font-Satoshi-Medium rounded-full bg-cyan-200 border border-2 border-cyan-200 w-10 h-10 flex items-center justify-center">
      {number}
    </div>
  );
};

export default function QuizNavigation() {
  return (
    <div className="main-wrapper-navigation flex items-center justify-center p-4 md:p-0">
      <div className="sub-wrapper-navigation w-full md:w-2/5 bg-white rounded-lg shadow-lg p-4 md:p-6">
        <div className="upper-div flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-4">
          <div className="upper-left-part flex items-center gap-3 mb-2 md:mb-0">
            <h2 className="font-Satoshi-Bold text-lg">Quiz Navigation</h2>
            <div className="h-4 border-l border-gray-400 hidden md:block"></div>
            <span className="font-Satoshi-Regular text-gray-500">20 Questions</span>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <div className="w-full border-t border-gray-400 mb-4"></div>
        <div className="lower-div flex flex-col md:flex-row items-start justify-between w-full">
          <div className="lower-left-section w-full md:w-[45%] mb-6 md:mb-0">
            <h3 className="font-Satoshi-Medium mb-2">Show question</h3>
            <div className="space-y-2">
              {['All Question', 'Answered', 'Not Answered', 'Not Sure'].map((label, index) => (
                <div key={index} className="flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 w-full">
                  <div className="flex items-center space-x-2">
                    <HelpCircle size={16} className="text-gray-500" />
                    <span className="text-gray-700 font-Satoshi-Regular">{label}</span>
                  </div>
                  <div className="bg-gray-200 text-gray-700 rounded-md w-6 h-6 flex items-center justify-center text-xs font-Satoshi-Regular">
                    {index === 0 ? 20 : index === 1 ? 5 : index === 2 ? 15 : 1}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-start space-x-2 mt-4 text-xs text-gray-600">
              <Info size={16} />
              <p className="font-Satoshi-Regular">Choose tab finds questions that need a list of numbers as answers.</p>
            </div>
          </div>
          <div className="border-t md:border-l border-gray-400 self-stretch my-4 md:my-0 md:mx-4 w-full md:w-0"></div>
          <div className="lower-right-section w-full md:w-[45%]">
            <h3 className="font-Satoshi-Medium mb-2">List Number Question</h3>
            <div className="mcq-number-section grid grid-cols-5 gap-2">
              {[...Array(20)].map((_, i) => (
                <QuestionButton key={i} number={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}