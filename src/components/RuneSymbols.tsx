import { motion } from 'framer-motion';

const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ'];

const RuneSymbols = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Floating runes */}
      {[...Array(20)].map((_, i) => {
        const rune = runes[Math.floor(Math.random() * runes.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 15 + Math.random() * 10;
        
        return (
          <motion.div
            key={i}
            className="absolute text-4xl text-primary/20 font-display rune-glow"
            style={{ left: `${left}%` }}
            initial={{ y: '100vh', opacity: 0, rotate: 0 }}
            animate={{
              y: '-20vh',
              opacity: [0, 0.3, 0.3, 0],
              rotate: 360,
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {rune}
          </motion.div>
        );
      })}

      {/* Corner rune decorations */}
      <div className="absolute top-10 left-10 text-6xl text-primary/10 animate-rune-rotate">
        ᛟ
      </div>
      <div className="absolute top-10 right-10 text-6xl text-primary/10 animate-rune-rotate" style={{ animationDirection: 'reverse' }}>
        ᚨ
      </div>
      <div className="absolute bottom-10 left-10 text-6xl text-primary/10 animate-rune-rotate" style={{ animationDelay: '-10s' }}>
        ᛊ
      </div>
      <div className="absolute bottom-10 right-10 text-6xl text-primary/10 animate-rune-rotate" style={{ animationDelay: '-15s', animationDirection: 'reverse' }}>
        ᚠ
      </div>
    </div>
  );
};

export default RuneSymbols;
