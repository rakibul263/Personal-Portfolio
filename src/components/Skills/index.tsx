import React from 'react';
import { SkillCategory } from './SkillCategory';
import { skillCategories } from './skillsData';

export function Skills() {
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