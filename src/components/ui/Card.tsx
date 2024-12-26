import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-theme-card rounded-lg shadow-lg p-6 transition-colors ${className}`}>
      {children}
    </div>
  );
}