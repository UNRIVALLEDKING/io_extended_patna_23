import React from 'react';
import faqData from './faqData.json';

export default function FAQ() {
  return (
    <section id="faq" className="py-8">
      <h2 className="text-2xl font-bold mb-4">FAQ &amp; Agenda</h2>
      <div className="grid gap-4">
        {faqData.map((faq, index) => (
          <details key={index} className="border rounded p-4">
            <summary className="text-lg font-medium mb-2">{faq.question}</summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
