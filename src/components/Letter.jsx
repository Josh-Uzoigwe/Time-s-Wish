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
            className="glass-panel"
            style={{
              maxWidth: '800px',
              width: '90%',
              padding: '60px 50px',
              textAlign: 'left',
              margin: '0 auto',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{
              fontSize: '1.7rem',
              lineHeight: '1.6',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              fontFamily: '"Caveat", cursive',
              letterSpacing: '1px',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              <p>Chidaluuuuu,</p>
              
              <p>You've just clocked another milestone, big 20 and looking it😌. So I'd of course start by wishing you a very happy birthday ml.</p>
              
              <p>To be fair, I wasn't sure how to sound in this note, or whether to do it at all. Between your last birthday and now, so much has changed between us. If I was told this is how we'd be when I'd be doing a piece for you this year, I for no believe.</p>
              
              <p>But hey, we've still grown through it all, no? And it's you. Who else I wan do birthday writeup for?😂</p>
              
              <p>Happy birthday Dalu m😌</p>
              
              <p>For the first time in like 4 years, I feel like a passive participant in your life, and I'm not really sure what new fun things you've picked up and got going now, or what challenges you've overcome this past short while.</p>
              
              <p>But I know I can always count on the fact you're not where you were at this time last year, that you're growing into that fine woman I've always known that you'd become.</p>
              
              <p>It's been strange getting along knowing you'd not always be there rn to anchor me emotionally, and some nights, it gets really quiet around here; and all I'd want at those times is to see your pop up high on my notifications. At this moment that I don't have that, it's helped me appreciate even more, what you mean to me.</p>
              
              <p>It's not every time I get to express myself in writing, infact, I barely do anymore these days; but hear me out😂</p>
              
              <p>I feel like a finished lad, writing this to someone's babe, but omo, until there's a ring on your finger that's not mine, or you say 'Ogechukwu, stop,' I guess I'll keep writing.</p>
              
              <p>Thanks for teaching me what it's like to love and be loved, even without any strings attached (allegedly😂). Thanks for how you handled the moments I got frail emotionally. 4 years since we first spoke yeah?</p>
              
              <p>Seeing you go from 16 to 20 has been a real privilege, and I'm so glad I've been able to see you mature so much all round. I promised myself I'd be there for all your major milestones, I hope I'd always be able to.</p>
              
              <p>And guess what. I took your advice, as I often do. Tried meeting someone new. We got along well for a bit, and then, not so much. Prolly not the best place to mention, but you might be happy, small, to know that I've not spent all my nights crying it's not us atm.</p>
              
              <p>So... As you celebrate today, I pray you continue to glow in God's glory and goodness. I pray your dreams come true, and you don't get to toil so much to achieve your heart's desires. I wish you the very best of age 20 ml. Continue to find favour before your God, your superiors, peers and whomever with which you may interact in this phase, you're Favour afterall.</p>
              
              <p>I hope you're genuinely happy, and living the best life the current settings afford.</p>
              
              <p>Have a blast baby. Cheering for you all the way.</p>
              
              <p style={{ marginTop: '20px', textAlign: 'right', fontSize: '2rem' }}>
                I love you, and that's never gonna change.<br />
                — Ogechukwu
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
