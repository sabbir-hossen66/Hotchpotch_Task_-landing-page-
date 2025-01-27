import React from 'react';
import { tools } from '../../utilitis/Data';

const Tools = () => {
  return (
    <div className='container mx-auto my-10'>
      <h2 className='text-4xl text-white text-center font-bold'>54 exciting writing tools</h2>
      <p className='text-gray-400 text-center mt-2'>AI engines take information from various sources and read <br /> them like a human would do.</p>

      <div className="mt-10 flex flex-col items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
          {tools.map((tool, index) => (
            <div className="container mx-auto p-4 shadow-lg bg-[#282A37] rounded-2xl">
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold text-white">{tool.title}</h2>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  {tool.description}
                </p>

              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
          See all 54 available tools
        </button>
      </div>

    </div>
  );
};

export default Tools;