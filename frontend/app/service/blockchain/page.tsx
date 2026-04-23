"use client";

import { motion } from "framer-motion";
import {
  FaLock,
  FaCubes,
  FaGlobe,
  FaHandshake,
  FaChartBar,
  FaExchangeAlt,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import Image from "next/image";

export default function BlockchainWeb3Solutions() {
  return (
    <div className="font-sans bg-gray-900 text-gray-100">
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
          <source src="/servicesvideo/blockchainvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Blockchain & Web3 Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Empowering enterprises with decentralized technologies, smart
            contracts, and scalable blockchain ecosystems for the digital
            future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-indigo-500 transition"
          >
            Start Your Web3 Journey
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Blockchain Solutions"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">
            Decentralized Innovation for Tomorrow’s Enterprises
          </h2>
          <p className="text-gray-300 mb-5">
            At Prasunet, we harness the power of blockchain and Web3 to help
            businesses embrace transparency, security, and decentralization. From
            tokenization to DeFi platforms, our blockchain solutions are built
            to scale globally.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Smart contract design & auditing</li>
            <li>DeFi and NFT marketplace development</li>
            <li>Enterprise blockchain strategy</li>
            <li>Tokenomics & decentralized applications</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Blockchain Capabilities
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Our blockchain expertise helps businesses unlock decentralized
            economies and build secure, scalable, and future-ready solutions.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaCubes size={30} />,
                title: "Smart Contracts",
                desc: "Automated, transparent, and secure business logic on-chain.",
              },
              {
                icon: <FaLock size={30} />,
                title: "Blockchain Security",
                desc: "Comprehensive auditing to safeguard your decentralized apps.",
              },
              {
                icon: <FaHandshake size={30} />,
                title: "DeFi Solutions",
                desc: "Custom decentralized finance platforms to revolutionize transactions.",
              },
              {
                icon: <FaGlobe size={30} />,
                title: "NFT Marketplaces",
                desc: "Launch robust NFT platforms for art, gaming, and enterprise use.",
              },
              {
                icon: <FaExchangeAlt size={30} />,
                title: "Cross-Chain Integration",
                desc: "Enable seamless interoperability across blockchain ecosystems.",
              },
              {
                icon: <FaChartBar size={30} />,
                title: "Tokenomics",
                desc: "Design sustainable token economies with strategic frameworks.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-indigo-400 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-400 mb-4">
            Transforming Industries with Web3
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            From finance to supply chains, our blockchain strategies bring
            transparency and innovation across industries.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Decentralized banking, payments, and DeFi solutions.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Blockchain for secure patient data and medical records.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "NFTs & blockchain for loyalty programs and customer trust.",
              },
              {
                name: "Supply Chain",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Track goods with transparency and reduce fraud at scale.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={ind.img}
                  alt={ind.name}
                  width={400}
                  height={160}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-indigo-300 mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{ind.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">
            Blockchain in Action
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "DeFi Lending Platform",
                img: "/servicesimages/online-banking.jpg",
                desc: "We built a secure DeFi lending protocol, enabling global micro-loans.",
                bullets: [
                  "Smart contract automation",
                  "Lower transaction costs",
                  "Borderless finance",
                ],
              },
              {
                title: "Healthcare Data Chain",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Implemented a blockchain-based EMR system for secure data sharing.",
                bullets: [
                  "Immutable patient records",
                  "HIPAA compliance",
                  "Faster healthcare workflows",
                ],
              },
              {
                title: "Retail NFT Loyalty Program",
                img: "/servicesimages/retailerp.webp",
                desc: "Created NFT-based loyalty tokens increasing retention by 45%.",
                bullets: [
                  "NFT-powered memberships",
                  "Increased brand engagement",
                  "Cross-platform integration",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-2xl"
              >
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <Image
                    src={cs.img}
                    alt={cs.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-indigo-300 mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{cs.desc}</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
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
          <h2 className="text-5xl font-bold mb-6">Web3 Trusted Worldwide</h2>
          <p className="text-xl mb-4">
            Delivering blockchain innovation in 65+ countries, fostering
            decentralized economies.
          </p>
          <p className="text-gray-300">
            Secure. Transparent. Global. Future-proof blockchain.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Embrace Web3 Transformation?
          </h2>
          <p className="text-lg mb-6">
            Connect with Prasunet&apos;s blockchain experts to build decentralized
            solutions that redefine your industry.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-200 transition"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
