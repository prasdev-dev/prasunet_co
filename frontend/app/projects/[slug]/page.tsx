import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectDetails, projects } from "@/lib/projects-data";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const details = getProjectDetails(project);

  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <Link href="/projects" className="text-blue-700 hover:underline font-medium">
          ← Back to all projects
        </Link>

        <div className="mt-5">
          <span className="inline-flex text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
            {project.industry}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">{project.name}</h1>
          <p className="mt-4 text-slate-600 text-lg">
            A strategic enterprise implementation focused on operational excellence, digital modernization, and long-term scalability.
          </p>
        </div>

        <div className="relative mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <Image src={project.image} alt={project.name} width={1200} height={600} className="w-full h-[420px] object-cover" />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <article className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Executive Summary</h2>
              <p className="text-slate-600 mt-3 leading-relaxed">{details.overview}</p>
              <p className="text-slate-600 mt-3 leading-relaxed">
                This initiative was designed to align technology execution with strategic business priorities such as efficiency, governance, customer experience, and measurable ROI. The delivery approach combined discovery workshops, phased releases, and production hardening to ensure stable adoption across business units.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Business Context and Challenges</h2>
              <p className="text-slate-600 mt-3 leading-relaxed">{details.challenge}</p>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Legacy processes created data silos, slow turnaround times, and limited cross-team visibility. The client required a unified platform that could support scale, improve compliance posture, and reduce operational risk while maintaining uninterrupted service continuity.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Solution Architecture and Delivery</h2>
              <p className="text-slate-600 mt-3 leading-relaxed">{details.solution}</p>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Our team implemented a modular architecture with secure service boundaries, robust monitoring, and cloud-ready deployment patterns. The program included integration design, workflow automation, data model standardization, and performance optimization for high-availability operations.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Implementation Roadmap</h2>
              <div className="mt-4 space-y-3">
                {[
                  "Discovery and stakeholder alignment with measurable success criteria",
                  "Technical blueprint, integration mapping, and security controls definition",
                  "Iterative build and validation across prioritized business workflows",
                  "UAT, release management, and user enablement with governance playbooks",
                  "Post-launch optimization and KPI-driven improvement cycles",
                ].map((step, idx) => (
                  <div key={step} className="rounded-lg border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-blue-700">Phase {idx + 1}</p>
                    <p className="text-slate-700 mt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Business Impact</h2>
              <p className="text-slate-600 mt-3 leading-relaxed">
                The completed solution enabled faster decision-making, improved transparency across teams, and reduced manual dependencies through workflow automation. Leadership gained real-time visibility into delivery and operations through dashboards and reporting layers.
              </p>
              <p className="text-slate-600 mt-3 leading-relaxed">
                The platform is architected for future growth, allowing new modules and integrations to be onboarded without major platform refactoring. This ensures sustainable value creation and a strong foundation for continued digital expansion.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 p-5 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Key Outcomes</h3>
              <ul className="mt-3 space-y-2">
                {details.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm text-slate-600">
                    • {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Technology Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {details.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 p-5 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">Engagement Type</h3>
              <p className="text-sm text-slate-600 mt-2">Enterprise Program Delivery</p>
              <h3 className="text-lg font-semibold text-slate-900 mt-4">Delivery Model</h3>
              <p className="text-sm text-slate-600 mt-2">Agile with governed release milestones</p>
              <h3 className="text-lg font-semibold text-slate-900 mt-4">Industry</h3>
              <p className="text-sm text-slate-600 mt-2">{project.industry}</p>
            </div>
          </aside>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">Need a Similar Project?</h2>
          <p className="text-slate-600 mt-3 max-w-3xl">
            Our teams can design and deliver enterprise-grade platforms tailored to your business goals, operating model, and compliance needs. We support full lifecycle delivery from strategy through implementation and managed operations.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
