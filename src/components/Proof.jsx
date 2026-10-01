import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ children, onClick, isSelected, isUnlocked }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current || isUnlocked) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
        zIndex: isSelected ? 10 : 1
      }}
      whileHover={!isUnlocked ? { scale: 1.05 } : {}}
      whileTap={!isUnlocked ? { scale: 0.95 } : {}}
    >
      <div style={{
        width: '200px',
        height: '250px',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: isUnlocked ? 'default' : 'pointer',
        position: 'relative',
        border: isSelected ? '3px solid #fff' : '3px solid transparent',
        transition: 'border 0.3s ease',
        transform: "translateZ(40px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        backgroundColor: '#000'
      }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Proof({ onUnlock, isUnlocked }) {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(false);

  const handleSelect = (place) => {
    if (isUnlocked) return;
    
    const newSelected = [...selected, place];
    setSelected(newSelected);
    setError(false);

    if (newSelected.length === 2) {
      if (newSelected[0] === 'Paris' && newSelected[1] === 'Italy') {
        // Success
        setTimeout(() => {
          onUnlock();
        }, 500);
      } else {
        // Failure
        setError(true);
        setTimeout(() => {
          setSelected([]);
          setError(false);
        }, 1500);
      }
    }
  };

  return (
    <section className="section" style={{ minHeight: 'auto', padding: '100px 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel"
        style={{
          maxWidth: '700px',
          width: '100%',
          padding: '40px',
          textAlign: 'center',
          perspective: '1000px'
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Security Check</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '50px', fontSize: '1.1rem' }}>
          Proof you're the birthday girl.<br/>
          <strong>Honeymoon in ________ and vacation in ________</strong>
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '20px',
          flexWrap: 'wrap',
          perspective: '1200px'
        }}>
          {/* Paris Option */}
          <TiltCard
            onClick={() => handleSelect('Paris')}
            isSelected={selected.includes('Paris')}
            isUnlocked={isUnlocked}
          >
            <img 
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" 
              alt="Paris"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              padding: '30px 10px 15px',
              fontWeight: '600',
              fontSize: '1.2rem',
              transform: 'translateZ(20px)'
            }}>Paris</div>
            {selected.includes('Paris') && (
              <div style={{
                position: 'absolute', top: 15, right: 15,
                background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
                borderRadius: '50%', width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid rgba(255,255,255,0.4)',
                transform: 'translateZ(30px)'
              }}>
                {selected.indexOf('Paris') + 1}
              </div>
            )}
          </TiltCard>

          {/* Italy Option */}
          <TiltCard
            onClick={() => handleSelect('Italy')}
            isSelected={selected.includes('Italy')}
            isUnlocked={isUnlocked}
          >
            <img 
              src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=400&q=80" 
              alt="Italy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              padding: '30px 10px 15px',
              fontWeight: '600',
              fontSize: '1.2rem',
              transform: 'translateZ(20px)'
            }}>Italy</div>
            {selected.includes('Italy') && (
              <div style={{
                position: 'absolute', top: 15, right: 15,
                background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
                borderRadius: '50%', width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid rgba(255,255,255,0.4)',
                transform: 'translateZ(30px)'
              }}>
                {selected.indexOf('Italy') + 1}
              </div>
            )}
          </TiltCard>
        </div>

        <div style={{ height: '30px' }}>
          {error && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              style={{ color: '#ff6b6b', fontWeight: '500' }}
            >
              Nice try, imposter! Wrong order.
            </motion.p>
          )}
          {isUnlocked && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              style={{ color: '#4ade80', fontWeight: '600', fontSize: '1.2rem' }}
            >
              Identity confirmed! Welcome in.
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
