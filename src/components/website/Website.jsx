import React from 'react';

const Website = () => {
  return (
    <div className='container mx-auto py-10'>
      <h2 className='text-center text-white mb-10 text-3xl font-bold'>Mixland helps you <br />
        build beautiful website</h2>
      <div className=' flex-col-1 lg:flex justify-center items-center gap-10'>

        <div className="bg-gray-900  flex items-start justify-start p-4">
          <ul className="space-y-2 w-60">
            <li className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white py-2 px-4 rounded-lg shadow-md">
              Blog Headlines
            </li>
            <li className=" outline text-white py-2 px-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              Blog Intros
            </li>
            <li className="outline text-white py-2 px-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              Content Rewriter
            </li>
            <li className="outline text-white py-2 px-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              Facebook Ads
            </li>
            <li className="outline text-white py-2 px-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              Product Description
            </li>
            <li className="outline text-white py-2 px-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              PAS Copywriting Formula
            </li>
          </ul>
        </div>


        <img src="https://i.ibb.co.com/bgVZq0m/Image-1.png" alt="" />


      </div>
    </div>
  );
};

export default Website;