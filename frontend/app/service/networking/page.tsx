"use client";

import { motion } from "framer-motion";
import { 
  FaServer, 
  FaCloud, 
  FaLock, 
  FaProjectDiagram, 
  FaNetworkWired, 
  FaGlobe 
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function NetworkingInfrastructure() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero with Video */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/networkingvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Networking & Infrastructure Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Empowering enterprises with scalable, secure, and high-performance infrastructure built for the digital-first world.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Build Smarter Networks
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Building the Backbone of Digital Transformation</h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, we design, deploy, and manage resilient networking and infrastructure ecosystems that form the foundation of modern enterprises. From cloud-first strategies to robust security frameworks, our solutions ensure speed, reliability, and scale.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>Next-gen data center design</li>
            <li>Enterprise network architecture</li>
            <li>Cloud infrastructure modernization</li>
            <li>Zero-trust & cybersecurity integration</li>
          </ul>
        </div>
        <img src="/servicesimages/softwaredevelopmentimg1.jpg" alt="Networking Infrastructure" className="rounded-2xl shadow-xl" />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-tr from-gray-50 to-blue-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Networking Capabilities</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Combining cutting-edge infrastructure engineering with future-proof networking strategies for enterprise growth.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaNetworkWired size={28} />,
                title: "Enterprise Networking",
                desc: "High-performance LAN/WAN and SD-WAN solutions for modern enterprises."
              },
              {
                icon: <FaServer size={28} />,
                title: "Data Center Solutions",
                desc: "Design and optimization of scalable, secure, and energy-efficient data centers."
              },
              {
                icon: <FaCloud size={28} />,
                title: "Cloud Integration",
                desc: "Hybrid and multi-cloud infrastructure tailored for agility and scalability."
              },
              {
                icon: <FaLock size={28} />,
                title: "Network Security",
                desc: "Zero-trust models, firewalls, and threat detection for resilient systems."
              },
              {
                icon: <FaProjectDiagram size={28} />,
                title: "Infrastructure Automation",
                desc: "DevOps-driven automation for faster deployments and reduced downtime."
              },
              {
                icon: <FaGlobe size={28} />,
                title: "Global Connectivity",
                desc: "Seamless global networking for enterprises operating across geographies."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-blue-700 mb-5">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-3 text-blue-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Infrastructure Across Industries</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Tailored networking and infrastructure solutions to fuel innovation and operational excellence.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Banking", img: "/servicesimages/finance.jpeg", text: "Secure, high-speed networks for financial services." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Reliable infrastructure to power digital health ecosystems." },
              { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Seamless omnichannel experiences through robust networks." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "Smart factory integration with IoT-ready infrastructure." }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
                <img src={ind.img} alt={ind.name} className="h-40 w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-blue-800 mb-2">{ind.name}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Real-World Impact</h2>
          <div className="space-y-12">
            {[
              {
                title: "Global SD-WAN Rollout",
                img: "/servicesimages/online-banking.jpg",
                desc: "We enabled a global enterprise to modernize its WAN, boosting performance by 50%.",
                bullets: ["Reduced latency", "Improved global connectivity", "Cost-efficient"]
              },
              {
                title: "Healthcare Cloud Migration",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Migrated hospital IT infrastructure to hybrid cloud, ensuring resilience and compliance.",
                bullets: ["HIPAA-compliant systems", "Cloud-native scalability", "Improved patient care"]
              },
              {
                title: "Retail Edge Networking",
                img: "/servicesimages/retailerp.webp",
                desc: "Deployed edge computing for a retailer, enabling real-time analytics across stores.",
                bullets: ["Faster customer insights", "Enhanced omnichannel CX", "Reduced downtime"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-xl">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3">{cs.title}</h3>
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
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Connecting the World</h2>
          <p className="text-xl mb-4">Our infrastructure solutions power businesses in 70+ countries, ensuring global reliability and security.</p>
          <p className="text-gray-300">Resilient. Scalable. Future-Ready.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Strengthen Your Infrastructure?</h2>
          <p className="text-lg mb-6">Partner with Prasunet to create future-ready networking and infrastructure strategies.</p>
          <a href="/contact" className="inline-block bg-white text-blue-800 px-10 py-4 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
            Talk to Our Experts
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
