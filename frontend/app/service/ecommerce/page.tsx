"use client";

import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaWarehouse,
  FaMobileAlt,
  FaChartBar,
  FaUserShield,
  FaCogs,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ECommerceSolutions() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
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
          <source src="/servicesvideo/ecommercevideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-white mb-4"
          >
            E-Commerce Solutions That Drive Sales
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            From custom storefronts to scalable online marketplaces, we create digital shopping experiences that boost revenue and customer loyalty.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100"
          >
            Build Your Store Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="E-Commerce Strategy"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Smart E-Commerce Strategies for Modern Businesses
          </h2>
          <p className="text-gray-700 mb-5">
            We help businesses launch and scale their e-commerce platforms with advanced technology, secure payment systems, and conversion-driven design. Our solutions deliver seamless user experiences and operational efficiency.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Custom online store development</li>
            <li>Secure payment gateway integration</li>
            <li>Mobile-optimized shopping experience</li>
            <li>Inventory and order management systems</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our E-Commerce Expertise</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine innovative technology with market insights to deliver high-performance online shopping experiences for your customers.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaShoppingCart size={30} />,
                title: "Custom Store Development",
                desc: "Build a tailored online store designed for your brand and customers.",
              },
              {
                icon: <FaWarehouse size={30} />,
                title: "Inventory Management",
                desc: "Stay in control of stock and automate your inventory processes.",
              },
              {
                icon: <FaMobileAlt size={30} />,
                title: "Mobile Commerce",
                desc: "Deliver mobile-first experiences to meet your customers on the go.",
              },
              {
                icon: <FaChartBar size={30} />,
                title: "Analytics & Reporting",
                desc: "Gain insights into customer behavior and optimize for conversions.",
              },
              {
                icon: <FaUserShield size={30} />,
                title: "Secure Payment Systems",
                desc: "Integrate trusted payment gateways for safe transactions.",
              },
              {
                icon: <FaCogs size={30} />,
                title: "Marketplace Integration",
                desc: "Expand your reach by selling across major marketplaces seamlessly.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-blue-700 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">E-Commerce for Every Industry</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We build custom solutions for diverse sectors, ensuring that your e-commerce platform is optimized for your specific market.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Fashion & Apparel", img: "/servicesimages/retail.jpeg", text: "Stylish, user-friendly online stores with virtual try-ons." },
              { name: "Electronics", img: "/servicesimages/finance.jpeg", text: "Secure, scalable platforms for gadget and tech retailers." },
              { name: "Healthcare Products", img: "/servicesimages/helthcare.jpeg", text: "Seamless purchase experience for medical and wellness products." },
              { name: "Food & Grocery", img: "/servicesimages/manufacturing.jpeg", text: "Smart delivery integrations for your grocery business." },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
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

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">E-Commerce Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "Fashion Brand Growth",
                img: "/servicesimages/online-banking.jpg",
                desc: "We developed a mobile-first fashion e-store that achieved 3x sales in 6 months.",
                bullets: ["Personalized shopping experience", "Seamless payment integration", "Enhanced user engagement"],
              },
              {
                title: "Electronics Marketplace",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Created a robust marketplace platform for electronic products with advanced analytics.",
                bullets: ["Multi-vendor functionality", "Integrated logistics", "Dynamic pricing"],
              },
              {
                title: "Grocery Delivery Platform",
                img: "/servicesimages/retailerp.webp",
                desc: "Launched a grocery delivery app with real-time tracking and payment solutions.",
                bullets: ["Live order tracking", "Multiple payment options", "User loyalty programs"],
              },
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-xl">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">{cs.title}</h3>
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

      {/* Global Reach Video */}
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
          <h2 className="text-5xl font-bold mb-6">Empowering Businesses Worldwide</h2>
          <p className="text-xl mb-4">
            We deliver e-commerce solutions across 60+ countries, helping brands succeed globally.
          </p>
          <p className="text-gray-300">Global technology. Local customization. Future-ready platforms.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Online Business?</h2>
          <p className="text-lg mb-6">
            Let’s build an e-commerce platform that drives growth and enhances customer experience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
