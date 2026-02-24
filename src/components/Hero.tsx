"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Magnetic from "./Magnetic";

export default function Hero() {
    return (
        <section className="min-h-svh flex items-center pt-28 pb-20 relative overflow-hidden bg-bg">
            {/* Background Decorations */}
            <div className="absolute right-[-120px] top-0 bottom-0 w-[420px] bg-gradient-to-br from-bg2 to-bg3 z-0 border-l border-[rgba(96,165,250,0.07)] hidden lg:block"
                style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }} />

            <div className="absolute top-[-200px] left-[-150px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(96,165,250,0.07)_0%,transparent_65%)] pointer-events-none z-0" />

            {/* Floating Blobs */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue/5 rounded-full blur-[80px] pointer-events-none z-0"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, -15, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none z-0"
            />

            <div className="max-w-[1080px] mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 border border-border bg-[rgba(96,165,250,0.06)] px-4 py-1.5 rounded-full font-dm-mono text-[0.72rem] tracking-[0.1em] color-muted mb-7"
                >
                    <span className="w-2 h-2 rounded-full bg-blue animate-blink" />
                    FULL STACK JAVA DEVELOPER
                </motion.div>

                <motion.h1
                    className="font-playfair text-[clamp(4rem,13vw,9.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-text"
                >
                    <div className="overflow-hidden">
                        {"JAGDEESH".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                    <div className="overflow-hidden">
                        <em className="italic text-blue not-italic text-shadow-glow">
                            {"BALAKA".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </em>
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[1.1rem] font-light text-muted mt-6 tracking-[0.02em]"
                >
                    Full Stack Java Developer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[480px] text-[0.95rem] text-muted leading-[1.75] mt-4"
                >
                    Building scalable, end-to-end applications with Java and modern front-end frameworks, with 3+ years of experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap gap-4 mt-9"
                >
                    <Magnetic>
                        <Link
                            href="#projects"
                            className="bg-blue text-bg px-7 py-3 rounded-lg text-[0.88rem] font-semibold hover:opacity-88 transition-all duration-250 block"
                        >
                            View Projects
                        </Link>
                    </Magnetic>
                    <Magnetic>
                        <Link
                            href="#contact"
                            className="bg-transparent text-text border-1.5 border-faint px-7 py-3 rounded-lg text-[0.88rem] font-medium hover:border-blue transition-all duration-250 block"
                        >
                            Get In Touch
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-faint text-[0.68rem] tracking-[0.12em] z-10"
            >
                <span>SCROLL</span>
                <div className="w-[1.5px] h-11 bg-gradient-to-b from-blue to-transparent animate-scroll-pulse" />
            </motion.div>
        </section>
    );
}
