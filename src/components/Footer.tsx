export default function Footer() {
    return (
        <footer className="bg-bg3 border-t border-blue/5 py-10">
            <div className="max-w-[1080px] mx-auto px-6 flex flex-wrap justify-between items-center gap-6">
                <div className="text-[0.83rem] text-muted">
                    &copy; {new Date().getFullYear()} <span className="text-blue">Jagdeesh Balaka</span>. All rights reserved.
                </div>
                <div className="flex gap-6">
                    {["LinkedIn", "GitHub", "Twitter"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[0.83rem] text-faint hover:text-blue transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
