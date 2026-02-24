"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const skillGroups = [
    {
        name: "Backend",
        icon: "☕",
        skills: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "REST APIs", "Microservices"]
    },
    {
        name: "Frontend",
        icon: "⚛️",
        skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Thymeleaf"],
        color: "gold"
    },
    {
        name: "Databases",
        icon: "🗄️",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
        color: "cyan"
    },
    {
        name: "DevOps & Cloud",
        icon: "☁️",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"]
    },
    {
        name: "Testing",
        icon: "🧪",
        skills: ["JUnit", "Mockito", "Selenium"]
    },
    {
        name: "Tools & Others",
        icon: "🔧",
        skills: ["Git", "Maven", "Gradle", "IntelliJ IDEA", "Postman", "Jira"],
        color: "gold"
    }
];

export default function Skills() {
    return (
        <Section id="skills" className="bg-bg py-24">
            <div className="max-w-[1080px] mx-auto px-6">
                <span className="font-dm-mono text-[0.72rem] tracking-[0.15em] uppercase text-blue mb-2 block">
                    Skills & Expertise
                </span>
                <h2 className="font-playfair text-[clamp(2rem,5vw,3rem)] font-bold text-text leading-[1.1] mb-10 max-w-2xl">
                    A comprehensive toolkit for building modern, scalable applications.
                </h2>
                <div className="w-10 h-[2.5px] bg-gradient-to-r from-blue to-cyan rounded-full mb-12" />

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={group.name}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1]
                                    }
                                }
                            }}
                            className="bg-card backdrop-blur-md border border-blue/10 rounded-xl p-6 hover:border-blue/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(96,165,250,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex items-center gap-3 mb-5 relative z-10">
                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center text-bg text-base shrink-0 shadow-lg shadow-blue/20">
                                    {group.icon}
                                </div>
                                <span className="font-semibold text-[0.95rem] text-text tracking-tight">{group.name}</span>
                            </div>

                            <motion.div
                                className="flex flex-wrap gap-2 relative z-10"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                            >
                                {group.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.9, y: 5 },
                                            visible: { opacity: 1, scale: 1, y: 0 }
                                        }}
                                        className={`font-dm-mono text-[0.71rem] px-2.5 py-1 rounded bg-blue/5 border border-blue/10 text-muted transition-all duration-300 hover:bg-blue/10 hover:border-blue/30 hover:text-blue hover:scale-105 active:scale-95 cursor-default
                      ${group.color === 'cyan' ? 'hover:bg-cyan/10 hover:border-cyan/30 hover:text-cyan' : ''}
                      ${group.color === 'gold' ? 'hover:bg-gold/10 hover:border-gold/30 hover:text-gold' : ''}
                    `}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
