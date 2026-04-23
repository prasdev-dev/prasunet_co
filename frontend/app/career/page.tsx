"use client";
import { useState } from "react";
import { Linkedin, Github, AlertCircle, CheckCircle, Briefcase, Users, Zap, Globe, Target, Award, MapPin, Clock, DollarSign, Star, Heart, Coffee, Code, Shield, TrendingUp } from "lucide-react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import Image from "next/image";
import Stepper from "@/components/ui/stepper";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  resumeUrl: string;
  jobTitle: string;
  experience: string;
  coverLetter: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

const jobTitles = [
  "Software Engineer",
  "Senior Software Engineer",
  "Android Developer",
  "iOS Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Cloud Architect",
  "Data Scientist",
  "Machine Learning Engineer",
  "UI/UX Designer",
  "Product Manager",
  "Business Analyst",
  "Quality Assurance",
  "Technical Writer",
  "Database Administrator",
  "Security Engineer",
  "Solutions Architect",
  "Sales Engineer",
  "Junior Software Engineer",
  "Associate Software Engineer",
  "Lead Software Engineer",
  "Principal Engineer",
  "Engineering Manager",
  "VP of Engineering",
  "CTO",
  "System Administrator",
  "Network Engineer",
  "Cybersecurity Analyst",
  "AI Engineer",
  "Blockchain Developer",
  "Game Developer",
  "Mobile App Developer",
  "Web Developer",
  "Embedded Systems Engineer",
  "IoT Engineer",
  "Data Engineer",
  "Big Data Engineer",
  "ETL Developer",
  "Business Intelligence Analyst",
  "Data Analyst",
  "Machine Learning Scientist",
  "NLP Engineer",
  "Computer Vision Engineer",
  "Robotics Engineer",
  "AR/VR Developer",
  "Cloud Engineer",
  "Site Reliability Engineer",
  "Platform Engineer",
  "Infrastructure Engineer",
  "Security Architect",
  "Penetration Tester",
  "Compliance Officer",
  "IT Project Manager",
  "Scrum Master",
  "Technical Lead",
  "Software Architect",
  "Solutions Engineer",
  "Customer Success Engineer",
  "Support Engineer",
  "QA Automation Engineer",
  "Performance Engineer",
  "Release Manager",
  "Configuration Manager",
  "IT Consultant",
  "ERP Consultant",
  "CRM Consultant",
  "SAP Consultant",
  "Oracle Consultant",
  "Microsoft Dynamics Consultant",
  "Salesforce Developer",
  "AWS Solutions Architect",
  "Azure Solutions Architect",
  "GCP Cloud Architect",
  "Kubernetes Engineer",
  "Docker Engineer",
  "CI/CD Engineer",
  "Monitoring Engineer",
  "Log Analysis Engineer",
  "Database Engineer",
  "NoSQL Engineer",
  "SQL Developer",
  "Data Warehouse Engineer",
  "BI Developer",
  "Tableau Developer",
  "Power BI Developer",
  "Frontend Architect",
  "Backend Architect",
  "API Developer",
  "Microservices Architect",
  "Event-Driven Architect",
  "Mobile Architect",
  "iOS Architect",
  "Android Architect",
  "React Developer",
  "Angular Developer",
  "Vue.js Developer",
  "Node.js Developer",
  "Python Developer",
  "Java Developer",
  "C# Developer",
  ".NET Developer",
  "Go Developer",
  "Rust Developer",
  "Scala Developer",
  "Kotlin Developer",
  "Swift Developer",
  "PHP Developer",
  "Ruby Developer",
  "Perl Developer",
  "R Developer",
  "MATLAB Developer",
  "Julia Developer",
  "Hadoop Developer",
  "Spark Developer",
  "Kafka Engineer",
  "Elasticsearch Engineer",
  "Redis Engineer",
  "MongoDB Engineer",
  "PostgreSQL Engineer",
  "MySQL Engineer",
  "Oracle DBA",
  "SQL Server DBA",
  "Linux Administrator",
  "Windows Administrator",
  "Mac Administrator",
  "Virtualization Engineer",
  "Storage Engineer",
  "Backup Engineer",
  "Disaster Recovery Engineer",
  "IT Security Specialist",
  "Ethical Hacker",
  "Forensic Analyst",
  "Cryptography Engineer",
  "Zero Trust Engineer",
  "IAM Engineer",
  "SIEM Engineer",
  "SOC Analyst",
  "Incident Response Engineer",
  "Compliance Analyst",
  "GDPR Specialist",
  "HIPAA Specialist",
  "PCI DSS Specialist",
  "ISO 27001 Specialist",
  "Risk Analyst",
  "IT Auditor",
  "Quality Manager",
  "Test Manager",
  "Automation Tester",
  "Manual Tester",
  "Performance Tester",
  "Security Tester",
  "Usability Tester",
  "Accessibility Tester",
  "Mobile Tester",
  "Web Tester",
  "API Tester",
  "Database Tester",
  "Load Tester",
  "Stress Tester",
  "Integration Tester",
  "System Tester",
  "Acceptance Tester",
  "Regression Tester",
  "Exploratory Tester",
  "Technical Support Engineer",
  "Help Desk Technician",
  "Field Engineer",
  "Remote Support Engineer",
  "Customer Support Specialist",
  "Technical Account Manager",
  "Solutions Consultant",
  "Pre-Sales Engineer",
  "Post-Sales Engineer",
  "Implementation Engineer",
  "Migration Engineer",
  "Upgrade Engineer",
  "Training Specialist",
  "Documentation Specialist",
  "Content Developer",
  "eLearning Developer",
  "Instructional Designer",
  "Technical Trainer",
  "Product Trainer",
  "Software Trainer",
  "IT Trainer",
  "Certification Trainer",
  "Workshop Facilitator",
  "Conference Speaker",
  "Technical Evangelist",
  "Developer Advocate",
  "Community Manager",
  "Open Source Contributor",
  "Code Reviewer",
  "Mentor",
  "Coach",
  "Team Lead",
  "Project Lead",
  "Program Manager",
  "Portfolio Manager",
  "Delivery Manager",
  "Operations Manager",
  "Service Delivery Manager",
  "IT Operations Manager",
  "Infrastructure Manager",
  "Security Manager",
  "Compliance Manager",
  "Risk Manager",
  "Change Manager",
  "Release Manager",
  "Configuration Manager",
  "Asset Manager",
  "Vendor Manager",
  "Contract Manager",
  "Procurement Specialist",
  "IT Procurement Manager",
  "Budget Analyst",
  "Cost Analyst",
  "Financial Analyst",
  "Business Analyst",
  "Systems Analyst",
  "Requirements Analyst",
  "Functional Analyst",
  "Technical Analyst",
  "Data Analyst",
  "Business Intelligence Analyst",
  "Market Analyst",
  "Competitive Analyst",
  "User Experience Researcher",
  "User Interface Designer",
  "Interaction Designer",
  "Visual Designer",
  "Graphic Designer",
  "Brand Designer",
  "Product Designer",
  "Service Designer",
  "Design System Designer",
  "Motion Designer",
  "3D Designer",
  "Game Designer",
  "UI Developer",
  "UX Developer",
  "Frontend Designer",
  "Creative Director",
  "Design Manager",
  "Art Director",
  "Design Lead",
  "Design Architect",
  "Information Architect",
  "Content Strategist",
  "Content Manager",
  "Technical Writer",
  "Documentation Writer",
  "API Documentation Writer",
  "User Guide Writer",
  "Release Notes Writer",
  "Knowledge Base Writer",
  "Blog Writer",
  "Whitepaper Writer",
  "Case Study Writer",
  "Proposal Writer",
  "Marketing Copywriter",
  "SEO Specialist",
  "SEM Specialist",
  "Social Media Manager",
  "Content Marketing Manager",
  "Digital Marketing Manager",
  "Marketing Automation Specialist",
  "Email Marketing Specialist",
  "Campaign Manager",
  "Brand Manager",
  "Product Marketing Manager",
  "Growth Hacker",
  "Conversion Rate Optimizer",
  "A/B Testing Specialist",
  "Analytics Specialist",
  "Data Visualization Specialist",
  "Reporting Analyst",
  "Dashboard Developer",
  "KPI Analyst",
  "Metrics Analyst",
  "Performance Analyst",
  "Web Analytics Specialist",
  "Mobile Analytics Specialist",
  "E-commerce Analyst",
  "Revenue Analyst",
  "Sales Analyst",
  "Customer Analyst",
  "User Analyst",
  "Behavioral Analyst",
  "Predictive Analyst",
  "Statistical Analyst",
  "Research Analyst",
  "Market Research Analyst",
  "Competitive Intelligence Analyst",
  "Industry Analyst",
  "Technology Analyst",
  "Trend Analyst",
  "Innovation Analyst",
  "R&D Engineer",
  "Research Engineer",
  "Prototype Engineer",
  "Innovation Engineer",
  "Patent Engineer",
  "IP Specialist",
  "Technology Transfer Specialist",
  "Startup Advisor",
  "Entrepreneur",
  "Intrapreneur",
  "Business Developer",
  "Partnership Manager",
  "Alliance Manager",
  "Channel Manager",
  "Reseller Manager",
  "Distributor Manager",
  "OEM Manager",
  "VAR Manager",
  "MSP Manager",
  "Cloud Service Provider Manager",
  "SaaS Manager",
  "PaaS Manager",
  "IaaS Manager",
  "Managed Service Provider",
  "Outsourcing Manager",
  "Offshore Manager",
  "Nearshore Manager",
  "Onshore Manager",
  "Global Delivery Manager",
  "Multi-location Manager",
  "Remote Team Manager",
  "Distributed Team Manager",
  "Agile Coach",
  "Scrum Master",
  "Kanban Coach",
  "Lean Coach",
  "DevOps Coach",
  "Continuous Improvement Coach",
  "Process Improvement Specialist",
  "Workflow Optimizer",
  "Automation Specialist",
  "RPA Developer",
  "Robotic Process Automation Engineer",
  "Workflow Automation Engineer",
  "Business Process Analyst",
  "Process Engineer",
  "Operations Analyst",
  "Supply Chain Analyst",
  "Logistics Analyst",
  "Inventory Analyst",
  "Demand Planning Analyst",
  "Forecasting Analyst",
  "Planning Analyst",
  "Scheduling Analyst",
  "Resource Planning Analyst",
  "Capacity Planning Analyst",
  "Production Planning Analyst",
  "Manufacturing Analyst",
  "Quality Control Analyst",
  "Quality Assurance Analyst",
  "Six Sigma Specialist",
  "Lean Manufacturing Specialist",
  "Kaizen Specialist",
  "Continuous Improvement Specialist",
  "Change Management Specialist",
  "Organizational Development Specialist",
  "Talent Development Specialist",
  "Learning and Development Specialist",
  "HR Business Partner",
  "People Operations Manager",
  "Talent Acquisition Manager",
  "Recruiting Manager",
  "Sourcing Specialist",
  "Talent Scout",
  "Campus Recruiter",
  "Technical Recruiter",
  "Executive Recruiter",
  "Contract Recruiter",
  "Freelance Recruiter",
  "Staffing Coordinator",
  "Onboarding Specialist",
  "Employee Experience Specialist",
  "Diversity and Inclusion Specialist",
  "Equity Specialist",
  "Culture Specialist",
  "Engagement Specialist",
  "Retention Specialist",
  "Succession Planning Specialist",
  "Career Development Specialist",
  "Performance Management Specialist",
  "Compensation Analyst",
  "Benefits Analyst",
  "Payroll Specialist",
  "HRIS Specialist",
  "Workforce Analytics Specialist",
  "People Analytics Specialist",
  "Organizational Analytics Specialist",
  "HR Data Analyst",
  "Employee Relations Specialist",
  "Labor Relations Specialist",
  "Compliance Specialist",
  "Legal Counsel",
  "Contract Specialist",
  "Privacy Officer",
  "Data Protection Officer",
  "Information Security Officer",
  "Chief Information Security Officer",
  "Chief Privacy Officer",
  "Chief Compliance Officer",
  "Chief Risk Officer",
  "Chief Technology Officer",
  "Chief Information Officer",
  "Chief Digital Officer",
  "Chief Innovation Officer",
  "Chief Strategy Officer",
  "Chief Operating Officer",
  "Chief Executive Officer",
  "Founder",
  "Co-Founder",
  "CEO",
  "COO",
  "CTO",
  "CIO",
  "CDO",
  "CISO",
  "CPO",
  "CMO",
  "CSO",
  "CFO",
  "VP Engineering",
  "VP Product",
  "VP Marketing",
  "VP Sales",
  "VP Operations",
  "VP Finance",
  "VP HR",
  "VP IT",
  "VP Security",
  "VP Compliance",
  "VP Risk",
  "VP Strategy",
  "VP Innovation",
  "VP R&D",
  "VP Business Development",
  "VP Partnerships",
  "VP Alliances",
  "VP Channels",
  "Director Engineering",
  "Director Product",
  "Director Marketing",
  "Director Sales",
  "Director Operations",
  "Director Finance",
  "Director HR",
  "Director IT",
  "Director Security",
  "Director Compliance",
  "Director Risk",
  "Director Strategy",
  "Director Innovation",
  "Director R&D",
  "Director Business Development",
  "Director Partnerships",
  "Director Alliances",
  "Director Channels",
  "Senior Director Engineering",
  "Senior Director Product",
  "Senior Director Marketing",
  "Senior Director Sales",
  "Senior Director Operations",
  "Senior Director Finance",
  "Senior Director HR",
  "Senior Director IT",
  "Senior Director Security",
  "Senior Director Compliance",
  "Senior Director Risk",
  "Senior Director Strategy",
  "Senior Director Innovation",
  "Senior Director R&D",
  "Senior Director Business Development",
  "Senior Director Partnerships",
  "Senior Director Alliances",
  "Senior Director Channels",
  "Head of Engineering",
  "Head of Product",
  "Head of Marketing",
  "Head of Sales",
  "Head of Operations",
  "Head of Finance",
  "Head of HR",
  "Head of IT",
  "Head of Security",
  "Head of Compliance",
  "Head of Risk",
  "Head of Strategy",
  "Head of Innovation",
  "Head of R&D",
  "Head of Business Development",
  "Head of Partnerships",
  "Head of Alliances",
  "Head of Channels",
  "Manager Engineering",
  "Manager Product",
  "Manager Marketing",
  "Manager Sales",
  "Manager Operations",
  "Manager Finance",
  "Manager HR",
  "Manager IT",
  "Manager Security",
  "Manager Compliance",
  "Manager Risk",
  "Manager Strategy",
  "Manager Innovation",
  "Manager R&D",
  "Manager Business Development",
  "Manager Partnerships",
  "Manager Alliances",
  "Manager Channels",
  "Senior Manager Engineering",
  "Senior Manager Product",
  "Senior Manager Marketing",
  "Senior Manager Sales",
  "Senior Manager Operations",
  "Senior Manager Finance",
  "Senior Manager HR",
  "Senior Manager IT",
  "Senior Manager Security",
  "Senior Manager Compliance",
  "Senior Manager Risk",
  "Senior Manager Strategy",
  "Senior Manager Innovation",
  "Senior Manager R&D",
  "Senior Manager Business Development",
  "Senior Manager Partnerships",
  "Senior Manager Alliances",
  "Senior Manager Channels",
  "Lead Engineer",
  "Lead Developer",
  "Lead Architect",
  "Lead Designer",
  "Lead Analyst",
  "Lead Consultant",
  "Lead Manager",
  "Lead Director",
  "Principal Engineer",
  "Principal Developer",
  "Principal Architect",
  "Principal Designer",
  "Principal Analyst",
  "Principal Consultant",
  "Principal Manager",
  "Principal Director",
  "Staff Engineer",
  "Staff Developer",
  "Staff Architect",
  "Staff Designer",
  "Staff Analyst",
  "Staff Consultant",
  "Staff Manager",
  "Staff Director",
  "Senior Engineer",
  "Senior Developer",
  "Senior Architect",
  "Senior Designer",
  "Senior Analyst",
  "Senior Consultant",
  "Senior Manager",
  "Senior Director",
  "Associate Engineer",
  "Associate Developer",
  "Associate Architect",
  "Associate Designer",
  "Associate Analyst",
  "Associate Consultant",
  "Associate Manager",
  "Associate Director",
  "Junior Engineer",
  "Junior Developer",
  "Junior Architect",
  "Junior Designer",
  "Junior Analyst",
  "Junior Consultant",
  "Junior Manager",
  "Junior Director",
  "Intern Engineer",
  "Intern Developer",
  "Intern Architect",
  "Intern Designer",
  "Intern Analyst",
  "Intern Consultant",
  "Intern Manager",
  "Intern Director",
  "Apprentice Engineer",
  "Apprentice Developer",
  "Apprentice Architect",
  "Apprentice Designer",
  "Apprentice Analyst",
  "Apprentice Consultant",
  "Apprentice Manager",
  "Apprentice Director",
  "Trainee Engineer",
  "Trainee Developer",
  "Trainee Architect",
  "Trainee Designer",
  "Trainee Analyst",
  "Trainee Consultant",
  "Trainee Manager",
  "Trainee Director",
  "Entry Level Engineer",
  "Entry Level Developer",
  "Entry Level Architect",
  "Entry Level Designer",
  "Entry Level Analyst",
  "Entry Level Consultant",
  "Entry Level Manager",
  "Entry Level Director",
  "Graduate Engineer",
  "Graduate Developer",
  "Graduate Architect",
  "Graduate Designer",
  "Graduate Analyst",
  "Graduate Consultant",
  "Graduate Manager",
  "Graduate Director",
  "Fresher Engineer",
  "Fresher Developer",
  "Fresher Architect",
  "Fresher Designer",
  "Fresher Analyst",
  "Fresher Consultant",
  "Fresher Manager",
  "Fresher Director",
];

