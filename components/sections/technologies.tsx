import Container from "../layout/container";
import MotionWrapper from "../animations/MotionWrapper";

const tech = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Machine Learning",
  "Artificial Intelligence",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Git",
  "GitHub",
];

export default function Technologies() {
  return (
    <MotionWrapper>
      <section className="py-24">
        <Container>

          <div className="text-center mb-12">

            <p className="font-semibold text-primary">
              TECHNOLOGIES
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Technologies I work with every day.
            </h2>

          </div>

          <div className="flex flex-wrap justify-center gap-4">

            {tech.map((item) => (

              <div
                key={item}
                className="rounded-full border border-white/10 bg-card px-6 py-3 hover:border-primary transition"
              >
                {item}
              </div>

            ))}

          </div>

        </Container>

        <div className="rounded-3xl border border-white/10 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl" />
        
      </section>
    </MotionWrapper>
  );
}