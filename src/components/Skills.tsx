'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Go', 'Python', 'C++', 'TypeScript', 'SQL', 'PHP'],
  },
  {
    name: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'GCP', 'CI/CD', 'Linux'],
  },
  {
    name: 'Data Systems',
    skills: ['Kafka', 'Spark', 'BigQuery', 'Cassandra', 'TiDB', 'MySQL', 'Redis'],
  },
  {
    name: 'ML & Tools',
    skills: ['PyTorch', 'HuggingFace', 'Pandas', 'RabbitMQ', 'Datadog', 'Git'],
  },
];

/**
 * Skills section - Clean card grid
 */
export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-8">
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
