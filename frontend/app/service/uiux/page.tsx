"use client";

import { motion } from "framer-motion";
import { FaPenFancy, FaLaptopCode, FaDraftingCompass, FaPalette, FaRegObjectGroup, FaUserFriends } from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function UIUXDesignPrototyping() {
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
          <source src="/servicesvideo/uiuxvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            UI/UX Design & Prototyping
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Crafting seamless digital experiences through user-centric design, prototyping, and interaction strategy that bring ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pink-600 text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-pink-700 transition"
          >
            Start Your Design Journey
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src="/servicesimages/softwaredevelopmentimg1.jpg" alt="UI UX Design" className="rounded-2xl shadow-xl" />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-pink-700">Design That Speaks User Language</h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, we believe every click, scroll, and interaction should feel intuitive. Our UI/UX design and prototyping services ensure that products are not only visually stunning but also meaningful, efficient, and user-friendly.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Human-centered design principles</li>
            <li>Interactive wireframes & prototypes</li>
            <li>Design systems & style guides</li>
            <li>Accessibility-driven design</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-pink-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-700 mb-4">Our UI/UX Capabilities</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We design experiences that balance creativity, usability, and innovation—making products users love to engage with.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaPenFancy size={30} />,
                title: "Wireframing",
                desc: "Visualize product structure with low-fidelity sketches and wireframes."
              },
              {
                icon: <FaDraftingCompass size={30} />,
                title: "Prototyping",
                desc: "Transform concepts into interactive prototypes for real-time feedback."
              },
              {
                icon: <FaPalette size={30} />,
                title: "Visual Design",
                desc: "Craft modern interfaces with branding, color psychology, and typography."
              },
              {
                icon: <FaLaptopCode size={30} />,
                title: "Responsive Design",
                desc: "Ensure flawless performance across devices and screen sizes."
              },
              {
                icon: <FaRegObjectGroup size={30} />,
                title: "Interaction Design",
                desc: "Create smooth animations, transitions, and intuitive user flows."
              },
              {
                icon: <FaUserFriends size={30} />,
                title: "User Testing",
                desc: "Gather usability insights through user research and testing sessions."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="text-pink-600 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-pink-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Design for Every Industry</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our UI/UX and prototyping solutions empower businesses in diverse industries with engaging, customer-first digital experiences.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "E-commerce", img: "/servicesimages/retail.jpeg", text: "Boost conversions with seamless online shopping journeys." },
              { name: "Healthcare", img: "/servicesimages/helthcare.jpeg", text: "Design patient-centric health platforms that simplify care." },
              { name: "EdTech", img: "/servicesimages/finance.jpeg", text: "Interactive learning interfaces tailored for digital education." },
              { name: "Enterprise", img: "/servicesimages/manufacturing.jpeg", text: "Streamline workflows with intuitive enterprise dashboards." }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
              >
                <img src={ind.img} alt={ind.name} className="h-40 w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-pink-700 mb-1">{ind.name}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-700">Design Success Stories</h2>
          <div className="space-y-10">
            {[
              {
                title: "E-commerce Redesign",
                img: "/servicesimages/retailerp.webp",
                desc: "We transformed an e-commerce platform’s UI for faster checkout and better UX, increasing conversion by 40%.",
                bullets: ["Streamlined navigation", "Mobile-first design", "Improved engagement"]
              },
              {
                title: "Healthcare Mobile App",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Created a user-friendly app for patients to book appointments, access reports, and consult doctors virtually.",
                bullets: ["Simplified UI flows", "Accessible design", "Improved patient satisfaction"]
              },
              {
                title: "EdTech Prototype",
                img: "/servicesimages/online-banking.jpg",
                desc: "Designed a prototype for an education startup that enabled interactive video learning and gamification.",
                bullets: ["Gamified experience", "Responsive UI", "User-centered design"]
              }
            ].map((cs, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-pink-50 rounded-xl overflow-hidden shadow hover:shadow-xl">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-2">{cs.title}</h3>
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
          <h2 className="text-5xl font-bold mb-6">Global Design Excellence</h2>
          <p className="text-xl mb-4">Our design-first approach impacts businesses in 50+ countries, building trust and user delight across cultures.</p>
          <p className="text-gray-300">Design without boundaries. Experience without compromise.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-pink-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Design with Purpose?</h2>
          <p className="text-lg mb-6">Let’s bring your vision to life with engaging designs and prototypes that truly connect with users.</p>
          <a href="/contact" className="inline-block bg-white text-pink-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
