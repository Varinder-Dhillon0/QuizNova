import React from "react";

const Share = () => {
    return (
        <div className="share-container flex flex-col w-2/5 bg-[#09090b] p-3 rounded-xl">
            <div className="share-header flex items-center justify-between w-full">
                <h1 className="text-white font-Satoshi-Bold text-2xl">
                    Share Link
                </h1>
                <div className="cross-icon bg-gray-400 rounded-md w-6 h-6"></div>
            </div>
            <p className="font-Satoshi-Medium text-md text-[#7f7e82]">
                Anyone who has the this link will be able to view this.
            </p>
            <div className="share-url flex items-center justify-start gap-2 mt-3">
                <input
                    type="url"
                    placeholder="Here's your required link"
                    className="border border-[#7f7e82]/50 bg-[#09090b] text-md font-Satoshi-Regular w-[95%] 
                    shadow-[0_0_4px_rgba(127,126,130,0.5)] focus:outline-none p-2 rounded-md text-white"
                />
                <div className="share-copy-icon bg-white rounded-md w-6 h-6"></div>
            </div>
            <button className="text-white bg-[#272729] rounded-md w-14 flex items-center justify-center px-10 py-3 mt-5 text-md font-Satoshi-Medium">
                Close
            </button>
        </div>
    );
};

export default Share;
