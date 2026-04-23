"use client";

import { motion } from "framer-motion";
import { FaVrCardboard, FaMobileAlt, FaCubes, FaUsers, FaGlobe, FaGamepad } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function VirtualAugmentedReality() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Video */}
      <section className="relative h-[620px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/vrarvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative text-center px-8 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Virtual & Augmented Reality Solutions
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-6">
            Elevate engagement with immersive VR & AR experiences for businesses, training, and entertainment.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Build Your Immersive Experience
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Virtual Reality"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
            Why VR & AR Solutions?
          </h2>
          <p className="text-gray-700 mb-5">
            VR and AR technologies are revolutionizing how businesses interact with customers and train employees. Our solutions are designed to enhance engagement, streamline processes, and create immersive digital environments.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>✔ Customized VR/AR app development</li>
            <li>✔ Immersive training simulations</li>
            <li>✔ AR-based marketing campaigns</li>
            <li>✔ Multi-platform compatibility</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-tr from-blue-50 via-white to-blue-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our VR & AR Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our innovative solutions that bring virtual and augmented realities to life.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaVrCardboard size={34} />,
                title: "VR App Development",
                desc: "Immersive 3D experiences for entertainment, training, and simulations."
              },
              {
                icon: <FaMobileAlt size={34} />,
                title: "AR Mobile Solutions",
                desc: "Augmented reality apps to engage users and create dynamic brand experiences."
              },
              {
                icon: <FaCubes size={34} />,
                title: "3D Modeling & Assets",
                desc: "High-quality 3D environments, characters, and interactive elements."
              },
              {
                icon: <FaUsers size={34} />,
                title: "Virtual Collaboration",
                desc: "Custom VR spaces for meetings, conferences, and remote work."
              },
              {
                icon: <FaGamepad size={34} />,
                title: "Gaming Solutions",
                desc: "Next-level AR and VR gaming experiences for multiple platforms."
              },
              {
                icon: <FaGlobe size={34} />,
                title: "Metaverse Integration",
                desc: "Connect your business with emerging metaverse ecosystems."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our VR and AR solutions are tailored for diverse industries to deliver impactful experiences.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "AR-assisted surgeries & VR training simulations." },
              { name: "Education", img: "/servicesimages/retail.jpeg", text: "Interactive learning through immersive classrooms." },
              { name: "Retail", img: "/servicesimages/finance.jpeg", text: "AR-driven virtual shopping experiences." },
              { name: "Manufacturing", img: "/servicesimages/manufacturing.jpeg", text: "VR-based safety training & maintenance simulation." }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img src={ind.img} alt={ind.name} className="h-40 w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-blue-800">{ind.name}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "VR Training Platform for Healthcare",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Developed a VR simulation system that improved surgical training efficiency by 40%.",
                bullets: ["Realistic medical simulations", "Scalable training environment", "Cost-effective solutions"]
              },
              {
                title: "AR Retail Shopping Experience",
                img: "/servicesimages/retailerp.webp",
                desc: "Enabled a retail chain to boost online engagement with AR-based product previews.",
                bullets: ["3D product visualization", "Cross-device compatibility", "Customer engagement growth"]
              },
              {
                title: "Metaverse Integration for Education",
                img: "/servicesimages/online-banking.jpg",
                desc: "Created a virtual campus for interactive learning in a metaverse environment.",
                bullets: ["Immersive classrooms", "Virtual collaboration", "Personalized learning spaces"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-xl">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6">
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
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Global Expertise, Local Impact</h2>
          <p className="text-xl mb-4">Delivering immersive experiences in over 50 countries, tailored for cultural relevance and business needs.</p>
          <p className="text-gray-300">Your vision, our VR & AR innovation.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Enter the Virtual World?</h2>
          <p className="text-lg mb-6">Partner with us to create cutting-edge VR & AR solutions that transform your business.</p>
          <a href="/contact" className="inline-block bg-white text-blue-800 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
