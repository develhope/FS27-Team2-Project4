import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group [&_summary::-webkit-details-marker]:hidden px-16" id='faq'>
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-light-green p-4 text-gray-900"
        onClick={toggleOpen}
      >
        <h2 className="font-medium">{question}</h2>

        <svg
          className={`size-5 shrink-0 transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      {isOpen && (
        <p className="mt-4 px-4 leading-relaxed text-gray-700">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;