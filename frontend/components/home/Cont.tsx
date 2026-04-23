"use client";

import { useState } from "react";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setAlertMessage("Message sent successfully.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setAlertMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setAlertMessage("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300">
      <div className="py-10 md:py-12 lg:py-14 px-6 mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        <div className="text-center lg:text-left max-w-xl lg:max-w-none mx-auto lg:mx-0 lg:pr-6">
          <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-1.5">Contact Us</p>
          <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">Let&apos;s Start a Conversation</h2>
          <p className="mb-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Reach out to discuss your project, technology roadmap, or partnership opportunity. Our team will connect
            with you to understand your goals and recommend the right next steps.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-700">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-sm">contact@prasunet.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-700">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-sm">Global Delivery Support Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">Response Time</p>
              <p className="text-sm text-slate-600 mt-1">Initial response within one business day.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">Engagement Model</p>
              <p className="text-sm text-slate-600 mt-1">Consulting, build, and long-term support programs.</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start space-x-4 mt-3">
            <a href="https://www.facebook.com/prasunet" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600">
              <Facebook />
            </a>
            <a href="https://twitter.com/prasunet" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/company/prasunet-company/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/prasunet_company/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600">
              <Instagram />
            </a>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-800">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block p-3 w-full text-sm bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block p-3 w-full text-sm bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-slate-800">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block p-3 w-full text-sm bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="+1 234 567 890"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="block p-3 w-full text-sm bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="Tell us about your requirement..."
                required
              />
            </div>

            {alertMessage && (
              <div
                className={`p-4 text-center text-sm font-medium rounded-lg border ${
                  alertMessage.toLowerCase().includes("success") || alertMessage.toLowerCase().includes("sent")
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-red-50 text-red-800 border-red-200"
                }`}
              >
                {alertMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-6 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-all disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
