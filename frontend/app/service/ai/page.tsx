"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaCloud,
  FaDatabase,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import Image from "next/image";

export default function AIMLConsulting() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[600px] flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/servicesvideo/aivideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            AI & Machine Learning Consulting
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Empower your business with intelligent solutions. From predictive
            analytics to generative AI, we help you harness the power of data.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* About AI & ML Consulting */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="AI Consulting"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-5">
            Building Intelligent Solutions for the Future
          </h2>
          <p className="text-gray-700 mb-4">
            Our AI & ML consulting services empower businesses to integrate
            data-driven intelligence into operations. Whether it&apos;s
            automation, predictive modeling, or deep learning, we help you
            innovate faster.
          </p>
          <ul className="space-y-2 text-gray-800 list-disc list-inside">
            <li>AI-driven automation strategy</li>
            <li>Predictive analytics & forecasting models</li>
            <li>Natural Language Processing (NLP) solutions</li>
            <li>Machine learning model development & deployment</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our AI & ML Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Transform your business with advanced AI & machine learning
            solutions tailored to your needs.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBrain size={32} />,
                title: "AI Strategy & Roadmap",
                desc: "Develop a robust AI strategy aligned with business goals.",
              },
              {
                icon: <FaRobot size={32} />,
                title: "Automation & Robotics",
                desc: "Intelligent automation to streamline workflows.",
              },
              {
                icon: <FaCloud size={32} />,
                title: "AI Cloud Solutions",
                desc: "Deploy AI models in scalable cloud environments.",
              },
              {
                icon: <FaDatabase size={32} />,
                title: "Data Engineering",
                desc: "Build secure, high-performance data pipelines.",
              },
              {
                icon: <FaProjectDiagram size={32} />,
                title: "Model Development",
                desc: "Design, train & deploy ML models for real-world impact.",
              },
              {
                icon: <FaChartLine size={32} />,
                title: "Predictive Analytics",
                desc: "Leverage data to forecast trends & optimize decisions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            AI in Every Industry
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Our AI-driven strategies enable businesses across multiple sectors
            to innovate and grow.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "AI-powered diagnostics & personalized treatment plans.",
              },
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Fraud detection & intelligent financial forecasting.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "AI-driven recommendation systems & smart analytics.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Predictive maintenance & process optimization.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <Image
                  src={ind.img}
                  alt={ind.name}
                  width={400}
                  height={150}
                  className="h-36 w-full object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-lg text-blue-700 mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{ind.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            AI Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Predictive Analytics in Finance",
                img: "/servicesimages/online-banking.jpg",
                desc: "Helped a bank implement AI-driven risk models, reducing fraud by 40%.",
                bullets: [
                  "Real-time risk scoring",
                  "Automated decision-making",
                  "Cost savings",
                ],
              },
              {
                title: "AI for Healthcare Diagnostics",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Deployed machine learning to speed up medical imaging analysis.",
                bullets: [
                  "95% accurate diagnostics",
                  "Faster patient treatment",
                  "Reduced manual work",
                ],
              },
              {
                title: "Retail Recommendation Engine",
                img: "/servicesimages/retailerp.webp",
                desc: "Enabled a retail chain to boost sales by 30% with personalized offers.",
                bullets: [
                  "Customer segmentation",
                  "Smart product recommendations",
                  "Increased engagement",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl"
              >
                <div className="md:w-1/2 h-64">
                  <Image
                    src={cs.img}
                    alt={cs.title}
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{cs.desc}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    {cs.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Video Section */}
      <section className="relative py-24">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/servicesvideo/globetech.mp4"
        ></video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-4">AI Solutions, Trusted Globally</h2>
          <p className="text-xl mb-4">
            Delivering cutting-edge AI strategies across 60+ countries for
            businesses of all sizes.
          </p>
          <p className="text-gray-300">
            Scalable, secure, and future-proof AI consulting.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-3">Ready to Embrace AI?</h2>
          <p className="text-lg mb-6">
            Let&apos;s collaborate to build intelligent solutions for your business.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book a Free AI Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
