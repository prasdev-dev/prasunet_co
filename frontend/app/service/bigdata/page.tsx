"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDatabase, FaChartBar, FaServer, FaShieldAlt, FaCogs, FaCloud } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function BigDataSolutions() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/servicesvideo/bigdatavideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-white mb-4 drop-shadow-md"
          >
            Big Data Solutions
          </motion.h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">
            Unlock the power of data with scalable, secure, and future-ready Big Data strategies.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Start Your Data Journey
          </a>
        </div>
      </section>

      {/* About Big Data */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Empowering Decisions Through Data</h2>
          <p className="text-gray-700 mb-5">
            Our Big Data services enable organizations to leverage massive datasets for actionable insights, innovation, and efficiency. From data collection to analytics, we deliver end-to-end solutions.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>✔ Data Engineering & ETL pipelines</li>
            <li>✔ Real-time Data Processing</li>
            <li>✔ Advanced Analytics & AI Integration</li>
            <li>✔ Cloud-based Big Data Platforms</li>
          </ul>
        </div>
        <Image
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Big Data Strategy"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Big Data Services */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Big Data Capabilities</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Delivering scalable solutions to collect, process, and analyze data for measurable business outcomes.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaDatabase size={32} />,
                title: "Data Engineering",
                desc: "Build robust pipelines for structured and unstructured data."
              },
              {
                icon: <FaChartBar size={32} />,
                title: "Data Analytics",
                desc: "Turn raw data into actionable insights using advanced analytics."
              },
              {
                icon: <FaServer size={32} />,
                title: "Data Warehousing",
                desc: "Design secure and scalable data storage solutions."
              },
              {
                icon: <FaShieldAlt size={32} />,
                title: "Data Security",
                desc: "Protect sensitive information with advanced security measures."
              },
              {
                icon: <FaCogs size={32} />,
                title: "AI & Machine Learning",
                desc: "Integrate AI models to predict trends and automate processes."
              },
              {
                icon: <FaCloud size={32} />,
                title: "Cloud Big Data",
                desc: "Leverage cloud platforms like AWS, Azure, and GCP for scalability."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Industry Applications</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Transform operations across sectors with data-driven strategies.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Finance", img: "/servicesimages/finance.jpeg", text: "Fraud detection, risk modeling, and customer insights." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Predictive analytics for patient care and diagnostics." },
              { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Personalized shopping experiences using customer data." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "Predictive maintenance and supply chain optimization." }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <Image
                  src={ind.img}
                  alt={ind.name}
                  width={400}
                  height={250}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-lg text-blue-800 mb-2">{ind.name}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Real-World Big Data Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "Retail Demand Forecasting",
                img: "/servicesimages/retailerp.webp",
                desc: "Implemented predictive analytics for inventory planning and reduced stock-outs by 40%.",
                bullets: ["Forecast accuracy", "Optimized inventory", "Revenue growth"]
              },
              {
                title: "Healthcare Predictive Analytics",
                img: "/servicesimages/healthcareai.jpg",
                desc: "AI-powered diagnostics reduced patient waiting time by 30%.",
                bullets: ["Early disease detection", "Faster treatment", "Improved patient care"]
              },
              {
                title: "Banking Fraud Detection",
                img: "/servicesimages/online-banking.jpg",
                desc: "Real-time fraud detection reduced fraudulent transactions by 60%.",
                bullets: ["Advanced anomaly detection", "Real-time alerts", "Increased trust"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-xl">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <Image
                    src={cs.img}
                    alt={cs.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">{cs.title}</h3>
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

      {/* Global Presence */}
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
          <h2 className="text-5xl font-bold mb-4">Big Data Expertise Worldwide</h2>
          <p className="text-xl mb-4">We deliver enterprise-grade Big Data solutions in 65+ countries.</p>
          <p className="text-gray-300">Driving global innovation with local expertise.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Harness Big Data?</h2>
          <p className="text-lg mb-6">Let&apos;s build powerful, scalable solutions that turn data into business growth.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
