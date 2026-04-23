"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Industries = () => {
  const industries = [
    { name: "Hi-Tech", desc: "Accelerating digital product innovation with cloud-native and AI-enabled engineering." },
    { name: "Travel, Transportation, Logistics & Hospitality", desc: "Optimizing journeys, supply chains, and guest experiences through integrated digital platforms." },
    { name: "Manufacturing", desc: "Modernizing operations with automation, predictive analytics, and smart factory capabilities." },
    { name: "Media & Entertainment", desc: "Building scalable content platforms and personalized digital engagement ecosystems." },
    { name: "Private Equity", desc: "Supporting portfolio transformation with technology due diligence and value-creation programs." },
    { name: "Professional Services", desc: "Driving efficiency and service excellence through workflow digitization and data intelligence." },
    { name: "Insurance", desc: "Enhancing underwriting, claims, and risk operations through AI-powered decision systems." },
    { name: "Retail & Consumer Goods", desc: "Delivering omnichannel commerce and demand forecasting for customer-centric growth." },
    { name: "Banking & Financial Services", desc: "Modernizing core systems and digital channels with secure, compliant architecture." },
    { name: "Communications", desc: "Improving network operations and customer lifecycle management with scalable platforms." },
    { name: "Energy & Utilities", desc: "Enabling resilient and sustainable operations through intelligent grid and asset solutions." },
    { name: "Healthcare & Life Sciences", desc: "Transforming patient outcomes with secure clinical systems and data-driven care models." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [industries.length]);

  const getVisibleIndustries = () => {
    return Array.from({ length: 3 }, (_, i) => industries[(currentIndex + i) % industries.length]);
  };

  return (
    <section
      className="h-auto flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-white to-slate-50 py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-300 opacity-15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-300 opacity-15 rounded-full blur-3xl"></div>

      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold text-center mb-2"
      >
        Industry Expertise
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="text-center mb-4 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
      >
        Industries We Empower
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        className="text-center mb-14 text-slate-600 max-w-3xl leading-relaxed text-base md:text-lg"
      >
        We partner with organizations across critical sectors to deliver secure, scalable, and business-focused
        digital transformation outcomes.
      </motion.p>

      <div className="relative w-full max-w-xs md:max-w-6xl grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6">
        <AnimatePresence mode="popLayout">
          {getVisibleIndustries().map((industry, index) => (
            <motion.div
              key={industry.name}
              className={`flex flex-col p-7 rounded-2xl border shadow-sm bg-white transition transform hover:-translate-y-1 hover:shadow-lg ${
                index === 1 ? "border-emerald-200" : "border-slate-200"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex w-fit text-xs uppercase tracking-wider font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full mb-3">
                Sector
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                {industry.name}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition shadow-md"
        >
          Discuss Your Industry Use Case
        </Link>
      </div>
    </section>
  );
};

export default Industries;
