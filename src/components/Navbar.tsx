"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[500] py-4 transition-all duration-400 ${isScrolled
                    ? "bg-bg/90 backdrop-blur-xl shadow-[0_1px_0_var(--color-border)]"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-playfair text-xl font-bold text-text tracking-tight"
                >
                    JB<span className="text-blue">.</span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 list-none">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-[0.85rem] font-medium text-muted hover:text-text transition-colors relative group py-1"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="hidden md:block bg-blue text-bg px-5 py-2 rounded-md text-[0.82rem] font-semibold hover:opacity-85 transition-opacity"
                    >
                        Hire Me
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-text p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-text transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                            <span className={`w-full h-0.5 bg-text transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-text transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-bg2 border-b border-border p-6 shadow-2xl"
                    >
                        <ul className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium text-text block"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="#contact"
                                    className="bg-blue text-bg w-full block text-center py-3 rounded-md font-semibold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Hire Me
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