const countryCodes = [
  { code: "+1", name: "🇺🇸 USA" },
  { code: "+44", name: "🇬🇧 UK" },
  { code: "+91", name: "🇮🇳 India" },
  { code: "+61", name: "🇦🇺 Australia" },
  { code: "+49", name: "🇩🇪 Germany" },
  { code: "+33", name: "🇫🇷 France" },
  { code: "+39", name: "🇮🇹 Italy" },
  { code: "+34", name: "🇪🇸 Spain" },
  { code: "+31", name: "🇳🇱 Netherlands" },
  { code: "+41", name: "🇨🇭 Switzerland" },
  { code: "+43", name: "🇦🇹 Austria" },
  { code: "+46", name: "🇸🇪 Sweden" },
  { code: "+47", name: "🇳🇴 Norway" },
  { code: "+45", name: "🇩🇰 Denmark" },
  { code: "+358", name: "🇫🇮 Finland" },
  { code: "+32", name: "🇧🇪 Belgium" },
  { code: "+353", name: "🇮🇪 Ireland" },
  { code: "+48", name: "🇵🇱 Poland" },
  { code: "+420", name: "🇨🇿 Czech Republic" },
  { code: "+386", name: "🇸🇮 Slovenia" },
  { code: "+81", name: "🇯🇵 Japan" },
  { code: "+86", name: "🇨🇳 China" },
  { code: "+82", name: "🇰🇷 South Korea" },
  { code: "+65", name: "🇸🇬 Singapore" },
  { code: "+60", name: "🇲🇾 Malaysia" },
  { code: "+62", name: "🇮🇩 Indonesia" },
  { code: "+66", name: "🇹🇭 Thailand" },
  { code: "+63", name: "🇵🇭 Philippines" },
  { code: "+64", name: "🇳🇿 New Zealand" },
  { code: "+27", name: "🇿🇦 South Africa" },
  { code: "+234", name: "🇳🇬 Nigeria" },
  { code: "+212", name: "🇲🇦 Morocco" },
  { code: "+20", name: "🇪🇬 Egypt" },
  { code: "+55", name: "🇧🇷 Brazil" },
  { code: "+52", name: "🇲🇽 Mexico" },
  { code: "+56", name: "🇨🇱 Chile" },
  { code: "+57", name: "🇨🇴 Colombia" },
  { code: "+54", name: "🇦🇷 Argentina" },
  { code: "+51", name: "🇵🇪 Peru" },
  { code: "+58", name: "🇻🇪 Venezuela" },
  { code: "+92", name: "🇵🇰 Pakistan" },
  { code: "+880", name: "🇧🇩 Bangladesh" },
  { code: "+94", name: "🇱🇰 Sri Lanka" },
  { code: "+84", name: "🇻🇳 Vietnam" },
  { code: "+90", name: "🇹🇷 Turkey" },
  { code: "+966", name: "🇸🇦 Saudi Arabia" },
  { code: "+971", name: "🇦🇪 UAE" },
  { code: "+974", name: "🇶🇦 Qatar" },
  { code: "+30", name: "🇬🇷 Greece" },
  { code: "+40", name: "🇷🇴 Romania" },
];

