// import React from 'react'

// const Notifications = () => {
//   return (
//     <div className='mt-[100px]'>
//       <div className='w-[90%] my-[5%] mx-[5%] items-center'>
//         <h1 className='text-4xl font-bold text-black  text-center'>Notifications</h1>
//         <div className='border border-1 p-3 mt-5'>
//             <p className='text-green-700 text-3xl text-center'>Congratulations 🎉👏</p>
//             <p className='font-bold '>You won a coupon</p>
//             <p>Apply promo code <span className='text-red-500'>SUPER10</span> to get flat 10% discount</p>
//         </div>
//         <div className='border border-1 p-3 mt-5'>
//             <p className='text-green-700 text-3xl text-center'>Congratulations 🎉👏</p>
//             <p className='font-bold '>You won a coupon</p>
//             <p>Apply promo code <span className='text-red-500'>SUPER20</span> to get flat 20% discount</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Notifications




import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const massageArr = [
    {massage : "Apply promo code SAVE10 to get flat 10% discount"},
    {massage : "Apply promo code SAVE20 to get flat 20% discount"},
    {massage : "Apply promo code SAVE30 to get flat 30% discount"},
    
  ];
  

const Notifications = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-40 my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Notifications</h1>
      {massageArr.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full p-4 bg-white text-left text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <span>Notification({index+1})</span>
            {openIndex === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50 text-gray-700 rounded-lg border-t">
              {faq.massage}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notifications;

