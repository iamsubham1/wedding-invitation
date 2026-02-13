import { motion } from 'motion/react';

export function FloralBorder({ position = 'top-left' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-[-1]'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className={`absolute ${positionClasses[position]} w-48 md:w-64 pointer-events-none opacity-40`}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id={`floral-${position}-1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C4B8" />
            <stop offset="100%" stopColor="#D4A89A" />
          </linearGradient>
          <linearGradient id={`floral-${position}-2`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B8B7E" />
            <stop offset="100%" stopColor="#7A6B5D" />
          </linearGradient>
        </defs>

        {/* Main flower */}
        <g>
          {/* Petals */}
          {[0, 72, 144, 216, 288].map((angle) => (
            <motion.ellipse
              key={`petal-${angle}`}
              cx="60"
              cy="60"
              rx="20"
              ry="12"
              fill={`url(#floral-${position}-1)`}
              transform={`rotate(${angle} 60 60) translate(0 -18)`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 + angle * 0.001 }}
            />
          ))}
          {/* Center */}
          <circle cx="60" cy="60" r="8" fill="#C4A07A" opacity="0.8" />
        </g>

        {/* Leaves and stems */}
        <motion.path
          d="M 60 60 Q 40 80 20 100 Q 25 95 30 90 Q 35 95 40 100 Q 42 85 60 60"
          fill={`url(#floral-${position}-2)`}
          opacity="0.7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />

        {/* Small buds */}
        {[{x: 35, y: 85}, {x: 50, y: 95}].map((pos, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
          >
            {[0, 120, 240].map((angle) => (
              <ellipse
                key={angle}
                cx={pos.x}
                cy={pos.y}
                rx="6"
                ry="4"
                fill="#E8C4B8"
                transform={`rotate(${angle} ${pos.x} ${pos.y}) translate(0 -5)`}
              />
            ))}
            <circle cx={pos.x} cy={pos.y} r="3" fill="#C4A07A" />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
}
