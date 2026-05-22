'use client';

import { motion } from 'framer-motion';
import {
  CreditCard,
  Briefcase,
  CircleCheck as CheckCircle2,
  FileText,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FloatingCard } from './floating-card';
import { PortalCard } from './portal-card';
import { BackgroundBlobs } from './background-blobs';
import { ThemeToggle } from '@/components/theme-toggle';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F6F7FB] dark:bg-slate-950">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background */}
      <div className="pointer-events-none">
        <BackgroundBlobs />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-28">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-light
                  tracking-tight
                  leading-[1.05]
                  text-[#6B6B95]
                  dark:text-white
                "
              >
                A single platform to{' '}
                <span className="font-semibold text-slate-900 dark:text-white">
                  manage
                </span>{' '}
                every part of your{' '}
                <span className="font-semibold text-slate-900 dark:text-white">
                  legal work
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="
                  max-w-lg
                  text-lg
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-300
                "
              >
                Track matters, coordinate schedules, manage clients,
                centralize documents, and handle communication —
                all in one system.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="
                  rounded-full
                  bg-blue-600
                  px-8
                  text-white
                  hover:bg-blue-700
                  transition-all
                "
              >
                Get Started
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                  rounded-full
                  border-slate-300
                  px-8
                  dark:border-slate-700
                "
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              relative
              h-[480px]
              sm:h-[560px]
              lg:h-[620px]
              w-full
              pointer-events-none
            "
          >
            {/* Billing */}
            <motion.div
              className="absolute right-0 top-12 lg:top-20"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FloatingCard
                label="Billing"
                icon={CreditCard}
                bgColor="bg-blue-600 hover:bg-blue-700"
                rotation={16}
                delay={0.1}
              />
            </motion.div>

            {/* Matters */}
            <motion.div
              className="absolute left-2 sm:left-8 top-32 lg:top-40"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FloatingCard
                label="Matters"
                icon={Briefcase}
                bgColor="bg-orange-500 hover:bg-orange-600"
                rotation={-18}
                delay={0.2}
              />
            </motion.div>

            {/* Portal Card */}
            <motion.div
              className="absolute left-1/2 top-48 -translate-x-1/2 lg:top-56"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <PortalCard
                name="John Doe - Portal"
                message="Hey! Could you review this document for me?"
                matterRef="MAT-2231"
                time="2h ago"
                delay={0.3}
              />
            </motion.div>

            {/* Tasks */}
            <motion.div
              className="absolute left-1/3 bottom-20 lg:bottom-24"
              animate={{ y: [0, -11, 0] }}
              transition={{
                duration: 4.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FloatingCard
                label="Tasks"
                icon={CheckCircle2}
                bgColor="bg-slate-900 hover:bg-black dark:bg-slate-800"
                rotation={-6}
                delay={0.4}
              />
            </motion.div>

            {/* Documents */}
            <motion.div
              className="
                hidden sm:block
                absolute
                right-4
                sm:right-8
                bottom-12
                lg:bottom-16
              "
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FloatingCard
                label="Documents"
                icon={FileText}
                bgColor="bg-slate-900 hover:bg-black dark:bg-slate-800"
                rotation={18}
                delay={0.5}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F6F7FB] dark:from-slate-950 to-transparent" />
    </section>
  );
}