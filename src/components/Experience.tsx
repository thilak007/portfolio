'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const experiences = [
  {
    company: 'American Family Insurance',
    role: 'MLOps Intern, ML Infrastructure',
    location: 'Madison, WI',
    duration: 'May 2025 – Aug 2025',
    highlights: [
      'Built ML inference pipeline on Google Batch processing 1M+ BigQuery rows per run',
      'Automated infrastructure provisioning with Terraform (Cloud Scheduler, Functions, Storage)',
      'Reduced manual deployment effort through GitLab CI/CD pipelines',
    ],
    tech: ['Python', 'Terraform', 'GCP', 'BigQuery', 'Docker'],
  },
  {
    company: 'Vimeo',
    role: 'Software Engineer 3, IAM Platform',
    location: 'Bengaluru, India',
    duration: 'Jun 2023 – Aug 2024',
    highlights: [
      'Owned user recommendation service serving 10M+ users, drove 20% increase in free-to-paid conversion',
      'Designed backend APIs with PHP, MySQL, Memcached; optimized query performance for RBAC systems',
      'Built video recommendation engine using Hugging Face transformers (Python, Go)',
    ],
    tech: ['PHP', 'MySQL', 'Memcached', 'Python', 'Go', 'React'],
  },
  {
    company: 'PropertyGuru Group',
    role: 'Software Engineer',
    location: 'Bengaluru, India',
    duration: 'Jul 2021 – May 2023',
    highlights: [
      'Built backend microservices (Node.js, Symfony) for property-tech platform',
      'Reduced config API latency by 25% using Redis caching',
      'Developed frontend micro-frontends with TypeScript and React',
    ],
    tech: ['Node.js', 'Symfony', 'Redis', 'TypeScript', 'React'],
  },
  {
    company: 'Hiver',
    role: 'Software Engineer',
    location: 'Bengaluru, India',
    duration: 'May 2019 – Jun 2021',
    highlights: [
      'Overhauled billing infrastructure for Gmail-based shared inbox product',
      'Automated payment processing with Stripe SDK, RabbitMQ, and webhooks',
      'Implemented MFA/SCA compliance for EU transactions',
    ],
    tech: ['Python', 'PHP', 'Stripe', 'RabbitMQ', 'MySQL'],
  },
];

/**
 * Experience section - Modern timeline style
 */
export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-8">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-5 w-2 h-2 -translate-x-[3.5px] rounded-full bg-blue-600 hidden md:block" />

                  <div
                    className={`ml-0 md:ml-6 rounded-lg border transition-all ${
                      expandedIndex === index
                        ? 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 shadow-md'
                        : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full p-4 text-left"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {exp.company}
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
