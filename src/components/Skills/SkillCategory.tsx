import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export function SkillCategory({ title, skills, icon: Icon }: SkillCategoryProps) {
  return (
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
}