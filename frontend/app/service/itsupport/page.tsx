"use client";

import { motion } from "framer-motion";
import {
  FaTools,
  FaLifeRing,
  FaSyncAlt,
  FaUserShield,
  FaServer,
  FaClock,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ITSupportMaintenance() {
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
            src="/servicesvideo/itsupportvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            IT Support & Maintenance Services
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Keep your business running smoothly with reliable IT support,
            proactive monitoring, and system maintenance tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Reliable IT Support
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="IT Support & Maintenance"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Comprehensive IT Support for Uninterrupted Business Operations
          </h2>
          <p className="text-gray-700 mb-5">
            Our IT Support and Maintenance services ensure your systems remain
            secure, updated, and fully optimized. From 24/7 helpdesk support to
            proactive maintenance, we provide solutions that minimize downtime
            and enhance performance.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>24/7 Helpdesk & Remote Assistance</li>
            <li>Proactive Monitoring & Maintenance</li>
            <li>Patch Management & Security Updates</li>
            <li>Data Backup & Disaster Recovery Planning</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Support & Maintenance Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay ahead of IT issues with our round-the-clock support, advanced
            maintenance solutions, and performance optimization strategies.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaTools size={30} />,
                title: "System Maintenance",
                desc: "Ensure your IT infrastructure runs at peak performance with regular maintenance.",
              },
              {
                icon: <FaLifeRing size={30} />,
                title: "Helpdesk Support",
                desc: "24/7 technical assistance for quick issue resolution and minimal downtime.",
              },
              {
                icon: <FaSyncAlt size={30} />,
                title: "Software Updates",
                desc: "Keep systems secure and updated with the latest patches and enhancements.",
              },
              {
                icon: <FaUserShield size={30} />,
                title: "Cybersecurity Support",
                desc: "Protect your business with proactive security monitoring and threat management.",
              },
              {
                icon: <FaServer size={30} />,
                title: "Server Management",
                desc: "Comprehensive monitoring and optimization of servers and critical systems.",
              },
              {
                icon: <FaClock size={30} />,
                title: "Disaster Recovery",
                desc: "Backup and recovery solutions to keep your data safe during emergencies.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
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

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            IT Support Across Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our support solutions are tailored for businesses of all sizes and
            industries to ensure smooth operations.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Securing sensitive data and ensuring uptime for critical banking operations.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Maintaining compliance and data security for patient information.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Ensuring POS systems and e-commerce platforms run smoothly.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Supporting smart factories and connected systems for peak efficiency.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="h-40 w-full object-cover"
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
            Real-World Support Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "24/7 Banking IT Support",
                img: "/servicesimages/online-banking.jpg",
                desc: "Reduced downtime by 90% for a leading financial enterprise with proactive monitoring.",
                bullets: [
                  "Round-the-clock technical assistance",
                  "Automated patch management",
                  "Enhanced customer trust",
                ],
              },
              {
                title: "Healthcare System Optimization",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Improved system response time by 60% for a hospital chain.",
                bullets: [
                  "Proactive monitoring",
                  "Data backup and recovery",
                  "HIPAA-compliant solutions",
                ],
              },
              {
                title: "Retail Store IT Maintenance",
                img: "/servicesimages/retailerp.webp",
                desc: "Optimized POS and ERP systems for a nationwide retail chain.",
                bullets: [
                  "Continuous uptime monitoring",
                  "On-demand troubleshooting",
                  "Improved customer experience",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-xl"
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

      {/* Global Reach Video */}
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
          <h2 className="text-5xl font-bold mb-6">Trusted IT Support Worldwide</h2>
          <p className="text-xl mb-4">
            Providing dependable IT maintenance and support across 60+ countries.
          </p>
          <p className="text-gray-300">
            Global expertise. Local reliability. Always available.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Need Reliable IT Support & Maintenance?
          </h2>
          <p className="text-lg mb-6">
            Connect with our experts for seamless IT operations and zero
            downtime.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
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
