"use client";
import { motion } from "framer-motion";
import { FaMicrochip, FaCogs, FaMicrophone, FaRobot, FaWifi, FaShieldAlt } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function EmbeddedSystemDevelopment() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/embeddedvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Embedded System Development
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Building intelligent, reliable, and scalable embedded solutions for the future of connected devices and IoT ecosystems.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-700 transition"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Embedded Systems"
          className="rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
            Intelligent Embedded Solutions for Modern Applications
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Our embedded system development services cover everything from hardware design to firmware programming, delivering robust and efficient solutions for automotive, industrial, IoT, and smart devices.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>✔ Embedded software & firmware development</li>
            <li>✔ Real-time operating systems (RTOS) integration</li>
            <li>✔ Microcontroller & microprocessor programming</li>
            <li>✔ IoT device development & connectivity</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Our Core Embedded Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From concept to deployment, we provide a complete spectrum of embedded development services ensuring performance, reliability, and security.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { icon: <FaMicrochip size={30} />, title: "Hardware Design", desc: "Custom hardware and PCB design for embedded systems." },
              { icon: <FaCogs size={30} />, title: "Firmware Development", desc: "Low-level coding for microcontrollers and sensors." },
              { icon: <FaWifi size={30} />, title: "IoT Connectivity", desc: "Enable devices to communicate securely and efficiently." },
              { icon: <FaShieldAlt size={30} />, title: "Security Integration", desc: "Robust protection for embedded systems and data." },
              { icon: <FaMicrophone size={30} />, title: "Voice & AI Features", desc: "Integrating intelligent and voice-enabled capabilities." },
              { icon: <FaRobot size={30} />, title: "Automation Systems", desc: "Embedded solutions for robotics and smart automation." }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition duration-300"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Industries We Serve</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Our embedded solutions power mission-critical systems across industries, ensuring innovation, safety, and scalability.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Automotive", img: "/servicesimages/automotive.jpg", text: "Advanced embedded solutions for vehicles and EV systems." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Embedded devices for medical diagnostics and monitoring." },
              { name: "Industrial IoT", img: "/servicesimages/manufacturing.jpeg", text: "Smart factory systems and real-time control solutions." },
              { name: "Consumer Electronics", img: "/servicesimages/retail.jpeg", text: "Next-gen devices for a connected lifestyle." }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300">
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

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Embedded Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "IoT-Based Smart Home",
                img: "/servicesimages/online-banking.jpg",
                desc: "Developed a scalable home automation solution with real-time monitoring.",
                bullets: ["Low-power IoT devices", "Secure connectivity", "Mobile app integration"]
              },
              {
                title: "Medical Device Firmware",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Engineered firmware for diagnostic equipment ensuring precision and compliance.",
                bullets: ["ISO-certified development", "Real-time data logging", "Cloud sync features"]
              },
              {
                title: "Industrial Robotics System",
                img: "/servicesimages/retailerp.webp",
                desc: "Created embedded controllers for automated production lines.",
                bullets: ["High-speed control loops", "Reliable communication protocols", "Predictive maintenance integration"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg">
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
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Delivering Embedded Innovation Worldwide</h2>
          <p className="text-xl mb-4">Our solutions power devices in 60+ countries, enabling connectivity, intelligence, and automation globally.</p>
          <p className="text-gray-300">Precision engineering. Global impact. Future-ready systems.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Intelligent Embedded Systems?</h2>
          <p className="text-lg mb-6">Partner with us for robust, scalable, and secure embedded development tailored to your needs.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
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
