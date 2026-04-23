
"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [

  {
    title: "Software Development",
    image: "/ssoftware.jpeg",
    description: "Custom software development, web and mobile application development, enterprise solutions, and SaaS platforms.",
    href: "/service/softwaredevelopment"
  },
  { 
    title: "IT Consulting & Strategy", 
    image: "/sITconsulting.jpeg", 
    description: "Expert consulting and strategic guidance for IT infrastructure, digital transformation, automation, and project management.",
    href: "/service/itconsulting"
  },
  { 
    title: "E-commerce Solutions", 
    image: "/secommerce.jpg", 
    description: "Build powerful and feature-rich online stores with secure payment gateways, management systems,  more for seamless operations.",
    href: "/service/ecommerce"
  },
  { 
    title: "IT Support & Maintenance", 
    image: "/sitsupport.jpeg", 
    description: "Reliable IT support, including help desk services, remote troubleshooting, server maintenance, hardware support.",
    href: "/service/itsupport"
  },
  { 
    title: "Business Intelligence & Analytics", 
    image: "/sbi.jpg", 
    description: "Turn data into insights with BI tools, dashboards, and predictive analytics.",
    href: "/service/businessintelligence"
  },
  { 
    title: "Cloud Services", 
    image: "/scloudservices.jpeg", 
    description: "Cloud migration and managed computing solutions on AWS, Azure, and Google Cloud, along with storage and backup solutions.",
    href: "/service/cloudservices"
  },
  { 
    title: "Cybersecurity Services", 
    image: "/scybersecurity.jpeg", 
    description: "Protect your business with network security, data encryption, vulnerability assessments, and risk management.",
    href: "/service/cybersecurity"
  },
   { 
    title: "Networking & Infrastructure", 
    image: "/snetwork.jpeg", 
    description: "Efficient network setup and management, VPN configurations, VoIP services, and wireless networking.",
    href: "/service/networking"
  },
    { 
    title: "Custom Software Integration", 
    image: "/scustoionmintegrat.jpg", 
    description: "Seamlessly integrate third-party software into your existing systems for enhanced functionality.",
    href: "/service/customintegration"
  },
  { 
    title: "UI/UX Design & Prototyping", 
    image: "/suiux.jpg", 
    description: "Craft intuitive interfaces and interactive prototypes for web and mobile applications.",
    href: "/service/uiux"
  },

  { 
    title: "SaaS (Software as a Service) Development", 
    image: "/ssaas.jpg", 
    description: "Create scalable, cloud-based SaaS applications for businesses of all sizes.",
    href: "/service/saas"
  },
 
  { 
    title: "API Development & Integration", 
    image: "/sapi.jpg", 
    description: "Build robust APIs and integrate third-party services seamlessly into your applications.",
    href: "/service/api"
  },
  { 
    title: "AI & Machine Learning", 
    image: "/sai.jpeg", 
    description: "Harness AI for automation, chatbot development, and machine learning models tailored to your business needs.",
    href: "/service/ai"
  },
  { 
    title: "Internet of Things (IoT)", 
    image: "/siot.jpeg", 
    description: "Smart device integration, advanced IoT analytics, and industrial IoT solutions to drive innovation and operational efficiency.",
    href: "/service/iot"
  },
  { 
    title: "ERP & CRM Solutions", 
    image: "/serp.jpeg", 
    description: "Optimize business processes with Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) solutions.",
    href: "/service/erpcrm"
  },
  { 
    title: "Blockchain & Web3 Solutions", 
    image: "/sblockchain.jpeg", 
    description: "Leading-edge blockchain development, advanced smart contracts, NFT platforms, and comprehensive cryptocurrency solutions",
    href: "/service/blockchain"
  },
  { 
    title: "DevOps & Automation Services", 
    image: "/sdevops.jpg", 
    description: "Streamline development pipelines, automate deployments, and enhance collaboration.",
    href: "/service/devops"
  },

  { 
    title: "Mobile App Development (iOS & Android)", 
    image: "/smobileapp.jpg", 
    description: "Build powerful, user-friendly apps tailored for iOS and Android platforms.",
    href: "/service/mobileapp"
  },
  { 
    title: "Web Development & Design", 
    image: "/swebDesign.jpeg", 
    description: "Comprehensive website development, UI/UX design, e-commerce solutions, CMS platforms like WordPress Shopify.",
    href: "/service/webdevelopment"
  },
  
 
  { 
    title: "Virtual & Augmented Reality (VR/AR) Solutions", 
    image: "/svrar.jpg", 
    description: "Create immersive VR/AR experiences for training, marketing, and interactive solutions.",
    href: "/service/vrar"
  },

  { 
    title: "IT Project Management", 
    image: "/sprojectmgmt.jpg", 
    description: "Ensure projects are delivered on time and on budget with expert IT management services.",
    href: "/service/projectmanagement"
  },
  { 
    title: "Robotic Process Automation (RPA)", 
    image: "/srpa.jpg", 
    description: "Automate repetitive business tasks using advanced RPA technologies.",
    href: "/service/rpa"
  },
  { 
    title: "IT Training & Skill Development", 
    image: "/straining.jpg", 
    description: "Empower your workforce with IT skill development and professional training programs.",
    href: "/service/training"
  },
   
  { 
    title: "Game Development", 
    image: "/sgamedev.jpg", 
    description: "Develop engaging, high-performance games for mobile, console, and web platforms.",
    href: "/service/gamedev"
  }, { 
    title: "IT Compliance & Risk Management", 
    image: "/scompliance.jpg", 
    description: "Ensure regulatory compliance and manage IT risks effectively.",
    href: "/service/compliance"
  },
  { 
    title: "Managed IT Services", 
    image: "/smanagedit.jpg", 
    description: "Comprehensive IT support, monitoring, and management services for businesses.",
    href: "/service/managedit"
  },
  { 
    title: "Quality Assurance & Testing Services", 
    image: "/sqa.jpg", 
    description: "Ensure software reliability with manual and automated testing solutions.",
    href: "/service/qa"
  },
  
  { 
    title: "Legacy System Modernization", 
    image: "/slegacy.jpg", 
    description: "Upgrade and modernize outdated software to improve performance and usability.",
    href: "/service/legacy"
  },
  
   { 
    title: "Big Data Solutions", 
    image: "/sbigdata.jpg", 
    description: "Leverage cutting-edge big data frameworks to process, analyze, and visualize complex, dynamic, and large-scale data sets.",
    href: "/service/bigdata"
  },
    { 
    title: "Data Services", 
    image: "/sdataservices.jpeg", 
    description: "Database management, robust data analytics, secure migration, and big data solutions for data-driven intelligent decision-making",
    href: "/service/dataservices"
  },
  { 
    title: "Embedded Systems ", 
    image: "/sembedded.jpg", 
    description: "Design and program innovative, reliable embedded software for smart devices and IoT hardware.",
    href: "/service/embedded"
  },{ 
    title: "Digital Marketing & SEO Services", 
    image: "/smarketing.jpg", 
    description: "Boost your online presence with SEO, content marketing, PPC, and social media strategies.",
    href: "/service/digitalmarketing"
  },
  
];

