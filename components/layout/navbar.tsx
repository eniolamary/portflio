"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./container";
import Logo from "./logo";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-background/70 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}

        <Logo />

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}

        <div className="hidden md:block">
          <a href="/resume.pdf" download>
            <Button>
              Download CV
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X
              size={26}
              className="text-primary"
            />
          ) : (
            <Menu
              size={26}
              className="text-primary"
            />
          )}
        </button>

      </Container>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="border-t border-white/10 bg-background md:hidden">

          <nav className="flex flex-col">

            {navLinks.map((link) => (

              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 px-6 py-4 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.name}
              </Link>

            ))}

            <div className="p-6">

              <a
                href="/resume.pdf"
                download
              >
                <Button className="w-full">
                  Download CV
                </Button>
              </a>

            </div>

          </nav>

        </div>

      )}

    </header>
  );
}