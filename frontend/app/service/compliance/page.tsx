"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaRegFileAlt, FaUserShield, FaSearch, FaBalanceScale } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ITComplianceRiskManagement() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[550px] flex items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/compliancevideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            IT Compliance & Risk Management
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Secure your digital future with proactive risk strategies and robust compliance frameworks.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Risk Management"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-5 text-blue-800">Building a Secure & Compliant IT Environment</h2>
          <p className="text-gray-700 mb-4">
            At Prasunet, we ensure that your organization remains compliant with industry standards while mitigating IT-related risks. Our services empower businesses to identify vulnerabilities, enforce security measures, and establish compliance policies that protect both reputation and operations.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>✔ Compliance audits and assessments</li>
            <li>✔ Data privacy and protection frameworks</li>
            <li>✔ Cyber risk identification & mitigation plans</li>
            <li>✔ Regulatory adherence for global standards</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Compliance & Risk Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine technology expertise and regulatory insights to deliver end-to-end risk and compliance solutions for enterprises.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt size={32} />,
                title: "Regulatory Compliance",
                desc: "Stay aligned with global standards like GDPR, HIPAA, and ISO."
              },
              {
                icon: <FaLock size={32} />,
                title: "Data Security",
                desc: "Protect sensitive data with encryption and robust access controls."
              },
              {
                icon: <FaRegFileAlt size={32} />,
                title: "Compliance Audits",
                desc: "Conduct internal and external audits to ensure adherence."
              },
              {
                icon: <FaUserShield size={32} />,
                title: "Risk Assessment",
                desc: "Identify, assess, and prioritize IT risks to prevent breaches."
              },
              {
                icon: <FaSearch size={32} />,
                title: "Vulnerability Scanning",
                desc: "Detect system weaknesses through advanced scanning tools."
              },
              {
                icon: <FaBalanceScale size={32} />,
                title: "Governance Framework",
                desc: "Define governance models for ethical and secure IT practices."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
              >
                <div className="text-blue-700 mb-4">{service.icon}</div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Serving Multiple Sectors</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Our compliance and risk strategies are customized for diverse industries, ensuring sector-specific protection.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Banking & Finance", img: "/servicesimages/finance.jpeg", text: "Secure transactions and regulatory adherence for global finance." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "HIPAA compliance and data security for patient trust." },
              { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Protect customer data and meet global e-commerce standards." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "Secure smart factory networks and IoT compliance." }
            ].map((sector, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                <img src={sector.img} alt={sector.name} className="h-40 w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-blue-800 mb-1">{sector.name}</h3>
                  <p className="text-gray-600 text-sm">{sector.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Success Stories in Compliance & Risk</h2>
          <div className="space-y-10">
            {[
              {
                title: "Financial Data Protection",
                img: "/servicesimages/online-banking.jpg",
                desc: "Implemented advanced encryption and GDPR compliance for a global bank.",
                bullets: ["Achieved full compliance", "Reduced breach risk by 40%", "Improved customer trust"]
              },
              {
                title: "Healthcare Privacy Compliance",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Ensured HIPAA compliance for a leading hospital network.",
                bullets: ["Patient data protection", "Minimized compliance gaps", "Boosted security audits"]
              },
              {
                title: "Retail Risk Mitigation",
                img: "/servicesimages/retailerp.webp",
                desc: "Created a governance framework for omnichannel retail operations.",
                bullets: ["Data governance policies", "Reduced fraud risks", "Enhanced legal compliance"]
              }
            ].map((caseStudy, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={caseStudy.img} alt={caseStudy.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-700 mb-4">{caseStudy.desc}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    {caseStudy.bullets.map((b, i) => <li key={i}>{b}</li>)}
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
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Global Compliance, Local Impact</h2>
          <p className="text-xl mb-4">Delivering risk and compliance solutions to enterprises in 60+ countries.</p>
          <p className="text-gray-300">Protect your business. Stay compliant. Reduce risks.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Secure Your IT Ecosystem?</h2>
          <p className="text-lg mb-6">Partner with Prasunet to build compliance-first, risk-resilient IT strategies.</p>
          <a
            href="/contact"
            className="bg-white text-blue-800 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
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
