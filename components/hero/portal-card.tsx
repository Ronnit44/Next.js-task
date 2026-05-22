'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PortalCardProps {
  name: string;
  message: string;
  matterRef: string;
  time: string;
  delay?: number;
}

export function PortalCard({
  name,
  message,
  matterRef,
  time,
  delay = 0,
}: PortalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'relative px-5 py-4 rounded-full',
        'bg-gradient-to-r from-purple-200 to-purple-100',
        'dark:from-purple-900/40 dark:to-purple-800/30',
        'shadow-lg hover:shadow-xl transition-shadow',
        'backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/30',
        'flex items-center gap-4 max-w-sm'
      )}
      style={{
        transform: 'rotate(-8deg)',
      }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            JD
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />
        </div>
      </motion.div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-semibold text-slate-900 dark:text-white text-sm">
            {name}
          </p>
          <MessageCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
          {message}
        </p>
        <div className="flex gap-2 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span>{matterRef}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
      </div>
    </motion.div>
  );
}