const jobs = [
  {
    id: 1,
    title: "Junior Software Engineer",
    location: "Remote / Multiple Locations",
    type: "Full-time",
    level: "Entry Level",
    experience: "0-2 years",
    salary: "$45,000 - $65,000",
    description: "Build scalable web applications using modern technologies. Perfect for fresh graduates looking to start their career in software development.",
    requirements: ["Bachelor's in Computer Science", "Basic knowledge of HTML/CSS/JS", "Passion for coding"],
    skills: ["JavaScript", "React", "Node.js", "Git"],
    department: "Engineering"
  },
  {
    id: 2,
    title: "Software Engineer",
    location: "New York, USA",
    type: "Full-time",
    level: "Mid-level",
    experience: "2-5 years",
    salary: "$80,000 - $120,000",
    description: "Develop and maintain high-performance software solutions. Work with cross-functional teams to deliver innovative products.",
    requirements: ["3+ years experience", "Strong CS fundamentals", "Experience with web technologies"],
    skills: ["Python", "Django", "PostgreSQL", "AWS"],
    department: "Engineering"
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    location: "San Francisco, USA",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$130,000 - $180,000",
    description: "Lead technical initiatives and mentor junior engineers. Design scalable architectures and drive best practices.",
    requirements: ["5+ years experience", "Leadership experience", "System design expertise"],
    skills: ["Java", "Spring Boot", "Microservices", "Kubernetes"],
    department: "Engineering"
  },
  {
    id: 4,
    title: "Principal Engineer",
    location: "London, UK",
    type: "Full-time",
    level: "Principal",
    experience: "8+ years",
    salary: "$160,000 - $220,000",
    description: "Drive architectural decisions and technical strategy. Lead complex projects and influence engineering culture.",
    requirements: ["8+ years experience", "Technical leadership", "Industry recognition"],
    skills: ["Go", "Distributed Systems", "Machine Learning", "Leadership"],
    department: "Engineering"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$90,000 - $130,000",
    description: "Build and maintain CI/CD pipelines, infrastructure automation, and monitoring systems.",
    requirements: ["3+ years DevOps experience", "Cloud platforms knowledge", "Scripting skills"],
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    department: "DevOps"
  },
  {
    id: 6,
    title: "Data Scientist",
    location: "Berlin, Germany",
    type: "Full-time",
    level: "Senior",
    experience: "4-7 years",
    salary: "$100,000 - $150,000",
    description: "Extract insights from complex datasets and build predictive models to drive business decisions.",
    requirements: ["PhD or Master's in relevant field", "4+ years ML experience", "Strong statistics background"],
    skills: ["Python", "TensorFlow", "PyTorch", "SQL", "Tableau"],
    department: "Data Science"
  },
  {
    id: 7,
    title: "Machine Learning Engineer",
    location: "Toronto, Canada",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$120,000 - $170,000",
    description: "Design and implement ML systems at scale. Work on cutting-edge AI projects.",
    requirements: ["5+ years ML engineering", "Deep learning expertise", "Production ML experience"],
    skills: ["Python", "TensorFlow", "Kubeflow", "MLOps", "CUDA"],
    department: "AI/ML"
  },
  {
    id: 8,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-5 years",
    salary: "$70,000 - $100,000",
    description: "Create intuitive and beautiful user experiences. Collaborate with product and engineering teams.",
    requirements: ["3+ years UX design", "Portfolio showcasing work", "User research experience"],
    skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Testing"],
    department: "Design"
  },
  {
    id: 9,
    title: "Product Manager",
    location: "Singapore",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$110,000 - $160,000",
    description: "Drive product strategy and roadmap. Work closely with engineering, design, and business teams.",
    requirements: ["5+ years PM experience", "Technical background", "Data-driven decision making"],
    skills: ["Product Strategy", "Analytics", "A/B Testing", "SQL", "Jira"],
    department: "Product"
  },
  {
    id: 10,
    title: "Business Analyst",
    location: "Sydney, Australia",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$75,000 - $110,000",
    description: "Analyze business requirements and translate them into technical specifications.",
    requirements: ["3+ years BA experience", "Requirements gathering", "Process modeling"],
    skills: ["SQL", "Excel", "Visio", "Jira", "Agile"],
    department: "Business Analysis"
  },
  {
    id: 11,
    title: "Quality Assurance Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "2-5 years",
    salary: "$65,000 - $95,000",
    description: "Ensure product quality through comprehensive testing and automation.",
    requirements: ["2+ years QA experience", "Test automation", "Bug tracking"],
    skills: ["Selenium", "JUnit", "Postman", "Jira", "SQL"],
    department: "Quality Assurance"
  },
  {
    id: 12,
    title: "Technical Writer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-5 years",
    salary: "$60,000 - $85,000",
    description: "Create clear and comprehensive technical documentation for products and APIs.",
    requirements: ["3+ years technical writing", "API documentation", "Developer tools knowledge"],
    skills: ["Markdown", "Swagger", "Confluence", "Git", "Technical Communication"],
    department: "Technical Writing"
  },
  {
    id: 13,
    title: "Database Administrator",
    location: "Chicago, USA",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$95,000 - $135,000",
    description: "Manage and optimize database systems for performance, security, and reliability.",
    requirements: ["5+ years DBA experience", "Multiple database systems", "Performance tuning"],
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle"],
    department: "Database"
  },
  {
    id: 14,
    title: "Security Engineer",
    location: "Washington DC, USA",
    type: "Full-time",
    level: "Senior",
    experience: "4-7 years",
    salary: "$110,000 - $155,000",
    description: "Protect company assets through security best practices and threat mitigation.",
    requirements: ["4+ years security experience", "Security certifications", "Incident response"],
    skills: ["SIEM", "Firewalls", "Penetration Testing", "Compliance", "Cryptography"],
    department: "Security"
  },
  {
    id: 15,
    title: "Solutions Architect",
    location: "Mumbai, India",
    type: "Full-time",
    level: "Senior",
    experience: "7-10 years",
    salary: "$120,000 - $170,000",
    description: "Design comprehensive technology solutions that meet business and technical requirements.",
    requirements: ["7+ years architecture experience", "Enterprise solutions", "Cloud expertise"],
    skills: ["AWS", "Azure", "Microservices", "API Design", "System Integration"],
    department: "Architecture"
  },
  {
    id: 16,
    title: "Sales Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$85,000 - $125,000 + Commission",
    description: "Support sales team with technical expertise and product demonstrations.",
    requirements: ["3+ years technical sales", "Product knowledge", "Presentation skills"],
    skills: ["Technical Presentations", "CRM", "Salesforce", "Product Demos", "Customer Engagement"],
    department: "Sales"
  },
  {
    id: 17,
    title: "Cloud Architect",
    location: "Seattle, USA",
    type: "Full-time",
    level: "Senior",
    experience: "6-9 years",
    salary: "$140,000 - $190,000",
    description: "Design and implement cloud-native architectures and migration strategies.",
    requirements: ["6+ years cloud experience", "Multiple cloud platforms", "Architecture patterns"],
    skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Serverless"],
    department: "Cloud"
  },
  {
    id: 18,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "2-5 years",
    salary: "$75,000 - $110,000",
    description: "Build responsive and interactive user interfaces with modern frontend technologies.",
    requirements: ["2+ years frontend experience", "JavaScript frameworks", "Responsive design"],
    skills: ["React", "Vue.js", "TypeScript", "CSS", "Webpack"],
    department: "Engineering"
  },
  {
    id: 19,
    title: "Backend Developer",
    location: "Amsterdam, Netherlands",
    type: "Full-time",
    level: "Senior",
    experience: "4-7 years",
    salary: "$95,000 - $140,000",
    description: "Develop robust backend systems and APIs that power our applications.",
    requirements: ["4+ years backend experience", "API design", "Database design"],
    skills: ["Node.js", "Python", "Java", "REST APIs", "GraphQL"],
    department: "Engineering"
  },
  {
    id: 20,
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$85,000 - $125,000",
    description: "Work across the entire stack to build complete web applications.",
    requirements: ["3+ years full stack experience", "Frontend + Backend", "Database knowledge"],
    skills: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
    department: "Engineering"
  },
  {
    id: 21,
    title: "Android Developer",
    location: "Bangalore, India",
    type: "Full-time",
    level: "Mid-level",
    experience: "2-5 years",
    salary: "$60,000 - $100,000",
    description: "Build native Android applications with excellent user experience.",
    requirements: ["2+ years Android development", "Kotlin/Java", "Material Design"],
    skills: ["Kotlin", "Android SDK", "Jetpack", "Firebase", "Room"],
    department: "Mobile"
  },
  {
    id: 22,
    title: "iOS Developer",
    location: "San Francisco, USA",
    type: "Full-time",
    level: "Senior",
    experience: "4-7 years",
    salary: "$120,000 - $160,000",
    description: "Create innovative iOS applications with cutting-edge features.",
    requirements: ["4+ years iOS development", "Swift expertise", "App Store experience"],
    skills: ["Swift", "SwiftUI", "Core Data", "ARKit", "iOS SDK"],
    department: "Mobile"
  },
  {
    id: 23,
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$110,000 - $150,000",
    description: "Automate deployment pipelines and manage cloud infrastructure.",
    requirements: ["5+ years DevOps", "Infrastructure as Code", "Monitoring tools"],
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus"],
    department: "DevOps"
  },
  {
    id: 24,
    title: "Data Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    experience: "4-7 years",
    salary: "$105,000 - $145,000",
    description: "Build data pipelines and infrastructure for analytics and ML.",
    requirements: ["4+ years data engineering", "Big data technologies", "ETL processes"],
    skills: ["Spark", "Kafka", "Airflow", "Hadoop", "Snowflake"],
    department: "Data Engineering"
  },
  {
    id: 25,
    title: "AI Engineer",
    location: "Boston, USA",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$130,000 - $175,000",
    description: "Develop AI-powered features and integrate ML models into products.",
    requirements: ["5+ years AI/ML", "Model deployment", "MLOps"],
    skills: ["Python", "TensorFlow", "PyTorch", "MLflow", "SageMaker"],
    department: "AI/ML"
  },
  {
    id: 26,
    title: "Cybersecurity Analyst",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-5 years",
    salary: "$80,000 - $115,000",
    description: "Monitor and protect systems from cyber threats and vulnerabilities.",
    requirements: ["3+ years cybersecurity", "Security tools", "Threat analysis"],
    skills: ["SIEM", "EDR", "Vulnerability Scanning", "Incident Response", "NIST"],
    department: "Security"
  },
  {
    id: 27,
    title: "Blockchain Developer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    experience: "4-7 years",
    salary: "$100,000 - $150,000",
    description: "Build decentralized applications and smart contracts.",
    requirements: ["4+ years blockchain", "Smart contract development", "Cryptography"],
    skills: ["Solidity", "Web3.js", "Ethereum", "Hyperledger", "DeFi"],
    department: "Blockchain"
  },
  {
    id: 28,
    title: "Game Developer",
    location: "Los Angeles, USA",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$85,000 - $125,000",
    description: "Create engaging games and interactive experiences.",
    requirements: ["3+ years game development", "Game engines", "Graphics programming"],
    skills: ["Unity", "Unreal Engine", "C#", "C++", "OpenGL"],
    department: "Gaming"
  },
  {
    id: 29,
    title: "IoT Engineer",
    location: "Detroit, USA",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$95,000 - $135,000",
    description: "Design and implement Internet of Things solutions.",
    requirements: ["5+ years IoT", "Embedded systems", "Sensor networks"],
    skills: ["Arduino", "Raspberry Pi", "MQTT", "Edge Computing", "Zigbee"],
    department: "IoT"
  },
  {
    id: 30,
    title: "AR/VR Developer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    experience: "4-7 years",
    salary: "$110,000 - $155,000",
    description: "Create immersive augmented and virtual reality experiences.",
    requirements: ["4+ years AR/VR", "3D development", "Unity/Unreal"],
    skills: ["Unity", "ARKit", "ARCore", "Oculus SDK", "3D Modeling"],
    department: "AR/VR"
  },
  {
    id: 31,
    title: "Site Reliability Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$125,000 - $170,000",
    description: "Ensure system reliability, scalability, and performance.",
    requirements: ["5+ years SRE", "Distributed systems", "Incident management"],
    skills: ["Kubernetes", "Prometheus", "Grafana", "SLO/SLI", "Chaos Engineering"],
    department: "SRE"
  },
  {
    id: 32,
    title: "Platform Engineer",
    location: "London, UK",
    type: "Full-time",
    level: "Senior",
    experience: "6-9 years",
    salary: "$130,000 - $175,000",
    description: "Build and maintain developer platforms and internal tools.",
    requirements: ["6+ years platform engineering", "Developer tooling", "API platforms"],
    skills: ["Kubernetes", "Istio", "Helm", "Terraform", "GitOps"],
    department: "Platform"
  },
  {
    id: 33,
    title: "Engineering Manager",
    location: "New York, USA",
    type: "Full-time",
    level: "Manager",
    experience: "7-10 years",
    salary: "$150,000 - $200,000",
    description: "Lead engineering teams and drive technical excellence.",
    requirements: ["7+ years engineering", "3+ years management", "Technical leadership"],
    skills: ["Team Leadership", "Project Management", "Agile", "Mentoring", "Architecture"],
    department: "Engineering Management"
  },
  {
    id: 34,
    title: "VP of Engineering",
    location: "San Francisco, USA",
    type: "Full-time",
    level: "Executive",
    experience: "10+ years",
    salary: "$250,000 - $350,000",
    description: "Set engineering strategy and lead the entire engineering organization.",
    requirements: ["10+ years engineering", "5+ years executive leadership", "Strategic vision"],
    skills: ["Executive Leadership", "Strategy", "Scaling Teams", "Technology Vision", "Stakeholder Management"],
    department: "Executive"
  },
  {
    id: 35,
    title: "CTO",
    location: "Remote",
    type: "Full-time",
    level: "Executive",
    experience: "12+ years",
    salary: "$300,000 - $450,000",
    description: "Drive technology strategy and innovation across the organization.",
    requirements: ["12+ years tech leadership", "Executive experience", "Industry expertise"],
    skills: ["Technology Strategy", "Innovation", "Executive Leadership", "Board Relations", "Industry Trends"],
    department: "Executive"
  },
  {
    id: 36,
    title: "Associate Software Engineer",
    location: "Multiple Locations",
    type: "Full-time",
    level: "Entry Level",
    experience: "0-1 years",
    salary: "$50,000 - $70,000",
    description: "Start your career with hands-on experience in software development.",
    requirements: ["Recent graduate", "Basic programming", "Eagerness to learn"],
    skills: ["JavaScript", "Python", "Git", "Basic Algorithms"],
    department: "Engineering"
  },
  {
    id: 37,
    title: "Lead Software Engineer",
    location: "Seattle, USA",
    type: "Full-time",
    level: "Lead",
    experience: "6-9 years",
    salary: "$135,000 - $180,000",
    description: "Lead development teams and drive technical decisions.",
    requirements: ["6+ years experience", "Team leadership", "Architecture design"],
    skills: ["Java", "Spring", "Microservices", "Team Leadership", "Mentoring"],
    department: "Engineering"
  },
  {
    id: 38,
    title: "Staff Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Staff",
    experience: "8-12 years",
    salary: "$160,000 - $220,000",
    description: "Provide technical expertise and influence across multiple teams.",
    requirements: ["8+ years experience", "Broad technical knowledge", "Cross-team influence"],
    skills: ["System Design", "Architecture", "Technical Leadership", "Innovation", "Mentoring"],
    department: "Engineering"
  },
  {
    id: 39,
    title: "Senior DevOps Engineer",
    location: "Austin, USA",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$115,000 - $155,000",
    description: "Lead DevOps initiatives and mentor junior team members.",
    requirements: ["5+ years DevOps", "Leadership experience", "Advanced automation"],
    skills: ["Kubernetes", "Terraform", "CI/CD", "Monitoring", "Security"],
    department: "DevOps"
  },
  {
    id: 40,
    title: "Principal Data Scientist",
    location: "Cambridge, UK",
    type: "Full-time",
    level: "Principal",
    experience: "7-10 years",
    salary: "$140,000 - $190,000",
    description: "Lead data science initiatives and drive ML strategy.",
    requirements: ["7+ years data science", "PhD preferred", "Publication record"],
    skills: ["Advanced ML", "Research", "Team Leadership", "Strategy", "Innovation"],
    department: "Data Science"
  },
  {
    id: 41,
    title: "Senior Product Manager",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    experience: "6-9 years",
    salary: "$130,000 - $175,000",
    description: "Own product strategy and drive product development from conception to launch.",
    requirements: ["6+ years PM", "Product launches", "Cross-functional leadership"],
    skills: ["Product Strategy", "Roadmapping", "Analytics", "User Research", "Go-to-Market"],
    department: "Product"
  },
  {
    id: 42,
    title: "Director of Engineering",
    location: "Toronto, Canada",
    type: "Full-time",
    level: "Director",
    experience: "10+ years",
    salary: "$180,000 - $250,000",
    description: "Lead engineering departments and drive technical excellence.",
    requirements: ["10+ years engineering", "5+ years management", "Strategic thinking"],
    skills: ["Engineering Leadership", "Strategy", "Scaling", "Culture Building", "Executive Communication"],
    department: "Engineering Management"
  },
  {
    id: 43,
    title: "Chief Information Officer",
    location: "New York, USA",
    type: "Full-time",
    level: "Executive",
    experience: "15+ years",
    salary: "$350,000 - $500,000",
    description: "Oversee all IT operations and technology strategy.",
    requirements: ["15+ years IT leadership", "Executive experience", "Digital transformation"],
    skills: ["IT Strategy", "Digital Transformation", "Executive Leadership", "Board Relations", "Risk Management"],
    department: "Executive"
  },
  {
    id: 44,
    title: "Junior Data Analyst",
    location: "Remote",
    type: "Full-time",
    level: "Entry Level",
    experience: "0-2 years",
    salary: "$45,000 - $65,000",
    description: "Analyze data to provide insights and support business decisions.",
    requirements: ["Bachelor's degree", "Basic SQL", "Data visualization"],
    skills: ["SQL", "Excel", "Tableau", "Python", "Statistics"],
    department: "Analytics"
  },
  {
    id: 45,
    title: "Senior Security Engineer",
    location: "Washington DC, USA",
    type: "Full-time",
    level: "Senior",
    experience: "6-9 years",
    salary: "$125,000 - $170,000",
    description: "Design and implement advanced security solutions.",
    requirements: ["6+ years security", "Advanced certifications", "Threat modeling"],
    skills: ["Advanced Security", "Zero Trust", "Cloud Security", "Compliance", "Forensics"],
    department: "Security"
  },
  {
    id: 46,
    title: "Technical Architect",
    location: "Singapore",
    type: "Full-time",
    level: "Senior",
    experience: "8-12 years",
    salary: "$140,000 - $190,000",
    description: "Design enterprise-level technical architectures.",
    requirements: ["8+ years architecture", "Enterprise systems", "Solution design"],
    skills: ["Enterprise Architecture", "System Integration", "Cloud Architecture", "Security Architecture", "Scalability"],
    department: "Architecture"
  },
  {
    id: 47,
    title: "Cloud Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$90,000 - $130,000",
    description: "Manage cloud infrastructure and implement cloud solutions.",
    requirements: ["3+ years cloud", "AWS/Azure/GCP", "Infrastructure as Code"],
    skills: ["AWS", "Terraform", "Docker", "Kubernetes", "Monitoring"],
    department: "Cloud"
  },
  {
    id: 48,
    title: "Mobile App Developer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "2-5 years",
    salary: "$75,000 - $115,000",
    description: "Develop cross-platform mobile applications.",
    requirements: ["2+ years mobile dev", "React Native/Flutter", "App deployment"],
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    department: "Mobile"
  },
  {
    id: 49,
    title: "System Administrator",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$70,000 - $105,000",
    description: "Manage and maintain IT infrastructure and systems.",
    requirements: ["3+ years sysadmin", "Linux/Windows", "Network administration"],
    skills: ["Linux", "Windows Server", "Networking", "Virtualization", "Scripting"],
    department: "IT"
  },
  {
    id: 50,
    title: "Network Engineer",
    location: "Dallas, USA",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$95,000 - $135,000",
    description: "Design and maintain network infrastructure.",
    requirements: ["5+ years networking", "CCNP/CCIE", "Network security"],
    skills: ["Cisco", "SDN", "Network Security", "Cloud Networking", "Automation"],
    department: "Networking"
  },
  {
    id: 51,
    title: "IT Project Manager",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$95,000 - $135,000",
    description: "Manage IT projects from planning to delivery.",
    requirements: ["5+ years PM", "PMP certification", "IT project experience"],
    skills: ["Project Management", "Agile", "Risk Management", "Stakeholder Management", "Budgeting"],
    department: "IT Management"
  },
  {
    id: 52,
    title: "Scrum Master",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$80,000 - $115,000",
    description: "Facilitate agile processes and coach teams.",
    requirements: ["3+ years Scrum", "CSM certification", "Coaching experience"],
    skills: ["Agile", "Scrum", "Kanban", "Team Facilitation", "Coaching"],
    department: "Agile"
  },
  {
    id: 53,
    title: "Technical Lead",
    location: "Bangalore, India",
    type: "Full-time",
    level: "Lead",
    experience: "6-9 years",
    salary: "$90,000 - $140,000",
    description: "Lead technical development and mentor team members.",
    requirements: ["6+ years development", "Leadership", "Architecture"],
    skills: ["Java", "Spring", "Leadership", "Mentoring", "Architecture"],
    department: "Engineering"
  },
  {
    id: 54,
    title: "Software Architect",
    location: "Mumbai, India",
    type: "Full-time",
    level: "Senior",
    experience: "8-12 years",
    salary: "$120,000 - $170,000",
    description: "Design software architectures and technical solutions.",
    requirements: ["8+ years architecture", "System design", "Technology evaluation"],
    skills: ["Architecture Patterns", "System Design", "Technology Strategy", "Scalability", "Performance"],
    department: "Architecture"
  },
  {
    id: 55,
    title: "Solutions Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    experience: "5-8 years",
    salary: "$105,000 - $145,000",
    description: "Design technical solutions and support pre-sales activities.",
    requirements: ["5+ years solutions", "Technical sales", "Solution architecture"],
    skills: ["Solution Design", "Technical Presentations", "POC Development", "Customer Engagement", "Requirements Analysis"],
    department: "Solutions"
  },
  {
    id: 56,
    title: "Customer Success Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$75,000 - $110,000",
    description: "Ensure customer success through technical support and guidance.",
    requirements: ["3+ years customer success", "Technical background", "Communication skills"],
    skills: ["Customer Support", "Technical Training", "Product Knowledge", "Relationship Building", "Problem Solving"],
    department: "Customer Success"
  },
  {
    id: 57,
    title: "Support Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "2-5 years",
    salary: "$60,000 - $90,000",
    description: "Provide technical support and resolve customer issues.",
    requirements: ["2+ years support", "Troubleshooting", "Customer service"],
    skills: ["Technical Support", "Troubleshooting", "Ticketing Systems", "Documentation", "Communication"],
    department: "Support"
  },
  {
    id: 58,
    title: "Implementation Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$75,000 - $110,000",
    description: "Implement and deploy solutions for customers.",
    requirements: ["3+ years implementation", "Deployment experience", "Customer interaction"],
    skills: ["Implementation", "Deployment", "Configuration", "Testing", "Documentation"],
    department: "Implementation"
  },
  {
    id: 59,
    title: "Training Specialist",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "4-7 years",
    salary: "$65,000 - $95,000",
    description: "Develop and deliver technical training programs.",
    requirements: ["4+ years training", "Technical expertise", "Presentation skills"],
    skills: ["Training Development", "Technical Writing", "Public Speaking", "E-Learning", "Assessment"],
    department: "Training"
  },
  {
    id: 60,
    title: "Content Developer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    experience: "3-6 years",
    salary: "$55,000 - $85,000",
    description: "Create technical content and educational materials.",
    requirements: ["3+ years content creation", "Technical writing", "Subject matter expertise"],
    skills: ["Content Creation", "Technical Writing", "SEO", "Multimedia", "Research"],
    department: "Content"
  }
];

