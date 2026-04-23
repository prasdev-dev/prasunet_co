"use client";

import { motion } from "framer-motion";
import {
  FaCloud,
  FaServer,
  FaLock,
  FaCogs,
  FaDatabase,
  FaGlobe
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function CloudServices() {
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
          <source src="/servicesvideo/cloudservicesvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Cloud Services for Modern Enterprises
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Harness the power of the cloud to scale, innovate, and stay ahead in a fast-changing digital world.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-600 transition"
          >
            Start Your Cloud Journey
          </a>
        </div>
      </section>

      {/* About Cloud Services */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Cloud Strategy"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Transform Your Business with Cloud Innovation
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            At Prasunet, we enable businesses to migrate, modernize, and manage their workloads in the cloud with security, reliability, and cost-efficiency. Our experts help you leverage the right cloud platforms for faster innovation and reduced operational complexity.
          </p>
          <ul className="space-y-2 text-gray-800 list-disc list-inside">
            <li>Cloud migration planning and execution</li>
            <li>Scalable cloud-native application development</li>
            <li>Multi-cloud and hybrid infrastructure setup</li>
            <li>Advanced security and compliance solutions</li>
          </ul>
        </div>
      </section>

      {/* Cloud Services Offerings */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Cloud Capabilities</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From strategy to deployment, we deliver end-to-end cloud solutions tailored for agility, performance, and business growth.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <FaCloud size={28} />,
                title: "Cloud Strategy & Consulting",
                desc: "Align your business goals with a robust cloud roadmap for success."
              },
              {
                icon: <FaServer size={28} />,
                title: "Infrastructure as a Service",
                desc: "Flexible, cost-effective infrastructure to support your workloads."
              },
              {
                icon: <FaLock size={28} />,
                title: "Cloud Security",
                desc: "End-to-end security to safeguard data and ensure compliance."
              },
              {
                icon: <FaCogs size={28} />,
                title: "Cloud Automation",
                desc: "Optimize operations with automated cloud management solutions."
              },
              {
                icon: <FaDatabase size={28} />,
                title: "Data & Storage Solutions",
                desc: "Seamless data migration and secure cloud storage services."
              },
              {
                icon: <FaGlobe size={28} />,
                title: "Global Scalability",
                desc: "Expand globally with robust, scalable multi-cloud architecture."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-blue-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Cloud Solutions for Every Industry</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our expertise spans multiple industries, enabling organizations to achieve operational excellence through cloud adoption.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Finance", img: "/servicesimages/finance.jpeg", text: "Secure, compliant cloud platforms for resilient financial systems." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Empowering digital health with cloud-based patient solutions." },
              { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Omnichannel cloud strategies for retail transformation." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "Smart factory solutions powered by cloud analytics." }
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
              >
                <img src={industry.img} alt={industry.name} className="h-40 w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-blue-800 mb-1">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Real-World Cloud Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "Financial Cloud Migration",
                img: "/servicesimages/online-banking.jpg",
                desc: "Migrated legacy banking systems to cloud, reducing costs by 30%.",
                bullets: ["Cloud architecture design", "Risk & compliance checks", "Operational resilience"]
              },
              {
                title: "Healthcare Cloud Platform",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Deployed a secure cloud solution improving patient experience.",
                bullets: ["Data security", "Faster diagnosis", "Workflow optimization"]
              },
              {
                title: "Retail Cloud Optimization",
                img: "/servicesimages/retailerp.webp",
                desc: "Enabled scalable e-commerce platform with 99.99% uptime.",
                bullets: ["Multi-cloud strategy", "Cost optimization", "Enhanced CX"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl">
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

      {/* Global Presence Video */}
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
          <h2 className="text-5xl font-bold mb-6">Trusted Cloud Partner Worldwide</h2>
          <p className="text-xl mb-4">Delivering cloud excellence in 65+ countries, ensuring performance, security, and scalability for businesses globally.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Embrace the Cloud?</h2>
          <p className="text-lg mb-6">Partner with Prasunet to design, deploy, and scale your cloud solutions effectively.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-200 transition"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
