"use client";

import { motion } from "framer-motion";
import { FaCogs, FaChartPie, FaUsers, FaHandshake, FaDatabase, FaMobileAlt } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ERPCrmSolutions() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Video */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/erpcrmvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            ERP & CRM Solutions
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6 text-gray-200">
            Streamline operations, boost customer relationships, and empower your business with next-gen ERP & CRM systems.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Get a Free Demo
          </a>
        </div>
      </section>

      {/* About ERP & CRM */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="ERP and CRM"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Transform Your Business with ERP & CRM</h2>
          <p className="text-gray-700 mb-4">
            Our ERP & CRM solutions unify your core business processes and customer engagement strategies, providing actionable insights and enhanced productivity.
          </p>
          <ul className="space-y-3 text-gray-800 list-disc list-inside">
            <li>Comprehensive resource planning tools</li>
            <li>Seamless customer relationship management</li>
            <li>Real-time analytics and reporting</li>
            <li>Integration with existing applications</li>
          </ul>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Core Features of Our Solutions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From inventory to customer experience, our ERP & CRM systems are designed to scale and adapt to your business needs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FaCogs size={28} />,
              title: "Process Automation",
              desc: "Automate repetitive tasks and improve overall efficiency."
            },
            {
              icon: <FaChartPie size={28} />,
              title: "Advanced Analytics",
              desc: "Gain actionable insights with real-time dashboards and reports."
            },
            {
              icon: <FaUsers size={28} />,
              title: "Customer Management",
              desc: "Track interactions and build stronger customer relationships."
            },
            {
              icon: <FaHandshake size={28} />,
              title: "Sales & Service Integration",
              desc: "Unify sales and support workflows for better customer experience."
            },
            {
              icon: <FaDatabase size={28} />,
              title: "Centralized Data",
              desc: "Secure and unified database for all departments."
            },
            {
              icon: <FaMobileAlt size={28} />,
              title: "Mobile Access",
              desc: "Stay connected with mobile-friendly ERP & CRM tools."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 hover:bg-blue-50 p-6 rounded-xl shadow-md transition-all"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Industry Applications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored ERP & CRM systems for diverse sectors to enhance productivity and growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Inventory and customer experience optimization." },
            { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Patient data and resource management simplified." },
            { name: "Finance", img: "/servicesimages/finance.jpeg", text: "Real-time analytics and compliance management." },
            { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "Production planning and vendor coordination." }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
              <div className="p-4 text-left">
                <h3 className="font-semibold text-lg text-blue-800">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "ERP for Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                desc: "Optimized production planning and supply chain with our custom ERP solution.",
                bullets: ["Integrated planning", "Reduced costs by 20%", "Improved delivery timelines"]
              },
              {
                title: "CRM for Retail Chains",
                img: "/servicesimages/retailerp.webp",
                desc: "Enhanced customer engagement and loyalty through our CRM system.",
                bullets: ["Personalized marketing", "Boosted retention by 30%", "Real-time analytics"]
              },
              {
                title: "Healthcare ERP",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Digitized hospital operations for improved patient outcomes.",
                bullets: ["Faster data access", "Improved resource allocation", "Enhanced patient experience"]
              }
            ].map((caseItem, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-blue-50 rounded-xl overflow-hidden shadow">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={caseItem.img} alt={caseItem.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3">{caseItem.title}</h3>
                  <p className="text-gray-700 mb-4">{caseItem.desc}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    {caseItem.bullets.map((b, i) => (
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
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Globally Trusted Solutions</h2>
          <p className="text-lg mb-4">ERP & CRM systems designed for businesses in 60+ countries.</p>
          <p className="text-gray-300">Scalable. Secure. Future-ready.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Upgrade Your Business?</h2>
          <p className="text-lg mb-6">Book a free consultation and discover how our ERP & CRM can transform your operations.</p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Schedule Your Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
