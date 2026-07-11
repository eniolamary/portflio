"use client";

import { useState } from "react";
import Container from "../layout/container";
import { Button } from "@/components/ui/button";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaGlobe,
} from "react-icons/fa";
import { Check, Copy } from "lucide-react";
import MotionWrapper from "../animations/MotionWrapper";

const contacts = [
  {
    title: "Email",
    value: "maryeniola114@gmail.com",
    icon: FaEnvelope,
    link: "mailto:maryeniola114@gmail.com",
    copyValue: "maryeniola114@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/mary-eniola",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/mary-eniola/",
    copyValue: "https://www.linkedin.com/in/mary-eniola/",
  },
  {
    title: "GitHub",
    value: "github.com/eniolamary",
    icon: FaGithub,
    link: "https://github.com/eniolamary",
    copyValue: "https://github.com/eniolamary",
  },
  {
    title: "Resume",
    value: "Download CV",
    icon: FaFileDownload,
    link: "/resume.pdf",
  },
  {
    title: "Availability",
    value: "Open to Remote Roles • Freelance Projects • AI & Data Opportunities",
    icon: FaGlobe,
    link: "#",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (text: string, title: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(title);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <MotionWrapper>
      <section id="contact" className="section-padding">
        <Container>
          <div className="mb-16 text-center">

            <p className="font-semibold text-primary">
              CONTACT
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Let's Work Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
              Whether you're looking for a Data Analyst, need help building
              dashboards, cleaning data, or developing machine learning
              solutions, I'd love to hear from you.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group relative rounded-3xl border border-white/10 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
                >
                  {/* Copy Button */}
                  {item.copyValue && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard(item.copyValue!, item.title);
                      }}
                      className="absolute right-5 top-5 rounded-lg p-2 text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                      title={`Copy ${item.title}`}
                    >
                      {copied === item.title ? (
                        <Check size={18} />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  )}

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  {/* Value */}
                  <p className="mt-3 break-all text-muted-foreground">
                    {item.value}
                  </p>

                </a>
              );
            })}

          </div>

          <div className="mt-20 text-center">

          <h3 className="text-2xl font-bold">
            Ready to collaborate?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
            Whether you need data analytics, interactive dashboards,
            machine learning models, or AI-powered insights,
            I'd love to learn more about your project and explore how we can work together.
          </p>

          <a
            href="mailto:maryeniola114@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Mary,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity%20with%20you.%0A%0AProject%20Details:%0A%0ATimeline:%0A%0ABudget:%0A%0AThank%20you!"
          >
            <Button size="lg" className="mt-8 px-10">
              Let's Work Together
            </Button>
          </a>

        </div>

        </Container>
      </section>
    </MotionWrapper>
  );
}

<div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />