import React from 'react';
import StyleButton from '../../utilitis/StyleButton';

const WriteResult = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-12'>

        <div className="text-center lg:text-left">
          <h2 className="text-3xl text-white mb-5">
            Write what you want to <br /> convey through clear & <br /> authentic writing
          </h2>
          <p className="text-xs text-gray-500 mb-5">
            AI-Writer is the most accurate content generation <br />
            and writing at no cost. Start for free. AI Writer Tool | Generate <br />
            your text into a completely personalized.
          </p>

          <div className="flex justify-center lg:justify-start">
            <StyleButton text="Start 14 Days Free Trial" />
          </div>
        </div>

        <img src="https://i.ibb.co.com/YPXVD0y/Card-1.png" alt="" />


      </div>
    </div>
  );
};

export default WriteResult;