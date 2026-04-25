"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Globe2, Users } from "lucide-react";

const CareerSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-slate-100 via-white to-slate-50 px-6 md:px-16 py-14 md:py-16 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
      <div className="absolute top-[-100px] right-[-120px] w-[280px] h-[280px] bg-emerald-300 rounded-full opacity-10 blur-3xl z-0"></div>
      <div className="absolute bottom-[-80px] left-[-80px] w-[240px] h-[240px] bg-indigo-300 rounded-full opacity-10 blur-3xl z-0"></div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-xl text-left space-y-6"
      >
        <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold">
          Careers
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Build Your Career with <span className="text-emerald-600">PRASUNET</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Join a high-performance team where innovation, collaboration, and
          continuous learning drive meaningful digital transformation outcomes.
        </p>
        <p className="text-md text-slate-600 leading-relaxed">
          Whether you are an experienced professional or an early-career talent,
          you will work on industry-grade projects, modern technology stacks,
          and solutions that create measurable business impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-slate-200 bg-white/85 p-3 text-slate-700 text-sm shadow-sm">
            <Users className="w-4 h-4 text-emerald-600 mb-2" />
            Collaborative Teams
          </div>
          <div className="rounded-xl border border-slate-200 bg-white/85 p-3 text-slate-700 text-sm shadow-sm">
            <BriefcaseBusiness className="w-4 h-4 text-emerald-600 mb-2" />
            Real Client Projects
          </div>
          <div className="rounded-xl border border-slate-200 bg-white/85 p-3 text-slate-700 text-sm shadow-sm">
            <Globe2 className="w-4 h-4 text-emerald-600 mb-2" />
            Global Exposure
          </div>
        </div>

        <button
          onClick={() => router.push("/career")}
          className="mt-2 flex items-center gap-2 px-8 py-3 text-base md:text-lg font-semibold bg-emerald-500 text-white rounded-xl shadow-md hover:bg-emerald-600 hover:shadow-lg transition duration-300"
        >
          Explore Career Opportunities <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full md:w-1/2 mt-8 md:mt-0 z-10 overflow-hidden"
      >
        <motion.div 
          className="relative w-[500px] h-[350px] md:w-[700px] md:h-[450px]"
          animate={{ x: [-200, 0, -200] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/careerpage.png"
            alt="Career at PRASUNET"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CareerSection;
