'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa6';
import { SiLeetcode, SiCodewars } from 'react-icons/si';
import { RiGitPullRequestLine } from 'react-icons/ri';

/**
 * Coding profiles section - mirrors GitHub-style developer presence
 */
export function CodingProfiles() {
  return (
    <section id="profiles" className="pt-20 pb-10 px-4 sm:px-6 bg-zinc-50/60 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
            Coding Profiles
          </h2>

          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">
            Engineering footprint beyond the resume
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            I actively publish code, solve problems, and contribute to open-source projects. These profiles reflect my passion for backend engineering, distributed systems, and practical software craftsmanship.
          </p>

          <div className="grid lg:grid-cols-2 gap-4 mb-6">
            <motion.a
              href="https://leetcode.com/thilak007/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -2 }}
              className="group p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-100/70 dark:hover:shadow-none transition-all"
            >
              <div className="inline-flex items-center gap-2 mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <SiLeetcode className="w-4 h-4 text-blue-600" />
                LeetCode Stats
              </div>
              <Image
                src="https://leetcard.jacoblin.cool/thilak007?theme=dark&font=Noto%20Sans%20Soyombo&ext=heatmap"
                alt="LeetCode stats for thilak007"
                width={700}
                height={320}
                className="w-full h-auto rounded-lg border border-zinc-200 dark:border-zinc-800"
                loading="lazy"
              />
            </motion.a>

            <motion.a
              href="https://www.codewars.com/users/thilak007"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              whileHover={{ y: -2 }}
              className="group p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-100/70 dark:hover:shadow-none transition-all"
            >
              <div className="inline-flex items-center gap-2 mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <SiCodewars className="w-4 h-4 text-blue-600" />
                Codewars Stats
              </div>
              <Image
                src="https://github.r2v.ch/codewars?user=thilak007&name=true&top_languages=true&theme=dark"
                alt="Codewars stats for thilak007"
                width={700}
                height={320}
                className="w-full h-auto rounded-lg border border-zinc-200 dark:border-zinc-800"
                loading="lazy"
              />
            </motion.a>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <RiGitPullRequestLine className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Open Source Contribution</h4>
            </div>

            <div className="text-sm text-zinc-600 dark:text-zinc-300 space-y-3 leading-relaxed">
              <p>
                <a
                  href="https://openfga.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FaCode className="w-3.5 h-3.5" />
                  OpenFGA
                </a>
              </p>

              <p>
                Pull Request:{' '}
                <a
                  href="https://github.com/openfga/sample-stores/pull/23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  openfga/sample-stores#23
                </a>
              </p>

              <p>
                Briefly, OpenFGA is a high-performance and flexible authorization and permission system built for
                developers and inspired by Google Zanzibar. It is currently accepted into the Cloud Native Computing
                Foundation (CNCF).
              </p>

              <p>
                Ref:{' '}
                <a
                  href="https://www.cncf.io/projects/openfga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  CNCF OpenFGA Project
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
