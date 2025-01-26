import React from "react";
import StyleButton from "../../utilitis/StyleButton";
import { TiMediaPlay } from "react-icons/ti";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#12141D] to-[#12031afa] py-10 text-center px-4 text-white">
      <div className="my-10">
        <h2 className="text-4xl ">Write Better <br /> Content For Your</h2>
        <h4 className="mt-2 underline text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 text-4xl">Facebook Ads</h4>
      </div>
      <div className="mb-5">
        <p className="mt-4">Artificial intelligence writting tool helps you create blogs,<br /> social media websites and much more.</p>
      </div>
      <StyleButton text={'Start 14 Days Free Trial'} />


      <div className="flex justify-center items-center mt-4">
        <div><TiMediaPlay /></div>
        <div>
          <p>Watch A Demo</p>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;

