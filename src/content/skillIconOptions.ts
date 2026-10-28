// Icons the admin can pick for a skill. Rendering lives in skillIcons.tsx;
// this file stays plain data so keystatic.config can import it.
export const skillIconOptions = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "javascript", label: "JavaScript" },
    { value: "nestjs", label: "NestJS" },
    { value: "nodejs", label: "Node.js" },
    { value: "postgresql", label: "PostgreSQL" },
    { value: "prisma", label: "Prisma" },
    { value: "redis", label: "Redis" },
    { value: "docker", label: "Docker" },
    { value: "microservices", label: "Microservices" },
    { value: "redux", label: "Redux" },
    { value: "git", label: "Git" },
    { value: "tailwind", label: "Tailwind CSS" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "python", label: "Python" },
    { value: "mongodb", label: "MongoDB" },
    { value: "mysql", label: "MySQL" },
    { value: "graphql", label: "GraphQL" },
    { value: "figma", label: "Figma" },
    { value: "linux", label: "Linux" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "rabbitmq", label: "RabbitMQ" },
    { value: "jest", label: "Jest" },
    { value: "none", label: "No icon / custom image" },
] as const

export type SkillIconKey = (typeof skillIconOptions)[number]["value"]

export const projectTagOptions = [
    { value: "company", label: "Company" },
    { value: "personal", label: "Personal" },
    { value: "freelance", label: "Freelance" },
    { value: "uiux", label: "UI/UX" },
    { value: "clone", label: "Clone" },
    { value: "opensource", label: "Open Source" },
] as const

export type ProjectTag = (typeof projectTagOptions)[number]["value"]
