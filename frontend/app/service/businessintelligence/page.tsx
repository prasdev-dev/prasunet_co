"use client";

import { motion } from "framer-motion";
import {
  FaChartPie,
  FaDatabase,
  FaRobot,
  FaUsers,
  FaChartBar,
  FaLightbulb,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function BusinessIntelligenceAnalytics() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero with Video */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="/servicesvideo/businessintelligencevideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Business Intelligence & Analytics
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Unlock the power of your data with advanced analytics, AI-driven
            insights, and interactive dashboards for smarter decision-making.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-700"
          >
            Get Data-Driven Insights
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Transforming Data Into Strategic Value
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            At Prasunet, our Business Intelligence and Analytics services help
            organizations harness raw data into meaningful, actionable insights.
            We combine AI, visualization, and predictive analytics to empower
            your business with foresight and precision.
          </p>
          <ul className="space-y-2 text-gray-800 list-disc list-inside">
            <li>Interactive dashboards and visualization</li>
            <li>Predictive and prescriptive analytics</li>
            <li>Data warehousing & governance</li>
            <li>AI-powered business forecasting</li>
          </ul>
        </div>
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Business Intelligence"
          className="order-1 md:order-2 rounded-2xl shadow-lg"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Analytics Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From dashboards to predictive analytics, we help you turn complex
            data into simple, actionable intelligence.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaChartPie size={28} />,
                title: "Data Visualization",
                desc: "Intuitive dashboards for quick and clear insights.",
              },
              {
                icon: <FaDatabase size={28} />,
                title: "Data Warehousing",
                desc: "Centralized, scalable, and secure data management.",
              },
              {
                icon: <FaRobot size={28} />,
                title: "AI & ML Models",
                desc: "Forecast outcomes with advanced predictive models.",
              },
              {
                icon: <FaUsers size={28} />,
                title: "Customer Analytics",
                desc: "Understand customer behavior and preferences.",
              },
              {
                icon: <FaChartBar size={28} />,
                title: "Performance Metrics",
                desc: "Measure KPIs and optimize business outcomes.",
              },
              {
                icon: <FaLightbulb size={28} />,
                title: "Strategic Insights",
                desc: "Data-driven recommendations for decision-makers.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Applications
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            BI & Analytics tailored to industries, delivering growth, efficiency
            and innovation.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Fraud detection, risk modeling, and real-time reporting.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Patient care analytics and clinical data insights.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Customer segmentation, sales optimization, and trends.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Predictive maintenance and supply chain efficiency.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border shadow hover:shadow-lg transition"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 text-left">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Success Stories with Data
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Banking Analytics Platform",
                img: "/servicesimages/online-banking.jpg",
                desc: "Developed BI dashboards for a leading bank, improving fraud detection and transaction monitoring.",
                bullets: [
                  "Reduced fraud losses by 40%",
                  "Real-time customer insights",
                  "Better risk compliance",
                ],
              },
              {
                title: "Healthcare Predictive Analytics",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Implemented AI-powered analytics for a hospital chain to improve patient outcomes.",
                bullets: [
                  "Faster diagnostics",
                  "Improved patient satisfaction",
                  "Operational cost savings",
                ],
              },
              {
                title: "Retail Demand Forecasting",
                img: "/servicesimages/retailerp.webp",
                desc: "Built predictive models to optimize inventory and forecast demand for a retail giant.",
                bullets: [
                  "Optimized supply chain",
                  "Reduced stock-outs by 30%",
                  "Increased sales by 20%",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl"
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
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
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Global BI & Analytics Impact</h2>
          <p className="text-xl mb-4">
            Delivering intelligent data solutions across 60+ countries,
            empowering businesses to lead with insights.
          </p>
          <p className="text-gray-300">
            Data is the new currency. We help you leverage it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Unlock Your Data Potential?
          </h2>
          <p className="text-lg mb-6">
            Partner with Prasunet for BI & Analytics solutions that transform
            complexity into clarity.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Request a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
