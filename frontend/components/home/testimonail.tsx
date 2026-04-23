"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Prasunet seamlessly integrated our acquisitions faster, better, and cost-effectively with trust and transparency. Their team demonstrated strong technical depth and delivery discipline across every phase.",
    name: "Andy Nallappan",
    position: "Former CTO and Head of Software Business Operations, Broadcom Software",
    image: "/t1.jpg",
  },
  {
    quote:
      "This company provided outstanding service and helped scale our business to new heights. Their expertise and professionalism made the process seamless, from architecture planning to production rollout.",
    name: "Jessica Williams",
    position: "CEO, Tech Innovations",
    image: "/t3.jpg",
  },
  {
    quote:
      "I was impressed with the level of dedication and attention to detail. They truly understand their clients and consistently deliver solutions that exceed expectations and meet complex business needs.",
    name: "Michael Brown",
    position: "Head of Development, Web Solutions",
    image: "/t2.jpg",
  },
  {
    quote:
      "Absolutely fantastic experience. The team delivered measurable results with clear communication, strong project governance, and an execution model we can confidently rely on.",
    name: "Samantha Lee",
    position: "Marketing Director, Creative Agency",
    image: "/t4.jpg",
  },
  {
    quote:
      "Prasunet helped us modernize legacy workflows into a scalable digital platform. Their collaboration model and technical ownership significantly improved our delivery velocity.",
    name: "Daniel Carter",
    position: "Director of Digital Programs, Enterprise Solutions Group",
    image: "/t2.jpg",
  },
  {
    quote:
      "What stood out most was their ability to translate business requirements into practical, high-quality technology outcomes. The partnership has been both strategic and reliable.",
    name: "Priya Malhotra",
    position: "VP Technology Strategy, Global Retail Network",
    image: "/t3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 rounded-3xl border border-slate-200 shadow-sm">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-2">
          Client Feedback
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Testimonials</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Hear what our partners say about working with Prasunet across consulting, engineering, and digital transformation programs.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700">High Client Retention</span>
          <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700">Cross-Industry Delivery</span>
          <span className="text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700">Enterprise-Ready Standards</span>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-8">
                <div className="text-6xl text-emerald-600 font-bold mb-4">❝</div>
                <p className="text-slate-700 text-lg italic leading-relaxed">{testimonial.quote}</p>
                <div className="mt-6 flex items-center justify-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-slate-300"
                />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Built on Trust, Transparency, and Outcomes</h3>
          <p className="text-slate-600 mt-3 leading-relaxed">
            Our client relationships are built on clear communication, accountable execution, and measurable business
            impact. From initial strategy to post-launch optimization, we focus on creating long-term value and
            sustainable growth for every engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
