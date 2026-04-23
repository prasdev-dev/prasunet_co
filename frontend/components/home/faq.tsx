"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What services does Prasunet offer globally?",
    answer:
      "Prasunet provides IT consulting, software engineering, cloud modernization, cybersecurity, and digital transformation services for organizations across industries. Our teams design secure, scalable, and business-focused solutions tailored to each client context.",
  },
  {
    question: "Does Prasunet support startups and small businesses?",
    answer:
      "Yes. We support startups and growth-stage businesses with product strategy, MVP development, scaling architecture, and continuous engineering support. Our engagement models are designed to remain flexible, practical, and outcome-driven.",
  },
  {
    question: "What makes Prasunet different from other IT companies?",
    answer:
      "We combine strategic consulting with accountable execution. This means we not only define the right roadmap but also deliver it with structured governance, transparent communication, and measurable business outcomes.",
  },
  {
    question: "Does Prasunet provide cloud and DevOps solutions?",
    answer:
      "Absolutely. We offer cloud migration, infrastructure automation, CI/CD implementation, and platform reliability services. These solutions help organizations improve speed, optimize cost, and strengthen operational resilience.",
  },
  {
    question: "How do you ensure quality and security in projects?",
    answer:
      "Our delivery model integrates secure coding practices, QA automation, performance validation, and release governance throughout the lifecycle. This ensures reliability, compliance readiness, and reduced production risk.",
  },
  {
    question: "Can Prasunet work with international clients and distributed teams?",
    answer:
      "Yes. We operate with a global delivery approach and collaborate effectively across time zones. Our processes and communication frameworks are designed to support distributed stakeholders with high transparency.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-0 bg-gradient-to-b from-slate-100 via-white to-slate-50 rounded-3xl border border-slate-200 shadow-sm">
      <div className="max-w-5xl mx-auto p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold text-center mb-2">FAQs</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-10">
          Find quick answers about our services, delivery model, and how we support digital transformation initiatives.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl p-5 cursor-pointer transition-all duration-300 bg-white shadow-sm ${
                openIndex === index ? "border-emerald-200" : "border-slate-200"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-base md:text-lg font-semibold text-slate-800">{faq.question}</h3>
                <span
                  className={`text-lg font-bold text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⌄
                </span>
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
