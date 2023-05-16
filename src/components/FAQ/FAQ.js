import faqData from './faqData.json';

export default function FAQ() {
  return (
    <section id="faq" className="py-8">
      <h2 className="text-2xl font-bold mb-4">FAQ &amp; Agenda</h2>
      <div className="grid gap-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded p-4">
            <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
