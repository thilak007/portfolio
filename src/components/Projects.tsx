'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Distributed Database Benchmarking',
    description: 'Performance analysis of TiDB and Cassandra at scale',
    details: [
      'Benchmarked TiDB with TPC-C/TPC-H workloads up to 190 GiB',
      'Ran Cassandra NoSQLBench tests with 200M+ operations',
      'Measured throughput, latency (90ms OLTP), and Raft replication lag',
      'Cassandra achieved 9K ops/sec with <1ms query latency',
    ],
    tech: ['Go', 'TiDB', 'Cassandra', 'TPC-C', 'NoSQLBench'],
  },
  {
    title: 'Lambda Architecture Pipeline',
    description: 'Stream and batch processing for analytics workloads',
    details: [
      'Designed lambda architecture for NYC Taxi dataset analytics',
      'Batch layer: BigQuery and Dataproc for historical processing',
      'Speed layer: Kafka and Spark Streaming for real-time analytics',
      'BigQuery scanned 80GiB in <10s using columnar storage',
    ],
    tech: ['Kafka', 'Spark Streaming', 'BigQuery', 'Dataproc'],
  },
  {
    title: 'ML Inference on Google Cloud',
    description: 'Production batch inference infrastructure',
    details: [
      'Built ML serving pipeline on Google Batch',
      'Scaled to 1M+ BigQuery rows per batch run',
      'Provisioned infrastructure with Terraform (Cloud Scheduler, Functions)',
      'Automated CI/CD with GitLab',
    ],
    tech: ['Python', 'Terraform', 'GCP', 'BigQuery', 'GitLab CI/CD'],
  },
  {
    title: 'High-Throughput Recommendation Service',
    description: 'User recommendation engine at Vimeo',
    details: [
      'Served 10M+ users with low-latency recommendations',
      'Implemented Memcached caching layer',
      'Integrated Datadog for monitoring and alerting',
      'Drove 20% increase in free-to-paid conversion',
    ],
    tech: ['PHP', 'MySQL', 'Memcached', 'Datadog', 'Python', 'Go'],
  },
];

/**
 * Projects section - Modern card grid with hover effects
 */
export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-8">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="group p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                
                <ul className="space-y-1.5 mb-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                      <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub link */}
          <div className="mt-8 text-center">
            <a
              href="https://github.com/thilak007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
