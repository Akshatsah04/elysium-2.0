import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-light to-background" />
      
      {/* Decorative runes */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="font-display text-[30rem] text-primary">Ω</span>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl text-primary text-glow-gold mb-4">
            ELYSIUM 2026
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Where the wisdom of Olympus meets the might of Asgard. A journey beyond mortal imagination.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            {['𝕏', 'in', 'ig', '✉'].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-sm text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
              >
                {icon}
              </motion.a>
            ))}
          </div>
          
          <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
          
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Forged by Legends • March 2026
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            © 2026 Elysium. All rights reserved across all realms.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
