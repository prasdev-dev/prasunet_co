"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import { FaChalkboardTeacher, FaGlobe, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";

import { useState } from "react";

export default function ProgramPage() {
  const articles = [
    {
      title: "AI in Climate Science",
      desc: "Artificial Intelligence is transforming climate science by leveraging deep learning and predictive modeling to forecast extreme weather conditions. Researchers are utilizing vast datasets to create real-time simulations that assist in disaster preparedness, reduce economic losses, and ensure community resilience. These advancements pave the way for sustainable global climate strategies.",
    },
    {
      title: "Quantum Cybersecurity",
      desc: "Quantum computing brings both unprecedented computational power and significant security threats. Researchers are working on post-quantum cryptographic frameworks to protect sensitive communications from quantum attacks. This article explores lattice-based cryptography, quantum key distribution, and how organizations can future-proof their security systems.",
    },
    {
      title: "Next-Generation Battery Materials",
      desc: "The demand for electric vehicles and renewable energy storage has sparked interest in solid-state batteries, advanced electrolytes, and nanostructured materials. Research focuses on improving energy density, extending battery life cycles, and enhancing safety. This innovation will redefine how we store and utilize energy for sustainable growth.",
    },
    {
      title: "Synthetic Biology in Medicine",
      desc: "Synthetic biology enables the design of artificial genes and organisms to create breakthrough medical solutions. Applications include gene therapies for genetic disorders, engineered microbes for drug production, and advanced drug delivery systems. These innovations mark a new era in personalized and precision medicine.",
    },
    {
      title: "Blockchain for Supply Chain Integrity",
      desc: "Blockchain technology is revolutionizing supply chain management by providing real-time visibility, ensuring authenticity, and preventing counterfeiting. Decentralized systems help businesses maintain transparency, build trust, and optimize global logistics. This research dives into smart contracts and IoT-enabled blockchain solutions.",
    },
    {
      title: "Neural Interfaces & Brain-Computer Integration",
      desc: "Brain-computer interfaces (BCIs) are bridging the gap between human cognition and machines. Non-invasive neural interfaces are being developed for assistive technologies, neurorehabilitation, and immersive AR/VR experiences. This research highlights the future of human-computer synergy and cognitive augmentation.",
    },
  ];
  const [showAll, setShowAll] = useState(false);

  const displayedArticles = showAll ? articles : articles.slice(0, 3);


  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

     {/* Hero Section with Background Video */}
<section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/itcompanyvideo.mp4" // replace with your video path
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 text-center">
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Redefining Growth with Our Initiatives
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Driving innovation, growth, and digital transformation across industries and communities.
    </motion.p>

    <motion.div
      className="mt-8 flex justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <Link href="#programs">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
          Explore Programs
        </button>
      </Link>
      <Link href="#research">
        <button className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-xl shadow-lg transition">
          Learn More
        </button>
      </Link>
    </motion.div>
  </div>
</section>


    {/* Programs Section - Premium Experience */}
<div id="programs" className="relative py-32 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  {/* Decorative Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
    <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
  </div>

  <div className="relative container mx-auto px-4 max-w-7xl">
    {/* Header */}
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-full border border-blue-200 dark:border-blue-700">
        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">OUR PROGRAMS</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
        Transformative Learning <br /> Programs
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Empowering students, professionals, and innovators globally with cutting-edge skills, mentorship, and opportunities to make meaningful impact.
      </p>
    </motion.div>

    {/* Programs Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {/* Program 1: Software Viksit Bharat */}
      <motion.div
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
          <Image
            src="/softwarevikshitbharat.jpg"
            alt="Software Viksit Bharat Program"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm">Nationwide</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Software Viksit Bharat
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Nationwide initiative empowering students and professionals with advanced digital skills.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {[
              { icon: FaChalkboardTeacher, text: 'AI, Blockchain, IoT, Cloud Training' },
              { icon: FaUsers, text: 'Internships with Top Tech Companies' },
              { icon: FaLightbulb, text: 'Hackathons & Innovation Challenges' },
              { icon: FaRocket, text: 'Career Development & Mentorship' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-blue-600 dark:text-blue-300" size={18} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScHUY_qP7K1HSVKaazsRF-aOXGtk9KbDJvU2-uuLZ-S7wi6GA/viewform?usp=sf_link">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Program →
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Program 2: Tech Bharat Global Impact */}
      <motion.div
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-r from-green-500 to-teal-600">
          <Image
            src="/Globalimpact.jpg"
            alt="Tech Bharat Global Impact"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm">Global</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Tech Bharat Global Impact
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Connect with global innovators and build scalable solutions with international reach.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {[
              { icon: FaGlobe, text: 'Global Networking & Collaboration' },
              { icon: FaLightbulb, text: 'R&D in Emerging Technologies' },
              { icon: FaRocket, text: 'International Market Access' },
              { icon: FaChalkboardTeacher, text: 'Innovation Labs & Incubation' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-green-600 dark:text-green-300" size={18} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdYLa3wVwYgtMgsWyWX7jTBjkUOzjM_ihhBHWKTx4AGAyP79A/viewform?usp=header">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Program →
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Program 3: African Student Empowerment */}
      <motion.div
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-r from-orange-500 to-red-600">
          <Image
            src="/africaprogram.png"
            alt="African Student Empowerment"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm">Africa</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            African Student Empowerment
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Uplifting and empowering students across Africa with mentorship and scholarships.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {[
              { icon: FaChalkboardTeacher, text: 'Mentorship from Industry Leaders' },
              { icon: FaUsers, text: 'Scholarships & Financial Aid' },
              { icon: FaGlobe, text: 'Global Networking Opportunities' },
              { icon: FaRocket, text: 'Leadership Development Training' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-orange-600 dark:text-orange-300" size={18} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/program/africa">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Program →
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Program 4: European Student Empowerment */}
      <motion.div
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600">
          <Image
            src="/europeprogram.png"
            alt="European Student Empowerment"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm">Europe</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            European Student Empowerment
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Empowering European students with world-class mentorship and funded opportunities.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {[
              { icon: FaChalkboardTeacher, text: 'European Expert Mentorship' },
              { icon: FaUsers, text: 'Scholarships & Grants Available' },
              { icon: FaGlobe, text: 'Exchange & Collaboration Programs' },
              { icon: FaRocket, text: 'Career Development Support' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-cyan-600 dark:text-cyan-300" size={18} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/program/european">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Program →
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Stats Section */}
    <motion.div 
      className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">10K+</div>
        <p className="text-blue-100">Students Enrolled</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">50+</div>
        <p className="text-blue-100">Partner Companies</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">95%</div>
        <p className="text-blue-100">Success Rate</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">25+</div>
        <p className="text-blue-100">Countries Reached</p>
      </div>
    </motion.div>
  </div>
</div>
     {/* Innovation Stories 
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Next-Gen Tech Narratives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/aiinhealthcare.webp",
                title: "AI in Healthcare",
                desc: "Transforming diagnosis and patient care with AI-driven solutions.",
              },
              {
                img: "/Blockchain-Cryptocurrency.avif",
                title: "Blockchain for Trust",
                desc: "Creating transparent, secure, and decentralized solutions.",
              },
              {
                img: "/iotimage.jpg",
                title: "IoT Revolution",
                desc: "Smart cities and connected devices for a sustainable future.",
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              >
                <Image
                  src={story.img}
                  alt={story.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {story.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FUTURE OF TECH TIMELINE */}
<section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        The Next Wave of Digital Transformation
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Key milestones that will shape humanity’s next decades of innovation.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-gradient-to-b from-blue-500 to-purple-600 transform before:-translate-x-1/2">
      {[
        {
          year: "2025",
          text: "AI-driven automation optimizes industries from healthcare to finance, improving global efficiency.",
        },
        {
          year: "2028",
          text: "6G and hyperconnected smart cities integrate IoT, AR, and real-time data seamlessly.",
        },
        {
          year: "2030",
          text: "Quantum computing revolutionizes research, security, and global data processing power.",
        },
        {
          year: "2035",
          text: "Autonomous transportation networks reshape cities and sustainability goals worldwide.",
        },
        {
          year: "2040",
          text: "Humanity establishes colonies on Mars and asteroid mining begins trillion-dollar ventures.",
        },
        {
          year: "2050",
          text: "Brain-computer interfaces merge humans and AI for augmented intelligence.",
        },
      ].map((event, i) => (
        <motion.div
          key={i}
          className={`mb-12 flex items-center w-full ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          {/* Spacer */}
          <div className="w-1/2"></div>

          {/* Year Marker */}
          <div className="relative flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

          {/* Content */}
          <div className="w-1/2">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-sm hover:scale-105 transition-transform duration-300 ml-6 mr-6">
              <h3 className="text-xl font-bold text-blue-600 dark:text-purple-400 mb-2">{event.year}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{event.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <a
        href="#"
        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Explore Future Trends
      </a>
    </div>
  </div>
</section>


     {/* Success Stories - Concise & Professional */}
<section className="bg-gray-50 dark:bg-gray-900 py-24">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
      Success Stories That Inspire
    </h2>
    <p className="text-center text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto">
      Our programs have transformed careers worldwide. Here’s what our achievers say.
    </p>

    {/* Grid of Stories */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          name: "Riya Sharma",
          role: "AI Researcher",
          text: "Viksit Bharat gave me confidence to lead AI projects globally.",
        },
        {
          name: "Arjun Patel",
          role: "Blockchain Developer",
          text: "Tech Bharat opened doors to international blockchain opportunities.",
        },
        {
          name: "Meera Das",
          role: "Entrepreneur",
          text: "My startup scaled globally with guidance from these programs.",
        },
        {
          name: "Siddharth Nair",
          role: "Cloud Architect",
          text: "Hands-on projects transformed my cloud computing approach.",
        },
        {
          name: "Neha Verma",
          role: "Cybersecurity Specialist",
          text: "I advanced into cybersecurity leadership roles with ease.",
        },
        {
          name: "Karan Singh",
          role: "Product Manager",
          text: "Tech Bharat helped me manage AI products for the global market.",
        },
      ].map((person, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base italic">{person.text}</p>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">{person.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{person.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      

    
{/* Research & Theories Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Research & Emerging Theories
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Artificial Intelligence", desc: "Exploring AGI & responsible AI ethics." },
              { title: "Quantum Computing", desc: "Harnessing qubits for exponential problem-solving." },
              { title: "Blockchain & Web3", desc: "Trustless networks driving decentralization." },
              { title: "IoT & 6G Networks", desc: "Hyper-connected ecosystems powering smart cities." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     <section className="py-20 bg-gradient-to-tr from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Latest Research Articles
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-lg">
          Explore thought-provoking research in Artificial Intelligence, Quantum Computing, Energy Storage, and emerging technologies shaping the future.
        </p>

        <div className="space-y-12">
          {displayedArticles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {article.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {article.desc}
              </p>
              <Link
                href={`/read/${article.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")}`}
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Read Full Article →
              </Link>
              <hr className="mt-6 border-gray-300 dark:border-gray-700" />
            </motion.div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>

      {/* Visionary Quotes by CEO */}
<section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
      Thought Leadership Insights
    </h2>

    <div className="max-w-3xl mx-auto space-y-8">
     <blockquote className="italic text-lg md:text-xl text-gray-800 dark:text-gray-200 relative before:content-['“'] before:text-5xl before:text-blue-400 before:absolute before:-left-6 before:-top-6">
  {"At Prasunet, we believe that innovation today shapes the world of tomorrow. Our mission is to empower businesses with technology that drives growth and sustainability."}
</blockquote>

      <p className="text-gray-600 dark:text-gray-400 font-semibold"> Pramod Prajapat, CEO, Prasunet</p>

    
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
