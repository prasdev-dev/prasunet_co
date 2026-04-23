"use client";

import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaWifi,
  FaLock,
  FaCloud,
  FaCogs,
  FaIndustry,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function IoTServices() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero with Video */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="/servicesvideo/iotvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Internet of Things (IoT) Solutions
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-6">
            Connecting devices, data, and intelligence to build a smarter, more
            efficient future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition"
          >
            Explore IoT with Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/servicesimages/softwaredevelopmentimg1.jpg"
            alt="IoT Solutions"
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Smarter Connectivity with IoT
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Our IoT solutions empower organizations to connect physical devices
            with digital intelligence. From smart homes to industrial IoT, we
            design, deploy, and manage ecosystems that transform operations and
            create new business value.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>End-to-end IoT architecture design</li>
            <li>Connected device integration</li>
            <li>IoT data management & analytics</li>
            <li>Security-first IoT ecosystem development</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            IoT Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore how our IoT expertise enables enterprises to harness the
            power of connected devices and intelligent systems.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaMicrochip size={30} />,
                title: "Smart Devices",
                desc: "Build and connect IoT-enabled devices with embedded intelligence.",
              },
              {
                icon: <FaWifi size={30} />,
                title: "Connectivity Solutions",
                desc: "Seamless integration of wireless protocols and IoT networks.",
              },
              {
                icon: <FaLock size={30} />,
                title: "IoT Security",
                desc: "Secure data, devices, and communications across IoT systems.",
              },
              {
                icon: <FaCloud size={30} />,
                title: "Cloud Integration",
                desc: "Enable real-time data storage, analytics, and decision-making.",
              },
              {
                icon: <FaCogs size={30} />,
                title: "Automation",
                desc: "Enhance productivity through connected automation workflows.",
              },
              {
                icon: <FaIndustry size={30} />,
                title: "Industrial IoT",
                desc: "Smart factories with predictive maintenance and optimized operations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
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
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            IoT Across Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From connected healthcare to smart cities, our IoT expertise spans
            multiple industries, driving innovation and efficiency.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Remote monitoring, wearables, and connected care devices.",
              },
              {
                name: "Smart Cities",
                img: "/servicesimages/retail.jpeg",
                text: "IoT-enabled infrastructure for safety, energy, and mobility.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Predictive maintenance and intelligent production systems.",
              },
              {
                name: "Agriculture",
                img: "/servicesimages/finance.jpeg",
                text: "Smart farming with IoT sensors, drones, and real-time data.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
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
            IoT in Action
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Smart Healthcare System",
                img: "/servicesimages/healthcareai.jpg",
                desc: "IoT-powered remote monitoring increased patient care efficiency.",
                bullets: [
                  "Wearable integration",
                  "24/7 patient data monitoring",
                  "Improved health outcomes",
                ],
              },
              {
                title: "Connected Manufacturing",
                img: "/servicesimages/retailerp.webp",
                desc: "Deployed IoT sensors for predictive maintenance, reducing downtime.",
                bullets: [
                  "Real-time sensor tracking",
                  "Reduced operational costs",
                  "Enhanced production uptime",
                ],
              },
              {
                title: "Smart Agriculture",
                img: "/servicesimages/online-banking.jpg",
                desc: "IoT irrigation system optimized water usage and crop yield.",
                bullets: [
                  "Sensor-based irrigation",
                  "Higher crop yield",
                  "Sustainable farming practices",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
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
          <h2 className="text-5xl font-bold mb-6">IoT, Everywhere</h2>
          <p className="text-xl mb-4">
            Delivering connected solutions across 60+ countries with innovation
            and trust.
          </p>
          <p className="text-gray-300">
            Global connectivity. Local solutions. Smarter tomorrow.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Unlock IoT Potential?
          </h2>
          <p className="text-lg mb-6">
            Partner with us to design, build, and scale IoT solutions that
            transform your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
