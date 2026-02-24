"use client";

import Section from "./Section";
import CountUp from "./CountUp";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Section id="about" className="bg-bg2 py-24">
            <div className="max-w-[1080px] mx-auto px-6">
                <span className="font-dm-mono text-[0.72rem] tracking-[0.15em] uppercase text-blue mb-2 block">
                    About Me
                </span>

                <div className="grid md:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-center mt-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-[200px] h-[240px] bg-bg3 rounded-xl border border-border flex items-center justify-center text-8xl relative overflow-hidden group-hover:border-blue/30 transition-colors shadow-2xl shadow-blue/5"
                        >
                            👨‍💻
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(96,165,250,0.1)_0%,transparent_70%)]" />
                        </motion.div>
                        <div className="absolute -bottom-3 -right-3 w-16 h-16 border-2 border-blue rounded-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4"
                    >
                        <p className="text-[0.95rem] text-muted leading-relaxed">
                            I&apos;m a <strong className="text-text font-medium">Full Stack Java Developer</strong> with a strong foundation in both front-end and back-end technologies. My expertise spans across the entire development lifecycle, from designing intuitive user interfaces to building robust server-side applications.
                        </p>
                        <p className="text-[0.95rem] text-muted leading-relaxed">
                            Passionate about creating innovative solutions that combine cutting-edge technology with seamless user experiences. I thrive in collaborative environments and enjoy tackling challenging problems.
                        </p>
                        <p className="text-[0.95rem] text-muted leading-relaxed">
                            My experience includes developing enterprise applications, RESTful APIs, microservices and cloud deployments, collaborating with cross functional teams to deliver high quality solutions.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap gap-10 mt-8 pt-8 border-t border-blue/10"
                        >
                            <div>
                                <div className="font-playfair text-4xl font-black text-blue leading-none">
                                    <CountUp to={3} suffix="+" />
                                </div>
                                <div className="text-[0.78rem] text-muted mt-1.5 tracking-tight">Years Experience</div>
                            </div>
                            <div>
                                <div className="font-playfair text-4xl font-black text-blue leading-none">
                                    <CountUp to={10} suffix="+" />
                                </div>
                                <div className="text-[0.78rem] text-muted mt-1.5 tracking-tight">Projects Completed</div>
                            </div>
                            <div>
                                <div className="font-playfair text-4xl font-black text-blue leading-none">
                                    <CountUp to={100} suffix="%" />
                                </div>
                                <div className="text-[0.78rem] text-muted mt-1.5 tracking-tight">Client Satisfaction</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
