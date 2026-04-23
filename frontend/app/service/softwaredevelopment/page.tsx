"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaCloud, FaShieldAlt, FaCogs } from "react-icons/fa";
import Image from "next/image";
import Footer from "@/components/home/footer-section";
import Navbar from "@/components/home/header/navbar";

export default function SoftwareDevelopment() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section with Background Video */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="/servicesvideo/softwaredevlopmentvideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Software Development Services
          </motion.h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Custom software solutions designed to accelerate digital
            transformation, enhance efficiency, and drive business growth.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-gray-600 mb-4">
              At Prasunet, we craft scalable and innovative software tailored to
              your business needs. From enterprise applications to SaaS
              platforms, we ensure your business stays ahead.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>End-to-end software development</li>
              <li>Agile methodology &amp; rapid prototyping</li>
              <li>Scalable cloud-native architectures</li>
              <li>Secure and future-ready solutions</li>
            </ul>
          </div>
          <Image
            src="/servicesimages/softwaredevelopmentimg1.jpg"
            alt="Software Development"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 via-blue-50 to-green-100 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-gray-800"
          >
            Transformative Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Empowering businesses with next-gen technology solutions that
            combine innovation, scalability, and security.
          </motion.p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLaptopCode size={40} />,
                title: "Web & Mobile Apps",
                desc: "Crafting responsive, user-centric applications that deliver seamless experiences across platforms.",
              },
              {
                icon: <FaCloud size={40} />,
                title: "Cloud Solutions",
                desc: "Designing cloud-native, scalable infrastructures that power business agility and innovation.",
              },
              {
                icon: <FaShieldAlt size={40} />,
                title: "Cybersecurity",
                desc: "Embedding enterprise-grade security to safeguard applications, data, and business integrity.",
              },
              {
                icon: <FaCogs size={40} />,
                title: "Enterprise Systems",
                desc: "Transforming operations with ERP, CRM, and intelligent workflow automation solutions.",
              },
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="bg-white shadow-lg p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition transform duration-300"
              >
                <div className="text-blue-700 mb-4 flex justify-center">
                  {cap.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-800">
                  {cap.title}
                </h3>
                <p className="text-gray-600">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-20 bg-gradient-to-tr from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Driving Growth Across Industries
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            Partnering with organizations worldwide, we bring domain expertise
            and digital innovation to transform industries, create new
            opportunities, and accelerate growth.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                content:
                  "We help financial institutions leverage technology for faster and secure transactions, analytics, and compliance.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                content:
                  "Transforming healthcare with digital solutions, telemedicine, patient data analytics, and efficient operations.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                content:
                  "Enhancing retail experiences through e-commerce platforms, AI-driven recommendations, and inventory management.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                content:
                  "Optimizing production with automation, IoT solutions, and predictive maintenance strategies.",
              },
            ].map((ind, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative h-64 w-full rounded-2xl shadow-md overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${ind.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
                  <h3 className="font-bold text-lg mb-2">{ind.name}</h3>
                  <p className="text-sm">{ind.content}</p>
                </div>
                <div className="absolute bottom-0 w-full py-2 bg-black bg-opacity-40 text-white font-semibold text-lg">
                  {ind.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/servicesimages/buildingsomething.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            Building Confidence Through Innovation
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Agile & Scalable",
                desc: "Flexible development methodology ensuring faster delivery and adaptability to your needs.",
              },
              {
                title: "Cutting-Edge Technology",
                desc: "Leveraging AI, ML, Blockchain, and IoT to bring your ideas to life.",
              },
              {
                title: "Global Support",
                desc: "24/7 dedicated customer success and maintenance to ensure uninterrupted growth.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-90 text-gray-800 shadow-lg p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition transform duration-300"
              >
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Success Stories
          </h2>

          <div className="flex flex-col space-y-12">
            {[
              {
                title: "Banking App",
                desc: "Reduced processing time by 40% with a custom mobile solution.",
                img: "/servicesimages/online-banking.jpg",
                highlights: [
                  "40% faster transaction processing",
                  "Improved customer satisfaction",
                  "Seamless multi-platform experience",
                ],
              },
              {
                title: "Healthcare AI",
                desc: "AI-driven analytics improved patient care efficiency.",
                img: "/servicesimages/healthcareai.jpg",
                highlights: [
                  "Predictive patient care insights",
                  "Reduced operational bottlenecks",
                  "Enhanced diagnostic accuracy",
                ],
              },
              {
                title: "Retail ERP",
                desc: "ERP implementation boosted inventory accuracy by 70%.",
                img: "/servicesimages/retailerp.webp",
                highlights: [
                  "70% increase in inventory accuracy",
                  "Streamlined supply chain management",
                  "Optimized order fulfillment",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
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

                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{cs.title}</h3>
                  <p className="text-gray-700 text-base mb-4">{cs.desc}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {cs.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-gradient-to-tr from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
            Flexible Engagement Models
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Dedicated Team",
                desc: "A full-time, skilled team working seamlessly as your extended in-house experts.",
                img: "/servicesimages/dedicatedteams.jpeg",
              },
              {
                title: "Time & Material",
                desc: "Flexible engagement model ideal for evolving projects with changing requirements.",
                img: "/servicesimages/timeandmaterial.webp",
              },
              {
                title: "Fixed Price",
                desc: "Well-defined scope with predictable cost, timelines, and deliverables.",
                img: "/servicesimages/fixedprice.jpeg",
              },
              {
                title: "Consulting",
                desc: "Expert advisory for strategy, digital transformation, and process optimization.",
                img: "/servicesimages/consulting.jpeg",
              },
            ].map((model, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                <div className="h-40 w-full overflow-hidden">
                  <Image
                    src={model.img}
                    alt={model.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center flex flex-col justify-center">
                  <h3 className="font-bold text-xl mb-2 text-blue-800">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{model.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="relative py-24">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/servicesvideo/globetech.mp4"
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center text-white max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeIn">
            Global Presence
          </h2>
          <p className="text-xl md:text-2xl mb-6 animate-slideUp">
            Prasunet proudly serves clients in{" "}
            <span className="text-blue-400 font-bold animate-pulse">
              65+ countries
            </span>
            , bridging continents with innovative technology solutions.
          </p>
          <p className="text-gray-200 text-lg md:text-xl mb-8 animate-slideUp delay-200">
            Our global footprint ensures local expertise, seamless
            collaboration, and faster project delivery. From AI-powered
            platforms to enterprise solutions, we empower businesses worldwide
            to achieve growth, efficiency, and digital transformation.
          </p>
          <p className="text-gray-300 text-base md:text-lg animate-slideUp delay-400">
            With strategically located hubs, a network of skilled professionals,
            and cutting-edge technology, Prasunet connects innovation with
            impact—no matter where your business is.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 animate-fadeIn">
              Ready to Build the Future Together?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700 animate-slideUp delay-200">
              Partner with{" "}
              <span className="font-semibold text-blue-600">Prasunet</span> for
              innovative, scalable, and secure software solutions. Let&apos;s
              transform your ideas into reality with cutting-edge technology and
              a dedicated team.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-2xl"
            >
              Contact Us
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/servicesimages/contactus.png"
              alt="Build the Future"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg animate-fadeIn"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
