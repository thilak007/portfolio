'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const experiences = [
  {
    company: 'American Family Insurance',
    companyHref: 'https://www.amfam.com/',
    role: 'MLOps Intern, ML Infrastructure',
    location: 'Madison, WI',
    duration: 'May 2025 – Aug 2025',
    highlights: [
      'Built ML model serving for batch inference on Google Batch, scaling periodic inference across 1M+ BigQuery rows per run.',
      'Developed Infrastructure as Code with Terraform, GitLab CI/CD, Docker, and Python to provision Cloud Scheduler, Cloud Functions, and Cloud Storage.',
      'Automated the end-to-end deployment pipeline, reducing manual effort and improving operational efficiency.',
    ],
    tech: [
      'Python',
      'Terraform',
      'GitLab CI/CD',
      'Docker',
      'Google Batch',
      'BigQuery',
      'GCP',
    ],
  },
  {
    company: 'Vimeo',
    companyHref: 'https://vimeo.com/',
    role: 'Software Engineer 3, IAM Platform',
    location: 'Bengaluru, India',
    duration: 'Jun 2023 – Aug 2024',
    highlights: [
      'Owned a high-throughput user recommendation service serving 10M+ users by designing backend APIs with PHP, MySQL, Memcached, Docker, and Datadog; increased free-to-paid conversion by 20%.',
      'Optimized RBAC authorization systems by improving MySQL query performance and data access patterns.',
      'Modernized legacy pages by rebuilding frontend components with React and TypeScript, improving logged-in user experience and increasing user interaction time by 30%.',
      'Ideated and built a video recommendation service using Hugging Face Sentence Transformers with Python and Go for the Vimeo Jam hackathon.',
    ],
    tech: [
      'PHP',
      'Go',
      'Python',
      'MySQL',
      'Memcached',
      'Docker',
      'Datadog',
      'React',
      'TypeScript',
      'Hugging Face',
    ],
  },
  {
    company: 'PropertyGuru Group',
    companyHref: 'https://www.propertygurugroup.com/',
    role: 'Software Engineer',
    location: 'Bengaluru, India',
    duration: 'Jul 2021 – May 2023',
    highlights: [
      'Developed and maintained backend microservices in Nest.js, Node.js, and Symfony for agent and buyer workflows in the property-tech domain.',
      'Reduced config API latency by 25% using Redis caching and automated cache invalidation, improving efficiency for non-engineering teams.',
      'Built frontend pages and micro-frontends with TypeScript, React, Redux, and Material UI; improved maintainability by adding unit tests with Jest.',
    ],
    tech: [
      'Nest.js',
      'Node.js',
      'Symfony',
      'Redis',
      'TypeScript',
      'React',
      'Redux',
      'Material UI',
      'Jest',
    ],
  },
  {
    company: 'Hiver',
    companyHref: 'https://hiverhq.com/',
    role: 'Software Engineer',
    location: 'Bengaluru, India',
    duration: 'May 2019 – Jun 2021',
    highlights: [
      'Led the overhaul of the billing system for a Gmail-based shared inbox product, supporting revenue growth.',
      'Automated and optimized Stripe payment processing across Python and PHP services using webhooks and RabbitMQ.',
      'Implemented MFA/SCA compliance for EU transactions.',
    ],
    tech: ['Python', 'PHP', 'Stripe', 'RabbitMQ', 'Webhooks', 'MFA/SCA', 'MySQL'],
  },
];

/**
 * Experience section - Modern timeline style
 */
export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-zinc-50/70 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-6">
            Experience
          </h2>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 max-w-3xl">
            Building backend and distributed systems for high-scale products, data-heavy workflows, and ML platforms.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-5 w-2 h-2 -translate-x-[3.5px] rounded-full bg-blue-600 hidden md:block" />

                  <div
                    className={`ml-0 md:ml-6 rounded-lg border transition-all ${
                      expandedIndex === index
                        ? 'bg-white/95 dark:bg-zinc-900 border-blue-200 dark:border-zinc-700 shadow-md shadow-blue-100/70 dark:shadow-none'
                        : 'bg-white/95 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-zinc-700'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full p-4 text-left"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3>
                            <a
                              href={exp.companyHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {exp.company}
                            </a>
                          </h3>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                            {exp.role}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                              {exp.duration}
                            </div>
                            <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                              {exp.location}
                            </div>
                          </div>
                          <svg
                            className={`w-4 h-4 text-zinc-400 transition-transform ${
                              expandedIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.tech.slice(0, expandedIndex === index ? undefined : 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {expandedIndex !== index && exp.tech.length > 4 && (
                          <span className="px-2 py-0.5 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                            +{exp.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </button>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? 'auto' : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-2">
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                              <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
