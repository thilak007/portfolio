'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDatabase } from 'react-icons/fa6';
import {
  SiApachecassandra,
  SiApachekafka,
  SiApachespark,
  SiCplusplus,
  SiDatadog,
  SiDocker,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiHuggingface,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiPandas,
  SiPhp,
  SiPython,
  SiPytorch,
  SiRabbitmq,
  SiRedis,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';

/**
 * Combined Hero + About Section
 * Merges introduction and bio for faster scanning
 */
export function Hero() {
  const brandPillars = [
    'First Principles Engineering',
    'Production-grade reliability',
    'Backend and distributed systems depth',
    'Large Scale Data & ML Infra'
  ];

  const skillCategories = [
    {
      name: 'Languages',
      skills: [
        { name: 'Go', icon: SiGo },
        { name: 'Python', icon: SiPython },
        { name: 'C++', icon: SiCplusplus },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'SQL', icon: FaDatabase },
        { name: 'PHP', icon: SiPhp },
      ],
    },
    {
      name: 'Infrastructure',
      skills: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Terraform', icon: SiTerraform },
        { name: 'GCP', icon: SiGooglecloud },
        { name: 'CI/CD', icon: SiGithubactions },
        { name: 'Linux', icon: SiLinux },
        { name: 'Datadog', icon: SiDatadog },
      ],
    },
    {
      name: 'Data Systems',
      skills: [
        { name: 'RabbitMQ', icon: SiRabbitmq },
        { name: 'Cassandra', icon: SiApachecassandra },
        { name: 'Kafka', icon: SiApachekafka },
        { name: 'Spark', icon: SiApachespark },
        { name: 'BigQuery', icon: SiGooglecloud },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Redis', icon: SiRedis },
      ],
    },
    {
      name: 'ML & Tools',
      skills: [
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'HuggingFace', icon: SiHuggingface },
        { name: 'Pandas', icon: SiPandas },
      ],
    },
  ] as const;

  const keyStats = [
    { value: '5+', label: 'Years Exp', href: '#experience', highlight: true },
    { value: '10M+', label: 'Users Served', href: '#projects', highlight: false },
    { value: '3.95', label: 'MS GPA', href: '#skills', highlight: false },
  ];

  const passionPoints = [
    'Designing APIs and systems that stay fast under scale',
    'Building resilient data paths with observability and automation',
    'Shipping backend platforms that teams can trust in production',
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-start px-4 sm:px-6 pt-16 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full bg-blue-300/20 dark:bg-blue-700/10 blur-3xl" />
      <div className="max-w-6xl mx-auto w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10 items-start"
        >
          {/* Left: Personal photo + skills */}
          <div>
            <div className="relative w-fit mx-auto mb-0">
              <motion.div whileHover={{ y: -3 }} className="flex flex-col items-center text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 ring-4 ring-blue-200 dark:ring-blue-800 shadow-xl shadow-blue-100/70 dark:shadow-none">
                <Image
                src="/profile-photo.jpg"
                alt="Thilak Raj Murugan"
                fill
                className="object-cover"
                priority
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Thilak Raj Murugan</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Backend Engineer · Distributed Systems</p>
              </div>
              </motion.div>

              <motion.div
              animate={{ y: -4 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute -top-4 -right-12 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold whitespace-nowrap shadow-lg transform-gpu"
              >
              Backend at Scale
              </motion.div>
            </div>
            <div className="h-6" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Technical Skills
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {skillCategories.map((category) => (
                  <div
                    key={category.name}
                    className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900"
                  >
                    <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-2">{category.name}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                          >
                            <Icon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                            {skill.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm italic text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-3">
                “Passionate about petabyte-scale storage systems!”
              </p>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 rounded-md bg-blue-100/80 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Backend Engineer · Distributed Systems
            </motion.div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">Hi, I&apos;m</p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
              Thilak Raj Murugan
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I build <strong className="text-blue-600 dark:text-blue-400 font-semibold">backend, distributed systems</strong> and <strong className="text-blue-600 dark:text-blue-400 font-semibold">ML infrastructure</strong> that serve millions of users. I&apos;m graduating soon with a <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">MS in Data Engineering</strong> at UW–Madison (Spring 2026).
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Across Vimeo, PropertyGuru, Hiver, and American Family Insurance, I&apos;ve owned work spanning high-throughput user recommendations, billing systems, and cloud-scale ML inference.
              </p>
            </div>

            <ul className="space-y-2.5 mb-8">
              {passionPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {brandPillars.map((pillar) => (
                <motion.span
                  key={pillar}
                  whileHover={{ y: -1 }}
                  className="px-2.5 py-1 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                >
                  {pillar}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {keyStats.map((stat) => (
                <motion.a
                  key={stat.label}
                  href={stat.href}
                  whileHover={{ y: -2 }}
                  className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                >
                  <div className={`text-2xl font-bold ${stat.highlight ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-900 dark:text-zinc-100'}`}>{stat.value}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{stat.label}</div>
                </motion.a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
              >
                View Experience
              </a>
              <a
                href="/resume-v2.pdf"
                download
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
