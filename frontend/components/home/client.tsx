"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { logo: "/clients/clientimg1.png" },
  { logo: "/clients/clientimg2.png" },
  { logo: "/clients/clientimg3.png" },
  { logo: "/clients/clientimg4.png" },
  { logo: "/clients/clientimg5.jpg" },
  { logo: "/clients/clientimg6.png" },
  { logo: "/clients/clientimg7.png" },
  { logo: "/clients/clientimg8.jpg" },
  { logo: "/clients/images1.png" },
  { logo: "/clients/clientimg1.png" },
  { logo: "/clients/clientimg2.png" },
  { logo: "/clients/clientimg3.png" },
  { logo: "/clients/clientimg4.png" },
  { logo: "/clients/clientimg5.jpg" },
  { logo: "/clients/clientimg6.png" },
  { logo: "/clients/clientimg7.png" },
  { logo: "/clients/clientimg8.jpg" },
  { logo: "/clients/images1.png" },
  { logo: "/clients/clientimg1.png" },
  { logo: "/clients/clientimg2.png" },
  { logo: "/clients/clientimg3.png" },
  { logo: "/clients/clientimg4.png" },
  { logo: "/clients/clientimg5.jpg" },
  { logo: "/clients/clientimg6.png" },
  { logo: "/clients/clientimg7.png" },
  { logo: "/clients/clientimg8.jpg" },
  { logo: "/clients/images1.png" },
  { logo: "/clients/clientimg1.png" },
  { logo: "/clients/clientimg2.png" },
  { logo: "/clients/clientimg3.png" },
  { logo: "/clients/clientimg4.png" },
  { logo: "/clients/clientimg5.jpg" },
  { logo: "/clients/clientimg6.png" },
  { logo: "/clients/clientimg7.png" },
  { logo: "/clients/clientimg8.jpg" },
  { logo: "/clients/images1.png" },
  { logo: "/clients/clientimg1.png" },
  { logo: "/clients/clientimg2.png" },
  { logo: "/clients/clientimg3.png" },
  { logo: "/clients/clientimg4.png" },
  { logo: "/clients/clientimg5.jpg" },
  { logo: "/clients/clientimg6.png" },
  { logo: "/clients/clientimg7.png" },
  { logo: "/clients/clientimg8.jpg" },
  { logo: "/clients/images1.png" },
  { logo: "/clients/clientimg1.png" },
  { logo: "/clients/clientimg2.png" },
  { logo: "/clients/clientimg3.png" },
  { logo: "/clients/clientimg4.png" },
  { logo: "/clients/clientimg5.jpg" },
  { logo: "/clients/clientimg6.png" },
  { logo: "/clients/clientimg7.png" },
  { logo: "/clients/clientimg8.jpg" },
  { logo: "/clients/images1.png" },
  { logo: "/clients/clientimg1.png" },
  { logo: "/clients/clientimg2.png" },
  { logo: "/clients/clientimg3.png" },
  { logo: "/clients/clientimg4.png" },
  { logo: "/clients/clientimg5.jpg" },
  { logo: "/clients/clientimg6.png" },
  { logo: "/clients/clientimg7.png" },
  { logo: "/clients/clientimg8.jpg" },
  { logo: "/clients/images1.png" },
];

const quotes = [
  "“Innovation that drives industries forward.”",
  "“Technology tailored for every business.”",
  "“Shaping digital transformation with trust.”",
  "“Your vision, our technology.”",
  "“Empowering businesses, building the future.”",
  "“Delivering excellence, one project at a time.”",
  "“Where creativity meets cutting-edge solutions.”",
];

const ClientSection = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const groupSize = 8; // number of logos shown per slide
  const [index, setIndex] = useState(0);

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Rotate client logos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + groupSize) % clients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-300 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative text-center mb-16 px-6">
        <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-2">
          Trusted Partnerships
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Our Clients
        </h2>
        <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Trusted by businesses across industries, Prasunet delivers solutions
          that transform ideas into reality.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700">Industry Projects</span>
          <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700">Global Delivery Model</span>
          <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700">Enterprise-Grade Execution</span>
        </div>

        <motion.p
          key={quoteIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-xl md:text-2xl font-semibold text-slate-700 italic"
        >
          {quotes[quoteIndex]}
        </motion.p>

        <div className="w-24 h-1 bg-emerald-500 mx-auto mt-8 rounded-full"></div>
      </div>

      <div className="overflow-hidden relative px-8">
        <motion.div
          key={index}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {clients.slice(index, index + groupSize).map((client, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={client.logo}
                alt={`Client ${idx + 1}`}
                width={100}
                height={100}
                className="w-20 h-auto object-contain transition-all duration-500 grayscale hover:grayscale-0"

              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 text-center">Why Leading Organizations Choose Prasunet</h3>
          <p className="text-slate-600 text-center mt-3 max-w-3xl mx-auto">
            We combine strategic consulting, modern engineering, and accountable delivery governance to help clients
            accelerate transformation while reducing operational and technology risk.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">Consulting + Execution</p>
              <p className="text-sm text-slate-600 mt-2">From roadmap definition to implementation, our teams drive outcomes across the full project lifecycle.</p>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">Quality + Reliability</p>
              <p className="text-sm text-slate-600 mt-2">Structured QA, release governance, and production standards ensure secure and stable delivery.</p>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">Long-Term Partnership</p>
              <p className="text-sm text-slate-600 mt-2">We support continuous improvement, optimization, and scale as your business grows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
