import React from 'react';
import { motion } from 'framer-motion';

export default function Memories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section" style={{ minHeight: 'auto', padding: '100px 20px' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          maxWidth: '900px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}
      >
        <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Moments</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
            Some of my favorite memories and you just being you.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {/* Photo Placeholders */}
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
              className="glass-panel"
              style={{
                aspectRatio: '4/5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ padding: '20px', textAlign: 'center', opacity: 0.5 }}>
                <p>Photo {item}</p>
                <p style={{ fontSize: '0.8rem' }}>(Replace in src/assets/)</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Edit Placeholder */}
        <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '20px' }}>
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-secondary)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3>Your Edit Here</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>Add a video element here</p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
