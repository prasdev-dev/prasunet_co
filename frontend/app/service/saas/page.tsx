"use client";

import { motion } from "framer-motion";
import {
  FaCloud,
  FaCogs,
  FaLock,
  FaUsers,
  FaSync,
  FaChartBar,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function SaaSDevelopment() {
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
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="/servicesvideo/saasvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Software as a Service Development
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Build, scale, and launch SaaS applications that deliver performance,
            flexibility, and security across industries.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg font-semibold hover:bg-blue-500 transition"
          >
            Launch Your SaaS Journey
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Scalable SaaS Solutions for Modern Enterprises
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            At Prasunet, we specialize in SaaS application development designed
            for scalability, security, and user engagement. From product
            ideation to deployment, we help companies create platforms that
            empower customers and drive long-term growth.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>Cloud-native architecture for global accessibility</li>
            <li>Multi-tenancy with strong data isolation</li>
            <li>Robust integrations & API ecosystems</li>
            <li>Agile development with continuous delivery</li>
          </ul>
        </div>
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="SaaS Development"
          className="rounded-2xl shadow-2xl"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            SaaS Development Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine cloud expertise and product engineering to deliver
            reliable SaaS products that scale effortlessly with business demand.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaCloud size={28} />,
                title: "Cloud-Native Apps",
                desc: "Build applications optimized for AWS, Azure, and GCP environments.",
              },
              {
                icon: <FaCogs size={28} />,
                title: "Custom SaaS Platforms",
                desc: "Tailored solutions from scratch to meet specific business models.",
              },
              {
                icon: <FaLock size={28} />,
                title: "Data Security",
                desc: "Advanced security frameworks to protect sensitive customer data.",
              },
              {
                icon: <FaUsers size={28} />,
                title: "Multi-Tenant Systems",
                desc: "Efficient, isolated environments ensuring high performance.",
              },
              {
                icon: <FaSync size={28} />,
                title: "DevOps & CI/CD",
                desc: "Continuous integration pipelines for rapid feature releases.",
              },
              {
                icon: <FaChartBar size={28} />,
                title: "Analytics & Insights",
                desc: "Actionable dashboards and analytics for user behavior tracking.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            SaaS Across Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From healthcare to retail, SaaS platforms drive innovation and
            streamline digital operations.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Cloud-native fintech apps with compliance-ready architecture.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "HIPAA-compliant SaaS apps enabling connected patient care.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "SaaS platforms driving customer personalization & engagement.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Digital platforms for supply chain and production efficiency.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            SaaS Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Fintech SaaS Application",
                img: "/servicesimages/online-banking.jpg",
                desc: "A cloud-based banking SaaS platform handling millions of transactions daily.",
                bullets: [
                  "Seamless cloud integration",
                  "Robust compliance framework",
                  "Scalable multi-tenant model",
                ],
              },
              {
                title: "Healthcare SaaS Platform",
                img: "/servicesimages/healthcareai.jpg",
                desc: "AI-powered SaaS app for hospitals improving diagnostics by 40%.",
                bullets: [
                  "HIPAA-compliant infrastructure",
                  "AI-driven patient records",
                  "Automated workflows",
                ],
              },
              {
                title: "Retail SaaS Solution",
                img: "/servicesimages/retailerp.webp",
                desc: "Omnichannel retail SaaS leading to 60% growth in customer engagement.",
                bullets: [
                  "Integrated CRM & ERP",
                  "Real-time analytics",
                  "Seamless e-commerce scaling",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">SaaS Trusted Globally</h2>
          <p className="text-xl mb-4">
            Our SaaS solutions power enterprises in 60+ countries, delivering
            innovation and efficiency at scale.
          </p>
          <p className="text-gray-300">
            Global adoption. Local customization. Reliable performance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your SaaS Product?
          </h2>
          <p className="text-lg mb-6">
            Partner with Prasunet to design, develop, and scale SaaS solutions
            that deliver results.
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
