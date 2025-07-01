import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-14 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/logo.png"
                                alt="TEDxTelkom University logo"
                                width={150}
                                height={38}
                                quality={100}
                            />
                        </Link>
                        <p className="text-gray-400 text-sm font-[family-name:var(--font-raleway)]">
                            Ideas worth spreading at Telkom University
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors font-[family-name:var(--font-raleway)]">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-gray-400 hover:text-red-500 transition-colors font-[family-name:var(--font-raleway)]">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/event" className="text-gray-400 hover:text-red-500 transition-colors font-[family-name:var(--font-raleway)]">
                                    Event
                                </Link>
                            </li>
                            <li>
                                <Link href="/recruitment" className="text-gray-400 hover:text-red-500 transition-colors font-[family-name:var(--font-raleway)]">
                                    Recruitment
                                </Link>
                            </li>
                            <li>
                                <Link href="/merch" className="text-gray-400 hover:text-red-500 transition-colors font-[family-name:var(--font-raleway)]">
                                    Merch
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-400 text-sm font-[family-name:var(--font-raleway)]">
                                    Telkom University<br />
                                    Bandung, Indonesia
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                                <a href="mailto:tedx@telkomuniversity.ac.id" className="text-gray-400 text-sm hover:text-red-500 transition-colors font-[family-name:var(--font-raleway)]">
                                    tedx@telkomuniversity.ac.id
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com/tedxtelkomuniversity"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a
                                href="https://instagram.com/tedxtelkomuniversity"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://twitter.com/tedxtelkomu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com/company/tedxtelkomuniversity"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left font-[family-name:var(--font-raleway)]">
                            © {new Date().getFullYear()} TEDxTelkom University.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
