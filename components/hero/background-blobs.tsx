'use client';

import { motion } from 'framer-motion';

export function BackgroundBlobs() {
  return (
    <>
      {/* Animated blobs */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -left-24 top-32 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 dark:from-blue-900 dark:to-blue-800"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -right-24 top-1/2 w-80 h-80 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 dark:from-purple-900 dark:to-purple-800"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/3 -bottom-24 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 dark:from-cyan-900 dark:to-blue-900"
      />
    </>
  );
}
