'use client';

import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
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

interface Skill {
  name: string;
  icon: IconType;
}

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
    ] as Skill[],
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
    ] as Skill[],
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
    ] as Skill[],
  },
  {
    name: 'ML & Tools',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'HuggingFace', icon: SiHuggingface },
      { name: 'Pandas', icon: SiPandas },
    ] as Skill[],
  },
];

/**
 * Skills section - Clean card grid
 */
export function Skills() {
  return (
    <section id="skills" className="pt-10 pb-20 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-6">
            Skills
          </h2>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 max-w-3xl">
            Core toolkit I use to build reliable backend systems, data infrastructure, and production ML pipelines.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md hover:shadow-blue-100/70 dark:hover:shadow-none transition-all"
              >
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -1 }}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                    >
                      <skill.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {skill.name}
                    </motion.div>
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
