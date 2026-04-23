"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaSearchPlus,
  FaRegLightbulb
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function WebDevelopmentAndDesign() {
  return (
    <div className="font-sans text-gray-900 bg-white">
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
          <source
            src="/servicesvideo/webdevelopmentvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Web Development & Design Services
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Build visually stunning, user-friendly, and high-performing websites
            that elevate your brand presence in the digital world.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Your Website Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Web Design"
          className="rounded-xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Stunning Websites, Seamless Experiences
          </h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, we design and develop websites that don’t just look
            good—they perform exceptionally. From dynamic web apps to responsive
            business websites, we ensure every project aligns with your goals.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Responsive & Mobile-First Design</li>
            <li>Custom Web Application Development</li>
            <li>SEO-Optimized Architecture</li>
            <li>UI/UX Design for Enhanced Engagement</li>
          </ul>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Web Development Expertise
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver powerful
            web solutions tailored to your business needs.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaCode size={32} />,
                title: "Custom Web Development",
                desc: "Fully tailored websites built with the latest technologies."
              },
              {
                icon: <FaLaptopCode size={32} />,
                title: "Responsive Design",
                desc: "Flawless user experience across all devices and screen sizes."
              },
              {
                icon: <FaPalette size={32} />,
                title: "Creative UI/UX",
                desc: "Eye-catching designs for an engaging user experience."
              },
              {
                icon: <FaMobileAlt size={32} />,
                title: "Progressive Web Apps",
                desc: "Modern PWAs for mobile-like performance on the web."
              },
              {
                icon: <FaSearchPlus size={32} />,
                title: "SEO-Driven Development",
                desc: "Websites optimized for better visibility and search ranking."
              },
              {
                icon: <FaRegLightbulb size={32} />,
                title: "E-Commerce Solutions",
                desc: "High-performing online stores with secure payment systems."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Websites for Every Industry
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We build industry-specific solutions that boost engagement and
            conversions for your business.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Secure, compliant, and conversion-optimized websites for financial services."
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Healthcare portals designed for easy access and patient engagement."
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Modern e-commerce solutions for seamless shopping experiences."
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Industry websites integrated with smart tools and real-time updates."
              }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all"
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
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Real Results from Our Web Projects
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "E-Commerce Growth",
                img: "/servicesimages/online-banking.jpg",
                desc: "Boosted online sales by 70% for a retail brand through a new website.",
                bullets: [
                  "Custom-built store",
                  "Mobile optimization",
                  "Integrated payment systems"
                ]
              },
              {
                title: "Healthcare Web Portal",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Created a secure patient portal for a hospital group with real-time data.",
                bullets: [
                  "Appointment scheduling",
                  "HIPAA-compliant system",
                  "Patient dashboard"
                ]
              },
              {
                title: "Corporate Website Revamp",
                img: "/servicesimages/retailerp.webp",
                desc: "Redesigned a B2B website to improve lead generation by 40%.",
                bullets: [
                  "Modern UI/UX",
                  "SEO-optimized structure",
                  "Enhanced user engagement"
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
          <h2 className="text-5xl font-bold mb-6">Global Web Solutions</h2>
          <p className="text-xl mb-4">
            Delivering world-class websites across 65+ countries with precision
            and creativity.
          </p>
          <p className="text-gray-300">
            Your brand deserves a strong digital identity—let us create it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-lg mb-6">
            Get in touch with our experts for modern, responsive, and creative
            web solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
