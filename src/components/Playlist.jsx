import React from 'react';
import { motion } from 'framer-motion';

export default function Playlist() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="glass-panel"
        style={{
          padding: '40px',
          maxWidth: '600px',
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', color: 'var(--color-text-primary)' }}>
            Songs That Remind Me of You
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
            Not sure where to start, but some music to set the tone, cos Spotify feels lonely without you😪
          </p>
        </div>
        
        {/* Placeholder for Spotify Embed */}
        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
          (You can replace this playlist link with your own in src/components/Playlist.jsx)
        </p>
      </motion.div>
    </section>
  );
}
