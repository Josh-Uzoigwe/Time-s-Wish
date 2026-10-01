import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LetterEnvelope = ({ onOpen }) => {
  return (
    <div style={{ perspective: '1000px', display: 'flex', justifyContent: 'center', padding: '100px 0' }}>
      <motion.div
        onClick={onOpen}
        animate={{ 
          y: [0, -15, 0],
          rotateX: [10, 15, 10],
          rotateY: [-10, 10, -10]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: '280px',
          height: '180px',
          backgroundColor: '#f4e4d8',
          position: 'relative',
          cursor: 'pointer',
          boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
          transformStyle: 'preserve-3d',
          borderRadius: '4px'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Back flat color */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#f4e4d8', borderRadius: '4px' }} />
        
        {/* Bottom flap */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          borderLeft: '140px solid transparent',
          borderRight: '140px solid transparent',
          borderBottom: '100px solid #ead6c6',
          zIndex: 1
        }} />

        {/* Side flaps */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, bottom: 0,
          borderTop: '90px solid transparent',
          borderBottom: '90px solid transparent',
          borderLeft: '140px solid #eedad0',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0,
          borderTop: '90px solid transparent',
          borderBottom: '90px solid transparent',
          borderRight: '140px solid #eedad0',
          zIndex: 2
        }} />

        {/* Top flap */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          borderLeft: '140px solid transparent',
          borderRight: '140px solid transparent',
          borderTop: '100px solid #e2cec0',
          zIndex: 3,
          filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.15))'
        }} />

        {/* Wax seal */}
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40px',
          height: '40px',
          backgroundColor: '#8b0000',
          borderRadius: '50%',
          zIndex: 4,
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5), 0 4px 6px rgba(0,0,0,0.3)',
          border: '1px solid #5a0000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: '#fff', opacity: 0.6, fontSize: '1.2rem', marginTop: '2px' }}>❤</span>
        </div>
      </motion.div>
    </div>
  );
};

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    if (currentSlide < 9) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  return (
    <section className="section" style={{ paddingBottom: '120px' }}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            <LetterEnvelope onOpen={() => setIsOpen(true)} />
            <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginTop: '-40px' }}>
              Tap to open
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              maxWidth: '800px',
              width: '95%',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#f7ede2'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={`/letter/${currentSlide}.jpg`}
                alt={`Letter part ${currentSlide}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </AnimatePresence>

            {/* Navigation Controls */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'clamp(10px, 3vw, 20px) clamp(15px, 4vw, 30px)',
              backgroundColor: 'rgba(0,0,0,0.03)'
            }}>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 1}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 20px)',
                  backgroundColor: currentSlide === 1 ? 'transparent' : 'rgba(0,0,0,0.1)',
                  color: currentSlide === 1 ? 'transparent' : '#333',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: currentSlide === 1 ? 'default' : 'pointer',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  transition: 'all 0.3s'
                }}
              >
                ← Prev
              </button>
              
              <span style={{ 
                fontFamily: 'var(--font-serif)', 
                color: '#666',
                whiteSpace: 'nowrap',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
              }}>
                {currentSlide} / 9
              </span>

              <button
                onClick={nextSlide}
                disabled={currentSlide === 9}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 20px)',
                  backgroundColor: currentSlide === 9 ? 'transparent' : 'rgba(0,0,0,0.1)',
                  color: currentSlide === 9 ? 'transparent' : '#333',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: currentSlide === 9 ? 'default' : 'pointer',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  transition: 'all 0.3s'
                }}
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
