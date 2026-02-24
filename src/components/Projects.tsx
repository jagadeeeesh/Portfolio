"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const projects = [
    {
        title: "EmPortal – Timesheet Management System",
        description: "A comprehensive enterprise-grade timesheet and employee management system designed to streamline workforce tracking and project allocation for mid to large-scale organizations.",
        icon: "📋",
        features: [
            "Built with Spring Boot backend and React frontend for a responsive, real-time dashboard experience",
            "Implemented role-based access control (RBAC) for managers, employees, and admins",
            "Automated monthly payroll calculations integrated with timesheet data",
            "JWT-based authentication with 2FA support for enhanced security"
        ],
        tags: ["Java", "Spring Boot", "React", "MySQL", "Docker", "JWT"],
    },
    {
        title: "Assessment Engine – Online Examination Platform",
        description: "A comprehensive online assessment and examination platform with adaptive testing capabilities, plagiarism detection, and detailed analytics for educational institutions and corporate training.",
        icon: "📝",
        features: [
            "Dynamic question generation with randomization and difficulty adaptation",
            "Real-time monitoring with webcam proctoring and tab-switch detection",
            "Detailed analytics dashboard with performance metrics and insights",
            "Supports multiple question types including MCQ, coding challenges, and essays"
        ],
        tags: ["Java", "Spring Boot", "Angular", "PostgreSQL", "AWS"],
        delay: 0.1
    }
];

export default function Projects() {
    return (
        <Section id="projects" className="bg-bg py-24">
            <div className="max-w-[1080px] mx-auto px-6">
                <span className="font-dm-mono text-[0.72rem] tracking-[0.15em] uppercase text-blue mb-2 block">
                    Featured Projects
                </span>
                <h2 className="font-playfair text-[clamp(2rem,5vw,3rem)] font-bold text-text leading-[1.1] mb-10">
                    Real-world applications built <em className="italic text-blue not-italic">to challenge.</em>
                </h2>
                <div className="w-10 h-[2.5px] bg-gradient-to-r from-blue to-cyan rounded-full mb-12" />

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 gap-6 max-w-[760px] mx-auto"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.title}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1]
                                    }
                                }
                            }}
                            className="bg-card backdrop-blur-md border border-blue/10 rounded-xl overflow-hidden hover:border-blue/30 group transition-all duration-500 relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="p-7 md:p-10 relative z-10">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-3xl mb-4"
                                >
                                    {project.icon}
                                </motion.div>

                                <h3 className="font-playfair text-xl font-bold text-text mb-2 group-hover:text-blue transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-[0.88rem] text-muted leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <span className="font-dm-mono text-[0.75rem] text-muted tracking-wide block mb-3 opacity-60 uppercase">
                                        Key Features
                                    </span>
                                    <motion.ul
                                        className="space-y-2.5"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={{
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.1
                                                }
                                            }
                                        }}
                                    >
                                        {project.features.map((feat, idx) => (
                                            <motion.li
                                                key={idx}
                                                variants={{
                                                    hidden: { opacity: 0, x: -10 },
                                                    visible: { opacity: 1, x: 0 }
                                                }}
                                                className="flex gap-2.5 text-[0.83rem] text-muted group/item"
                                            >
                                                <span className="text-gold shrink-0 group-hover/item:scale-125 transition-transform duration-300">•</span>
                                                {feat}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="font-dm-mono text-[0.68rem] px-2 py-0.5 rounded-md bg-blue/5 border border-blue/20 text-muted group-hover:text-blue group-hover:border-blue/30 transition-all duration-300 hover:scale-105">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
