"use client";

import { motion } from "framer-motion";
import {
  FaGamepad,
  FaLaptopCode,
  FaUsers,
  FaCogs,
  FaVrCardboard,
  FaGlobeAmericas,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function GameDevelopment() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-gray-50 to-gray-100">
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
          <source
            src="/servicesvideo/gamedevvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          >
            Immersive Game Development
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            From concept to console, we craft cutting-edge gaming experiences
            that captivate, inspire, and engage players worldwide.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-red-700 transition"
          >
            Start Your Game Journey
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Game Development"
          className="rounded-2xl shadow-2xl transform hover:scale-105 transition"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-red-700">
            Building Games that Redefine Play
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Our expert team brings stories to life through interactive gameplay,
            stunning visuals, and dynamic worlds. Whether you’re looking to
            launch a AAA title, VR adventure, or mobile sensation, we provide
            the creativity, technology, and expertise to make it a reality.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>🎮 Cross-platform game development</li>
            <li>⚙️ Advanced graphics & physics engines</li>
            <li>🌍 Multiplayer & online integration</li>
            <li>🕹️ VR, AR & immersive experiences</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-800 mb-4">
            Game Development Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We blend art, code, and storytelling to deliver seamless gaming
            experiences for every platform and audience.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaGamepad size={30} />,
                title: "Console & PC Games",
                desc: "Designing engaging titles for PlayStation, Xbox, and PC gamers worldwide.",
              },
              {
                icon: <FaLaptopCode size={30} />,
                title: "Mobile Games",
                desc: "Building addictive and scalable iOS and Android experiences.",
              },
              {
                icon: <FaUsers size={30} />,
                title: "Multiplayer & Online",
                desc: "Seamless server integration for competitive and cooperative play.",
              },
              {
                icon: <FaCogs size={30} />,
                title: "Game Engines",
                desc: "Expertise in Unity, Unreal Engine, and custom engines.",
              },
              {
                icon: <FaVrCardboard size={30} />,
                title: "VR & AR Experiences",
                desc: "Immersive gameplay with next-gen AR and VR solutions.",
              },
              {
                icon: <FaGlobeAmericas size={30} />,
                title: "Global Publishing",
                desc: "Strategies to launch and scale your game worldwide.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-red-600 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Games Across Genres
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From indie passion projects to blockbuster franchises, we build
            experiences across all genres of gaming.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Action & Adventure",
                img: "/servicesimages/finance.jpeg",
                text: "High-energy titles with cinematic gameplay and immersive storytelling.",
              },
              {
                name: "Simulation",
                img: "/servicesimages/helthcare.jpeg",
                text: "Realistic environments and experiences powered by cutting-edge engines.",
              },
              {
                name: "RPG & Fantasy",
                img: "/servicesimages/retail.jpeg",
                text: "Expansive worlds with character progression and engaging quests.",
              },
              {
                name: "Sports & Racing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Fast-paced, competitive, and adrenaline-filled gaming experiences.",
              },
            ].map((genre, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={genre.img}
                  alt={genre.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-red-700 mb-1">
                    {genre.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{genre.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-700">
            Game Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Multiplayer Shooter Launch",
                img: "/servicesimages/online-banking.jpg",
                desc: "Developed a cross-platform FPS that achieved 1M+ downloads in its first month.",
                bullets: [
                  "Seamless server scaling",
                  "Competitive matchmaking",
                  "Crossplay support",
                ],
              },
              {
                title: "VR Fantasy World",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Created a VR RPG adventure with stunning visuals and deep immersion.",
                bullets: [
                  "Unreal Engine 5 integration",
                  "Immersive storytelling",
                  "VR-optimized UI",
                ],
              },
              {
                title: "Mobile Puzzle Hit",
                img: "/servicesimages/retailerp.webp",
                desc: "Designed a casual puzzle game that reached the top charts globally.",
                bullets: [
                  "Addictive gameplay loop",
                  "Lightweight performance",
                  "Monetization strategy",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-xl"
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-red-700 mb-2">
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
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Global Gaming Impact</h2>
          <p className="text-xl mb-4">
            Our games reach millions across 70+ countries, driving global
            communities and unforgettable experiences.
          </p>
          <p className="text-gray-300">
            Worldwide creativity. Local innovation. Legendary play.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-red-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Create Your Next Hit Game?
          </h2>
          <p className="text-lg mb-6">
            Partner with us to turn your gaming vision into an immersive,
            world-class experience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-700 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-200 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
