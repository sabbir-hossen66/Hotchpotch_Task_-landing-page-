import React from 'react';
import StyleButton from './StyleButton';

const Result = ({ heading, description, btn }) => {
  return (
    <div className="text-center lg:text-left">
      <h2 className="text-3xl text-white mb-5">{heading}</h2>
      <p className="text-xs text-gray-500 mb-5">{description}</p>
      {/* Button Section */}
      <div className="flex justify-center lg:justify-start">
        <StyleButton text={btn} />
      </div>
    </div>
  );
};

export default Result;