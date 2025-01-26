import React from 'react';

const StyleButton = ({ text }) => {
  return (
    <div>
      <button className="ml-4 px-4 py-2 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition duration-300">
        {text}
      </button>
    </div>
  );
};

export default StyleButton;