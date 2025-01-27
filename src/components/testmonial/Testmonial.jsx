import React from 'react';
import { testimonials } from '../../utilitis/Data';

const Testmonial = () => {
  return (
    <div>
      <h2 className='text-4xl text-white text-center font-bold'>What our customers say</h2>
      <p className='text-gray-400 text-center mt-2'>Read why thousands of marketers, writers, and <br /> entrepreneurs love us so much.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 flex items-center">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-800 text-sm">{testimonial.username}</p>
              </div>
            </div>
            <p className="text-gray-900 mb-4">{testimonial.text}</p>
            <span className="text-blue-400 font-medium">
              {testimonial.hashtags}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Testmonial;