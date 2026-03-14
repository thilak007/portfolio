'use client';

import { motion } from 'framer-motion';

/**
 * Combined Hero + About Section
 * Merges introduction and bio for faster scanning
 */
export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 pt-14">
      <div className="max-w-6xl mx-auto w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Left: Visual/Code element */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Code block visual */}
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6 font-mono text-xs text-zinc-600 dark:text-zinc-400 shadow-lg">
                <div className="space-y-2">
                  <div>
                    <span className="text-purple-600 dark:text-purple-400">class</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">DistributedSystem</span>:
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-600 dark:text-purple-400">def</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">__init__</span>(self):
                  </div>
                  <div className="pl-8">self.scale = <span className="text-amber-600 dark:text-amber-400">"10M+ users"</span></div>
                  <div className="pl-8">self.uptime = <span className="text-amber-600 dark:text-amber-400">"99.9%"</span></div>
                  <div className="pl-8">self.latency = <span className="text-amber-600 dark:text-amber-400">"&lt;100ms"</span></div>
                  <div className="pl-4">&nbsp;</div>
                  <div className="pl-4">
                    <span className="text-purple-600 dark:text-purple-400">def</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">build</span>(self):
                  </div>
                  <div className="pl-8">
                    <span className="text-purple-600 dark:text-purple-400">return</span> [
                  </div>
                  <div className="pl-12"><span className="text-amber-600 dark:text-amber-400">"scalable APIs"</span>,</div>
                  <div className="pl-12"><span className="text-amber-600 dark:text-amber-400">"distributed DBs"</span>,</div>
                  <div className="pl-12"><span className="text-amber-600 dark:text-amber-400">"ML pipelines"</span></div>
                  <div className="pl-8">]</div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-lg">
                5+ Years Exp
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">Hi, I&apos;m</p>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
              Thilak Raj Murugan
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-6">
              Backend & Distributed Systems Engineer
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I build scalable infrastructure, distributed databases, and ML platforms 
                that serve millions of users. Currently pursuing my <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">MS in Computer Science</strong> at UW–Madison.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Over the past 5 years, I&apos;ve built high-throughput services at Vimeo, 
                optimized payment infrastructure at Hiver, and scaled ML pipelines on Google Cloud.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">5+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Years Exp</div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">10M+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Users</div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">3.95</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">GPA</div>
              </div>
            </div>

            {/* Focus areas */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Distributed Systems', 'Databases', 'ML Infrastructure', 'Cloud Platforms', 'Data Engineering'].map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                View Experience
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
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
