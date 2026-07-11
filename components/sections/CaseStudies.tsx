import Image from "next/image";
import Container from "../layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const featuredProjects = [
  {
    title: "Customer Analytics & Machine Learning",
    image: "/images/projects/customer-analytics.png",
    problem:
      "Built a machine learning pipeline to predict customer spending and identify the strongest drivers of purchasing behavior.",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Retail Sales Dashboard",
    image: "/images/projects/sales-dashboard.png",
    problem:
      "Designed an interactive Power BI dashboard after cleaning and transforming sales data with SQL.",
    tools: [
      "SQL",
      "Power BI",
      "DAX",
      "Excel",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Excel Data Cleaning",
    image: "/images/projects/excel-cleaning.png",
    problem:
      "Prepared messy spreadsheet data for reporting through cleaning, validation, and standardization.",
    tools: [
      "Excel",
      "Pivot Tables",
      "Charts",
      "Data Cleaning",
    ],
    github: "#",
    demo: "#",
  },
];

const upcomingProjects = [
  {
    title: "Time Series Forecasting",
    image: "/images/projects/forecasting.jpg",
  },
  {
    title: "Deep Learning",
    image: "/images/projects/deep-learning.jpg",
  },
  {
    title: "Natural Language Processing",
    image: "/images/projects/nlp.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="section-padding">
      <Container>

        <div className="mb-16 text-center">

          <p className="font-semibold text-primary">
            FEATURED CASE STUDIES
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Real projects solving real business problems.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground leading-8">
            Every project demonstrates my approach to solving
            business challenges using data analysis, dashboards,
            and machine learning.
          </p>

        </div>

        {/* Featured Projects */}

        <div className="space-y-10">

          {featuredProjects.map((project) => (

            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-card"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={700}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-muted-foreground">
                  {project.problem}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tools.map((tool) => (

                    <span
                      key={tool}
                      className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm"
                    >
                      {tool}
                    </span>

                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <Button>

                    View Case Study

                    <ArrowRight className="ml-2 h-4 w-4" />

                  </Button>

                  <Button variant="outline">

                    <FaGithub className="mr-2 h-4 w-4" />

                    Source Code

                  </Button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Upcoming */}

        <div className="mt-24">

          <h2 className="mb-8 text-3xl font-bold">

            Coming Soon

          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {upcomingProjects.map((project) => (

              <div
                key={project.title}
                className="overflow-hidden rounded-3xl border border-dashed border-white/10 bg-card"
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-52 w-full object-cover opacity-60"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold">

                    {project.title}

                  </h3>

                  <p className="mt-4 text-muted-foreground">

                    Currently in development.

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}