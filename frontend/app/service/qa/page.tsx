"use client";

import { motion } from "framer-motion";
import {
  FaBug,
  FaCheckCircle,
  FaClipboardCheck,
  FaMicroscope,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function QualityAssuranceTesting() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
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
            src="/servicesvideo/qavideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Quality Assurance & Testing Services
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Ensure flawless performance and reliable delivery with end-to-end
            quality assurance solutions tailored to your business needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Test Your Success Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Elevating Software Quality with Precision
          </h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, we provide comprehensive testing services designed to
            identify risks early, reduce costs, and deliver reliable, scalable
            solutions. From functional validation to security and automation, we
            cover every aspect of the QA lifecycle.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>✔ Functional & regression testing</li>
            <li>✔ Performance & load testing</li>
            <li>✔ Automation frameworks</li>
            <li>✔ Security & compliance validation</li>
          </ul>
        </div>
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Quality Assurance"
          className="order-1 md:order-2 rounded-2xl shadow-xl"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Testing Expertise
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive QA services to help businesses maintain software
            quality, accelerate releases, and minimize risks.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaBug size={28} />,
                title: "Functional Testing",
                desc: "Thorough validation of features to ensure flawless functionality.",
              },
              {
                icon: <FaCheckCircle size={28} />,
                title: "Automation Testing",
                desc: "Boost efficiency with scalable test automation frameworks.",
              },
              {
                icon: <FaMicroscope size={28} />,
                title: "Performance Testing",
                desc: "Analyze speed, scalability, and stability under load.",
              },
              {
                icon: <FaShieldAlt size={28} />,
                title: "Security Testing",
                desc: "Protect applications from vulnerabilities and threats.",
              },
              {
                icon: <FaClipboardCheck size={28} />,
                title: "Compliance Testing",
                desc: "Ensure adherence to regulatory and industry standards.",
              },
              {
                icon: <FaLaptopCode size={28} />,
                title: "Mobile App Testing",
                desc: "Deliver seamless experiences across iOS and Android devices.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            QA Solutions Across Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our testing expertise spans diverse industries, ensuring high
            performance and reliability in mission-critical environments.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Secure financial systems with rigorous testing and compliance checks.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Error-free digital health platforms ensuring patient safety.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Flawless omnichannel experiences with end-to-end QA.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Reliable systems powering Industry 4.0 transformation.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
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
            Proven QA Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Automated Testing for Finance",
                img: "/servicesimages/online-banking.jpg",
                desc: "Implemented automation frameworks, reducing release cycle by 40%.",
                bullets: [
                  "Regression test automation",
                  "Cost savings",
                  "Faster deployment",
                ],
              },
              {
                title: "Healthcare App Reliability",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Enhanced digital health platform with 99.9% uptime testing.",
                bullets: [
                  "Critical bug detection",
                  "Performance monitoring",
                  "Improved patient outcomes",
                ],
              },
              {
                title: "Retail Load Testing",
                img: "/servicesimages/retailerp.webp",
                desc: "Validated ERP under heavy traffic, ensuring peak performance.",
                bullets: [
                  "Load & stress testing",
                  "Reduced downtime",
                  "Seamless customer experience",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl"
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
          <h2 className="text-5xl font-bold mb-6">Global Testing Excellence</h2>
          <p className="text-xl mb-4">
            Delivering quality assurance services across 65+ countries, ensuring
            global compliance and reliability.
          </p>
          <p className="text-gray-300">
            Reliable QA. Global impact. Future-ready software.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Ensure Software Quality?
          </h2>
          <p className="text-lg mb-6">
            Partner with Prasunet to achieve flawless applications through
            world-class QA practices.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Get a Free QA Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
