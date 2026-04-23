"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaUsers,
  FaCogs,
  FaCertificate,
  FaCloud,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ITTrainingSkillsDevelopment() {
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
            src="/servicesvideo/trainingvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            IT Training & Skills Development
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Unlock your potential with hands-on IT training programs designed to
            empower professionals with real-world skills for the digital era.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700"
          >
            Start Learning Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Training Programs"
          className="rounded-2xl shadow-2xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Build Future-Ready IT Skills
          </h2>
          <p className="text-gray-700 mb-5">
            Our IT training and skills development programs are tailored for
            individuals and enterprises seeking to stay ahead in a rapidly
            evolving digital world. From coding to cloud, we create career
            pathways through structured, practical learning.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Hands-on coding bootcamps</li>
            <li>Cloud & DevOps skill development</li>
            <li>Cybersecurity training & certification</li>
            <li>Corporate upskilling programs</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Training Programs
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer practical and industry-recognized training programs that
            equip learners with the skills required for today’s IT careers.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaLaptopCode size={30} />,
                title: "Full-Stack Development",
                desc: "Master front-end and back-end development with real-world projects.",
              },
              {
                icon: <FaChalkboardTeacher size={30} />,
                title: "Corporate IT Training",
                desc: "Customized upskilling programs for enterprise teams.",
              },
              {
                icon: <FaUsers size={30} />,
                title: "Soft Skills for IT",
                desc: "Enhance communication, teamwork, and leadership for tech professionals.",
              },
              {
                icon: <FaCogs size={30} />,
                title: "DevOps & Cloud",
                desc: "Hands-on labs for AWS, Azure, CI/CD pipelines, and automation.",
              },
              {
                icon: <FaCertificate size={30} />,
                title: "Certification Prep",
                desc: "Guided preparation for global IT certifications (AWS, Azure, CompTIA).",
              },
              {
                icon: <FaCloud size={30} />,
                title: "Emerging Tech",
                desc: "Stay ahead with training on AI, Data Science, and Blockchain.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
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
            Training Across Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our skill development programs are designed to meet the needs of
            professionals across diverse industries.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Training finance professionals with digital and data-driven skills.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Upskilling healthcare teams with IT and digital transformation skills.",
              },
              {
                name: "Retail",
                img: "/servicesimages/retail.jpeg",
                text: "Equipping retail professionals with e-commerce and ERP expertise.",
              },
              {
                name: "Manufacturing",
                img: "/servicesimages/manufacturing.jpeg",
                text: "Industry 4.0 training to adapt to smart factory technologies.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
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

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Learner Success Stories
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "From Graduate to Full-Stack Developer",
                img: "/servicesimages/online-banking.jpg",
                desc: "Our bootcamp helped a fresh graduate transition into a software developer role within 6 months.",
                bullets: [
                  "Project-based learning",
                  "Career mentorship",
                  "Job placement support",
                ],
              },
              {
                title: "Healthcare Staff Upskilling",
                img: "/servicesimages/healthcareai.jpg",
                desc: "We trained a hospital team to adopt digital platforms, boosting patient care efficiency.",
                bullets: [
                  "Digital workflow adoption",
                  "EHR training",
                  "Improved care delivery",
                ],
              },
              {
                title: "Retail Workforce Transformation",
                img: "/servicesimages/retailerp.webp",
                desc: "Empowered retail staff with ERP and e-commerce tools, driving 40% sales growth.",
                bullets: [
                  "ERP/CRM training",
                  "E-commerce platforms",
                  "Customer experience enhancement",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-xl"
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

      {/* Global Reach Section with Video */}
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
          <h2 className="text-5xl font-bold mb-6">Global Learning Community</h2>
          <p className="text-xl mb-4">
            Our learners span across 50+ countries, building IT careers with
            globally recognized skills.
          </p>
          <p className="text-gray-300">
            Learn anywhere. Grow everywhere. Connect globally.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Upgrade Your IT Skills?
          </h2>
          <p className="text-lg mb-6">
            Join our IT training programs and take your career to the next
            level.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Enroll Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
