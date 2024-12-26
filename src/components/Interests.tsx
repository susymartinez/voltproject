import React from 'react';

export function Interests() {
  const interests = [
    {
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600',
      description: 'Building modern web applications using cutting-edge technologies',
    },
    {
      title: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
      description: 'Exploring the possibilities of machine learning and AI',
    },
    {
      title: 'Open Source',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
      description: 'Contributing to and maintaining open source projects',
    },
  ];

  return (
    <section id="interests" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Interests</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest) => (
            <div key={interest.title} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-colors">
              <img
                src={interest.image}
                alt={interest.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}