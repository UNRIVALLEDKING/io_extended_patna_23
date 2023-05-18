import React from "react";
import faqData from "./faqData.json";

const FAQ = () => {
  return (
    <section id="faq" className="z-[999999] py-8">
      <div className="z-[999999] container mx-auto">
        <h2 className="text-2xl font-bold mb-4">FAQ & Agenda</h2>
        <div className="z-[999999] grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq) => (
            <div key={faq.id} className="z-[999999] p-4 shadow">
              <details className="z-[999999]">
                <summary className="text-lg font-medium mb-2">
                  {faq.question}
                </summary>
                <p>{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
