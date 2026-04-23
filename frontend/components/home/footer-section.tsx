"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setMessage(data.message || "✅ Successfully subscribed!");
        setEmail(""); // Reset the input field after successful subscription
      } else {
        setMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setMessage("Connection error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Branding and Subscription Section */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image src="/loggo.jpg" alt="Prasunet Logo" width={55} height={55} className="rounded-lg shadow-sm" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  PRASUNET
                </h2>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Empowering businesses with innovative IT solutions worldwide. We deliver cutting-edge technology services to help enterprises modernize, scale, and achieve digital transformation across 65+ countries.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
              <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest insights and updates.</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-10 pr-4 py-3 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300" disabled={loading}>
                  {loading ? "Subscribing..." : "Subscribe to Newsletter"}
                </Button>
              </form>
              {message && (
                <div className={`mt-3 p-3 rounded-lg text-sm font-medium ${
                  message.includes('✅') || message.includes('Successfully')
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {message}
                </div>
              )}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Software Development", path: "/service/softwaredevelopment" },
                { name: "Cloud Services", path: "/service/cloudservices" },
                { name: "Cybersecurity", path: "/service/cybersecurity" },
                { name: "AI & Machine Learning", path: "/service/ai" },
                { name: "Data Analytics", path: "/service/dataservices" },
                { name: "Web Development", path: "/service/webdevelopment" },
                { name: "Mobile Apps", path: "/service/mobileapp" },
                { name: "View All Services", path: "/#services" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Team", path: "/team" },
                { name: "Careers", path: "/career" },
                { name: "Business Solutions", path: "/business" },
                { name: "Internship Program", path: "/program" },
                { name: "News & Updates", path: "/news" },
                { name: "Projects", path: "/projects" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Blog", path: "/news" },
                { name: "Case Studies", path: "/projects" },
                { name: "Documentation", path: "/Learnmore" },
                { name: "Support Center", path: "/contact" },
                { name: "API Documentation", path: "/service/api" },
                { name: "Training Programs", path: "/service/training" },
                { name: "Certifications", path: "/certificate" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact & Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-600 flex-shrink-0" />
                <span className="text-sm">Chandigarh, India<br />Serving 65+ Countries Globally</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a href="mailto:prasunetcompany@gmail.com" className="text-sm hover:text-blue-600 transition-colors">
                  prasunetcompany@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { href: "https://twitter.com/prasunet", icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { href: "https://www.facebook.com/prasunet", icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                  { href: "https://www.linkedin.com/company/prasunet-company/", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                  { href: "https://www.instagram.com/prasunet_company/", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                ].map(({ href, icon, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-300"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <a href="/PrivacyPolicy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="/tandc" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
              <a href="/Cookies" className="hover:text-blue-600 transition-colors">Cookies Policy</a>
              <a href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</a>
            </div>
            <p className="text-sm text-gray-600 text-center md:text-right">
              © {new Date().getFullYear()} Prasunet. All rights reserved.<br />
              <span className="text-xs">Empowering Digital Innovation Worldwide</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
