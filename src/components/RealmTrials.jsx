import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const trials = [
    {
        name: 'The Forge of Hephaestus',
        type: 'Hackathon',
        description: 'Build artifacts of power in 24 hours. Create innovations worthy of the gods.',
        prize: '₹1,00,000',
        icon: '🔥',
    },
    {
        name: 'Odin\'s Eye',
        type: 'CTF Challenge',
        description: 'Penetrate digital realms. Decode the runes of cybersecurity.',
        prize: '₹50,000',
        icon: '👁️',
    },
    {
        name: 'Arena of Ares',
        type: 'Competitive Coding',
        description: 'Battle with algorithms. Prove your computational might.',
        prize: '₹75,000',
        icon: '⚔️',
    },
    {
        name: 'Muses\' Canvas',
        type: 'UI/UX Design',
        description: 'Create interfaces blessed by the nine muses of digital art.',
        prize: '₹40,000',
        icon: '🎨',
    },
    {
        name: 'Loki\'s Gambit',
        type: 'Case Study',
        description: 'Outwit the trickster god. Solve impossible business challenges.',
        prize: '₹60,000',
        icon: '🎭',
    },
    {
        name: 'Bifrost Bridge',
        type: 'Robotics',
        description: 'Engineer pathways between realms. Build machines of myth.',
        prize: '₹80,000',
        icon: '🌈',
    },
];

const RealmTrials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="realm-trials" className="realm-section">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-greek text-sm tracking-[0.3em] uppercase font-body">Prove Your Worth</span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-glow-greek">
                        Realm of Trials
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-greek" />
                        <span className="text-greek text-3xl">⚔</span>
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-greek" />
                    </div>
                    <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Face the challenges of both pantheons. Only the worthy shall claim eternal glory.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {trials.map((trial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            className="glass-card rounded-lg overflow-hidden group cursor-pointer hover:border-greek/50 transition-all duration-500"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{trial.icon}</span>
                                    <span className="px-3 py-1 bg-greek/10 border border-greek/30 rounded-sm text-xs text-greek uppercase tracking-wider">
                                        {trial.type}
                                    </span>
                                </div>
                                <h3 className="font-display text-xl text-foreground group-hover:text-greek transition-colors mb-2">
                                    {trial.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">{trial.description}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Prize Pool</span>
                                    <span className="font-display text-lg text-greek text-glow-greek">{trial.prize}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealmTrials;
