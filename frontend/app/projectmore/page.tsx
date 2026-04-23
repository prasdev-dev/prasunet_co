"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Sample project data
const projects = [
  {
    id: 1,
    title: "AI-Based Voice Recognition System",
    category: "AI & ML",
    description:
      "A speech-to-text conversion tool with high accuracy and real-time processing, designed to enhance accessibility and productivity.",
    image: "/project1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Autonomous Web Crawler for Detecting Deepfake Content",
    category: "Cybersecurity & AI",
    description:
      "AI-powered crawler to detect deepfake videos and images across web platforms, helping prevent misinformation and enhance online security.",
    image: "/project2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce Platform for SMEs",
    category: "Web Development",
    description:
      "End-to-end e-commerce solution for small and medium businesses, with seamless payment integration and inventory management.",
    image: "/project3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "IoT Smart Agriculture System",
    category: "IoT & Automation",
    description:
      "A sensor-based monitoring system to optimize irrigation, soil quality, and crop yield with real-time alerts for farmers.",
    image: "/project4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Blockchain Supply Chain Tracker",
    category: "Blockchain",
    description:
      "Secure and transparent supply chain tracking solution using blockchain, improving accountability and traceability for enterprises.",
    image: "/project5.jpg",
    link: "#",
  },
];

const ProjectMore = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
  Explore Prasunet&apos;s wide range of innovative projects across AI, Web Development, Cybersecurity, IoT, Blockchain, and more. Each project demonstrates our expertise, creativity, and impact in driving digital transformation.
</p>

        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-500 font-semibold">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold mt-2">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                  {project.description}
                </p>
                <Link href={project.link}>
                  <button className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md">
                    View Project
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Want to Collaborate with Us?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            If you are an entrepreneur, investor, or tech enthusiast, join us to create impactful projects together. Explore innovation and scale your ideas with Prasunet.
          </p>
          <Link href="#">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectMore;
