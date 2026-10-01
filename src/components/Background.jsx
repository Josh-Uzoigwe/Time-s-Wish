import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -2,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #180524 0%, #4a154b 50%, #20053b 100%)', // Deep rich purple/magenta base
      pointerEvents: 'none'
    }}>
      {/* Animated Glowing Orbs (representing the floral colors) */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(230, 48, 142, 0.35) 0%, rgba(230, 48, 142, 0) 70%)', // Bright pink
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.8
        }}
      />
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(circle, rgba(0, 179, 219, 0.25) 0%, rgba(0, 179, 219, 0) 70%)', // Teal/Blue
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.7
        }}
      />
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 148, 202, 0.25) 0%, rgba(255, 148, 202, 0) 70%)', // Soft light pink
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.9
        }}
      />
      
      {/* Noise Texture Overlay for Premium Feel */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        pointerEvents: 'none'
      }} />
    </div>
  );
}
