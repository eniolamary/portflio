import Container from "../layout/container";
import MotionWrapper from "../animations/MotionWrapper";

export default function About() {
  return (
    <MotionWrapper>
      <section
        id="about"
        className="section-padding"
      >
        <Container>

          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <p className="mb-4 text-primary font-semibold">
                ABOUT ME
              </p>

              <h2 className="text-4xl font-bold">
                Passionate about solving business problems with data.
              </h2>

              <p className="mt-8 leading-8 text-muted-foreground">
                I'm Mary Eniola, a Data Analyst with a growing
                specialization in Artificial Intelligence and
                Machine Learning. I enjoy transforming raw,
                messy datasets into meaningful insights that
                support smarter business decisions.
              </p>

              <p className="mt-6 leading-8 text-muted-foreground">
                My experience includes data cleaning, exploratory
                data analysis, interactive dashboards, predictive
                modeling, and communicating technical findings in
                a way that stakeholders can understand and use.
              </p>

            </div>

            {/* RIGHT */}

            <div className="rounded-3xl border border-white/10 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl">

              <h3 className="text-2xl font-bold">
                Mary Eniola Olalere
              </h3>

              <div className="mt-8 space-y-5">

                <Info
                  label="Certification"
                  value="ALX Data Science"
                />

                <Info
                  label="Focus"
                  value="Data Analytics & Machine Learning"
                />

                <Info
                  label="Availability"
                  value="Open to Remote Opportunities"
                />

              </div>

            </div>

          </div>

        </Container>

        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      </section>
      
    </MotionWrapper>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-white/10 pb-3">

      <span className="text-muted-foreground">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>

    </div>
  );
}
