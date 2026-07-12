"use client";

import Container from "../layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding min-h-screen flex items-center"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >

            <span className="inline-flex rounded-full border border-primary/30 px-4 py-2 text-sm text-primary">
              Available for Opportunities
            </span>

            <h1 className="mt-8 text-5xl font-extrabold tracking-tight lg:text-7xl">

              Mary Eniola

              <span className="mt-2 block text-primary">
                Olalere
              </span>

            </h1>

            <p className="mt-5 text-xl font-medium text-muted-foreground">
              Data Analyst • Machine Learning • AI
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">

              Helping businesses transform raw data into actionable insights
              through analytics, dashboards, and machine learning.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>

              <a href="/resume.pdf" download>
                <Button variant="outline" size="lg">
                  Download CV
                </Button>
              </a>

            </div>

            {/* TECH BADGES */}

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Python",
                "SQL",
                "Power BI",
                "Machine Learning",
                "Artificial Intelligence",
                "Jupyter Notebook",
              ].map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-primary/20 bg-white/5 px-3 py-1.5 text-xs transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary/10"
                >
                  {skill}
                </span>

              ))}

            </div>

            {/* STATS */}

            <div className="mt-14 grid grid-cols-3 gap-8">

              <div>

                <h2 className="text-3xl font-bold text-primary">
                  10+
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Portfolio Projects
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-primary">
                  ALX
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Certified
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-primary">
                  Open
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  To Work
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: "easeOut",
            }}
          >

            <div className="relative h-[560px] w-[420px]">

              {/* Background Glow */}

              <div className="absolute inset-0 scale-105 rounded-[220px_220px_28px_28px] bg-primary/20 blur-3xl"></div>

              {/* Photo */}

              <div className="group relative h-full overflow-hidden rounded-[220px_220px_28px_28px] border border-white/10 bg-card shadow-2xl transition-all duration-500 hover:-translate-y-2">

                <Image
                  src="/images/mary.jpg"
                  alt="Mary Eniola Olalere"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Floating Availability Card */}

              <motion.div
                className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-card/90 p-5 shadow-xl backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                }}
              >

                <p className="font-semibold text-primary">
                  Available for Work
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Data Analytics • AI • ML
                </p>

              </motion.div>

              {/* Floating Projects Card */}

              <motion.div
                className="absolute -right-5 top-14 rounded-2xl border border-white/10 bg-card/90 px-6 py-5 shadow-xl backdrop-blur-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.1,
                  duration: 0.5,
                }}
              >

                <p className="text-3xl font-bold text-primary">
                  10+
                </p>

                <p className="text-sm text-muted-foreground">
                  Portfolio Projects
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>
      </Container>
      <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </section>
  );
}