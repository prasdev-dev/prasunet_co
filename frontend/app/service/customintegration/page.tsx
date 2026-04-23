"use client";

import { motion } from "framer-motion";
import {
  FaCogs,
  FaPuzzlePiece,
  FaCloud,
  FaSync,
  FaProjectDiagram,
  FaDatabase
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function CustomSoftwareIntegration() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="/servicesvideo/customintegrationvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Custom Software Integration Solutions
          </motion.h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Unify your tech ecosystem with seamless integration. We help you
            connect software, platforms, and workflows for unmatched efficiency.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Custom Integration"
          className="rounded-xl shadow-2xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-5 text-blue-800">
            Connect. Automate. Accelerate.
          </h2>
          <p className="text-gray-700 mb-6">
            Our integration services eliminate silos by ensuring your software
            and systems work together smoothly. Whether it’s ERP, CRM, or
            third-party apps, we deliver robust integration that fuels
            productivity and reduces costs.
          </p>
          <ul className="space-y-3 text-gray-800 list-disc list-inside">
            <li>API Development & Integration</li>
            <li>Legacy System Modernization</li>
            <li>Cloud & On-Premise Integration</li>
            <li>Real-time Data Synchronization</li>
          </ul>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Integration Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bridge gaps between platforms with secure, scalable, and
            high-performance integrations tailored to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FaCogs size={32} />,
              title: "Custom API Development",
              desc: "Build and integrate APIs to enhance interoperability and performance."
            },
            {
              icon: <FaPuzzlePiece size={32} />,
              title: "Third-Party Integration",
              desc: "Seamlessly connect with CRMs, ERPs, and SaaS applications."
            },
            {
              icon: <FaCloud size={32} />,
              title: "Cloud Integration",
              desc: "Enable smooth migration and hybrid cloud connectivity."
            },
            {
              icon: <FaSync size={32} />,
              title: "Workflow Automation",
              desc: "Automate processes across multiple systems to save time."
            },
            {
              icon: <FaProjectDiagram size={32} />,
              title: "Enterprise System Integration",
              desc: "Unify enterprise apps for centralized control and better insights."
            },
            {
              icon: <FaDatabase size={32} />,
              title: "Data Integration & ETL",
              desc: "Consolidate data sources for accurate reporting and analytics."
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
            >
              <div className="text-blue-700 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Solutions for Every Industry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide integration services across multiple domains to drive
            growth and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Finance",
              img: "/servicesimages/finance.jpeg",
              text: "Integrating core banking systems with advanced analytics tools."
            },
            {
              name: "Healthcare",
              img: "/servicesimages/helthcare.jpeg",
              text: "Connecting patient data systems for improved care delivery."
            },
            {
              name: "Retail",
              img: "/servicesimages/retail.jpeg",
              text: "Building omnichannel integrations for seamless shopping."
            },
            {
              name: "Manufacturing",
              img: "/servicesimages/manufacturing.jpeg",
              text: "Streamlining production processes with connected systems."
            }
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
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Integration Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "ERP-CRM Synchronization",
                img: "/servicesimages/online-banking.jpg",
                desc: "Connected ERP with CRM for a global retailer to unify data and improve customer engagement.",
                bullets: [
                  "Improved data accuracy",
                  "Reduced manual workload",
                  "Better decision-making"
                ]
              },
              {
                title: "Healthcare Data Hub",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Integrated EHR and lab systems for a hospital group to enable real-time patient data sharing.",
                bullets: [
                  "Enhanced care coordination",
                  "Reduced patient wait time",
                  "Improved compliance"
                ]
              },
              {
                title: "Multi-Cloud Integration",
                img: "/servicesimages/retailerp.webp",
                desc: "Enabled seamless app performance across AWS and Azure for a manufacturing company.",
                bullets: [
                  "High system uptime",
                  "Improved scalability",
                  "Cost optimization"
                ]
              }
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

      {/* Global Video Banner */}
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
          <h2 className="text-5xl font-bold mb-4">Global Integration Experts</h2>
          <p className="text-xl mb-4">
            Delivering scalable integration solutions in over 65 countries with
            proven expertise.
          </p>
          <p className="text-gray-300">
            Seamless connections. Smarter operations. Global impact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Integrate Your Systems?
          </h2>
          <p className="text-lg mb-6">
            Let us help you achieve complete digital harmony with custom
            integrations.
          </p>
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
