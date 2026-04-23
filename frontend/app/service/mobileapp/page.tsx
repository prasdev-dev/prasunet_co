"use client";

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function MobileAppDevelopment() {
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
            src="/servicesvideo/mobileappvideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Mobile App Development (iOS & Android)
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Delivering seamless, scalable, and engaging mobile solutions for
            enterprises, startups, and innovators across iOS and Android
            platforms.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
          >
            Build Your App Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/servicesimages/softwaredevelopmentimg1.jpg"
          alt="Mobile Development"
          className="rounded-xl shadow-2xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Crafting Next-Gen Mobile Experiences
          </h2>
          <p className="text-gray-700 mb-5">
            At Prasunet, we design and develop high-performance mobile
            applications tailored to your business needs. Whether you’re looking
            for a native iOS app, Android app, or cross-platform solution, we
            deliver user-friendly and future-ready products.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Native iOS and Android development</li>
            <li>Cross-platform app solutions</li>
            <li>Scalable, secure, and optimized architecture</li>
            <li>UI/UX-driven design for engaging experiences</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Mobile Development Capabilities
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From ideation to launch, we provide end-to-end mobile development
            services, ensuring apps that perform flawlessly and scale with your
            growth.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaApple size={30} />,
                title: "iOS Development",
                desc: "Build feature-rich, secure, and user-friendly apps for Apple devices.",
              },
              {
                icon: <FaAndroid size={30} />,
                title: "Android Development",
                desc: "Create scalable, high-performance apps for Android smartphones and tablets.",
              },
              {
                icon: <FaCode size={30} />,
                title: "Cross-Platform Apps",
                desc: "One codebase, multiple platforms with React Native and Flutter solutions.",
              },
              {
                icon: <FaRocket size={30} />,
                title: "App Launch & Deployment",
                desc: "Seamless publishing to App Store and Google Play with compliance assurance.",
              },
              {
                icon: <FaMobileAlt size={30} />,
                title: "UI/UX Design",
                desc: "Intuitive, engaging interfaces designed for smooth user journeys.",
              },
              {
                icon: <FaUsers size={30} />,
                title: "Maintenance & Support",
                desc: "Continuous updates, feature upgrades, and bug fixes post-launch.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="text-indigo-700 mb-4">{item.icon}</div>
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
            Transforming Industries with Mobile Apps
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We empower diverse industries with customized mobile solutions that
            enhance engagement, productivity, and innovation.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "E-commerce",
                img: "/servicesimages/retail.jpeg",
                text: "Delivering seamless shopping experiences with mobile-first commerce.",
              },
              {
                name: "Healthcare",
                img: "/servicesimages/helthcare.jpeg",
                text: "Smart health apps improving care, patient engagement, and diagnostics.",
              },
              {
                name: "Finance",
                img: "/servicesimages/finance.jpeg",
                text: "Secure banking and fintech apps driving financial inclusion.",
              },
              {
                name: "Education",
                img: "/servicesimages/manufacturing.jpeg",
                text: "E-learning apps designed for remote learning and interactive education.",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
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
            Success Stories in Mobile Innovation
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Fintech App for Secure Payments",
                img: "/servicesimages/online-banking.jpg",
                desc: "We developed a mobile payment app enabling secure transactions with a 40% increase in user adoption.",
                bullets: ["Multi-factor authentication", "Seamless UI", "Fast onboarding"],
              },
              {
                title: "Healthcare Patient App",
                img: "/servicesimages/healthcareai.jpg",
                desc: "Designed a mobile app for hospitals improving patient communication and remote consultation.",
                bullets: ["Video consultations", "Medication reminders", "Health tracking"],
              },
              {
                title: "Retail Shopping App",
                img: "/servicesimages/retailerp.webp",
                desc: "Created an omnichannel shopping experience with real-time inventory and personalized offers.",
                bullets: ["Push notifications", "Secure checkout", "AI-based product suggestions"],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-indigo-50 rounded-xl overflow-hidden shadow hover:shadow-xl"
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

      {/* Global Reach Video */}
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
          <h2 className="text-5xl font-bold mb-6">Apps Loved Globally</h2>
          <p className="text-xl mb-4">
            Our apps are trusted by users across 60+ countries, delivering
            innovation and impact at scale.
          </p>
          <p className="text-gray-300">
            Global adoption. Local experiences. World-class apps.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your Next Mobile App?
          </h2>
          <p className="text-lg mb-6">
            Partner with Prasunet to create cutting-edge iOS and Android apps
            that users love.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-8 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
