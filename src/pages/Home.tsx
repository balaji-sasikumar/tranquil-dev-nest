
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import SplitText from "@/components/SplitText";
import SkillItem from "@/components/SkillItem";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Separator } from "@/components/ui/separator";

const Home: React.FC = () => {
  const skills = [
    {
      icon: "languages",
      title: "Languages",
      items: ["TypeScript", "Python", "C#", "JavaScript"],
    },
    {
      icon: "frameworks",
      title: "Frameworks",
      items: ["Node.js", "React", "Angular", "Ionic", "Electron"],
    },
    {
      icon: "webTech",
      title: "Web Technologies",
      items: ["Bootstrap", "Tailwind CSS", "Material-UI"],
    },
    {
      icon: "database",
      title: "Database",
      items: ["MongoDB", "SQL"],
    },
    {
      icon: "tools",
      title: "Tools",
      items: ["Git", "Docker", "Kubernetes"],
    },
    {
      icon: "cloud",
      title: "Cloud Platforms",
      items: ["Azure"],
    },
  ];

  const projects = [
    {
      title: "File Explorer",
      description:
        "A desktop file explorer that allows secure file storage in Azure File Share with encryption.",
      technologies: ["Electron", "React", "Material-UI"],
      features: [
        "Drag & Drop",
        "File Previews",
        "Encrypted Storage",
        "Modern UI",
      ],
    },
    {
      title: "TaskManager",
      description:
        "A task and event management system improving team collaboration by 60%.",
      technologies: ["Node.js", "MongoDB", "Azure"],
      features: ["Realtime updates", "Notifications", "Secure file uploads"],
    },
    {
      title: "Secure Notes App",
      description:
        "A notes app with end-to-end encryption, handling 1000+ file uploads daily.",
      technologies: ["Node.js", "Firebase", "AES Encryption"],
      features: ["File encryption", "Password protection", "Cloud sync"],
    },
    {
      title: "B-Dash",
      description:
        "Developed a logging and rule engine system for recalculating business logic.",
      technologies: ["Node.js", "Azure", "Docker", "Kubernetes"],
      features: ["100% accuracy improvement", "Database connectors"],
    },
  ];

  const experiences = [
    {
      title: "Software Developer",
      company: "Peninsular Research Operation, Chennai",
      period: "Aug 2021 - Present",
      achievements: [
        "Built a project and task management system, reducing event planning time by 50%.",
        "Secured 100GB+ of sensitive data in Azure Blob Storage using AES encryption.",
        "Developed a secure notes app handling 1,000+ uploads daily.",
        "Migrated APIs from .NET & SQL to Node.js & MongoDB, improving query performance by 80%.",
        "Implemented a rule engine using Azure Queue Triggers for recalculating component values.",
      ],
    },
    {
      title: "Junior Software Intern",
      company: "OneMind India, Chennai",
      period: "Feb 2021 - Apr 2021",
      achievements: [
        "Developed responsive web apps using Angular for better UI/UX.",
        "Built scalable backend systems with .NET Core 3.",
        "Automated deployment pipelines using Azure DevOps, reducing deployment time.",
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="mb-6">
          <AnimatedText
            text="Balaji Sasikumar"
            className="text-4xl font-bold"
            animation="fade-in"
          />
          <div className="mt-4">
            <SplitText
              text="Software Developer"
              className="text-xl text-muted-foreground font-medium"
              delay={0.5}
              staggerChildren={0.05}
              tag="h2"
            />
          </div>
        </div>
        <AnimatedText
          text="Building secure, efficient, and user-friendly applications with modern web technologies."
          className="max-w-xl mx-auto text-muted-foreground"
          delay={1000}
        />
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              title={skill.title}
              items={skill.items}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      <Separator />

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Experience</h2>
        <ExperienceTimeline experiences={experiences} />
      </section>
    </div>
  );
};

export default Home;
