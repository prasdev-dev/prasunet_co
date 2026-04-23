"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaCogs,
  FaChartPie,
  FaUserCheck,
  FaClock,
  FaCloud,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function RoboticProcessAutomation() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="/servicesvideo/rpavideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-snug"
          >
            Robotic Process Automation (RPA)
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Automate repetitive tasks, reduce costs, and accelerate business
            outcomes with next-gen RPA solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* About RPA */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="RPA Solutions"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Transform Your Operations with RPA
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            RPA leverages intelligent bots to automate rule-based processes
            across various business functions, boosting productivity and
            eliminating human errors.
          </p>
          <ul className="space-y-3 text-gray-800 font-medium">
            <li>✔ End-to-end automation for critical workflows</li>
            <li>✔ Seamless integration with legacy and modern systems</li>
            <li>✔ Compliance-friendly and secure implementation</li>
            <li>✔ Scalable bots designed for enterprise agility</li>
          </ul>
        </div>
      </section>

      {/* RPA Capabilities */}
      <section className="py-20 bg-gradient-to-tr from-blue-50 to-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our RPA Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            From process discovery to bot deployment, we offer a complete suite
            of RPA services for optimized workflows.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <FaRobot size={32} />,
                title: "Bot Development",
                desc: "Custom bots to automate repetitive, rule-based processes quickly and securely.",
              },
              {
                icon: <FaCogs size={32} />,
                title: "Process Optimization",
                desc: "Analyze workflows to streamline processes before automation.",
              },
              {
                icon: <FaChartPie size={32} />,
                title: "Analytics & Reporting",
                desc: "Track performance metrics and ROI through advanced dashboards.",
              },
              {
                icon: <FaUserCheck size={32} />,
                title: "Human-in-the-Loop",
                desc: "Combine automation with human decision-making for accuracy.",
              },
              {
                icon: <FaClock size={32} />,
                title: "24/7 Operations",
                desc: "Deploy bots to run processes continuously with zero downtime.",
              },
              {
                icon: <FaCloud size={32} />,
                title: "Cloud RPA",
                desc: "Leverage scalable, cloud-native RPA platforms for flexibility.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            RPA Across Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We implement RPA solutions tailored for different industries to
            enhance efficiency and reduce costs.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Banking",
                img: "/servicesimages/finance.jpeg",
                text: "Automated KYC, fraud detection, and loan processing.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Streamline claims processing and patient data management.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Inventory automation and demand forecasting at scale.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Automated procurement and supply chain processes.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
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
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Real RPA Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Banking Process Automation",
                img: "/servicesimages/online-banking.jpg",
                desc: "Automated back-office operations for a leading bank, reducing processing time by 60%.",
                bullets: ["KYC automation", "Fraud detection", "Faster loan approvals"],
              },
              {
                title: "Healthcare Claim Automation",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Implemented bots to process insurance claims with zero errors.",
                bullets: ["Reduced claim cycle", "Improved compliance", "Operational efficiency"],
              },
              {
                title: "Retail Stock Management",
                img: "/servicesimages/retailerp.webp",
                desc: "Automated stock replenishment and reduced out-of-stock incidents by 40%.",
                bullets: ["AI-based forecasting", "Inventory tracking", "Cost optimization"],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow hover:shadow-xl"
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
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

      {/* Global Reach */}
      <section className="relative py-24">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/servicesvideo/globetech.mp4"
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Global RPA Expertise</h2>
          <p className="text-lg mb-4">
            Delivering intelligent automation solutions to businesses across 50+
            countries with proven expertise.
          </p>
          <p className="text-gray-300">
            Innovation-driven. Scalable. Future-ready automation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg mb-6">
            Get in touch with our RPA experts to design and deploy
            transformation-ready bots.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-200 transition"
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
