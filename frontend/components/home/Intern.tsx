"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

const InternshipSection = () => {
  const highlights = [
    { icon: <Award className="w-5 h-5" />, text: "Industry-Recognized Certification" },
    { icon: <Briefcase className="w-5 h-5" />, text: "Hands-On Project Experience" },
    { icon: <Users className="w-5 h-5" />, text: "Mentorship from IT Professionals" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "Career-Oriented Skill Development" },
  ];

  return (
    <section
      className="relative w-full bg-cover bg-center overflow-hidden rounded-3xl border border-slate-200"
      style={{ backgroundImage: "url('/i1.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/95 via-slate-50/90 to-white/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 text-slate-900">
        <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold text-center">
          Internship Program
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-3xl md:text-5xl font-extrabold text-center leading-tight"
        >
          Professional IT Internship & Training
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl mx-auto text-center text-slate-600 text-base md:text-lg leading-relaxed"
        >
          Join a structured learning pathway designed for students and early professionals. Build practical expertise
          through guided project work, modern technology stacks, and career-focused mentorship aligned with industry
          standards.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-700">
            1000+ Students Trained
          </div>
          <div className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-700">
            Project-Based Learning
          </div>
          <div className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-700">
            Career Preparation Support
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {highlights.map((item) => (
            <div
              key={item.text}
              className="rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm p-4 text-sm md:text-base flex items-center gap-3 shadow-sm"
            >
              <span className="text-emerald-600">{item.icon}</span>
              <p className="text-slate-700">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_IXUmj1XFUT8ydvWbqoWJ9ImZffOsc0rHwsMHICO_E5F5dA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Apply for Internship
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
