import faqData from "./faqData.json";

export default function FAQ() {
  return (
    // <section id="faq" className="z-[999999] py-8">
    //   <div className="z-[999999] container mx-auto">
    //     <h2 className="text-2xl font-bold mb-4">FAQ & Agenda</h2>
    //     <div className="z-[999999] grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {faqData.map((faq, id) => (
    //         <div key={id} className="z-[999999] p-4 shadow">
    //           <details className="z-[999999]">
    //             <summary className="text-lg font-medium mb-2">
    //               {faq.question}
    //             </summary>
    //             <p>{faq.answer}</p>
    //           </details>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section id="faq" className="py-8">
      <h2 className="text-2xl font-bold mb-4">FAQ &amp; Agenda</h2>
      <div className="grid gap-4">
        {faqData.map((faq, index) => (
          <details key={index} className="border rounded p-4">
            <summary className="text-lg font-medium mb-2">
              {faq.question}
            </summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
