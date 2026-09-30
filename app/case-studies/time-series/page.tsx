import Container from "@/components/layout/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TimeSeriesForecastPage() {
  return (
    <main className="section-padding">
      <Container className="max-w-6xl">

        {/* HERO */}
        <section className="mb-28">
          <p className="font-semibold tracking-widest text-primary uppercase">
            Power BI & Python Case Study
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight lg:text-6xl">
            Time Series Sales Forecast
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            Forecasting future retail sales using historical sales, inventory,
            and pricing data with Python, machine learning, and Power BI.
          </p>

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Python",
              "Pandas",
              "Scikit-learn",
              "Time Series Forecasting",
              "Random Forest",
              "Power BI",
              "Feature Engineering",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/eniolamary/Time-Series-Sales-Forecast"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                View GitHub
              </Button>
            </a>

            <Link href="/">
              <Button variant="outline">
                ← Back to Portfolio
              </Button>
            </Link>
          </div>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold">
            Project Overview
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              This project focused on forecasting future retail sales using
              historical sales data alongside inventory and pricing information.
              The goal was to build a machine learning forecasting workflow that
              could provide useful short-term demand estimates.
            </p>

            <p>
              Python was used for data preparation, feature engineering,
              model development, and evaluation, while Power BI was used to
              communicate the final forecast and translate the results into
              business insights.
            </p>
          </div>
        </section>

        {/* BUSINESS PROBLEM */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold">
            Business Problem
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Retail businesses need reliable estimates of future demand to support
            inventory planning, purchasing, and operational decisions. Historical
            sales patterns, inventory levels, and pricing changes can provide
            useful signals for predicting upcoming demand.
          </p>
        </section>

        {/* OBJECTIVES */}
        <section className="mb-28">
          <h2 className="text-4xl font-bold">
            Project Objectives
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Prepare and structure historical sales data",
              "Create lag and rolling-window features",
              "Incorporate inventory and price variables",
              "Train and compare forecasting models",
              "Generate a 21-day sales forecast",
              "Present forecast insights in Power BI",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT SNAPSHOT */}
        <section className="mb-28">
          <h2 className="text-4xl font-bold">
            Project Snapshot
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-sm text-muted-foreground">Industry</p>
              <h3 className="mt-3 text-3xl font-bold text-primary">
                Retail
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-sm text-muted-foreground">Forecast Horizon</p>
              <h3 className="mt-3 text-3xl font-bold text-primary">
                21 Days
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-sm text-muted-foreground">Primary Model</p>
              <h3 className="mt-3 text-2xl font-bold text-primary">
                Random Forest
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-sm text-muted-foreground">Focus</p>
              <h3 className="mt-3 text-2xl font-bold text-primary">
                Demand Forecasting
              </h3>
            </div>

          </div>
        </section>

        {/* APPROACH */}
        <section className="mb-28">
          <h2 className="text-4xl font-bold">
            Forecasting Approach
          </h2>

          <div className="mt-10 grid gap-6">
            {[
              {
                title: "Feature Engineering",
                description:
                  "Created lag features and rolling averages from historical sales while incorporating price, inventory, and their changes.",
              },
              {
                title: "Model Development",
                description:
                  "Developed and evaluated multiple machine learning approaches for short-term sales forecasting.",
              },
              {
                title: "Model Evaluation",
                description:
                  "Compared forecasting performance using MAE, RMSE, and MAPE across the validation data.",
              },
              {
                title: "21-Day Forecast",
                description:
                  "Generated a 21-day future sales forecast and visualised expected demand patterns in Power BI.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-card p-7"
              >
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* POWER BI DASHBOARD */}
        <section className="mb-28">
          <h2 className="text-4xl font-bold">
            Power BI Forecast Dashboard
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            The final forecast was presented through an interactive Power BI
            dashboard showing expected demand, forecast trends, weekly patterns,
            and comparisons with recent sales performance.
          </p>

          <div className="mt-10 flex justify-center">
            <Image
              src="/images/case-studies/time-series/forecast-dashboard.png"
              alt="Time Series Sales Forecast Power BI Dashboard"
              width={1200}
              height={700}
              className="w-full rounded-2xl border border-white/10 shadow-xl"
            />
          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section className="mb-28">
          <h2 className="text-4xl font-bold">
            Key Insights
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Forecasted sales showed variation across the 21-day horizon.",
              "Historical sales patterns provided useful signals for short-term demand prediction.",
              "Inventory and pricing variables were incorporated alongside historical sales behaviour.",
              "The forecast can support short-term inventory and operational planning.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-card p-6"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* LESSONS LEARNED */}
        <section className="mb-28">
          <h2 className="text-4xl font-bold">
            Lessons Learned
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              This project strengthened my understanding of time series
              forecasting, feature engineering, and machine learning model
              evaluation.
            </p>

            <p>
              It also reinforced the importance of translating predictive
              modelling results into clear business insights through effective
              data visualisation.
            </p>
          </div>
        </section>

        {/* NEXT PROJECT */}
        <section className="mb-16 rounded-3xl border border-primary/20 bg-primary/5 p-10">
          <p className="font-semibold text-primary uppercase tracking-widest">
            Next Case Study
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Customer Analytics & Machine Learning
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">
            Explore how customer purchasing behaviour was analysed using
            Python and machine learning to predict customer spending and
            generate data-driven business recommendations.
          </p>

          <div className="mt-10">
            <Link href="/case-studies/customer-analytics">
              <Button>
                Read Case Study →
              </Button>
            </Link>
          </div>
        </section>

      </Container>
    </main>
  );
}
