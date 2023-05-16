// export default function FAQ() {
//   return <section id="faq">FAQ & Agenda</section>;
// }
import React from "react";

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold mb-4">FAQ & Agenda</h2>
      <div className="grid gap-4">
        <div>
          <h3 className="text-lg font-semibold">Question 1</h3>
          <p>What is benifits of joining google io.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Question 2</h3>
          <p>Event is going to be online or offline </p>
        </div>
        {/* Add more questions and answers as needed */}
      </div>
    </section>
  );
}
