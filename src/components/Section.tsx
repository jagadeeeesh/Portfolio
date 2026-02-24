"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    direction?: "up" | "left" | "right";
}

export default function Section({
    children,
    className = "",
    id = "",
    delay = 0,
    direction = "up",
}: SectionProps) {
    const variants: any = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 28 : 0,
            x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: delay,
            },
        },
    };


    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.section>
    );
}
