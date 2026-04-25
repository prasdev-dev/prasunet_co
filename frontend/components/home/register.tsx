"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, Handshake, LineChart } from "lucide-react";

const RegisterSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative w-full min-h-[520px] flex items-center justify-center bg-center bg-cover rounded-3xl border border-slate-200 overflow-hidden"
      style={{ backgroundImage: "url('/reg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/95 via-white/90 to-slate-50/90" />

      <div className="relative max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-3">
          Business Registration
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
            Grow Your Business with Prasunet
          </h2>

          <p className="text-base md:text-lg mb-8 text-slate-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Partner with Prasunet to unlock new growth opportunities, connect with enterprise clients, and
            scale your services through a trusted digital ecosystem.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <BriefcaseBusiness className="w-5 h-5 text-emerald-600 mx-auto lg:mx-0 mb-2" />
              <p className="text-sm text-slate-700 font-medium">Business Expansion</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <Handshake className="w-5 h-5 text-emerald-600 mx-auto lg:mx-0 mb-2" />
              <p className="text-sm text-slate-700 font-medium">Strategic Partnerships</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <LineChart className="w-5 h-5 text-emerald-600 mx-auto lg:mx-0 mb-2" />
              <p className="text-sm text-slate-700 font-medium">Sustainable Growth</p>
            </div>
          </div>

          <button
            onClick={() => router.push("/business")}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base md:text-lg font-semibold rounded-full shadow-md bg-emerald-500 text-white hover:bg-emerald-600 transition"
          >
            Register Your Business <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="hidden lg:flex justify-center items-center w-full">
          <div className="absolute w-[500px] h-[380px]">
            <Image
              src="/homepagegrowbusiness.png"
              alt="Grow Your Business"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
