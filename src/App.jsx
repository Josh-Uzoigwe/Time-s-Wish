import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import Hero from './components/Hero';
import Playlist from './components/Playlist';
import Memories from './components/Memories';
import Jokes from './components/Jokes';
import Letter from './components/Letter';

// Import CSS
import './index.css';

function App() {
  const [unwrappedColor, setUnwrappedColor] = useState(null);

  return (
    <div className="app-container">
      <Background />
      
      <main>
        <Hero onUnwrap={(color) => setUnwrappedColor(color)} unwrappedColor={unwrappedColor} />
        {unwrappedColor && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }} // Delayed slightly so the tape unrolls first
          >
            {/* <Playlist /> */}
            {/* <Memories /> */}
            {/* <Jokes /> */}
            <Letter />
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default App;
