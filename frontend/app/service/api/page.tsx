"use client";

import { motion } from "framer-motion";
import { FaCode, FaCloud, FaShieldAlt, FaDatabase, FaSyncAlt, FaPuzzlePiece } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function APIDevelopmentServices() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/apivideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            API Development Services
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Build scalable, secure, and high-performing APIs to connect systems and power your digital ecosystem.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
          >
            Start Your API Journey
          </a>
        </div>
      </section>

      {/* About API Services */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="API Development"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Robust APIs for Modern Digital Platforms</h2>
          <p className="text-gray-700 mb-5">
            Our API development solutions empower businesses to seamlessly integrate applications, improve interoperability, and enable innovative digital products. From RESTful services to GraphQL, we ensure performance, security, and scalability.
          </p>
          <ul className="space-y-3 text-gray-800 list-disc list-inside">
            <li>Custom API design and architecture</li>
            <li>REST, SOAP & GraphQL API development</li>
            <li>API integration for third-party services</li>
            <li>Enterprise-grade API security and compliance</li>
          </ul>
        </div>
      </section>

      {/* API Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our API Expertise</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive API solutions designed to accelerate your digital transformation and enable seamless connectivity across platforms.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaCode size={30} />,
                title: "Custom API Development",
                desc: "Tailored APIs designed for your unique business needs."
              },
              {
                icon: <FaCloud size={30} />,
                title: "Cloud API Solutions",
                desc: "Connect applications with cloud-native APIs for scalability."
              },
              {
                icon: <FaShieldAlt size={30} />,
                title: "API Security",
                desc: "Implement OAuth, JWT, and encryption for secure access."
              },
              {
                icon: <FaDatabase size={30} />,
                title: "Database Integration",
                desc: "Seamless APIs for real-time data exchange and analytics."
              },
              {
                icon: <FaSyncAlt size={30} />,
                title: "API Integration",
                desc: "Integrate third-party APIs for enhanced business workflows."
              },
              {
                icon: <FaPuzzlePiece size={30} />,
                title: "Microservices APIs",
                desc: "Build modular, service-oriented architectures for agility."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">APIs for Every Industry</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our API solutions serve diverse sectors, delivering speed, security, and efficiency for any business ecosystem.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Finance", img: "/servicesimages/finance.jpeg", text: "Secure financial APIs for real-time transactions and compliance." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "HIPAA-compliant APIs enabling digital health innovation." },
              { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Omnichannel APIs for seamless e-commerce experiences." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "APIs for IoT, smart factories, and process automation." }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
              >
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

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">API Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "Payment Gateway API",
                img: "/servicesimages/online-banking.jpg",
                desc: "Developed a secure payment API for a fintech platform, improving transaction speed by 40%.",
                bullets: ["PCI-DSS compliant", "OAuth 2.0 security", "Low-latency design"]
              },
              {
                title: "Healthcare Data API",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Built a HIPAA-compliant API for a hospital chain to enable data exchange across systems.",
                bullets: ["FHIR-based architecture", "Secure token authentication", "Real-time integration"]
              },
              {
                title: "Retail Inventory API",
                img: "/servicesimages/retailerp.webp",
                desc: "Created an inventory management API reducing stock-out incidents by 30%.",
                bullets: ["Real-time syncing", "ERP integration", "Scalable for peak demand"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-xl">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
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
          <h2 className="text-5xl font-bold mb-6">Global API Expertise</h2>
          <p className="text-xl mb-4">Delivering secure, high-performing APIs to businesses in 65+ countries.</p>
          <p className="text-gray-300">Global standards. Local compliance. API-driven innovation.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Powerful APIs?</h2>
          <p className="text-lg mb-6">Partner with our experts to create APIs that enable seamless integration and scalability.</p>
          <a href="/contact" className="inline-block bg-white text-blue-800 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
