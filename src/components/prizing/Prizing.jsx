import React from 'react';
import { pricingPlans } from '../../utilitis/Data';

const Prizing = () => {
  return (
    <div className=" text-white py-12">
      < div className="text-center mb-12" >
        <h2 className="text-2xl sm:text-4xl font-bold">Make the wise decision for your business</h2>
        <p className="text-gray-400 mt-2">Choose from our affordable 3 packages</p>
      </div >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#282A37] rounded-lg p-6 shadow-lg flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <div className="text-4xl font-bold">
              {plan.price}
              <span className="text-lg font-medium text-gray-400">{plan.duration}</span>
            </div>
            <p className="text-gray-400 text-center my-4">{plan.description}</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-6 py-2 rounded-lg hover:bg-opacity-90 ${index === 1
                ? 'bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white hover:bg-purple-600'
                : 'outline-1 text-white hover:bg-indigo-700'
                }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Prizing;