const benefits = [
  { icon: Briefcase, title: "Competitive Salary", desc: "Industry-leading compensation packages with performance bonuses" },
  { icon: Users, title: "Diverse Team", desc: "Work with talented professionals from around the world" },
  { icon: Zap, title: "Innovation", desc: "Use cutting-edge technologies and tools" },
  { icon: Globe, title: "Global Reach", desc: "Work on projects with global impact" },
  { icon: Target, title: "Career Growth", desc: "Clear path for advancement and learning opportunities" },
  { icon: Award, title: "Benefits Package", desc: "Health insurance, 401k, paid time off, and more" },
  { icon: Heart, title: "Work-Life Balance", desc: "Flexible hours, remote work options, and wellness programs" },
  { icon: Coffee, title: "Great Culture", desc: "Collaborative environment with team events and celebrations" },
  { icon: Code, title: "Learning Budget", desc: "Annual budget for conferences, courses, and certifications" },
  { icon: Shield, title: "Security", desc: "Comprehensive security training and best practices" },
  { icon: TrendingUp, title: "Equity", desc: "Stock options and equity participation" },
  { icon: Star, title: "Recognition", desc: "Employee recognition programs and awards" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    image: "/team/sarah.jpg",
    quote: "Prasunet has given me the opportunity to work on cutting-edge projects while maintaining a healthy work-life balance. The culture of innovation and continuous learning is incredible."
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    image: "/team/michael.jpg",
    quote: "Joining Prasunet was the best career decision I've made. The company's commitment to employee growth and the collaborative environment make it a truly special place to work."
  },
  {
    name: "Emily Rodriguez",
    role: "Data Scientist",
    image: "/team/emily.jpg",
    quote: "The diversity of projects and the supportive team at Prasunet have helped me grow both professionally and personally. It's a place where innovation meets inclusivity."
  }
];

