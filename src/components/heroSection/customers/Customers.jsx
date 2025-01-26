import React from 'react';

const logos = [
  { name: "Waverio", src: "https://i.ibb.co.com/25HGxTQ/Vector.png" },
  { name: "SquareStone", src: "https://i.ibb.co.com/1YCfp6H/Group-21.png" },
  { name: "Martino", src: "https://i.ibb.co.com/Rv4DpNs/Vector-3.png" },
  { name: "Virogan", src: "https://i.ibb.co.com/09xLT1c/Vector-4.png" },
  { name: "Vertex", src: "https://i.ibb.co.com/rFdRhVJ/Vector-5.png" },
  { name: "Aromix", src: "https://i.ibb.co.com/DMFV3Bj/Vector-2.png" },
  { name: "Fireli", src: "#" },
  { name: "Natroma", src: "https://i.ibb.co.com/rM3nz5W/Vector-5.png" },
];

const Customers = () => {

  return (
    <div className='bg-gradient-to-b from-[#12031afa] to-[#12141D] pb-5 text-white'>
      <p className='text-center py-10'>Trusted by nearly 5000+ paying customers</p>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 my-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6  items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center text-gray-500 font-bold gap-2 "
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-5 "
              />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Customers;