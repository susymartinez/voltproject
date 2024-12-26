import React from 'react';
import { Code2, Brain, Globe } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Card } from './ui/Card';

export function About() {
  const skills = [
    {
      icon: <Code2 className="w-12 h-12 mx-auto mb-4 text-theme-accent" />,
      title: 'Developer',
      description: 'Passionate about creating elegant solutions to complex problems'
    },
    {
      icon: <Brain className="w-12 h-12 mx-auto mb-4 text-theme-accent" />,
      title: 'Problem Solver',
      description: 'Always eager to learn and tackle new challenges'
    },
    {
      icon: <Globe className="w-12 h-12 mx-auto mb-4 text-theme-accent" />,
      title: 'Global Citizen',
      description: 'Working with teams across different cultures and time zones'
    }
  ];

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <Card key={skill.title} className="text-center">
            {skill.icon}
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              {skill.title}
            </h3>
            <p className="text-theme-muted dark:text-gray-400">
              {skill.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}