const companyStats = [
  { number: "500+", label: "Employees Worldwide" },
  { number: "50+", label: "Countries" },
  { number: "1000+", label: "Projects Completed" },
  { number: "95%", label: "Employee Satisfaction" },
  { number: "4.8/5", label: "Glassdoor Rating" },
  { number: "25+", label: "Years Experience" }
];

// Application Form Steps Configuration
const formSteps = [
  { id: 1, title: "Personal Information", shortTitle: "Personal" },
  { id: 2, title: "Professional Details", shortTitle: "Professional" },
  { id: 3, title: "Additional Information", shortTitle: "Additional" }
];

const CareerPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    resumeUrl: "",
    jobTitle: "",
    experience: "",
    coverLetter: "",
    linkedin: "",
    github: "",
    portfolio: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("+91");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.phone) newErrors.phone = "Phone number is required";
    }

    if (currentStep === 2) {
      if (!formData.resumeUrl) newErrors.resumeUrl = "Resume URL is required";
      if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
      if (formData.experience === "") newErrors.experience = "Years of experience is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAllSteps = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate Step 1
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";

    // Validate Step 2
    if (!formData.resumeUrl) newErrors.resumeUrl = "Resume URL is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (formData.experience === "") newErrors.experience = "Years of experience is required";

    // Step 3 fields are optional

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      // Clear errors when moving to next step
      setErrors({});
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Only submit if on step 3
    if (step !== 3) {
      console.warn("Form submission attempted on step", step, "but only allowed on step 3");
      return;
    }
    
    // Validate ALL steps before submitting
    if (!validateAllSteps()) {
      console.warn("Form validation failed");
      return;
    }

    setIsSubmitting(true);

    try {
      const requestData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: selectedCountryCode + formData.phone,
        email: formData.email,
        resumeUrl: formData.resumeUrl,
        jobTitle: formData.jobTitle,
        experience: formData.experience,
        coverLetter: formData.coverLetter,
        linkedin: formData.linkedin,
        github: formData.github,
        portfolio: formData.portfolio,
      };

      const response = await fetch("/api/CareerApplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          resumeUrl: "",
          jobTitle: "",
          experience: "",
          coverLetter: "",
          linkedin: "",
          github: "",
          portfolio: "",
        });
        setTimeout(() => {
          setShowForm(false);
          setStep(1);
          setIsSuccess(false);
        }, 3000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrors({ submit: errorData.message || "Error submitting application. Please check the API endpoint or try again later." });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: "Connection error. Please check your internet and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear all errors when user starts typing
    setErrors({});
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Prevent form submission on Enter key press entirely
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLevel = selectedLevel === "All" || job.level === selectedLevel;
    return matchesSearch && matchesDepartment && matchesLevel;
  });

  const departments = ["All", ...Array.from(new Set(jobs.map(job => job.department)))];
  const levels = ["All", "Entry Level", "Mid-level", "Senior", "Lead", "Principal", "Manager", "Director", "Executive"];

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-w-md w-full p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 border-2 border-green-200">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Application Submitted!
              </h2>
              <p className="mt-3 text-sm text-gray-700">
                Thank you for your interest in joining Prasunet. We'll review your application and contact you soon.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/itcompanybuilding.jpeg"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Shape the Future with Us</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join a global team of innovators, problem-solvers, and technology leaders. At Prasunet, we don't just build software—we create solutions that transform industries and impact millions of lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </button>
            <button
              onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all"
            >
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>

   


      {showForm ? (
        // Application Form Section
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <Stepper currentStep={step} />
            {/* Form Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  {formSteps.find(s => s.id === step)?.title}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setStep(1);
                  }}
                  className="text-white hover:text-blue-100 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {errors.submit && (
                    <div className="bg-red-50 border border-red-300 rounded-lg p-4 flex gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-800 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  {Object.keys(errors).length > 0 && !errors.submit && (
                    <div className="bg-orange-50 border border-orange-300 rounded-lg p-4 flex gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <p className="text-orange-800 text-sm">Please fill in all required fields (marked with *) before continuing.</p>
                    </div>
                  )}

                  {step === 1 && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="John"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Doe"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onKeyPress={handleKeyPress}
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <div className="flex gap-2">
                          <select
                            value={selectedCountryCode}
                            onChange={(e) => setSelectedCountryCode(e.target.value)}
                            className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white max-w-xs"
                          >
                            {countryCodes.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="9876543210"
                            required
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV URL *</label>
                        <input
                          type="url"
                          name="resumeUrl"
                          value={formData.resumeUrl}
                          onChange={handleInputChange}
                          onKeyPress={handleKeyPress}
                          placeholder="https://drive.google.com/file/..."
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">Share via Google Drive, Dropbox, or portfolio</p>
                        {errors.resumeUrl && <p className="text-red-600 text-sm mt-1">{errors.resumeUrl}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Position Applied For *</label>
                          <select
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select job title</option>
                            {jobTitles.map((title) => (
                              <option key={title} value={title}>{title}</option>
                            ))}
                          </select>
                          {errors.jobTitle && <p className="text-red-600 text-sm mt-1">{errors.jobTitle}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                          <input
                            type="number"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            min="0"
                            placeholder="0"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          {errors.experience && <p className="text-red-600 text-sm mt-1">{errors.experience}</p>}
                        </div>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                        <textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          maxLength={1000}
                          rows={4}
                          placeholder="Tell us why you're interested..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-1">{formData.coverLetter.length}/1000</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                        <div className="relative">
                          <Linkedin className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                          <input
                            type="url"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Profile</label>
                        <div className="relative">
                          <Github className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                          <input
                            type="url"
                            name="github"
                            value={formData.github}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="https://github.com/username"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Website</label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          onKeyPress={handleKeyPress}
                          placeholder="https://yourportfolio.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </>
                  )}

                  <div className="flex justify-between gap-4 pt-6 border-t border-gray-200">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Previous
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNext();
                        }}
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors ml-auto disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Job Search and Filters */}
          <section id="jobs" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Find your next opportunity in our diverse range of roles
                </p>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-blue-300">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        job.level === 'Entry Level' ? 'bg-green-100 text-green-800' :
                        job.level === 'Mid-level' ? 'bg-blue-100 text-blue-800' :
                        job.level === 'Senior' ? 'bg-purple-100 text-purple-800' :
                        job.level === 'Lead' ? 'bg-orange-100 text-orange-800' :
                        job.level === 'Principal' ? 'bg-red-100 text-red-800' :
                        job.level === 'Manager' ? 'bg-indigo-100 text-indigo-800' :
                        job.level === 'Director' ? 'bg-pink-100 text-pink-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {job.level}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Requirements:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.slice(0, 2).map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{job.experience}</span>
                      <button
                        onClick={() => {
                          setSelectedJob(job);
                          setFormData({ ...formData, jobTitle: job.title });
                          setShowForm(true);
                        }}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Apply Now →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedDepartment("All");
                      setSelectedLevel("All");
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>


        </>
      )}

      <Footer />
    </div>
  );
};

export default CareerPage;
