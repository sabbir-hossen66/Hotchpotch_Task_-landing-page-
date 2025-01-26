import React from 'react';

const Bar = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg flex flex-col lg:flex-row justify-between items-center p-6">
        {/* Text Section */}
        <div className="text-white text-center lg:text-left mb-4 lg:mb-0">
          <h2 className="text-xl font-medium leading-snug">
            It will help you improve your writing <br />
            & bring ideas more clearly.
          </h2>
        </div>

        {/* Button Section */}
        <div>
          <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
            Start 14 Days Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bar;