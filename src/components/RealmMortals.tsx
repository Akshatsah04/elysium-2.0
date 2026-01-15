import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const RealmMortals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', college: '', event: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration:', formData);
    // Handle form submission
  };

  return (
    <section id="realm-mortals" className="realm-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-norse/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Claim Your Destiny</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-glow-gold">
            Realm of Mortals
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-3xl">✦</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Inscribe your name in the scrolls of destiny. Join the chosen few who shall walk among legends.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-lg divine-border">
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Mortal Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Ethereal Contact (Email)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  House of Learning (College)
                </label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Your institution"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Chosen Trial
                </label>
                <select
                  value={formData.event}
                  onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select your trial...</option>
                  <option value="hackathon">The Forge of Hephaestus (Hackathon)</option>
                  <option value="ctf">Odin's Eye (CTF Challenge)</option>
                  <option value="coding">Arena of Ares (Competitive Coding)</option>
                  <option value="design">Muses' Canvas (UI/UX Design)</option>
                  <option value="case-study">Loki's Gambit (Case Study)</option>
                  <option value="robotics">Bifrost Bridge (Robotics)</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-divine mt-4"
              >
                Seal My Fate
              </motion.button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              By entering, you accept the sacred covenant of Elysium
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RealmMortals;
