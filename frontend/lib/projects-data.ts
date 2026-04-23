export type Project = {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  industry: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const baseProjects: Omit<Project, "slug">[] = [
  { id: 1, name: "Smart Retail Commerce Platform", description: "Omnichannel retail solution with inventory sync, promotions engine, and real-time customer analytics.", image: "/projectsimage/Smart Retail Commerce Platform.png", industry: "Retail" },
  { id: 2, name: "Hospital Management Suite", description: "Enterprise healthcare platform covering appointments, EHR workflows, billing, and compliance dashboards.", image: "/projectsimage/Hospital Management Suite.png", industry: "Healthcare" },
  { id: 3, name: "FinTech Lending Portal", description: "Digital lending system with KYC automation, credit scoring, and risk-based decision workflows.", image: "/projectsimage/FinTech Lending Portal.webp", industry: "Banking & Financial Services" },
  { id: 4, name: "Manufacturing ERP Modernization", description: "Unified ERP system for production planning, procurement, QA, and factory performance intelligence.", image: "/projectsimage/Manufacturing ERP Modernization.svg", industry: "Manufacturing" },
  { id: 5, name: "Logistics Fleet Optimization", description: "Route optimization platform with GPS telemetry, fuel analytics, and predictive vehicle maintenance.", image: "/projectsimage/Logistics Fleet Optimization.webp", industry: "Logistics & Transportation" },
  { id: 6, name: "Insurance Claims Automation", description: "Claims lifecycle platform using OCR and AI triage to improve resolution speed and accuracy.", image: "/projectsimage/Insurance Claims Automation.png", industry: "Insurance" },
  { id: 7, name: "Telemedicine Consultation App", description: "Secure telehealth application enabling video consults, e-prescriptions, and patient follow-up care.", image: "/projectsimage/Telemedicine Consultation App.webp", industry: "Healthcare" },
  { id: 8, name: "B2B Procurement Marketplace", description: "Global sourcing portal with vendor onboarding, RFQ management, and contract lifecycle tracking.", image: "/projectsimage/B2B Procurement Marketplace.webp", industry: "B2B Commerce" },
  { id: 9, name: "Real Estate Asset Intelligence", description: "Property operations system with lease analytics, tenant services, and facility maintenance automation.", image: "/projectsimage/Real Estate Asset Intelligence.png", industry: "Real Estate" },
  { id: 10, name: "Education LMS at Scale", description: "Learning platform for institutions with virtual classrooms, assessments, and performance insights.", image: "/projectsimage/Education LMS at Scale.png", industry: "Education" },
  { id: 11, name: "Pharma Supply Chain Tracker", description: "Cold-chain and compliance monitoring platform ensuring traceability from manufacturer to pharmacy.", image: "/projectsimage/Pharma Supply Chain Tracker.webp", industry: "Pharmaceuticals" },
  { id: 12, name: "Energy Grid Monitoring Hub", description: "Operational dashboard for utility companies with outage alerts and smart meter data integration.", image: "/projectsimage/Energy Grid Monitoring Hub.webp", industry: "Energy & Utilities" },
  { id: 13, name: "Travel Booking Ecosystem", description: "High-volume travel engine integrating flights, hotels, dynamic pricing, and loyalty management.", image: "/projectsimage/Travel Booking Ecosystem.jpg", industry: "Travel & Hospitality" },
  { id: 14, name: "Banking CRM Transformation", description: "Customer 360 CRM platform for retail banking with campaign automation and service workflows.", image: "/projectsimage/Banking CRM Transformation.png", industry: "Banking & Financial Services" },
  { id: 15, name: "Construction Project Command Center", description: "Construction PM system with milestone planning, vendor coordination, and on-site reporting.", image: "/projectsimage/Construction Project Command Center.png", industry: "Construction" },
  { id: 16, name: "HR Talent Intelligence Platform", description: "Recruitment and performance suite with AI matching, skill taxonomy, and workforce planning.", image: "/projectsimage/HR Talent Intelligence Platform.webp", industry: "Human Resources" },
  { id: 17, name: "Government Citizen Services Portal", description: "Digital public services portal for document issuance, grievance tracking, and secure identity workflows.", image: "/projectsimage/Government Citizen Services Portal.png", industry: "Government" },
  { id: 18, name: "Automotive Dealer Network Suite", description: "Dealer management platform covering sales funnel, service scheduling, and spare parts logistics.", image: "/projectsimage/Automotive Dealer Network Suite.webp", industry: "Automotive" },
  { id: 19, name: "Food Delivery Operations Engine", description: "Restaurant delivery backbone with order orchestration, rider dispatching, and SLA visibility.", image: "/projectsimage/Food Delivery Operations Engine.webp", industry: "Food & Delivery" },
  { id: 20, name: "Media Streaming Recommendation Engine", description: "OTT intelligence stack for personalization, content metadata enrichment, and churn analytics.", image: "/projectsimage/Media Streaming Recommendation Engine.webp", industry: "Media & Entertainment" },
  { id: 21, name: "Agritech Farm Advisory Platform", description: "Precision agriculture app with crop insights, weather alerts, and digital marketplace access.", image: "/projectsimage/Agritech Farm Advisory Platform.png", industry: "Agriculture" },
  { id: 22, name: "Legal Case Management Cloud", description: "Law firm case workflow system with document automation, timelines, and audit-ready reporting.", image: "/projectsimage/Legal Case Management Cloud.png", industry: "Legal" },
  { id: 23, name: "IoT Smart Building Control", description: "IoT-enabled building platform for energy controls, security events, and occupancy analytics.", image: "/projectsimage/IoT Smart Building Control.webp", industry: "Smart Infrastructure" },
  { id: 24, name: "Hotel Revenue Management Suite", description: "Hospitality analytics platform driving occupancy forecasting, dynamic rates, and guest segmentation.", image: "/projectsimage/Hotel Revenue Management Suite.svg", industry: "Travel & Hospitality" },
  { id: 25, name: "Telecom OSS/BSS Upgrade", description: "Carrier-grade billing and operations stack modernization with service assurance integrations.", image: "/projectsimage/Telecom OSS:BSS Upgrade.png", industry: "Telecommunications" },
  { id: 26, name: "Cybersecurity SOC Dashboard", description: "Security operations platform unifying threat intelligence, incident response, and compliance posture.", image: "/projectsimage/Cybersecurity SOC Dashboard.png", industry: "Cybersecurity" },
  { id: 27, name: "Enterprise API Gateway Program", description: "API management layer with throttling, authentication, observability, and developer portal tooling.", image: "/projectsimage/Enterprise API Gateway Program.png", industry: "Enterprise Technology" },
  { id: 28, name: "Cross-Border Payments Platform", description: "Payments orchestration system with FX handling, AML checks, and transaction reconciliation.", image: "/projectsimage/Cross-Border Payments Platform.webp", industry: "Banking & Financial Services" },
  { id: 29, name: "Wholesale Distribution Suite", description: "Distribution management platform for pricing rules, warehouse flow, and route-based fulfillment.", image: "/projectsimage/Wholesale Distribution Suite.webp", industry: "Distribution" },
  { id: 30, name: "NGO Donor Impact Portal", description: "Non-profit management system with donor journeys, fund utilization tracking, and impact reporting.", image: "/projectsimage/NGO Donor Impact Portal.jpg", industry: "Non-Profit" },
  { id: 31, name: "Cloud Migration Factory", description: "Enterprise cloud migration program with automated assessment, cutover planning, and governance.", image: "/projectsimage/Cloud Migration Factory.jpg", industry: "Cloud Services" },
  { id: 32, name: "Data Lakehouse for Retail", description: "Scalable lakehouse architecture for unified data ingestion, analytics, and near real-time BI.", image: "/projectsimage/Data Lakehouse for Retail.png", industry: "Data & Analytics" },
  { id: 33, name: "Smart City Mobility Dashboard", description: "Urban mobility platform integrating transport feeds, congestion patterns, and route recommendations.", image: "/projectsimage/Smart City Mobility Dashboard.png", industry: "Smart City" },
  { id: 34, name: "Subscription Billing Engine", description: "Recurring billing platform with proration, invoicing automation, and revenue recognition controls.", image: "/projectsimage/Multi-Tenant SaaS CRM.webp", industry: "SaaS" },
  { id: 35, name: "Clinical Trial Data Platform", description: "Research data platform for trial enrollment, protocol adherence, and adverse event monitoring.", image: "/projectsimage/Clinical Trial Data Platform.png", industry: "Healthcare Research" },
  { id: 36, name: "Airport Operations Digital Twin", description: "Operational twin for airport logistics with passenger flow simulation and asset performance tracking.", image: "/projectsimage/Airport Operations Digital Twin.webp", industry: "Aviation" },
  { id: 37, name: "Industrial IoT Predictive Maintenance", description: "Machine monitoring platform predicting failures and reducing unplanned downtime in plants.", image: "/projectsimage/Industrial IoT Predictive Maintenance.png", industry: "Industrial IoT" },
  { id: 38, name: "E-Governance Workflow Automation", description: "Department workflow automation with file movement tracking, approvals, and SLA governance.", image: "/projectsimage/E-Governance Workflow Automation.png", industry: "Government" },
  { id: 39, name: "Digital Wealth Advisory App", description: "Investor app with portfolio rebalancing insights, risk profiling, and advisor collaboration.", image: "/projectsimage/Digital Wealth Advisory App.png", industry: "Wealth Management" },
{ id: 40, name: "AI-Powered Code Review Assistant", description: "Developer tool integrating AI for code quality analysis, security checks, and best practice recommendations.", image: "/projectsimage/AI-Powered Code Review Assistant.webp", industry: "Software Development" },
  { id: 41, name: "DevOps Platform Engineering Program", description: "Internal developer platform with CI/CD pipelines, observability standards, and policy controls.", image: "/projectsimage/DevOps Platform Engineering Program.png", industry: "DevOps" },
  { id: 42, name: "E-commerce Personalization Engine", description: "Customer personalization service with recommendation models, segmentation, and campaign orchestration.", image: "/projectsimage/E-commerce Personalization Engine.webp", industry: "E-commerce" },
  { id: 43, name: "Global Workforce Management Tool", description: "Enterprise HR operations suite for attendance, shift planning, payroll interfaces, and compliance.", image: "/projectsimage/Global Workforce Management Tool.jpeg", industry: "Human Resources" },
  { id: 44, name: "Supply Chain Visibility Network", description: "Control tower platform providing shipment tracking, inventory alerts, and exception management.", image: "/projectsimage/Supply Chain Visibility Network.png", industry: "Supply Chain" },
  { id: 45, name: "Smart Insurance Underwriting AI", description: "Underwriting automation with risk models, policy workflow controls, and portfolio insights.", image: "/projectsimage/Smart Insurance Underwriting AI.webp", industry: "Insurance" },
  { id: 46, name: "Multi-Tenant SaaS CRM", description: "Scalable SaaS CRM architecture with tenant isolation, configurable workflows, and analytics.", image: "/projectsimage/Multi-Tenant SaaS CRM.webp", industry: "SaaS" },
  { id: 47, name: "Digital Banking Onboarding", description: "Frictionless onboarding system with eKYC, biometric checks, and instant account provisioning.", image: "/projectsimage/Digital Banking Onboarding.avif", industry: "Banking & Financial Services" },
  { id: 48, name: "Enterprise Document Intelligence", description: "AI document processing engine for classification, extraction, and workflow decision routing.", image: "/projectsimage/Enterprise Document Intelligence.webp", industry: "Enterprise Technology" },
  { id: 49, name: "EdTech Skill Assessment Cloud", description: "Adaptive testing platform with proctoring, competency analytics, and certification pipelines.", image: "/projectsimage/EdTech Skill Assessment Cloud.png", industry: "Education" },
  { id: 50, name: "Healthcare Revenue Cycle Platform", description: "Hospital revenue cycle optimization for coding workflows, claims processing, and denials tracking.", image: "/projectsimage/Healthcare Revenue Cycle Platform.png", industry: "Healthcare" },
  { id: 51, name: "Retail POS and Inventory Cloud", description: "Unified POS platform with offline sync, centralized catalog, and real-time inventory movement.", image: "/projectsimage/Retail POS and Inventory Cloud.png", industry: "Retail" },
  { id: 52, name: "AI Contact Center Assistant", description: "Customer support AI platform for agent assistance, intent routing, and service quality analytics.", image: "/projectsimage/AI Contact Center Assistant .webp", industry: "Customer Service" },
  { id: 53, name: "Carbon Emissions Reporting Suite", description: "Sustainability reporting solution with emissions data pipelines, audit trails, and ESG dashboards.", image: "/projectsimage/Carbon Emissions Reporting Suite.webp", industry: "Sustainability" },
  { id: 54, name: "Enterprise Knowledge Graph Platform", description: "Knowledge graph architecture connecting business entities, relationships, and semantic search use cases.", image: "/projectsimage/Enterprise Knowledge Graph Platform.jpg", industry: "Data & AI" },
];

export const projects: Project[] = baseProjects.map((project) => ({
  ...project,
  slug: slugify(project.name),
}));

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

const industryStacks: Record<string, string[]> = {
  Healthcare: ["Next.js", "Node.js", "PostgreSQL", "FHIR Integrations"],
  "Banking & Financial Services": ["TypeScript", "Microservices", "Redis", "AML/KYC APIs"],
  Retail: ["React", "Node.js", "ElasticSearch", "Analytics Pipelines"],
  "Data & AI": ["Python", "Vector DB", "MLOps", "Cloud Data Platform"],
};

export const getProjectDetails = (project: Project) => {
  const stack = industryStacks[project.industry] ?? ["Next.js", "TypeScript", "Cloud Infrastructure", "CI/CD"];

  return {
    overview: `${project.name} was delivered as an industry-grade ${project.industry.toLowerCase()} initiative focused on reliability, scalability, and measurable business outcomes.`,
    challenge:
      "The client needed a modern platform that could replace fragmented workflows, improve operational visibility, and support long-term digital growth across teams.",
    solution: `${project.description} We implemented a phased architecture, security-first engineering standards, and analytics-ready workflows to ensure stable production adoption.`,
    outcomes: [
      "Improved operational efficiency with streamlined digital workflows",
      "Reduced manual effort through automation and smart orchestration",
      "Enabled leadership visibility with real-time dashboards and reporting",
      "Built a scalable foundation for future product and market expansion",
    ],
    stack,
  };
};
