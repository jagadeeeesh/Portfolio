"use client";

import Section from "./Section";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <Section id="experience" className="bg-bg2 py-24">
            <div className="max-w-[1080px] mx-auto px-6">
                <span className="font-dm-mono text-[0.72rem] tracking-[0.15em] uppercase text-blue mb-2 block">
                    Work Experience
                </span>
                <h2 className="font-playfair text-[clamp(2rem,5vw,3rem)] font-bold text-text leading-[1.1] mb-10">
                    Lately providing solutions <em className="italic text-blue not-italic">that make a difference.</em>
                </h2>
                <div className="w-10 h-[2.5px] bg-gradient-to-r from-blue to-cyan rounded-full mb-12" />

                <div className="max-w-[760px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-card backdrop-blur-md border border-blue/10 rounded-xl p-8 md:p-10 border-l-[3px] border-l-blue relative overflow-hidden group hover:border-blue/30 transition-all duration-500 shadow-2xl shadow-blue/5"
                    >
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(96,165,250,0.06),transparent_70%)] pointer-events-none transform translate-x-1/4 -translate-y-1/4" />

                        {/* Animated Border Trail */}
                        <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-transparent via-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] ease-in-out" />

                        <div className="flex flex-wrap justify-between items-start gap-4 mb-8 relative z-10">
                            <div>
                                <h3 className="font-playfair text-xl md:text-2xl font-bold text-text group-hover:text-blue transition-colors duration-300">Full Stack Java Developer</h3>
                                <div className="text-blue text-[0.95rem] mt-1 font-medium tracking-tight">Greenstitch Pvt. Ltd.</div>
                                <div className="text-muted text-[0.82rem] mt-0.5 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-blue/40" />
                                    Hyderabad · Hybrid
                                </div>
                            </div>
                            <div className="font-dm-mono text-[0.75rem] text-muted bg-bg3/50 px-3 py-1.5 rounded-md border border-blue/10 backdrop-blur-sm">
                                2022 – Present
                            </div>
                        </div>

                        <motion.ul
                            className="list-none space-y-5 relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.12
                                    }
                                }
                            }}
                        >
                            {[
                                "Developed and maintained full-stack web applications using Java Spring Boot for backend services and React for front-end user interfaces, delivering seamless user experiences.",
                                "Designed and implemented RESTful APIs to integrate with third-party services and internal microservices, improving system modularity and reducing deployment time by 30%.",
                                "Collaborated with cross-functional teams to deliver enterprise-grade applications, following agile methodologies and best coding practices.",
                                "Optimized database queries and application performance, resulting in a 40% reduction in response time for key modules.",
                                "Implemented CI/CD pipelines using Jenkins and Docker to automate build and deployment processes, ensuring faster and more reliable releases."
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, x: -15 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    className="flex gap-4 text-[0.92rem] text-muted leading-relaxed group/item"
                                >
                                    <span className="text-blue mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform duration-300">•</span>
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
