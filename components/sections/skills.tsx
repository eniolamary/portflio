import Container from "../layout/container";
import MotionWrapper from "../animations/MotionWrapper";

const techSkills = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Machine Learning",
  "Artificial Intelligence",
  "Jupyter Notebook",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Git & GitHub",
];

const analyticsSkills = [
  "Data Cleaning",
  "Exploratory Data Analysis",
  "Dashboard Development",
  "Data Visualization",
  "Feature Engineering",
  "Predictive Modeling",
  "Statistical Analysis",
  "Business Reporting",
];

const softSkills = [
  "Communication",
  "Critical Thinking",
  "Problem Solving",
  "Stakeholder Reporting",
  "Attention to Detail",
  "Time Management",
  "Team Collaboration",
  "Continuous Learning",
];

export default function Skills() {
  return (
    <MotionWrapper>
      <section id="skills" className="section-padding">
        <Container>

          <div className="mb-16 text-center">

            <p className="font-semibold text-primary">
              SKILLS
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              The tools and skills I use to deliver results.
            </h2>

          </div>

          <SkillCategory
            title="AI & Data Technologies"
            items={techSkills}
          />

          <SkillCategory
            title="Data Analytics"
            items={analyticsSkills}
          />

          <SkillCategory
            title="Professional Skills"
            items={softSkills}
          />

        </Container>
      </section>
    </MotionWrapper>
  );
}

function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-14">

      <h3 className="mb-6 text-2xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4">

        {items.map((item) => (

          <span
            key={item}
            className="rounded-full border border-white/10 bg-card px-5 py-3 transition hover:border-primary hover:-translate-y-1"
          >
            {item}
          </span>

        ))}

      </div>

    </div>
  );
}

<div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />