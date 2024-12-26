import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <Hero />
        <About />
        <Interests />
        <Achievements />
        <Contact />
      </div>
    </ThemeProvider>
  );
}