"use client";

import { motion } from "framer-motion";
import {
  FaCloud,
  FaCogs,
  FaRecycle,
  FaLock,
  FaRocket,
  FaDatabase,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function LegacySystemModernisation() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
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
            src="/servicesvideo/legacyvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Legacy System Modernisation
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Unlock agility and innovation by transforming outdated systems into
            future-ready, cloud-enabled platforms.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Begin Your Modernisation Journey
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Transform Legacy into Competitive Advantage
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Legacy systems often hold critical business processes but limit
            innovation and scalability. At Prasunet, we specialize in
            re-engineering, migrating, and integrating legacy applications with
            cutting-edge technologies to enhance performance, security, and
            agility.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Cloud migration & platform re-engineering</li>
            <li>Microservices architecture adoption</li>
            <li>System performance optimization</li>
            <li>Security and compliance uplift</li>
          </ul>
        </div>
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Legacy Modernisation"
          className="order-1 md:order-2 rounded-2xl shadow-lg"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-tr from-blue-50 to-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Modernisation Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine engineering excellence with modernization strategies to
            make legacy applications scalable, secure, and cloud-ready.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaCloud size={30} />,
                title: "Cloud Enablement",
                desc: "Migrate your legacy workloads to cloud-native platforms with zero disruption.",
              },
              {
                icon: <FaCogs size={30} />,
                title: "Re-engineering",
                desc: "Revamp outdated applications with modern frameworks and architectures.",
              },
              {
                icon: <FaRecycle size={30} />,
                title: "System Integration",
                desc: "Seamlessly integrate old systems with modern digital ecosystems.",
              },
              {
                icon: <FaLock size={30} />,
                title: "Enhanced Security",
                desc: "Strengthen compliance and protect sensitive data with advanced security layers.",
              },
              {
                icon: <FaRocket size={30} />,
                title: "Agility & Performance",
                desc: "Improve responsiveness and scalability to meet evolving market demands.",
              },
              {
                icon: <FaDatabase size={30} />,
                title: "Data Modernisation",
                desc: "Migrate, clean, and optimize databases for analytics and cloud-readiness.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl border shadow hover:shadow-2xl transition-all"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Modernisation Across Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We empower organizations across industries to replace obsolete IT
            with modern, scalable, and intelligent systems.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Banking",
                img: "/servicesimages/finance.jpeg",
                text: "Migrate from mainframe systems to secure cloud-based banking platforms.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Upgrade hospital systems for interoperability and digital health services.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Transform POS and ERP systems for seamless customer experiences.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Integrate IoT-driven smart factory solutions with legacy production systems.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden border shadow hover:shadow-lg transition"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-blue-800 mb-1">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Transformation in Action
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Mainframe to Cloud Migration",
                img: "/servicesimages/online-banking.jpg",
                desc: "A global bank transitioned from outdated mainframes to cloud-native solutions, cutting costs by 40%.",
                bullets: [
                  "Reduced infrastructure overhead",
                  "Enhanced compliance",
                  "Improved scalability",
                ],
              },
              {
                title: "Digital Healthcare Platform",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Modernised patient record systems with cloud-native EHR solutions for improved care.",
                bullets: [
                  "Faster patient onboarding",
                  "Interoperable health systems",
                  "AI-enabled diagnostics",
                ],
              },
              {
                title: "Retail ERP Overhaul",
                img: "/servicesimages/retailerp.webp",
                desc: "Migrated ERP to cloud, driving a 60% improvement in operational efficiency.",
                bullets: [
                  "Real-time data visibility",
                  "Optimized supply chain",
                  "Improved customer engagement",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden border shadow hover:shadow-xl"
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">
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

      {/* Global Reach Video Section */}
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
          <h2 className="text-5xl font-bold mb-6">Global Modernisation Partner</h2>
          <p className="text-xl mb-4">
            Helping enterprises in 60+ countries modernise legacy systems with
            innovation, speed, and security.
          </p>
          <p className="text-gray-300">
            Future-proof platforms. Smarter businesses. Global impact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Modernise Your Legacy Systems?
          </h2>
          <p className="text-lg mb-6">
            Partner with Prasunet to migrate, re-engineer, and optimise your IT
            for the future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-200 transition"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
