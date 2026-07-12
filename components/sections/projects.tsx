import Image from "next/image";
import Container from "../layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import MotionWrapper from "../animations/MotionWrapper";

const projects = [
  {
    title: "Customer Analytics & Machine Learning",
    image: "/images/projects/customer-analytics.png",
    description:
      "Built a machine learning model to predict customer spending and identify the key drivers of purchasing behaviour.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/eniolamary/Bookstore-Customer-Analytics-Project",
    demo: "",
    status: "Completed",
  },

  {
    title: "Retail Sales Dashboard",
    image: "/images/projects/sales-dashboard.png",
    description:
      "Designed an interactive Power BI dashboard after cleaning and transforming retail sales data using SQL.",
    tools: ["SQL", "Power BI", "DAX", "Excel"],
    github: "https://github.com/eniolamary/Sales-Analysis-Project",
    demo: "",
    status: "Completed",
  },

  {
    title: "Excel Data Cleaning",
    image: "/images/projects/excel-cleaning2.png",
    description:
      "Cleaned, validated and standardised messy spreadsheet data ready for reporting and analysis.",
    tools: ["Excel", "Pivot Tables", "Charts"],
    github: "https://github.com/eniolamary/Excel-data-cleaning-project",
    demo: "",
    status: "Completed",
  },

  {
    title: "Time Series Forecasting",
    image: "/images/projects/forecasting.jpg",
    status: "Coming Soon",
  },

  {
    title: "Deep Learning",
    image: "/images/projects/deep-learning.jpg",
    status: "Coming Soon",
  },

  {
    title: "Natural Language Processing",
    image: "/images/projects/nlp.jpg",
    status: "Coming Soon",
  },
];

export default function CaseStudies() {
  return (
    <MotionWrapper>
      <section
        id="projects"
        className="section-padding"
      >
        <Container>

          {/* Heading */}

          <div className="mb-16 text-center">

            <p className="font-semibold text-primary">
              PROJECT PORTFOLIO
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Featured Data Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
              A collection of real-world analytics, dashboard,
              machine learning and AI projects demonstrating my
              end-to-end data workflow.
            </p>

          </div>

          {/* Projects */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {projects.map((project) => (

              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
              >

                {/* Image */}

                <div className="relative overflow-hidden bg-muted/20">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-52 w-full object-contain bg-white p-3 transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Status */}

                  <div className="absolute right-4 top-4">

                    {project.status === "Completed" ? (

                      <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400">
                        Completed
                      </span>

                    ) : (

                      <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                        Coming Soon
                      </span>

                    )}

                  </div>

                </div>

                {/* Content */}

                <div className="p-6">

                  <h3 className="min-h-[72px] text-xl font-bold">
                    {project.title}
                  </h3>

                  {project.status === "Completed" ? (
                    <>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">

                        {project.tools?.map((tool) => (

                          <span
                            key={tool}
                            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs"
                          >
                            {tool}
                          </span>

                        ))}

                      </div>

                      <div className="mt-6 flex gap-3">

                        <Button className="flex-1">

                          Case Study

                          <ArrowRight className="ml-2 h-4 w-4" />

                        </Button>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            className="w-full"
                          >

                            <FaGithub className="mr-2" />

                            GitHub

                          </Button>
                        </a>

                      </div>

                    </>
                  ) : (

                    <>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        This project is currently under development
                        and will be added to the portfolio soon.
                      </p>

                      <Button
                        disabled
                        className="mt-6 w-full"
                      >
                        Currently Building
                      </Button>

                    </>
                  )}

                </div>

              </div>

            ))}

          </div>

        </Container>

        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      </section>
    </MotionWrapper>
  );
}