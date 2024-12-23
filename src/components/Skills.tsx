import React from 'react';
import { Code2, Database, Globe, Wrench } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: React.ElementType }) => (
  <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/20">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="text-blue-400" size={24} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-300">{skill}</li>
      ))}
    </ul>
  </div>
);

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "Java"]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS"]
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL"]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["MS Office", "Web Browsing", "Data Structures & Algorithms"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-950/50 to-purple-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}