"use client";

import { motion } from "framer-motion";
import { FaTasks, FaUserTie, FaClipboardCheck, FaSitemap, FaRegClock, FaUsersCog } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ITProjectManagement() {
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
          <source src="/servicesvideo/projectmanagementvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            IT Project Management
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Delivering technology projects with precision, agility, and measurable outcomes. We bring structure and clarity to complex initiatives.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow hover:bg-yellow-600 transition"
          >
            Manage Projects Smarter
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src="/servicesimages/softwaredevelopmentimg1.jpg" alt="Project Management" className="rounded-2xl shadow-xl" />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-yellow-600">Empowering Success Through Effective IT Project Management</h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, our IT project management services ensure projects are delivered on time, within budget, and aligned with strategic goals. From initiation to execution, we guide teams through every phase with industry-best practices.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Comprehensive project planning & scheduling</li>
            <li>Agile & hybrid methodologies</li>
            <li>Risk assessment & mitigation strategies</li>
            <li>Cross-functional team coordination</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-yellow-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-700 mb-4">Our Project Management Capabilities</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine strategic vision with execution excellence, ensuring seamless project delivery across industries and technologies.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              { icon: <FaTasks size={30} />, title: "Task & Workflow Management", desc: "Streamline tasks and processes to maximize productivity." },
              { icon: <FaUserTie size={30} />, title: "Stakeholder Alignment", desc: "Ensure all project stakeholders are engaged and informed." },
              { icon: <FaClipboardCheck size={30} />, title: "Quality Assurance", desc: "Maintain project standards with rigorous QA practices." },
              { icon: <FaSitemap size={30} />, title: "Agile & Scrum Practices", desc: "Adopt flexible methodologies for iterative success." },
              { icon: <FaRegClock size={30} />, title: "Time & Budget Control", desc: "Deliver projects within deadlines and cost targets." },
              { icon: <FaUsersCog size={30} />, title: "Team Collaboration", desc: "Foster collaboration across distributed project teams." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="text-yellow-600 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-yellow-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Excellence Across Industries</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From healthcare to manufacturing, we bring project governance and success metrics tailored for every sector.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Finance", img: "/servicesimages/finance.jpeg", text: "Delivering secure and compliant projects for financial services." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Ensuring timely digital health solutions with patient focus." },
              { name: "Retail", img: "/servicesimages/retail.jpeg", text: "Managing digital transformation projects for customer-centric retail." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "Optimizing large-scale IT deployments in factories." }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
              >
                <img src={ind.img} alt={ind.name} className="h-40 w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-yellow-700 mb-1">{ind.name}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-700">Project Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "Enterprise ERP Rollout",
                img: "/servicesimages/online-banking.jpg",
                desc: "We managed a global ERP deployment, ensuring smooth transition with 99% data accuracy.",
                bullets: ["Multi-region rollout", "Change management support", "Cost reduction by 20%"]
              },
              {
                title: "Healthcare Platform Upgrade",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Delivered a new hospital management system in record time while meeting compliance requirements.",
                bullets: ["Agile delivery", "HIPAA compliance", "Improved patient outcomes"]
              },
              {
                title: "Omnichannel Retail Expansion",
                img: "/servicesimages/retailerp.webp",
                desc: "Managed the integration of online and offline platforms, boosting revenue growth by 45%.",
                bullets: ["Seamless integration", "Customer-centric approach", "Faster go-to-market"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-yellow-50 rounded-xl overflow-hidden shadow hover:shadow-xl">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-yellow-700 mb-2">{cs.title}</h3>
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
          <h2 className="text-5xl font-bold mb-6">Global Project Delivery</h2>
          <p className="text-xl mb-4">We lead IT projects in 60+ countries, ensuring cultural alignment and operational excellence.</p>
          <p className="text-gray-300">Reliable. Scalable. Globally trusted.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-yellow-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Deliver Your Next IT Project?</h2>
          <p className="text-lg mb-6">Partner with Prasunet to ensure successful execution of your mission-critical initiatives.</p>
          <a href="/contact" className="inline-block bg-white text-yellow-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
