import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Section } from './ui/Section';

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-hero-light dark:bg-hero-dark bg-fixed pt-16">
      <div className="text-center">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg ring-4 ring-white dark:ring-theme-card"
        />
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          John Doe
        </h1>
        <p className="text-xl text-theme-muted dark:text-gray-400 mb-8">
          Full Stack Developer & Tech Enthusiast
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com" 
            className="p-2 bg-theme-dark hover:bg-theme-accent text-white rounded-full transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="p-2 bg-theme-accent hover:bg-theme-accent/90 text-white rounded-full transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="#contact" 
            className="p-2 bg-theme-accent hover:bg-theme-accent/90 text-white rounded-full transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
}