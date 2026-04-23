"use client";

import { motion } from "framer-motion";
import { FaSearch, FaBullhorn, FaChartBar, FaUserFriends, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function DigitalMarketingSEO() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/servicesvideo/digitalmarketingvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative text-center px-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Digital Marketing & SEO Services
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Drive traffic, boost conversions, and elevate your brand visibility with result-oriented digital strategies.
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Start Growing Your Business
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src="/servicesimages/softwaredevelopmentimg1.jpg" alt="Digital Marketing" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Boost Your Online Presence</h2>
          <p className="text-gray-700 mb-5">
            Our digital marketing and SEO services help your business thrive in the competitive online landscape. We create personalized strategies that enhance your search rankings, increase organic traffic, and generate measurable ROI.
          </p>
          <ul className="space-y-3 text-gray-800 font-medium">
            <li>✔ Comprehensive SEO strategies</li>
            <li>✔ Social media management</li>
            <li>✔ Pay-per-click advertising (PPC)</li>
            <li>✔ Content marketing and branding</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Core Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From SEO optimization to targeted digital campaigns, we offer solutions that drive engagement and maximize revenue.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaSearch size={32} />,
                title: "SEO Optimization",
                desc: "Improve search rankings and boost organic visibility across major platforms."
              },
              {
                icon: <FaBullhorn size={32} />,
                title: "Social Media Marketing",
                desc: "Engage audiences and build brand awareness through targeted campaigns."
              },
              {
                icon: <FaChartBar size={32} />,
                title: "Analytics & Reporting",
                desc: "Track, measure, and optimize performance with real-time insights."
              },
              {
                icon: <FaLaptopCode size={32} />,
                title: "Content Marketing",
                desc: "Deliver compelling content that converts and enhances brand credibility."
              },
              {
                icon: <FaUserFriends size={32} />,
                title: "Influencer Marketing",
                desc: "Leverage influencers to reach your ideal audience authentically."
              },
              {
                icon: <FaMobileAlt size={32} />,
                title: "PPC & Paid Ads",
                desc: "Maximize ROI through strategic ad placement across digital platforms."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition"
              >
                <div className="text-yellow-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Our tailored marketing solutions cater to businesses of all sizes across diverse sectors.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "E-commerce", img: "/servicesimages/retail.jpeg", text: "Boost online sales with optimized campaigns." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Connect patients to services with targeted ads." },
              { name: "Finance", img: "/servicesimages/finance.jpeg", text: "Build trust and credibility in financial markets." },
              { name: "Technology", img: "/servicesimages/manufacturing.jpeg", text: "Promote cutting-edge tech solutions effectively." }
            ].map((industry, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                <img src={industry.img} alt={industry.name} className="h-40 w-full object-cover" />
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-blue-700 text-lg">{industry.name}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Our Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "SEO for E-commerce Brand",
                img: "/servicesimages/online-banking.jpg",
                desc: "Increased organic traffic by 120% in 6 months for a leading e-commerce brand.",
                bullets: ["Keyword research", "On-page SEO", "Content optimization"]
              },
              {
                title: "Healthcare Social Strategy",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Enhanced engagement and leads through targeted social media campaigns.",
                bullets: ["Paid ads", "Community building", "Brand awareness"]
              },
              {
                title: "Finance PPC Campaign",
                img: "/servicesimages/retailerp.webp",
                desc: "Achieved 45% lower CPC and 3x conversions in financial services sector.",
                bullets: ["Landing page optimization", "Ad targeting", "Conversion tracking"]
              }
            ].map((cs, i) => (
              <div key={i} className="flex flex-col md:flex-row bg-gray-50 rounded-xl shadow hover:shadow-xl overflow-hidden">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">{cs.title}</h3>
                  <p className="text-gray-700 mb-4">{cs.desc}</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
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
          <h2 className="text-5xl font-extrabold mb-6">Global Reach, Local Impact</h2>
          <p className="text-xl mb-4">Helping businesses in 50+ countries achieve digital dominance with tailored marketing strategies.</p>
          <p className="text-gray-300">Your growth is our mission.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Skyrocket Your Online Presence?</h2>
          <p className="text-lg mb-6">Let’s craft a digital strategy that drives measurable results for your business.</p>
          <a href="/contact" className="inline-block bg-yellow-400 text-black px-8 py-3 font-semibold rounded-lg shadow hover:bg-yellow-300 transition">
            Book Your Free Strategy Session
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
