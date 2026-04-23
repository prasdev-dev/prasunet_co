"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaNetworkWired,
  FaUserSecret,
  FaClipboardCheck,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function CyberSecurityServices() {
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
          <source
            src="/servicesvideo/cybersecurityvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Cyber Security Services
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Protect your digital assets with advanced cybersecurity strategies,
            threat detection, and proactive defense mechanisms.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-red-700"
          >
            Secure Your Business Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-red-700">
            Building Digital Trust with Security Excellence
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            At Prasunet, we deliver end-to-end cybersecurity services designed
            to protect your enterprise from evolving digital threats. From
            network security to compliance readiness, our experts ensure your
            data, systems, and users remain safe.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Proactive threat detection and response</li>
            <li>Network, cloud, and endpoint security</li>
            <li>Data protection and compliance management</li>
            <li>Penetration testing and vulnerability management</li>
          </ul>
        </div>
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Cyber Security"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-4">
            Cybersecurity Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We safeguard businesses with advanced solutions, combining
            technology, intelligence, and strategy to combat cyber risks.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaShieldAlt size={28} />,
                title: "Threat Intelligence",
                desc: "Real-time monitoring and response to prevent breaches.",
              },
              {
                icon: <FaLock size={28} />,
                title: "Data Protection",
                desc: "Safeguard sensitive information with encryption & access control.",
              },
              {
                icon: <FaBug size={28} />,
                title: "Penetration Testing",
                desc: "Identify vulnerabilities before attackers do.",
              },
              {
                icon: <FaNetworkWired size={28} />,
                title: "Network Security",
                desc: "Secure infrastructure against intrusions and malware.",
              },
              {
                icon: <FaUserSecret size={28} />,
                title: "Identity & Access",
                desc: "Ensure only authorized users access critical systems.",
              },
              {
                icon: <FaClipboardCheck size={28} />,
                title: "Compliance & Audits",
                desc: "Stay compliant with GDPR, ISO, HIPAA, and other standards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Securing Industries Worldwide
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We protect enterprises across industries by securing their data,
            networks, and digital platforms against modern cyber threats.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Protecting transactions with fraud detection and compliance.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Safeguarding patient data with HIPAA-compliant security.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Securing e-commerce platforms against cyberattacks.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Ensuring operational technology security for smart factories.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border shadow hover:shadow-lg transition"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-red-600 mb-1">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-700">
            Proven Cybersecurity Impact
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Financial Cyber Defense",
                img: "/servicesimages/online-banking.jpg",
                desc: "Implemented a fraud detection system for a global bank, reducing cyber fraud by 45%.",
                bullets: [
                  "AI-based fraud monitoring",
                  "Secure customer authentication",
                  "Real-time risk alerts",
                ],
              },
              {
                title: "Healthcare Data Security",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Deployed HIPAA-compliant cybersecurity measures to safeguard patient data.",
                bullets: [
                  "End-to-end data encryption",
                  "Role-based access control",
                  "Compliance audit readiness",
                ],
              },
              {
                title: "Retail Platform Security",
                img: "/servicesimages/retailerp.webp",
                desc: "Secured an e-commerce platform against major ransomware attacks.",
                bullets: [
                  "DDoS protection",
                  "Endpoint detection & response",
                  "Reduced downtime by 60%",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl"
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
          <h2 className="text-5xl font-bold mb-6">Trusted Global Protection</h2>
          <p className="text-xl mb-4">
            Delivering cybersecurity excellence across 65+ countries with
            industry-leading expertise.
          </p>
          <p className="text-gray-300">
            Global reach. Local defense. Always secure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-red-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Strengthen Your Cyber Defense?
          </h2>
          <p className="text-lg mb-6">
            Partner with Prasunet for enterprise-grade cybersecurity solutions
            tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Request a Free Security Audit
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
