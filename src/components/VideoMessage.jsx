import React from 'react';
import { motion } from 'framer-motion';

export default function VideoMessage() {
  return (
    <section className="section" style={{ paddingBottom: '60px' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="glass-panel"
        style={{
          maxWidth: '800px',
          width: '90%',
          padding: '40px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ 
          fontFamily: '"Caveat", cursive', 
          fontSize: '3.5rem', 
          marginBottom: '24px',
          color: 'var(--color-text-primary)'
        }}>
          A little something to watch, tell me how I did
        </h2>
        
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.2)',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          <video 
            controls 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
}
