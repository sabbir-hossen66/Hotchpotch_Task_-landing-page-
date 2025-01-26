import React from 'react';
import StyleButton from '../../utilitis/StyleButton';

const ResultSection = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Image Section */}
        <div>
          <img
            src="https://i.ibb.co/2Nmr6K0/image.png"
            alt="AI Tool"
            className="max-w-full"
          />
        </div>

        {/* Content Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl text-white mb-5">
            Create content efficiently <br /> and quickly with great AI <br /> writing tools
          </h2>
          <p className="text-xs text-gray-500 mb-5">
            150k+ users. No Credit Card Required. Pro designs <br />
            and writing at no cost. Start for free. AI Writer Tool | Generate <br />
            text for ecom, social media, website, sales, blogs, etc.
          </p>
          {/* Button Section */}
          <div className="flex justify-center lg:justify-start">
            <StyleButton text="Start 14 Days Free Trial" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
