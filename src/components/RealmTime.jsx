import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const targetDate = new Date('2026-03-15T09:00:00');

const schedule = [
    { time: '09:00', event: 'Gates of Olympus Open', type: 'ceremony' },
    { time: '10:00', event: 'Divine Keynote: The Future Unfolds', type: 'keynote' },
    { time: '11:30', event: 'Trials Begin: Forge of Hephaestus', type: 'event' },
    { time: '13:00', event: 'Feast of the Gods (Lunch)', type: 'break' },
    { time: '14:00', event: 'Workshop: Odin\'s Wisdom Sessions', type: 'workshop' },
    { time: '16:00', event: 'Arena Battles: Coding & CTF', type: 'event' },
    { time: '19:00', event: 'Twilight Networking', type: 'social' },
    { time: '21:00', event: 'Closing Ceremony: Crowning of Champions', type: 'ceremony' },
];

const RealmTime = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    const typeStyles = {
        ceremony: 'border-primary/50 bg-primary/5',
        keynote: 'border-greek/50 bg-greek/5',
        event: 'border-norse/50 bg-norse/5',
        workshop: 'border-primary/50 bg-primary/5',
        break: 'border-muted-foreground/30 bg-muted/5',
        social: 'border-primary/30 bg-primary/5',
    };

    return (
        <section id="realm-time" className="realm-section">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-obsidian-light to-background" />

            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">The Sands Flow</span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-glow-gold">
                        Realm of Time
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
                        <span className="text-primary text-3xl">⏳</span>
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary" />
                    </div>
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="glass-card p-8 rounded-lg">
                        <p className="text-center text-muted-foreground mb-6 uppercase tracking-widest text-sm">
                            The Prophecy Unfolds In
                        </p>
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { value: timeLeft.days, label: 'Days' },
                                { value: timeLeft.hours, label: 'Hours' },
                                { value: timeLeft.minutes, label: 'Minutes' },
                                { value: timeLeft.seconds, label: 'Seconds' },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="glass-card p-4 rounded-lg mb-2 animate-glow-pulse">
                                        <span className="font-display text-3xl md:text-5xl text-primary text-glow-gold">
                                            {String(item.value).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-primary mt-6 font-display">March 15, 2026</p>
                    </div>
                </motion.div>

                {/* Schedule */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto"
                >
                    <h3 className="font-display text-2xl text-center text-foreground mb-8">Chronicles of the Day</h3>
                    <div className="space-y-3">
                        {schedule.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                                className={`flex items-center gap-4 p-4 rounded-lg border ${typeStyles[item.type]} transition-all duration-300 hover:scale-[1.02]`}
                            >
                                <span className="font-display text-lg text-primary w-16">{item.time}</span>
                                <div className="h-8 w-px bg-primary/30" />
                                <span className="text-foreground flex-1">{item.event}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RealmTime;
