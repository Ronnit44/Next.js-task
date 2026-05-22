'use client';

import { motion } from 'framer-motion';
import { Video as LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  label: string;
  icon: LucideIcon;
  bgColor: string;
  rotation: number;
  delay?: number;
  duration?: number;
}

export function FloatingCard({
  label,
  icon: Icon,
  bgColor,
  rotation,
  delay = 0,
  duration = 4,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        'relative px-6 py-3 rounded-full font-semibold text-white',
        'shadow-lg hover:shadow-xl transition-shadow',
        'flex items-center gap-3 whitespace-nowrap',
        bgColor
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
        className="flex items-center gap-3 w-full"
      >
        <Icon className="w-5 h-5 flex-shrink-0" />
        <span>{label}</span>
      </motion.div>
    </motion.div>
  );
}
