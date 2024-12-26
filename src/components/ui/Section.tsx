import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  isDark?: boolean;
}

export function Section({ children, id, className = '', isDark = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-20 ${
        isDark 
          ? 'bg-theme-navy dark:bg-theme-dark' 
          : 'bg-white dark:bg-theme-navy'
      } transition-colors ${className}`}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
}