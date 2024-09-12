import React from 'react';

export default function BlackFeatures() {
  return (
    <div className="main-wrapper min-h-screen bg-black px-10 py-16">

      <h1 className="text-5xl font-Satoshi-Bold text-white mb-10">
        <span className="font-Boska-BoldItalic">The 4 step route</span> to better financial management. Smarter accounting for faster growth.
      </h1>

    
      <div className="flex gap-4">  
        <div className="bg-gray-900 h-72 p-6 rounded-lg text-white">
          <h2 className="text-5xl font-Satoshi-Bold">01.</h2>
          <p className="mt-4 text-lg">Manage Invoices</p>
          <p className="text-gray-400 mt-2">
            Scan invoices, automate data-entry and route approvals, effortlessly, automatically.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-white flex flex-col justify-center">
          <h2 className="text-5xl font-Satoshi-Bold">02.</h2>
          <p className="mt-4 text-lg">Track expenses</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-white flex flex-col justify-center">
          <h2 className="text-5xl font-Satoshi-Bold">03.</h2>
          <p className="mt-4 text-lg">Send & get payments</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-white flex flex-col justify-center">
          <h2 className="text-5xl font-Satoshi-Bold">04.</h2>
          <p className="mt-4 text-lg">Analyse cashflow</p>
        </div>
      </div>
    </div>
  );
}
