"use client";

import Image from "next/image";
import { CheckCircle2, Globe2, ShieldCheck, Timer } from "lucide-react";

const metricCards = [
  { value: "1000+", label: "Enterprise Projects", desc: "Successfully delivered over 1000 complex enterprise-level projects across various industries, ensuring scalability and high performance.", icon: <CheckCircle2 className="w-5 h-5" /> },
  { value: "65+", label: "Countries Enabled", desc: "Operating in more than 65 countries worldwide, providing localized expertise and global reach for international clients.", icon: <Globe2 className="w-5 h-5" /> },
  { value: "24/7", label: "Operational Coverage", desc: "Round-the-clock support and monitoring to ensure continuous operations and rapid response to any issues.", icon: <Timer className="w-5 h-5" /> },
  { value: "100%", label: "Service Reliability", desc: "Achieving 100% service reliability through robust infrastructure, proactive maintenance, and quality assurance.", icon: <ShieldCheck className="w-5 h-5" /> },
];

const deliveryJourney = [
  { phase: "01", title: "Business Discovery", desc: "Align objectives, risks, and measurable outcomes." },
  { phase: "02", title: "Solution Blueprint", desc: "Design scalable architecture and delivery roadmap." },
  { phase: "03", title: "Controlled Delivery", desc: "Execute with governance, QA, and secure engineering." },
  { phase: "04", title: "Continuous Value", desc: "Optimize performance, adoption, and long-term ROI." },
];

export default function Stats() {
  return (
    <div className="bg-gradient-to-b from-slate-100 via-white to-slate-50 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-3">Executive Snapshot</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
                Enterprise Execution Built for Outcomes
              </h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Prasunet combines strategic consulting and engineering precision to help organizations modernize
                confidently. Our delivery framework ensures each initiative moves from business intent to measurable
                impact with security, reliability, and transparency.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-slate-50 text-slate-700">Governed Delivery</span>
                <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-slate-50 text-slate-700">Risk-Aware Execution</span>
                <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-slate-50 text-slate-700">Business-First Outcomes</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metricCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-left text-slate-900 shadow-sm hover:shadow-md transition"
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 mb-3">
                    {card.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold">{card.value}</p>
                  <p className="text-sm text-slate-600 mt-1">{card.label}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.14em] text-emerald-700 font-semibold mb-5">Transformation Framework</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {deliveryJourney.map((item) => (
                <div key={item.phase} className="relative rounded-xl p-4 bg-slate-50 border border-slate-200">
                  <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500" />
                  <p className="pt-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Phase {item.phase}</p>
                  <h4 className="text-lg font-semibold text-slate-900 mt-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-white to-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-5 text-slate-900">Our Proven IT Solutions</h2>
          <p className="max-w-3xl mx-auto text-center text-slate-600 mb-16">
            From engineering execution to ongoing operations, our model is built to deliver measurable business impact.
          </p>

          <div className="space-y-12 md:space-y-16">
            {[
              {
                title: "Project Solutions Delivered",
                img: "/homepageprojectdeleivered1.png",
                desc: "From startups to Fortune 500 companies, our solutions span industries and technologies, ensuring scalability, performance, and measurable impact.",
                bullets: [
                  "Successfully delivered projects",
                  "Agile methodology for faster execution",
                  "Client-first mindset with measurable results",
                ],
              },
              {
                title: "24/7 Global Operations Support",
                img: "/homepage24:7support.png",
                desc: "Our dedicated teams monitor, maintain, and optimize systems proactively, reducing downtime and maximizing productivity.",
                bullets: [
                  "Round-the-clock monitoring",
                  "Agile response mechanisms",
                  "Proactive system optimization",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm relative overflow-hidden ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500" />
                <div className="md:w-1/2 flex justify-center w-full">
                  <div className={`w-full rounded-[2rem] overflow-hidden relative shadow-none border-none ${idx === 0 ? 'h-80 md:h-[500px]' : 'h-60 md:h-80'}`}>
                    <Image src={cs.img} alt={cs.title} fill className="object-cover" priority={true} />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <p className="text-xs uppercase tracking-[0.14em] text-emerald-700 font-semibold mb-2">Case Highlight</p>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4">{cs.title}</h3>
                  <p className="text-slate-600 mb-6">{cs.desc}</p>
                  <div className="space-y-0 pl-8 relative">
                    {cs.bullets.map((b, i) => (
                      <div key={i} className="relative pb-8 flex items-start">
                        {i !== cs.bullets.length - 1 && (
                          <div className="absolute left-[-20px] top-8 w-0.5 h-8 bg-emerald-400"></div>
                        )}
                        <div className="absolute left-[-28px] top-0.5 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-md flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <p className="text-slate-700 text-sm font-medium pt-0.5">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-slate-200 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-slate-200 bg-white shadow-sm p-8 md:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-2">Global Reach</p>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
                Global Presence <span className="text-emerald-600">(65+ countries)</span>
              </h3>
              <p className="text-base md:text-lg mb-5 text-slate-700 leading-relaxed">
                Our global footprint ensures local expertise, seamless collaboration, and faster project delivery.
                From AI-powered platforms to enterprise solutions, we empower businesses worldwide to achieve growth,
                efficiency, and digital transformation.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                With strategically located hubs, a network of skilled professionals, and cutting-edge technology,
                Prasunet connects innovation with impact - no matter where your business is.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-full md:max-w-4xl h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image src="/homepageglobalpresence.png" alt="Global presence" fill className="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
