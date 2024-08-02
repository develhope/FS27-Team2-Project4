import React from 'react';
import FAQItem from './FAQItem';

const FAQPage = () => {
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    }, 
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQPage;