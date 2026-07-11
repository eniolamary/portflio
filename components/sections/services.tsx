import Container from "../layout/container";
import {
  BarChart3,
  LayoutDashboard,
  BrainCircuit,
  Database,
} from "lucide-react";
import MotionWrapper from "../animations/MotionWrapper";

const services = [
  {
    title: "Data Cleaning & Preparation",
    description:
      "Clean, organize, and prepare complex datasets for reliable reporting and advanced analytics.",
    icon: Database,
  },
  {
    title: "Data Analysis & Insights",
    description:
      "Transform raw datasets into meaningful insights that support confident business decisions.",
    icon: BarChart3,
  },
  {
    title: "Dashboard Development",
    description:
      "Build interactive Power BI and Excel dashboards that communicate performance clearly.",
    icon: LayoutDashboard,
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Develop predictive models for forecasting, customer analytics, and smarter decision-making.",
    icon: BrainCircuit,
  }, 
];

export default function Services() {
  return (
    <MotionWrapper>
      <section id="services" className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <p className="font-semibold text-primary">
              SERVICES
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              How I help businesses unlock value from data.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-8">
              From cleaning messy datasets to building dashboards and predictive
              models, I deliver data solutions that help businesses make informed
              decisions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-card p-6"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              );
            })}

          </div>
        </Container>
      </section>
    </MotionWrapper>
  );
}

<div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />