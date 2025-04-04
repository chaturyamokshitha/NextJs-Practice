"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
            className="bg-white p-4 text-black font-sans"
            style={{
                boxShadow: "0 8px 12px -2px rgba(254, 78, 90, 0.5), 0 4px 6px -4px rgba(254, 78, 90, 0.5)",
            }}
        >
            <div className="flex justify-between items-center md:pl-16 lg:pl-28 md:pr-16 lg:pr-28">
                {/* Logo */}
                <div>
                    <Image
                        src="/logo-color.svg"
                        width={100}
                        height={200}
                        alt="installa"
                    />
                </div>

                {/* Hamburger Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#FE4E5A] border-2 border-[#FE4E5A] px-4 py-1 rounded-2xl hover:bg-[#FE4E5A] hover:text-white"
                    >
                        Menu
                    </button>
                </div>
                <div className="hidden md:flex flex-wrap items-center space-x-4 lg:space-x-16">
                    <Link href="/" className="text-sm lg:text-base">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm lg:text-base">
                        About Us
                    </Link>
                    <Link href="/services" className="text-sm lg:text-base">
                        Services
                    </Link>
                    <Link href="/careers" className="text-sm lg:text-base">
                        Careers
                    </Link>
                    <Link href="/contact">
                        <button className="text-sm lg:text-base text-[#FE4E5A] font-semibold border-2 border-[#FE4E5A] px-4 lg:px-8 py-1 rounded-2xl hover:bg-[#FE4E5A] hover:text-white"
                        >
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>

            {/* Links for Small Screens */}
            {isMenuOpen && (
                <div className="flex flex-col mt-4 space-y-2 md:hidden">
                    <Link href="/" className="text-sm">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm">
                        About Us
                    </Link>
                    <Link href="/services" className="text-sm">
                        Services
                    </Link>
                    <Link href="/careers" className="text-sm">
                        Careers
                    </Link>
                    <Link href="/contact">
                        <button className="text-sm text-[#FE4E5A] font-semibold border-2 border-[#FE4E5A] px-4 py-1 rounded-2xl hover:bg-[#FE4E5A] hover:text-white"
                        >
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Nav;