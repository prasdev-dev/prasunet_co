"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import Head from "next/head";   // ✅ import Head
import Script from "next/script";
import {
  FaChalkboardTeacher,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaRegQuestionCircle,
} from "react-icons/fa";

// List of African countries with flag codes
const africanCountries = [
  { name: "Algeria", code: "dz" },
  { name: "Angola", code: "ao" },
  { name: "Benin", code: "bj" },
  { name: "Botswana", code: "bw" },
  { name: "Burkina Faso", code: "bf" },
  { name: "Burundi", code: "bi" },
  { name: "Cabo Verde", code: "cv" },
  { name: "Cameroon", code: "cm" },
  { name: "Central African Republic", code: "cf" },
  { name: "Chad", code: "td" },
  { name: "Comoros", code: "km" },
  { name: "Congo (Brazzaville)", code: "cg" },
  { name: "Congo (Kinshasa)", code: "cd" },
  { name: "Djibouti", code: "dj" },
  { name: "Egypt", code: "eg" },
  { name: "Equatorial Guinea", code: "gq" },
  { name: "Eritrea", code: "er" },
  { name: "Eswatini", code: "sz" },
  { name: "Ethiopia", code: "et" },
  { name: "Gabon", code: "ga" },
  { name: "Gambia", code: "gm" },
  { name: "Ghana", code: "gh" },
  { name: "Guinea", code: "gn" },
  { name: "Guinea-Bissau", code: "gw" },
  { name: "Ivory Coast", code: "ci" },
  { name: "Kenya", code: "ke" },
  { name: "Lesotho", code: "ls" },
  { name: "Liberia", code: "lr" },
  { name: "Libya", code: "ly" },
  { name: "Madagascar", code: "mg" },
  { name: "Malawi", code: "mw" },
  { name: "Mali", code: "ml" },
  { name: "Mauritania", code: "mr" },
  { name: "Mauritius", code: "mu" },
  { name: "Morocco", code: "ma" },
  { name: "Mozambique", code: "mz" },
  { name: "Namibia", code: "na" },
  { name: "Niger", code: "ne" },
  { name: "Nigeria", code: "ng" },
  { name: "Rwanda", code: "rw" },
  { name: "Sao Tome and Principe", code: "st" },
  { name: "Senegal", code: "sn" },
  { name: "Seychelles", code: "sc" },
  { name: "Sierra Leone", code: "sl" },
  { name: "Somalia", code: "so" },
  { name: "South Africa", code: "za" },
  { name: "South Sudan", code: "ss" },
  { name: "Sudan", code: "sd" },
  { name: "Tanzania", code: "tz" },
  { name: "Togo", code: "tg" },
  { name: "Tunisia", code: "tn" },
  { name: "Uganda", code: "ug" },
  { name: "Zambia", code: "zm" },
  { name: "Zimbabwe", code: "zw" },
];

export default function AfricaProgramPage() {
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
          src="/africaprogram.png"
          alt="African Student Empowerment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            African Student Empowerment Program
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Unlock your future with mentorship, scholarships, global
            opportunities, and leadership training — built specifically for
            African students ready to shape tomorrow.
          </p>
          <Link href="https://forms.gle/yD7gcShmmW6gMmW16">
            <button className="mt-8 px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg">
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
            The <strong>African Student Empowerment Program (ASEP)</strong> was
            created to bridge the gap between talent and opportunity. Many
            bright students across Africa face challenges in accessing global
            education, mentorship, and career pathways. ASEP exists to change
            that.
          </p>
          <p>
            Through a mix of mentorship, scholarship support, leadership
            training, and international networking, we aim to prepare African
            students not just for academic success, but for impactful leadership
            in their communities and across the world.
          </p>
          <p>
            Our program is open to high school and university students who are
            passionate about growth, innovation, and global collaboration.
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
                <FaChalkboardTeacher className="text-yellow-600 text-3xl mb-3" />
              ),
              title: "Mentorship",
              desc: "One-on-one and group mentorship from university professors, professionals, and alumni who understand the African student journey.",
            },
            {
              icon: <FaGlobe className="text-yellow-600 text-3xl mb-3" />,
              title: "Scholarship Guidance",
              desc: "Comprehensive training on applying to international universities with scholarships, financial aid, and grants.",
            },
            {
              icon: <FaUsers className="text-yellow-600 text-3xl mb-3" />,
              title: "Student Community",
              desc: "Join a thriving network of African youth, participate in student clubs, and collaborate on real-world projects.",
            },
            {
              icon: <FaLightbulb className="text-yellow-600 text-3xl mb-3" />,
              title: "Soft Skills Training",
              desc: "Interactive workshops on leadership, communication, entrepreneurship, and career readiness.",
            },
            {
              icon: <FaRocket className="text-yellow-600 text-3xl mb-3" />,
              title: "Global Opportunities",
              desc: "Access to internships, cultural exchange programs, and partnerships with international organizations.",
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
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Your Journey With ASEP
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            {
              step: "Step 1",
              title: "Apply",
              desc: "Submit your application and share your aspirations.",
            },
            {
              step: "Step 2",
              title: "Mentorship",
              desc: "Get matched with mentors and begin your learning journey.",
            },
            {
              step: "Step 3",
              title: "Scholarships",
              desc: "Receive guidance for international admissions and funding.",
            },
            {
              step: "Step 4",
              title: "Global Impact",
              desc: "Participate in internships, leadership programs, and exchanges.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-lg font-semibold text-yellow-600">{s.step}</h4>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* African Countries with Flags */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          African Countries We Support
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {africanCountries.map((country) => (
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
      <section className="bg-yellow-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-12 text-gray-900 dark:text-white">
            Voices of Inspiration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amina",
                role: "Scholarship Winner",
                text: "This program guided me step-by-step to secure admission abroad.",
              },
              {
                name: "Kwame",
                role: "Engineering Student",
                text: "Mentorship sessions helped me choose the right career path.",
              },
              {
                name: "Zara",
                role: "Future Leader",
                text: "The confidence & skills I gained opened doors to internships abroad.",
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
              a: "High school and university students across Africa who are motivated to grow academically and professionally.",
            },
            {
              q: "Is the program free?",
              a: "Yes, joining ASEP is completely free. Some opportunities like exchange programs may have partial costs covered by partners.",
            },
            {
              q: "How long does the program last?",
              a: "The core mentorship program runs for 6 months, but you stay connected to our community and opportunities for life.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <div className="flex items-center mb-2">
                <FaRegQuestionCircle className="text-yellow-600 mr-2" />
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


