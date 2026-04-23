"use client";

import { motion } from "framer-motion";
import { FaServer, FaCloud, FaShieldAlt, FaCogs, FaUsers, FaDesktop } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ManagedITServices() {
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
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/manageditvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Managed IT Services
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Empower your business with proactive, reliable, and secure IT management solutions designed to keep your systems running 24/7.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Proactive IT Management for Modern Enterprises
          </h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, our Managed IT Services ensure your infrastructure, security, and applications run seamlessly, giving you peace of mind while you focus on growth.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>✔ 24/7 monitoring & support</li>
            <li>✔ Cloud and server management</li>
            <li>✔ Security, compliance & data protection</li>
            <li>✔ End-user and desktop support</li>
          </ul>
        </div>
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Managed IT Services"
          className="rounded-lg shadow-lg order-1 md:order-2"
        />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Core Managed IT Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We take care of your IT ecosystem from infrastructure to security, ensuring consistent uptime, reliability, and performance.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaServer size={28} />,
                title: "Infrastructure Management",
                desc: "Ensure reliable server and network operations with continuous monitoring.",
              },
              {
                icon: <FaCloud size={28} />,
                title: "Cloud Services",
                desc: "Optimize workloads, scalability, and cost efficiency in hybrid or multi-cloud environments.",
              },
              {
                icon: <FaShieldAlt size={28} />,
                title: "Cybersecurity",
                desc: "Protect your organization with advanced threat monitoring and compliance frameworks.",
              },
              {
                icon: <FaCogs size={28} />,
                title: "Automation & Maintenance",
                desc: "Minimize downtime and streamline IT operations with proactive automation.",
              },
              {
                icon: <FaUsers size={28} />,
                title: "End-User Support",
                desc: "Provide seamless helpdesk and desktop support to empower employees.",
              },
              {
                icon: <FaDesktop size={28} />,
                title: "Remote Monitoring",
                desc: "Keep systems secure and efficient with round-the-clock remote monitoring.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Industry-Specific IT Management
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Customized managed IT solutions tailored to the unique needs of different industries.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Finance", img: "/servicesimages/finance.jpeg", text: "Secure and compliant IT management for financial institutions." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "HIPAA-compliant, secure IT systems for hospitals and clinics." },
              { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Scalable IT support for smooth retail operations and e-commerce." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "Streamlined IT systems for smart factories and automation." },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition"
              >
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-lg font-bold text-blue-700 mb-1">
                    {industry.name}
                  </h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
            Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Finance IT Outsourcing",
                img: "/servicesimages/online-banking.jpg",
                desc: "Reduced IT costs by 40% for a banking firm through managed infrastructure.",
                bullets: ["24/7 monitoring", "Reduced downtime", "Improved compliance"],
              },
              {
                title: "Healthcare Cloud Migration",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Seamless migration of patient systems to secure cloud environments.",
                bullets: ["HIPAA-compliant systems", "Faster operations", "Data protection"],
              },
              {
                title: "Retail IT Modernization",
                img: "/servicesimages/retailerp.webp",
                desc: "Enabled omnichannel growth with robust managed IT solutions.",
                bullets: ["ERP optimization", "Customer experience boost", "24/7 support"],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-50 border rounded-lg overflow-hidden shadow hover:shadow-lg"
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
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Trusted Worldwide</h2>
          <p className="text-xl mb-4">
            Delivering managed IT solutions across 65+ countries with local expertise and global reach.
          </p>
          <p className="text-gray-300">
            Always-on. Always secure. Always reliable.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Need Reliable Managed IT Services?
          </h2>
          <p className="text-lg mb-6">
            Partner with Prasunet to ensure your IT infrastructure runs at peak performance, securely and cost-effectively.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-200 transition"
          >
            Request a Free IT Assessment
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
