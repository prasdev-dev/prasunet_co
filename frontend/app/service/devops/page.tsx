"use client";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaCogs,
  FaSyncAlt,
  FaServer,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function DevOpsAutomationServices() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/servicesvideo/devopsvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            DevOps & Automation Services
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Accelerate software delivery, improve reliability, and optimize
            workflows with cutting-edge DevOps and automation solutions.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/servicesimages/softwaredevelopmentimg1.jpg"
            alt="DevOps Automation"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Empower Your Business with DevOps & Automation
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our DevOps and automation services streamline your software
            development lifecycle, reduce manual processes, and ensure rapid,
            secure deployments. With continuous integration, automated
            monitoring, and cloud-native strategies, we help you achieve
            scalability and resilience.
          </p>
          <ul className="space-y-3 text-gray-800 font-medium">
            <li>✔ Continuous Integration & Continuous Deployment (CI/CD)</li>
            <li>✔ Cloud Infrastructure Automation</li>
            <li>✔ Infrastructure as Code (IaC)</li>
            <li>✔ Automated Monitoring & Security Compliance</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Our DevOps Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your development operations with automation and smart
            processes to deliver value faster and more efficiently.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FaCloud size={30} />,
              title: "Cloud Automation",
              desc: "Leverage AWS, Azure, and GCP automation for scalable deployments.",
            },
            {
              icon: <FaCogs size={30} />,
              title: "Infrastructure as Code",
              desc: "Automate infrastructure with Terraform, Ansible, and more.",
            },
            {
              icon: <FaSyncAlt size={30} />,
              title: "CI/CD Pipelines",
              desc: "Streamline code integration and deployment with Jenkins, GitHub Actions.",
            },
            {
              icon: <FaServer size={30} />,
              title: "Containerization",
              desc: "Docker and Kubernetes for optimized, portable applications.",
            },
            {
              icon: <FaRocket size={30} />,
              title: "Automated Testing",
              desc: "Speed up releases with robust automated testing frameworks.",
            },
            {
              icon: <FaShieldAlt size={30} />,
              title: "DevSecOps",
              desc: "Embed security into your DevOps pipeline for compliance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-blue-700 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            DevOps Across Industries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our automation expertise powers digital transformation across key
            sectors.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Finance",
              img: "/servicesimages/finance.jpeg",
              text: "Secure, compliant CI/CD pipelines for fintech innovation.",
            },
            {
              name: "Healthcare",
              img: "/servicesimages/helthcare.jpeg",
              text: "HIPAA-compliant automation for faster healthcare solutions.",
            },
            {
              name: "Retail",
              img: "/servicesimages/retail.jpeg",
              text: "Deploy updates seamlessly for omnichannel retail experiences.",
            },
            {
              name: "Manufacturing",
              img: "/servicesimages/manufacturing.jpeg",
              text: "Automated systems for smart factories and predictive analytics.",
            },
          ].map((ind, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={ind.img}
                alt={ind.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg text-blue-700 mb-2">
                  {ind.name}
                </h3>
                <p className="text-gray-600 text-sm">{ind.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Real-World DevOps Impact
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "CI/CD for Banking Apps",
                img: "/servicesimages/online-banking.jpg",
                desc: "Implemented automated CI/CD pipelines, reducing release cycles by 50%.",
                bullets: [
                  "Enhanced security checks",
                  "Faster feature deployment",
                  "Lower operational risk",
                ],
              },
              {
                title: "Healthcare Cloud Automation",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Migrated hospital systems to cloud with IaC for better scalability.",
                bullets: [
                  "Reduced downtime",
                  "Improved patient data security",
                  "24/7 monitoring setup",
                ],
              },
              {
                title: "Retail Kubernetes Deployment",
                img: "/servicesimages/retailerp.webp",
                desc: "Built Kubernetes clusters for microservices, boosting performance.",
                bullets: [
                  "High availability",
                  "Seamless scalability",
                  "Cost optimization",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="md:w-1/2">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
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

      {/* Global Presence Video */}
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
        <div className="relative max-w-4xl mx-auto text-center text-white z-10 px-6">
          <h2 className="text-5xl font-bold mb-4">Global DevOps Expertise</h2>
          <p className="text-lg mb-2">
            Delivering automated solutions across 60+ countries with
            enterprise-grade reliability.
          </p>
          <p className="text-gray-300">
            Faster releases. Stronger security. Global impact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Automate Your Operations?
        </h2>
        <p className="text-lg mb-6">
          Partner with us for DevOps excellence and automation at scale.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Schedule a Consultation
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
