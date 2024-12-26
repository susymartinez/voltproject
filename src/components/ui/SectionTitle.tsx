import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}