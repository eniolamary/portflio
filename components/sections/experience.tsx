import Container from "../layout/container";
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
} from "lucide-react";
import MotionWrapper from "../animations/MotionWrapper";

const timeline = [
  {
    icon: BriefcaseBusiness,
    title: "Independent Data Analytics Projects",
    subtitle: "2025 – Present",
    description:
      "Built end-to-end analytics projects using Excel, SQL, Power BI, Python, AI, and Machine Learning. My work includes data cleaning, exploratory data analysis, dashboard development, forecasting, and predictive modeling.",
  },

  {
    icon: Award,
    title: "ALX Data Science Program",
    subtitle: "Certificate of Achievement",
    description:
      "Completed an intensive data science program covering Python, SQL, statistics, machine learning, data visualization, and real-world analytical workflows.",
  },

  {
    icon: GraduationCap,
    title: "B.Sc. Agricultural Economics",
    subtitle: "University of Ibadan",
    description:
      "Developed strong analytical, statistical, and research skills through coursework focused on economics, data interpretation, and decision-making.",
  },
];

export default function Experience() {
  return (
    <MotionWrapper>
      <section
        id="experience"
        className="section-padding"
      >
        <Container>

          <div className="mb-16 text-center">

            <p className="font-semibold text-primary">
              EXPERIENCE & EDUCATION
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              My learning journey and professional development.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted-foreground">
              Every project, certification, and educational experience
              has contributed to building my skills in solving business
              problems through data.
            </p>

          </div>

          <div className="space-y-8">

            {timeline.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                 className="rounded-3xl border border-white/10 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
                >

                  <div className="flex gap-6">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">

                      <Icon size={28} />

                    </div>

                    <div>

                      <p className="text-sm text-primary">
                        {item.subtitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-8 text-muted-foreground">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </Container>

        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      </section>
    </MotionWrapper>
  );
}