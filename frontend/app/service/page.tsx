"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaBrain,
  FaDatabase,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaServer,
  FaChartBar,
  FaUsers,
  FaProjectDiagram,
  FaLock,
  FaBriefcase,
  FaLightbulb,
  FaVrCardboard,
  FaGamepad,
  FaSyncAlt,
  FaCogs,
  FaNetworkWired,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import Link from "next/link";

const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    icon: FaCode,
    href: "/service/softwaredevelopment",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud infrastructure",
    icon: FaCloud,
    href: "/service/cloudservices",
    color: "from-sky-500 to-sky-600",
  },
  {
    title: "Cybersecurity",
    description: "Protect your business from digital threats",
    icon: FaShieldAlt,
    href: "/service/cybersecurity",
    color: "from-red-500 to-red-600",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by AI",
    icon: FaBrain,
    href: "/service/ai",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    icon: FaDatabase,
    href: "/service/dataservices",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Web Development",
    description: "Modern and responsive web applications",
    icon: FaGlobe,
    href: "/service/webdevelopment",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions",
    icon: FaMobileAlt,
    href: "/service/mobileapp",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Robotic Process Automation",
    description: "Automate business processes efficiently",
    icon: FaRobot,
    href: "/service/rpa",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "IT Support & Maintenance",
    description: "24/7 technical support and maintenance",
    icon: FaServer,
    href: "/service/itsupport",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Business Intelligence",
    description: "Data-driven business strategies",
    icon: FaChartBar,
    href: "/service/businessintelligence",
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "IT Consulting",
    description: "Strategic IT guidance for your organization",
    icon: FaBriefcase,
    href: "/service/itconsulting",
    color: "from-slate-500 to-slate-600",
  },
  {
    title: "Project Management",
    description: "Efficient project delivery and coordination",
    icon: FaProjectDiagram,
    href: "/service/projectmanagement",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "DevOps Automation",
    description: "Streamline development and operations",
    icon: FaSyncAlt,
    href: "/service/devops",
    color: "from-lime-500 to-lime-600",
  },
  {
    title: "Networking & Infrastructure",
    description: "Robust network and infrastructure solutions",
    icon: FaNetworkWired,
    href: "/service/networking",
    color: "from-violet-500 to-violet-600",
  },
  {
    title: "AR/VR Development",
    description: "Immersive augmented and virtual reality experiences",
    icon: FaVrCardboard,
    href: "/service/vrar",
    color: "from-rose-500 to-rose-600",
  },
  {
    title: "Game Development",
    description: "Engaging game development services",
    icon: FaGamepad,
    href: "/service/gamedev",
    color: "from-yellow-500 to-yellow-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your digital transformation journey. Explore our wide range of services tailored to meet your business needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Link href={service.href}>
                    <div className="group relative h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                      {/* Content */}
                      <div className="relative p-8 h-full flex flex-col">
                        {/* Icon */}
                        <div className={`inline-flex w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-6 flex-grow">
                          {service.description}
                        </p>

                        {/* Learn More Link */}
                        <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          Learn More →
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-lg mb-8 opacity-90">
                Our team of experts is ready to help you find the perfect solution for your business challenges.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
