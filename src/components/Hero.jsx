import React, { useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';

function RubiksCube({ onUnwrap }) {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.5;
      groupRef.current.rotation.y += delta * 0.7;
    }
  });

  const spacing = 0.62;
  const size = 0.58;
  const cubies = [];

  const faceColors = [
    '#e6308e',   // Pink
    '#0b5fb0',   // Blue
    '#00d4ff',   // Cyan
    '#7c4dff',   // Purple
    '#ffffff',   // White
    '#ffeb3b'    // Yellow
  ];
  const coreColor = '#111111';

  const getScrambledColor = (x, y, z, faceIndex) => {
    // Simple deterministic hash to keep colors consistent across renders
    const hash = Math.abs(x * 17 + y * 31 + z * 53 + faceIndex * 71);
    return faceColors[hash % faceColors.length];
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    const materialIndex = e.face?.materialIndex;
    if (materialIndex !== undefined && e.object.material) {
      const mat = e.object.material[materialIndex];
      if (mat && mat.color) {
        onUnwrap('#' + mat.color.getHexString());
      }
    }
  };

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubies.push(
          <mesh 
            key={`${x}-${y}-${z}`} 
            position={[x * spacing, y * spacing, z * spacing]}
            onClick={handlePointerDown}
          >
            <boxGeometry args={[size, size, size]} />
            {[
              x === 1 ? getScrambledColor(x, y, z, 0) : coreColor,
              x === -1 ? getScrambledColor(x, y, z, 1) : coreColor,
              y === 1 ? getScrambledColor(x, y, z, 2) : coreColor,
              y === -1 ? getScrambledColor(x, y, z, 3) : coreColor,
              z === 1 ? getScrambledColor(x, y, z, 4) : coreColor,
              z === -1 ? getScrambledColor(x, y, z, 5) : coreColor
            ].map((color, index) => (
              <meshStandardMaterial 
                key={index} 
                attach={`material-${index}`} 
                color={color} 
                roughness={0.2} 
                metalness={0.1} 
              />
            ))}
          </mesh>
        );
      }
    }
  }

  return (
    <group ref={groupRef}>
      {cubies}
    </group>
  );
}

export default function Hero({ unwrappedColor, onUnwrap }) {
  const isUnwrapped = !!unwrappedColor;
  
  const getTextColor = (bgColor) => {
    if (!bgColor) return '#fff';
    const hex = bgColor.toLowerCase();
    // Use black text on Cyan, White, and Yellow
    if (hex === '#00d4ff' || hex === '#ffffff' || hex === '#ffeb3b') {
      return '#111';
    }
    return '#fff';
  };

  return (
    <section className="section" style={{ position: 'relative' }}>
      <AnimatePresence mode="wait">
        {!isUnwrapped ? (
          <motion.div
            key="cube-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, filter: 'blur(20px)', y: -30 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              width: '300px',
              height: '350px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ width: '300px', height: '300px' }}>
              <Canvas
                camera={{ position: [0, 0, 4], fov: 50 }}
                gl={{ alpha: true }}
                style={{ width: '100%', height: '100%', pointerEvents: 'auto', cursor: 'pointer' }}
              >
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <directionalLight position={[-5, -5, -5]} intensity={0.4} />
                <Suspense fallback={null}>
                  <RubiksCube onUnwrap={onUnwrap} />
                </Suspense>
              </Canvas>
            </div>
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ 
                marginTop: '16px', 
                color: 'var(--color-text-secondary)',
                letterSpacing: '1px',
                whiteSpace: 'nowrap'
              }}
            >
              Tap A Colour
            </motion.p>
          </motion.div>
        ) : (
          <div key="greeting" style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 20px' }}>
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)', rotate: -2, y: 20 }}
              animate={{ clipPath: 'inset(0 0 0 0)', rotate: -2, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                backgroundColor: unwrappedColor,
                padding: '40px 60px',
                textAlign: 'center',
                maxWidth: '800px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                display: 'inline-block'
              }}
            >
              <h1 
                style={{ 
                  fontFamily: '"Caveat", cursive', 
                  fontSize: '4.5rem', 
                  marginBottom: '16px', 
                  color: getTextColor(unwrappedColor),
                  lineHeight: '1.2'
                }}
              >
                Happy 20th, my not so little baby ❤
              </h1>
              <p
                style={{ 
                  fontFamily: '"Caveat", cursive', 
                  fontSize: '2rem', 
                  color: getTextColor(unwrappedColor),
                  opacity: 0.9
                }}
              >
                Let's try something a lilll different this year...
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isUnwrapped ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
        transition={{ 
          opacity: { delay: 2.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        style={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-text-secondary)',
          pointerEvents: isUnwrapped ? 'auto' : 'none'
        }}
      >
        <span style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
