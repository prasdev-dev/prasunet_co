"use client";

import { motion } from "framer-motion";
import { FaDatabase, FaChartBar, FaLock, FaCogs, FaCloud, FaProjectDiagram } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function DataServices() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Video */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/dataservicesvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Data Services & Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Empower your business with data-driven strategies, advanced analytics, and cloud-based data solutions for the future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Explore Data Services
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Data Services"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Transform Data into Business Value</h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, we help organizations unlock the true power of their data. From data engineering to predictive analytics, our solutions ensure seamless integration, security, and actionable insights.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            <li>Data Strategy & Governance</li>
            <li>Big Data Architecture & Engineering</li>
            <li>Cloud Data Migration & Optimization</li>
            <li>Advanced Analytics & AI-driven Insights</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Data Capabilities</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive data services designed to meet your business goals with precision and scalability.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaDatabase size={30} />,
                title: "Data Engineering",
                desc: "Build and manage robust data pipelines for structured and unstructured data."
              },
              {
                icon: <FaChartBar size={30} />,
                title: "Data Analytics",
                desc: "Transform raw data into actionable insights through advanced analytics."
              },
              {
                icon: <FaLock size={30} />,
                title: "Data Security",
                desc: "Ensure compliance and safeguard your data assets against cyber threats."
              },
              {
                icon: <FaCogs size={30} />,
                title: "AI & ML Integration",
                desc: "Harness predictive power with machine learning and AI-driven solutions."
              },
              {
                icon: <FaCloud size={30} />,
                title: "Cloud Data Solutions",
                desc: "Seamlessly migrate and optimize your data infrastructure on the cloud."
              },
              {
                icon: <FaProjectDiagram size={30} />,
                title: "Data Strategy",
                desc: "Align your data initiatives with business objectives for measurable impact."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Industry-Specific Data Solutions</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our tailored data services empower businesses across diverse sectors to achieve data-driven excellence.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Finance", img: "/servicesimages/finance.jpeg", text: "Advanced data solutions for fraud detection, risk analysis, and compliance." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Improving patient outcomes with predictive analytics and health data integration." },
              { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Enhance customer experience with personalized, data-driven strategies." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "Optimize operations with real-time analytics and IoT-driven insights." }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img src={ind.img} alt={ind.name} className="h-40 w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-blue-800 mb-1">{ind.name}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "Data Lake Implementation",
                img: "/servicesimages/online-banking.jpg",
                desc: "Created a centralized data lake for a finance giant enabling 360° data visibility.",
                bullets: ["Reduced data silos", "Enhanced reporting speed", "Improved compliance"]
              },
              {
                title: "Healthcare Data Modernization",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Migrated hospital records to cloud with HIPAA compliance for faster diagnostics.",
                bullets: ["Secure cloud migration", "Real-time analytics", "Improved patient care"]
              },
              {
                title: "Retail Data Intelligence",
                img: "/servicesimages/retailerp.webp",
                desc: "Implemented predictive analytics for personalized retail experiences.",
                bullets: ["Increased customer retention", "Automated demand forecasting", "Boosted revenue by 40%"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-lg">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">{cs.title}</h3>
                  <p className="text-gray-700 mb-4">{cs.desc}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    {cs.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Video */}
      <section className="relative py-24">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/servicesvideo/globetech.mp4"
        ></video>
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Data Services with Global Reach</h2>
          <p className="text-xl mb-4">Delivering world-class data solutions to businesses in 65+ countries, ensuring local relevance with global scalability.</p>
          <p className="text-gray-300">Innovation. Trust. Transformation through Data.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Unlock the Power of Your Data?</h2>
          <p className="text-lg mb-6">Partner with Prasunet to turn your data into actionable intelligence.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
