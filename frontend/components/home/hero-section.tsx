"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const backgroundData = [
  {
    src: "/background1.jpg",
    title: "Enterprise-Ready Digital Engineering",
    content:
      "We partner with ambitious teams to design, build, and modernize software platforms that improve performance, reliability, and business outcomes."
  },
  {
    src: "/background2.jpg",
    title: "Reliable Delivery at Scale",
    content:
      "From product strategy to deployment, our delivery model helps organizations reduce time to market while maintaining quality, security, and operational efficiency."
  },
  {
    src: "/background3.jpg",
    title: "Long-Term Technology Partnership",
    content:
      "Our cross-functional teams combine engineering expertise and domain insight to support continuous innovation, modernization, and measurable growth."
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden z-10">
      {/* Background Image Transition */}
      <div className="absolute inset-0">
        {backgroundData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row h-screen w-full items-end md:items-center pb-20 px-6 md:px-20 text-center md:text-left">
        {/* Left Side: Heading (Positioned Lower on Mobile) */}
        <div className="max-w-xl mb-6 md:mb-10 pt-16 sm:pt-20 md:pt-0">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-200 mb-3">
            Trusted Technology Partner
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Build Secure, Scalable Digital Products
            <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              for Modern Enterprises
            </span>
          </h1>
          <p className="mt-5 text-sm sm:text-base text-slate-200 max-w-lg">
            Prasunet delivers consulting, engineering, and managed technology services that help businesses modernize systems and achieve faster, predictable outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-md bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/service"
              className="px-5 py-3 rounded-md border border-white/60 text-white font-semibold hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Middle Partition Line (Hidden on Small Screens) */}
        <div className="hidden md:block h-40 w-[5px] bg-blue-300 bg-opacity-50 mx-6 rounded-full"></div>

        {/* Right Side: Dynamic Description */}
        <div className="max-w-sm flex flex-col space-y-3 p-4 bg-black/25 rounded-xl border border-white/15 backdrop-blur-[2px]">
          <h2 className="text-lg md:text-xl font-semibold text-white">
            {backgroundData[currentIndex].title}
          </h2>
          <p className="text-sm md:text-base text-slate-100">
            {backgroundData[currentIndex].content}
          </p>
          <Link href="/Learnmore" className="text-emerald-300 font-semibold hover:underline">
            Learn more about our approach →
          </Link>
        </div>
      </div>

      {/* Wave Animation */}
      {/* Wave Animation */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden h-[100px] md:h-[120px]">
  <div
    className="absolute bottom-0 left-0 w-[200%] h-full bg-bottom bg-repeat-x"
    style={{
      backgroundImage: "url('/wave.png')",
      backgroundSize: "contain",
      animation: "waveMove 8s linear infinite",
    }}
  ></div>

  <div
    className="absolute bottom-0 left-0 w-[200%] h-full opacity-40 bg-bottom bg-repeat-x"
    style={{
      backgroundImage: "url('/wave.png')",
      backgroundSize: "contain",
      animation: "waveMove 6s linear infinite reverse",
    }}
  ></div>

  <div
    className="absolute bottom-0 left-0 w-[200%] h-full opacity-70 bg-bottom bg-repeat-x"
    style={{
      backgroundImage: "url('/wave.png')",
      backgroundSize: "contain",
      animation: "waveMove 4s linear infinite",
    }}
  ></div>
</div>

{/* Smooth Keyframes */}
<style jsx>{`
  @keyframes waveMove {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>

    </section>
  );
};

export default HeroSection;
