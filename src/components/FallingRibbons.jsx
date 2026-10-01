import React from 'react';
import { motion } from 'framer-motion';

const ribbonColors = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff', '#e6c8fa'];

export default function FallingRibbons() {
  const ribbons = Array.from({ length: 15 });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }}>
      {ribbons.map((_, i) => {
        const leftPosition = Math.random() * 100; 
        const delay = Math.random() * 5; 
        const duration = 15 + Math.random() * 15; 
        const color = ribbonColors[i % ribbonColors.length];
        
        // Sway parameters
        const swayAmount = 30 + Math.random() * 50;
        
        return (
          <motion.div
            key={i}
            initial={{ y: -300 }}
            animate={{ 
              y: ['-10vh', '110vh'],
              x: [0, swayAmount, -swayAmount, 0],
              rotateZ: [Math.random() * 10 - 5, Math.random() * 20 - 10, Math.random() * 10 - 5],
              rotateY: [0, 180, 360]
            }}
            transition={{
              y: { duration: duration, repeat: Infinity, ease: 'linear', delay: delay },
              x: { duration: duration / 3, repeat: Infinity, ease: 'easeInOut' },
              rotateZ: { duration: duration / 2, repeat: Infinity, ease: 'easeInOut' },
              rotateY: { duration: duration / 1.5, repeat: Infinity, ease: 'linear' }
            }}
            style={{
              position: 'absolute',
              left: `${leftPosition}%`,
              width: '45px',
              height: '240px',
              background: `linear-gradient(135deg, ${color} 0%, rgba(255,255,255,0.7) 40%, ${color} 100%)`,
              opacity: 0.85,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              fontFamily: '"Caveat", cursive',
              fontSize: '1.4rem',
              color: '#333',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.3)',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 20px), 0 100%)',
              textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
              transformOrigin: 'top center'
            }}
          >
            Happy Birthday
          </motion.div>
        );
      })}
    </div>
  );
}
