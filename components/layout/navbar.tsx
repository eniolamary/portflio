"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
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
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-background/70 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">

        <Logo />

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

        <div className="hidden md:block">
          <a href="/resume.pdf" download>
            <Button>
              Download CV
            </Button>
          </a>
        </div>

        <button className="md:hidden">
          <Menu size={24} />
        </button>

      </Container>
    </header>
  );
}