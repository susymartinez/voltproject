import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" isDark>
      <SectionTitle>Get in Touch</SectionTitle>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-theme-card rounded-lg focus:ring-2 focus:ring-theme-accent focus:border-transparent bg-white dark:bg-theme-card text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-theme-card rounded-lg focus:ring-2 focus:ring-theme-accent focus:border-transparent bg-white dark:bg-theme-card text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-theme-card rounded-lg focus:ring-2 focus:ring-theme-accent focus:border-transparent bg-white dark:bg-theme-card text-gray-900 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-theme-accent text-white py-2 px-6 rounded-lg hover:bg-theme-accent/90 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <Send size={20} />
          </button>
        </form>
      </div>
    </Section>
  );
}