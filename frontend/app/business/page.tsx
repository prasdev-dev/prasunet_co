'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Zap, TrendingUp, ArrowRight, Globe, Code, Cloud, Lock } from 'lucide-react';
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
export default function BusinessPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/business-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitMessage(`Error: ${result.error || 'Failed to submit inquiry'}`);
        return;
      }

      if (result.success) {
        setSubmitMessage(' Thank you! We will contact you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          message: ''
        });
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage(`Error: ${result.error || 'Failed to submit inquiry.'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      const errorMsg = error instanceof Error ? error.message : 'An unknown error occurred';
      setSubmitMessage(`Connection error: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const solutions = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital modernization for enterprises'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Application Development',
      description: 'Custom software solutions for your business needs'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Data & Analytics',
      description: 'AI-powered insights for data-driven decisions'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'DevOps & Automation',
      description: 'Continuous integration and deployment excellence'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare & Life Sciences',
    'Retail & E-commerce',
    'Manufacturing',
    'Telecom',
    'Media & Entertainment',
    'Energy & Utilities',
    'Government & Public Sector'
  ];

  const caseStudies = [
    {
      company: 'Global Financial Corporation',
      challenge: 'Digital Banking Transformation',
      result: '40% operational efficiency improvement',
      icon: '🏦'
    },
    {
      company: 'Leading E-commerce Platform',
      challenge: 'Scalable Cloud Infrastructure',
      result: '99.9% uptime achieved',
      icon: '🛒'
    },
    {
      company: 'Healthcare Provider Network',
      challenge: 'Data Security & Compliance',
      result: 'HIPAA & ISO 27001 certified',
      icon: '🏥'
    },
    {
      company: 'Manufacturing Giant',
      challenge: 'IoT & Industry 4.0',
      result: '35% production increase',
      icon: '🏭'
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud',
    'Kubernetes', 'Docker', 'Terraform',
    'React', 'Node.js', 'Python',
    'Machine Learning', 'AI/LLM', 'Blockchain',
    'Salesforce', 'SAP', 'Oracle',
    'Cybersecurity', 'DevOps', 'Microservices'
  ];

  return (
    <div className="min-h-screen bg-white">
       <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/businesshomepage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent"></div>

        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="z-10">

              <h1 className="text-6xl font-bold leading-tight mb-6">
                Transform Your Enterprise with Intelligent Technology
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Drive digital innovation, operational excellence, and sustainable growth with our comprehensive suite of enterprise solutions trusted by Fortune 500 companies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 group">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">1K+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">5+</div>
                  <div className="text-sm text-gray-400">Years Expertise</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full">
              <Image
                src="/businessgroupteam.avif"
                alt="Enterprise Solutions"
                fill
                className="object-cover rounded-xl opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </section>

 

      {/* Solutions Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive services designed for modern enterprises</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Industry Expertise</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-center">
                <p className="font-semibold text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Technology Stack */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Our Technology Stack</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <div key={index} className="px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Let&apos;s discuss how we can accelerate your digital transformation</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-xl border border-blue-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Enterprise"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Solution Needed *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a solution</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="cloud-migration">Cloud Migration</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data & Analytics</option>
                  <option value="devops">DevOps & Automation</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="managed-services">Managed Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Project Details *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your business challenge and objectives..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-center font-semibold ${
                  submitMessage.includes('successfully')
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

<Footer />
    </div>
  );
}
