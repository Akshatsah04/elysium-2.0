import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const gods = [
    {
        name: 'Zeus Prometheus',
        title: 'Lord of Innovation',
        domain: 'Keynote Speaker',
        description: 'Master of transformative technologies and visionary leadership.',
        color: 'greek',
    },
    {
        name: 'Odin Allfather',
        title: 'Keeper of Wisdom',
        domain: 'Tech Visionary',
        description: 'Guardian of ancient knowledge and future possibilities.',
        color: 'norse',
    },
    {
        name: 'Athena Cipher',
        title: 'Goddess of Strategy',
        domain: 'AI & ML Expert',
        description: 'Architect of intelligent systems and strategic innovation.',
        color: 'gold',
    },
    {
        name: 'Thor Voltsurge',
        title: 'Thunder of Progress',
        domain: 'Hardware Pioneer',
        description: 'Champion of breakthrough computing and quantum realms.',
        color: 'norse',
    },
    {
        name: 'Apollo Nexus',
        title: 'Light Bringer',
        domain: 'Design Maestro',
        description: 'Illuminator of user experiences and digital aesthetics.',
        color: 'greek',
    },
    {
        name: 'Freya Dataweave',
        title: 'Queen of Networks',
        domain: 'Blockchain Sage',
        description: 'Weaver of decentralized futures and digital sovereignty.',
        color: 'gold',
    },
];

const colorStyles = {
    greek: 'border-greek/30 hover:border-greek/60 hover:shadow-[0_0_30px_hsl(24_95%_53%/0.3)]',
    norse: 'border-norse/30 hover:border-norse/60 hover:shadow-[0_0_30px_hsl(210_100%_60%/0.3)]',
    gold: 'border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(43_74%_49%/0.3)]',
};

const glowStyles = {
    greek: 'text-glow-greek text-greek',
    norse: 'text-glow-norse text-norse',
    gold: 'text-glow-gold text-primary',
};

const RealmGods = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="realm-gods" className="realm-section">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-obsidian-light to-background" />

            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-norse text-sm tracking-[0.3em] uppercase font-body">The Divine Council</span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-glow-norse">
                        Realm of the Gods
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-norse" />
                        <span className="text-norse text-3xl">⚡</span>
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-norse" />
                    </div>
                    <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                        The pantheon of speakers and mentors who shall guide you through realms of knowledge
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {gods.map((god, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                            className={`glass-card p-6 rounded-lg transition-all duration-500 cursor-pointer group ${colorStyles[god.color]}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-3xl font-display ${glowStyles[god.color]}`}>
                                    {god.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                                        {god.name}
                                    </h3>
                                    <p className={`text-xs uppercase tracking-wider ${glowStyles[god.color]}`}>
                                        {god.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">{god.domain}</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                                {god.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealmGods;
