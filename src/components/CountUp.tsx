"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    to: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export default function CountUp({ to, duration = 2, suffix = "", className = "" }: CountUpProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(countRef, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: duration * 1000,
        damping: 30,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setCount(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={countRef} className={className}>
            {count}{suffix}
        </span>
    );
}
