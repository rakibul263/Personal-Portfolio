import { Code2, Database, Globe, Wrench } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
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