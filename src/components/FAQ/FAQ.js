
import React from "react";
import faqData from "./faqData.json";

const FAQ = () => {
  return (
    <section id="faq" className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">FAQ & Agenda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq) => (
            <div key={faq.id} className="bg-white p-4 shadow">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default FAQ;

// import React from "react";
// import faqData from "./faqData.json";

// const FAQ = () => {
//   return (
//     <section id="faq" className="bg-gray-100 py-8">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-bold mb-4">FAQ & Agenda</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {faqData.map((faq) => (
//             <div key={faq.id} className="bg-white p-4 shadow">
//               <details>
//                 <summary className="text-lg font-medium mb-2">
//                   {faq.question}
//                 </summary>
//                 <p>{faq.answer}</p>
//               </details>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;
