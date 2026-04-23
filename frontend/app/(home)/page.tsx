"use client";

import CareerSection from "@/components/home/careerS";
import ClientSection from "@/components/home/client";
import ContactForm from "@/components/home/Cont";
import Footer from "@/components/home/footer-section";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import InternshipSection from "@/components/home/Intern";
import FAQ from "@/components/home/faq";
import Project from "@/components/home/project";
import RegisterSection from "@/components/home/register";
import Services from "@/components/home/Services";
import Stats from "@/components/home/stat";
import Testimonials from "@/components/home/testimonail";
import Industries from "@/components/home/Industries";
import Message from "@/components/home/message";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Search,
  BarChart,
  Code,
  ShieldCheck,
  Clock3,
  Handshake,
} from "lucide-react";

export default function Home() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Assessment",
      desc: "Analyze goals, current systems, and delivery risks.",
      icon: <Search size={28} />,
    },
    {
      num: "02",
      title: "Architecture & Roadmap",
      desc: "Define scalable solutions, milestones, and outcomes.",
      icon: <BarChart size={28} />,
    },
    {
      num: "03",
      title: "Engineering & Delivery",
      desc: "Build secure, reliable software with agile execution.",
      icon: <Code size={28} />,
    },
    {
      num: "04",
      title: "Optimization & Growth",
      desc: "Continuously improve performance, resilience, and scale.",
      icon: <TrendingUp size={28} />,
    },
  ];
  return (
    <div>
      <Navbar />
      <HeroSection />

     {/* WHO WE ARE */}
      <section className="relative w-full py-20 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          {/* Left Image with Overlay */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-[320px] h-[400px] md:w-[420px] md:h-[500px] rounded-2xl shadow-xl overflow-hidden group">
              <Image
                src="/whoweare1.png"
                alt="Professional Team"
                fill
                className="rounded-2xl group-hover:scale-105 transition-transform duration-500 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3CAF58]/80 to-transparent mix-blend-multiply"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold uppercase text-sm tracking-wider">
                  Strategic & Results-Driven
                </p>
                <h3 className="text-2xl font-bold">Built for Business Impact</h3>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
          
            <p className="text-sm font-semibold uppercase tracking-wider text-[#3CAF58]">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-2">
              A Professional IT Partner for <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              We help organizations modernize operations with secure, scalable,
              and outcome-focused technology solutions. Our cross-functional
              teams combine consulting, engineering, and data expertise to solve
              complex business challenges.
            </p>

            {/* Icon Bullet Points */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <ShieldCheck />, text: "Security-First Delivery" },
                { icon: <Clock3 />, text: "On-Time Project Execution" },
                { icon: <Handshake />, text: "Transparent Collaboration" },
                { icon: <Globe />, text: "Global Delivery Capability" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">{item.icon}</span>
                  <p className="text-gray-800 font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 px-8 py-3 bg-[#3CAF58] text-white rounded-xl shadow-lg hover:bg-green-700 transition"
              >
                Learn About Our Company →
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-[#3CAF58] font-semibold uppercase">
            What We Do
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-2"
          >
            End-to-End Technology Services <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              for Sustainable Business Growth
            </span>
          </motion.h2>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            We design and deliver enterprise-grade software, cloud, and data
            solutions that improve efficiency, reduce risk, and create measurable
            value. Our process ensures every initiative aligns with strategic
            business goals.
          </p>

          {/* Workflow Cards */}
          <div className="mt-12 grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 transition"
              >
                <div className="flex justify-center text-green-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-5xl font-extrabold text-gray-200">
                  {step.num}
                </h3>
                <h4 className="mt-2 text-lg font-bold text-gray-900">
                  {step.title}
                </h4>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Sections */}
      <Services />
      <Message />
      <Stats />
      <Project />
      <Industries />
      <RegisterSection />
      <InternshipSection />
     
      <CareerSection />
      
      <ClientSection />
      <Testimonials />
      
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
