"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaProjectDiagram,
  FaUserShield,
  FaBullseye,
  FaBalanceScale,
  FaNetworkWired,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ITConsultingStrategy() {
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
            src="/servicesvideo/itconsultingvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            IT Consulting &amp; Strategy
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-6">
            Navigate digital complexity with clarity. We guide enterprises
            through technology transformation with data-driven strategy,
            architecture, and innovation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
          >
            Start Your Transformation
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Consulting Strategy"
          width={600}
          height={400}
          className="rounded-xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Strategic IT Guidance for Future-Ready Enterprises
          </h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, our IT consulting services help businesses align
            technology with long-term goals. Whether you&apos;re modernizing
            legacy systems or launching enterprise-wide transformation, we
            deliver clear roadmaps for success.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Digital transformation strategy</li>
            <li>Technology architecture &amp; modernization</li>
            <li>Risk, compliance &amp; cybersecurity advisory</li>
            <li>Cloud, DevOps &amp; data strategy alignment</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Consulting Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Combining business acumen with technical expertise to design IT
            strategies that drive measurable growth and operational efficiency.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaChartLine size={30} />,
                title: "IT Strategy & Roadmapping",
                desc: "Develop long-term IT roadmaps aligned with your business objectives.",
              },
              {
                icon: <FaProjectDiagram size={30} />,
                title: "Architecture Assessment",
                desc: "Modernize legacy architecture and implement scalable solutions.",
              },
              {
                icon: <FaUserShield size={30} />,
                title: "Security & Compliance",
                desc: "Mitigate risks and meet industry-specific compliance standards.",
              },
              {
                icon: <FaBullseye size={30} />,
                title: "Digital Transformation",
                desc: "Design, plan, and execute enterprise-wide digital change initiatives.",
              },
              {
                icon: <FaBalanceScale size={30} />,
                title: "IT Governance",
                desc: "Establish decision frameworks and IT policies for strong governance.",
              },
              {
                icon: <FaNetworkWired size={30} />,
                title: "Cloud & Infrastructure Strategy",
                desc: "Optimize your infrastructure with cloud, DevOps, and network best practices.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl"
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

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Expertise Across Key Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We tailor IT consulting strategies to each sector, enabling
            innovation, efficiency, and growth at scale.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Resilient financial systems powered by secure, compliant IT architecture.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Enabling digital health innovation through strategic technology planning.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Optimized omnichannel IT for retail transformation and customer experience.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Smart factory integration and IT modernization strategies.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={ind.img}
                  alt={ind.name}
                  width={400}
                  height={200}
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
            Impact-Driven Consulting Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Legacy to Cloud Strategy",
                img: "/servicesimages/online-banking.jpg",
                desc: "We guided a financial enterprise in cloud migration planning, reducing cost by 35%.",
                bullets: [
                  "Cloud strategy roadmap",
                  "Risk mitigation plan",
                  "Increased agility",
                ],
              },
              {
                title: "Healthcare IT Assessment",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Optimized IT operations for a hospital chain with modern digital platforms.",
                bullets: [
                  "Workflow automation",
                  "Improved patient experience",
                  "Faster diagnostics",
                ],
              },
              {
                title: "Retail Tech Strategy",
                img: "/servicesimages/retailerp.webp",
                desc: "Built omnichannel strategy leading to 50% revenue growth in 1 year.",
                bullets: [
                  "ERP &amp; CRM alignment",
                  "Enhanced CX journey",
                  "Integrated analytics",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-xl"
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <Image
                    src={cs.img}
                    alt={cs.title}
                    width={600}
                    height={400}
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
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Trusted Globally</h2>
          <p className="text-xl mb-4">
            We deliver strategic technology advisory across 65+ countries with
            deep domain knowledge and cultural context.
          </p>
          <p className="text-gray-300">
            Global reach. Local impact. Future-proof consulting.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Rethink Your IT Strategy?
          </h2>
          <p className="text-lg mb-6">
            Connect with Prasunet&apos;s consultants to create powerful IT
            blueprints that drive transformation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
