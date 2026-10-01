import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Jokes() {
  const [activeJoke, setActiveJoke] = useState(null);

  const jokes = [
    { id: 1, title: "That one time...", content: "You know exactly what I mean." },
    { id: 2, title: "The thing we always say", content: "Never gets old." },
    { id: 3, title: "Secret 3", content: "Just between us." }
  ];

  return (
    <section className="section" style={{ minHeight: 'auto', padding: '100px 20px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>The Little Things</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {jokes.map((joke) => (
            <motion.div
              key={joke.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveJoke(activeJoke === joke.id ? null : joke.id)}
              className="glass-panel"
              style={{
                padding: '20px 30px',
                cursor: 'pointer',
                minWidth: '200px'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{joke.title}</h3>
              <AnimatePresence>
                {activeJoke === joke.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}
                  >
                    {joke.content}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
