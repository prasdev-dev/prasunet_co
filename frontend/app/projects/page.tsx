import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects-data";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">All Industry Projects</h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Explore our complete portfolio of enterprise, industry-focused digital transformation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <Image src={project.image} alt={project.name} width={600} height={340} className="w-full h-52 object-cover" />
              <div className="p-5">
                <span className="inline-flex text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  {project.industry}
                </span>
                <h2 className="text-xl font-semibold text-slate-900 mt-3">{project.name}</h2>
                <p className="text-slate-600 text-sm mt-2">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-blue-700 font-medium mt-4 hover:underline"
                >
                  View details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
