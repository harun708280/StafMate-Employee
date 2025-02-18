import { useState } from "react";

export default function FAQs() {
  const faqs = [
    {
      question: "What is Development Tracker?",
      answer: "Development Tracker is a tool that helps teams manage tasks, track progress, and collaborate effectively."
    },
    {
      question: "How can I join the team?",
      answer: "You can join the team by applying through our website or getting an invite from an existing member."
    },
    {
      question: "Is there a free version available?",
      answer: "Yes! We offer a free version with limited features, and a premium version with additional functionalities."
    },
    {
      question: "How do I track my contributions?",
      answer: "You can track your contributions through your profile dashboard, which displays work hours, completed tasks, and progress."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-primary bg-opacity-20 my-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">❓ FAQs</h2>
        <p className="text-white mt-2">Find answers to the most commonly asked questions.</p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md cursor-pointer" onClick={() => toggleFAQ(index)}>
            <h3 className="text-lg font-semibold text-gray-700 flex justify-between items-center">
              {faq.question}
              <span className="text-primary">{openIndex === index ? "➖" : "➕"}</span>
            </h3>
            {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
