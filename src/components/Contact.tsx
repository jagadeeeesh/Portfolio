"use client";

import Section from "./Section";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
    return (
        <Section id="contact" className="bg-bg2 py-24">
            <div className="max-w-[1080px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 max-w-[900px] mx-auto">
                    <div>
                        <span className="font-dm-mono text-[0.72rem] tracking-[0.15em] uppercase text-blue mb-2 block">
                            Contact
                        </span>
                        <h2 className="font-playfair text-3xl font-bold text-text mb-10">Let&apos;s build something great.</h2>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center text-bg shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div className="text-[0.88rem] text-muted">
                                    <a href="mailto:jagadeeshbalaka@email.com" className="hover:text-blue transition-colors">
                                        jagadeeshbalaka@email.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center text-bg shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div className="text-[0.88rem] text-muted">+91 91234 56789</div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center text-bg shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div className="text-[0.88rem] text-muted">Hyderabad, India</div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            <a href="#" className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted hover:border-blue hover:text-blue transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted hover:border-blue hover:text-blue transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-playfair text-xl font-bold text-text mb-6">Education</h3>
                        <div className="bg-bg3 border border-blue/10 rounded-xl p-6 hover:border-blue/30 transition-colors">
                            <h4 className="font-playfair text-[1rem] font-bold text-text mb-1">Bachelor of Technology (B.Tech)</h4>
                            <p className="text-[0.85rem] text-muted leading-relaxed">
                                Computer Science & Engineering<br />
                                JNTU Kakinada, Andhra Pradesh
                            </p>
                            <div className="text-blue font-dm-mono text-[0.78rem] mt-3 tracking-tighter">2018 – 2022</div>
                        </div>

                        <div className="bg-bg3 border border-blue/10 rounded-xl p-6 hover:border-blue/30 transition-colors">
                            <h4 className="font-playfair text-[1rem] font-bold text-text mb-1">Certifications</h4>
                            <ul className="text-[0.85rem] text-muted leading-relaxed space-y-1">
                                <li>• Oracle Certified Associate, Java SE 8</li>
                                <li>• AWS Certified Cloud Practitioner</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
