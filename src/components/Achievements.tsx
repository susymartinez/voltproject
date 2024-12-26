import React from 'react';
import { Award, BookOpen, Trophy } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: 'Best Developer Award 2023',
      description: 'Recognized for outstanding contributions to project success',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: 'Published Research Paper',
      description: 'Machine Learning in Modern Web Applications',
    },
    {
      icon: <Award className="w-12 h-12 text-green-500" />,
      title: 'Open Source Recognition',
      description: '1000+ GitHub stars on personal projects',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {achievement.icon}
                <h3 className="text-xl font-semibold my-4 dark:text-white">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}