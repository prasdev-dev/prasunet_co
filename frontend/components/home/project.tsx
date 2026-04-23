"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects-data";
import { useEffect, useMemo, useState } from "react";

const ProjectSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const visibleProjects = useMemo(() => {
    return Array.from({ length: 3 }, (_, idx) => projects[(startIndex + idx) % projects.length]);
  }, [startIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setStartIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-lg relative overflow-hidden">
      {/* Decorative Gradient Blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 blur-3xl opacity-30 -z-10"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Featured <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our innovative projects designed to deliver real-world impact and cutting-edge solutions.
        </p>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={startIndex}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visibleProjects.map((project) => (
              <article
                key={`${project.id}-${startIndex}`}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden group relative"
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={280}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4">
                    <p className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full">{project.industry}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                  <p className="text-gray-600 text-sm mt-2 mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-blue-700 font-semibold hover:underline"
                  >
                    View Project Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.min(10, projects.length) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx >= startIndex ? 1 : -1);
              setStartIndex(idx);
            }}
            className={`w-2.5 h-2.5 rounded-full transition ${idx === startIndex ? "bg-blue-600" : "bg-blue-200"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300"
        >
          Explore More Projects →
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
