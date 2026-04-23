"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import Head from "next/head";
import Script from "next/script";
import {
  FaChalkboardTeacher,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaRegQuestionCircle,
} from "react-icons/fa";

// ✅ List of European countries with flag codes
const europeanCountries = [
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "Italy", code: "it" },
  { name: "Spain", code: "es" },
  { name: "United Kingdom", code: "gb" },
  { name: "Netherlands", code: "nl" },
  { name: "Belgium", code: "be" },
  { name: "Portugal", code: "pt" },
  { name: "Sweden", code: "se" },
  { name: "Norway", code: "no" },
  { name: "Denmark", code: "dk" },
  { name: "Finland", code: "fi" },
  { name: "Poland", code: "pl" },
  { name: "Greece", code: "gr" },
  { name: "Austria", code: "at" },
  { name: "Switzerland", code: "ch" },
  { name: "Ireland", code: "ie" },
  { name: "Czech Republic", code: "cz" },
  { name: "Hungary", code: "hu" },
  { name: "Romania", code: "ro" },
];

export default function EuropeanProgramPage() {
  return (
    <>
      {/* ✅ Google AdSense + SEO */}
      <Head>
        <meta
          name="google-adsense-account"
          content="ca-pub-9096209867795576"
        />
      </Head>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9096209867795576"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <div className="bg-gray-50 dark:bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center">
          <Image
            src="/europeprogram.png"
            alt="European Student Empowerment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              European Student Empowerment Program
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Empowering Europe’s youth through mentorship, scholarships, 
              cross-border opportunities, and global networking. 
              Designed for students ready to innovate and lead.
            </p>
            <Link href="https://forms.gle/U6BmgNSk7TJCpLik9">
              <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg">
                Join the Program
              </button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
            About the Program
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              The <strong>European Student Empowerment Program (ESEP)</strong> connects talented students 
              across Europe with mentorship, scholarships, and innovation-driven opportunities. 
            </p>
            <p>
              ESEP is designed to break barriers and provide young people with resources 
              to build careers in technology, research, entrepreneurship, and leadership.
            </p>
            <p>
              Whether in high school, university, or early professional stages — 
              this program prepares Europe’s next generation to lead globally.
            </p>
          </div>
        </section>

        {/* Program Features */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
            What You’ll Gain
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <FaChalkboardTeacher className="text-blue-600 text-3xl mb-3" />
                ),
                title: "Mentorship",
                desc: "Guidance from European professors, entrepreneurs, and global leaders.",
              },
              {
                icon: <FaGlobe className="text-blue-600 text-3xl mb-3" />,
                title: "Scholarship Guidance",
                desc: "Learn how to apply for European and international scholarships and grants.",
              },
              {
                icon: <FaUsers className="text-blue-600 text-3xl mb-3" />,
                title: "Networking",
                desc: "Join a diverse community of European students and collaborate across borders.",
              },
              {
                icon: <FaLightbulb className="text-blue-600 text-3xl mb-3" />,
                title: "Innovation Labs",
                desc: "Participate in hackathons, research programs, and entrepreneurship workshops.",
              },
              {
                icon: <FaRocket className="text-blue-600 text-3xl mb-3" />,
                title: "Global Exposure",
                desc: "Access internships, exchange programs, and career pathways across Europe and beyond.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 py-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
            Your Journey With ESEP
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                step: "Step 1",
                title: "Apply",
                desc: "Submit your application and share your goals.",
              },
              {
                step: "Step 2",
                title: "Mentorship",
                desc: "Connect with mentors and kickstart your learning journey.",
              },
              {
                step: "Step 3",
                title: "Scholarships",
                desc: "Get support for European and international opportunities.",
              },
              {
                step: "Step 4",
                title: "Innovation & Impact",
                desc: "Work on projects, research, and global internships.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h4 className="text-lg font-semibold text-blue-600">{s.step}</h4>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* European Countries with Flags */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
            European Countries We Support
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {europeanCountries.map((country) => (
              <div
                key={country.code}
                className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-xl transition"
              >
                <Image
                  src={`https://flagcdn.com/w320/${country.code}.png`}
                  alt={country.name}
                  width={160}
                  height={100}
                  className="rounded-md object-cover"
                />
                <p className="mt-2 text-center font-medium">{country.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-blue-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold mb-12 text-gray-900 dark:text-white">
              Voices of Change
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Anna",
                  role: "Engineering Student",
                  text: "The mentorship helped me apply for a scholarship in Germany successfully.",
                },
                {
                  name: "Luca",
                  role: "Future Entrepreneur",
                  text: "ESEP gave me access to innovation labs and networking I never thought possible.",
                },
                {
                  name: "Sofia",
                  role: "Scholarship Recipient",
                  text: "I gained confidence and landed an exchange program in Spain!",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
                >
                  <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                    {t.text}
                  </p>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                q: "Who can apply?",
                a: "High school, university students, and young professionals across Europe.",
              },
              {
                q: "Is the program free?",
                a: "Yes, joining ESEP is free. Some exchange opportunities may have costs covered by partners.",
              },
              {
                q: "How long does the program last?",
                a: "The mentorship track runs for 6 months, but alumni stay connected for life.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              >
                <div className="flex items-center mb-2">
                  <FaRegQuestionCircle className="text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