const categories = [
  "All",
  "Consulting",
  "Engineering",
  "Cloud & Infrastructure",
  "Data & AI",
  "Security & Compliance",
  "Business Solutions",
  "Emerging Tech",
];

const getCategory = (title: string) => {
  const value = title.toLowerCase();

  if (value.includes("consulting") || value.includes("project management") || value.includes("training")) {
    return "Consulting";
  }
  if (
    value.includes("software") ||
    value.includes("web development") ||
    value.includes("mobile app") ||
    value.includes("api") ||
    value.includes("qa") ||
    value.includes("testing") ||
    value.includes("legacy") ||
    value.includes("integration")
  ) {
    return "Engineering";
  }
  if (
    value.includes("cloud") ||
    value.includes("network") ||
    value.includes("managed it") ||
    value.includes("support") ||
    value.includes("devops")
  ) {
    return "Cloud & Infrastructure";
  }
  if (
    value.includes("data") ||
    value.includes("analytics") ||
    value.includes("ai") ||
    value.includes("machine learning") ||
    value.includes("business intelligence") ||
    value.includes("rpa")
  ) {
    return "Data & AI";
  }
  if (value.includes("cybersecurity") || value.includes("compliance") || value.includes("risk")) {
    return "Security & Compliance";
  }
  if (
    value.includes("erp") ||
    value.includes("crm") ||
    value.includes("e-commerce") ||
    value.includes("marketing")
  ) {
    return "Business Solutions";
  }
  if (
    value.includes("iot") ||
    value.includes("blockchain") ||
    value.includes("web3") ||
    value.includes("vr/ar") ||
    value.includes("game") ||
    value.includes("embedded")
  ) {
    return "Emerging Tech";
  }

  return "Engineering";
};



const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  const filteredServices = useMemo(() => {
    const categoryMatched =
      activeCategory === "All"
        ? services
        : services.filter((service) => getCategory(service.title) === activeCategory);

    const query = searchTerm.trim().toLowerCase();
    if (!query) return categoryMatched;

    return categoryMatched.filter(
      (service) =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        getCategory(service.title).toLowerCase().includes(query)
    );
  }, [activeCategory, searchTerm]);

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 8);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.18em] text-emerald-300 font-semibold">
            Global IT Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white leading-tight">
            Enterprise Technology Solutions for Worldwide Businesses
          </h2>
          <p className="mt-5 text-slate-300 text-base md:text-lg">
            Explore our complete portfolio of services designed to help startups,
            SMEs, and global enterprises modernize, scale, and stay competitive.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-[15px] font-medium border transition ${
                activeCategory === category
                  ? "bg-emerald-500 text-white border-emerald-400 shadow-[0_8px_20px_rgba(16,185,129,0.35)]"
                  : "bg-slate-900/70 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-slate-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-7 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-12">
          {displayedServices.map((service, index) => (
            <Link key={index} href={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group overflow-hidden rounded-2xl border border-slate-700/70 shadow-[0_10px_35px_rgba(2,6,23,0.45)] bg-slate-900/80 cursor-pointer min-h-[280px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/65 to-slate-950/95 transition-opacity duration-300 ease-in-out" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 opacity-75 group-hover:opacity-100 transition" />
                <div className="relative z-10 flex flex-col justify-end h-full p-6 text-left">
                  <span className="inline-flex w-fit text-[11px] uppercase tracking-[0.15em] bg-white/10 text-slate-100 rounded-full px-3 py-1 mb-3 border border-white/15">
                    {getCategory(service.title)}
                  </span>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-slate-200/95 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {service.description}
                  </p>
                  <p className="mt-4 text-emerald-300 text-sm font-semibold tracking-wide">
                    Learn more →
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        {!showAll && filteredServices.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition"
            >
              View All Services
            </button>
          </div>
        )}
        {showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition"
            >
              Show Less
            </button>
          </div>
        )}
        {filteredServices.length === 0 && (
          <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/60 p-8 text-center">
            <p className="text-lg font-semibold text-white">No services match your search.</p>
            <p className="text-slate-300 mt-2">
              Try a different keyword or clear filters to browse all global IT services.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
