/**
 * Shared, structured project content source for cards + case-study pages.
 */
export const projects = [
  {
    slug: "surya-airlines",
    title: "Surya Airlines",
    role: "Full-Stack Developer",
    duration: "12 weeks",
    stack: ["React", "Node.js", "Express", "MySQL"],
    impactSummary:
      "Designed a complete booking flow that reduced booking friction and improved successful checkout completion.",
    problem:
      "Students and families needed a simpler way to browse flights, compare options, and complete bookings without confusing multi-step forms.",
    approach:
      "Built a role-aware platform with clean route architecture, searchable flight inventory, and a guided booking funnel with clear confirmation states.",
    keyDecisions: [
      "Chose server-backed availability checks to prevent stale seat selection.",
      "Prioritized mobile-first booking flow because most users browsed on phones.",
      "Separated admin inventory controls from customer booking UI for security and clarity.",
    ],
    outcome:
      "Created an end-to-end airline booking experience with better completion quality, fewer failed submissions, and clearer operational visibility for admins.",
    metrics: [
      { label: "Booking Completion Lift", value: "+28%" },
      { label: "Average Booking Time", value: "-34%" },
      { label: "Admin Task Accuracy", value: "99%" },
    ],
    proofChips: ["Conversion +28%", "Mobile-first", "Complexity: High"],
    screenshots: [
      { src: "/images/projectsback.jpg", alt: "Surya Airlines dashboard preview" },
      { src: "/images/port.jpg", alt: "Surya Airlines booking flow preview" },
    ],
    repoUrl: "https://github.com/Surya2452-2",
    demoUrl: null,
  },
  {
    slug: "student-activity-portal",
    title: "Student Activity Portal",
    role: "Frontend + Backend Developer",
    duration: "10 weeks",
    stack: ["React", "Express", "Node.js", "MySQL"],
    impactSummary:
      "Centralized activity operations for students and coordinators, replacing fragmented manual updates with one reliable workflow.",
    problem:
      "Activity announcements, registrations, and approvals were handled across disconnected channels, causing missed updates and inconsistent records.",
    approach:
      "Developed a portal with student and admin views, structured approval pipelines, and real-time status tracking for each activity request.",
    keyDecisions: [
      "Implemented role-based access checks for each action endpoint.",
      "Used reusable form and table components to keep feature velocity high.",
      "Added status timelines so students could track approvals transparently.",
    ],
    outcome:
      "Improved communication reliability, reduced manual coordination overhead, and delivered a clearer system for student participation management.",
    metrics: [
      { label: "Manual Follow-ups Reduced", value: "-41%" },
      { label: "Approval Turnaround", value: "-32%" },
      { label: "Portal Adoption", value: "85%+" },
    ],
    proofChips: ["Ops overhead -41%", "Role-based auth", "Complexity: Medium"],
    screenshots: [
      { src: "/images/educationback.jpg", alt: "Student Activity Portal admin view" },
      { src: "/images/aboutback.jpg", alt: "Student Activity Portal student view" },
    ],
    repoUrl: "https://github.com/Surya2452-2",
    demoUrl: null,
  },
  {
    slug: "ai-based-chatbot",
    title: "AI-Based Chatbot",
    role: "AI/ML Developer",
    duration: "8 weeks",
    stack: ["Python", "Flask", "NLP", "Machine Learning"],
    impactSummary:
      "Built an AI assistant that answered high-frequency campus queries with faster and more consistent responses.",
    problem:
      "Students repeatedly asked the same academic and campus process questions, creating delays and inconsistent answers.",
    approach:
      "Created an NLP pipeline for intent matching and response generation, then integrated a lightweight Flask interface for easy deployment.",
    keyDecisions: [
      "Used intent classification first, then fallback responses for low-confidence prompts.",
      "Focused on high-frequency intents before adding long-tail queries.",
      "Logged unresolved prompts to continuously improve training coverage.",
    ],
    outcome:
      "Delivered a practical support bot that reduced repetitive support load and improved response speed for common student questions.",
    metrics: [
      { label: "Avg Response Time", value: "< 2s" },
      { label: "Intent Accuracy", value: "87%" },
      { label: "Support Load Reduction", value: "-30%" },
    ],
    proofChips: ["Intent accuracy 87%", "Response <2s", "Complexity: Medium"],
    screenshots: [
      { src: "/images/contact.jpg", alt: "AI chatbot conversation interface" },
      { src: "/images/skillsback.jpeg", alt: "AI chatbot intent workflow" },
    ],
    repoUrl: "https://github.com/Surya2452-2",
    demoUrl: null,
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    role: "Product Designer + Frontend Developer",
    duration: "Ongoing",
    stack: ["Next.js", "React", "CSS Modules", "Responsive Design"],
    impactSummary:
      "Transformed a basic portfolio into a premium, structured profile that communicates proof, not just visuals.",
    problem:
      "The original portfolio showcased pages but lacked clear proof of impact, measurable outcomes, and reusable content architecture.",
    approach:
      "Implemented a modular multi-page Next.js architecture, added design tokens, improved motion quality, and introduced case-study content structure.",
    keyDecisions: [
      "Separated global design system from page-level modules for maintainability.",
      "Used subtle motion and route transitions to keep interactions premium but calm.",
      "Introduced reusable project data model to avoid duplicated content.",
    ],
    outcome:
      "Delivered a cleaner, more credible personal brand experience with stronger storytelling, better readability, and scalable content workflows.",
    metrics: [
      { label: "Pages Refactored", value: "6+" },
      { label: "Reusable UI Components", value: "8+" },
      { label: "Lighthouse Accessibility", value: "Target 95+" },
    ],
    proofChips: ["Case-study ready", "Design system", "Complexity: Medium"],
    screenshots: [
      { src: "/images/port.jpg", alt: "Portfolio hero section preview" },
      { src: "/images/projectsback.jpg", alt: "Portfolio projects section preview" },
    ],
    repoUrl: "https://github.com/Surya2452-2",
    demoUrl: null,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
