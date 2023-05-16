import React from 'react';

const faqData = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  // Add more question-answer pairs as needed
];

export default function FAQ() {
  return (
    <section id="faq" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <details key={index} className="mb-4">
          <summary className="font-semibold">{faq.question}</summary>
          <p className="mt-2">{faq.answer}</p>
        </details>
      ))}
    </section>
  );
}
