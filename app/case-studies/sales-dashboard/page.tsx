import Container from "@/components/layout/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SalesDashboardPage() {
  return (
    <main className="section-padding">

      <Container className="max-w-6xl">

        {/* HERO */}

        <section className="mb-28">

          <p className="font-semibold tracking-widest text-primary uppercase">
            SQL-BI Case Study
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight lg:text-6xl">
            Retail Sales Analytics & Business Intelligence Dashboard
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            An end-to-end project focused on transforming raw retail sales data into meaningful business intelligence through SQL and Power BI. 
          </p>

          {/* Technologies */}

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "SQL",
              "MySQL",
              "Power BI",
              "DAX",
              "Excel",
              "GitHub",
            ].map((tool) => (

              <span
                key={tool}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium"
              >
                {tool}
              </span>

            ))}

          </div>

          {/* Divider */}

          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://github.com/eniolamary/Retail-Sales-Dashboard"
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
              Retail businesses generate large volumes of transactional data every day, 
              yet valuable insights often remain hidden without effective analysis and visualization. 
              This project demonstrates an end-to-end business intelligence workflow by transforming 
              raw sales data into meaningful business insights using SQL and Power BI.
            </p>

            <p>
              The dataset was first cleaned and analysed using SQL to uncover trends in sales performance, 
              customer purchasing behaviour, product performance, and regional revenue distribution. 
              These insights were then presented through an interactive Power BI dashboard, 
              enabling stakeholders to monitor key performance indicators, identify business opportunities, 
              and support data-driven decision-making.
            </p>

          </div>

        </section>

        {/* BUSINESS PROBLEM */}

        <section className="mb-24">

          <h2 className="text-4xl font-bold">
            Business Problem
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            The retail business possessed large amounts of transactional sales data but lacked a structured reporting system capable of converting that information into actionable insights. 
            Decision-makers had limited visibility into customer behaviour, product performance, sales trends, and regional performance, making it difficult to identify growth opportunities and optimise business strategy.

            Without an interactive reporting solution, monitoring business performance required manual analysis, resulting in slower decision-making and reduced operational efficiency. 
            The objective of this project was to analyse historical sales data, uncover meaningful business patterns, and develop an interactive dashboard that would provide stakeholders with a clear and accessible overview of business performance.
          </p>

        </section>

        {/* PROJECT OBJECTIVES */}

        <section className="mb-28">

          <h2 className="text-4xl font-bold">
            Project Objectives
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              "Clean and prepare raw sales data using SQL.",
              "Analyse customer purchasing behaviour and sales performance.",
              "Identify top-performing products, customer segments, and regions.",
              "Explore monthly, quarterly, and daily sales trends.",
              "Build an interactive Power BI dashboard for business reporting.",
              "Generate practical recommendations to improve business performance.",
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
                <p className="text-sm text-muted-foreground">
                    Industry
                </p>

                <h3 className="mt-3 text-3xl font-bold text-primary">
                    Retail Sales
                </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Dataset
                </p>

                <h3 className="mt-3 text-3xl font-bold text-primary">
                    7,000+
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Customer Records
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Features
                </p>

                <h3 className="mt-3 text-3xl font-bold text-primary">
                    15
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Variables
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Project Type
                </p>

                <h3 className="mt-3 text-2xl font-bold text-primary">
                    Business Intelligence
                </h3>
                </div>

            </div>

        </section>

        {/* DATASET */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Dataset
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

                <p>
                The dataset consisted of customer demographic information,
                Product category, Sales amount, Customer segment,
                Region, customer ratings, and Quantity sold.
                These features provided a comprehensive view of customer
                behaviour and served as the foundation for comprehensive business reporting.
                </p>

                <p>
                Before conducting the analysis, the raw sales dataset was cleaned and standardised to improve data quality and ensure accurate reporting. 
                The objective was to eliminate inconsistencies that could affect SQL queries and Power BI visualisations.
                </p>

            </div>

        </section>

        {/* DATA CLEANING */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Data Cleaning & Standardization
            </h2>

            <div className="mt-10 grid gap-6">

                {[
                {
                    title: "Duplicate Record Removal",
                    description:
                    "Duplicate transactions were identified using the ROW_NUMBER() window function by comparing records across key transactional attributes, including product details, customer demographics, sales values, ratings, and reviews. Only the first occurrence of each duplicate record was retained, ensuring every transaction represented a unique sale.",
                },
                {
                    title: "Data Validation",
                    description:
                    "The numerical columns sales_price, quantity, and total_sales were validated to identify missing values and negative numbers that could distort financial calculations and business insights.",
                },
                {
                    
                  title: "Data Standardisation",
                    description:
                    "The original order_date column was stored as text and therefore unsuitable for chronological analysis. Using SQL date conversion functions, the values were converted into a proper DATE format before replacing the original column.",
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

        {/* SQL ANALYSIS */}

        <section className="mb-28">

          <h2 className="text-4xl font-bold">
            SQL Analysis
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              Following data preparation, SQL was used to perform comprehensive
              exploratory and business analysis across the retail sales dataset.
              Queries were designed to answer key business questions surrounding
              revenue generation, customer purchasing behaviour, product
              performance, regional sales, customer satisfaction, shipping
              performance, and time-based sales trends.
            </p>

            <p>
              The analysis made extensive use of SQL features including
              aggregations, CASE statements, Common Table Expressions (CTEs),
              window functions, ranking functions, date functions, and customer
              segmentation techniques to transform transactional data into
              actionable business intelligence.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {[
              {
                title: "Business Performance",
                description:
                  "Calculated overall KPIs including total orders, total revenue, quantity sold, average order value, and the number of unique products sold to establish baseline business performance.",
              },

              {
                title: "Revenue Analysis",
                description:
                  "Evaluated revenue contribution across product categories, individual products, and sales locations while identifying the highest and lowest performing products.",
              },

              {
                title: "Customer Behaviour",
                description:
                  "Analysed purchasing behaviour across gender, age groups, product categories, and customer segments to identify high-value customer groups and spending patterns.",
              },

              {
                title: "Customer Segmentation",
                description:
                  "Segmented customers into Low, Medium, and High-value spending tiers using SQL window functions (NTILE) to support targeted business strategies.",
              },

              {
                title: "Regional Performance",
                description:
                  "Compared sales across different locations and evaluated domestic versus international shipping performance to identify the strongest and weakest performing markets.",
              },

              {
                title: "Shipping Analysis",
                description:
                  "Explored shipping charge distributions and examined how shipping costs influenced order volume and overall revenue generation.",
              },

              {
                title: "Customer Satisfaction",
                description:
                  "Compared customer ratings with product sales to identify highly rated products with low sales potential as well as products generating high revenue despite lower customer ratings.",
              },

              {
                title: "Time Series Analysis",
                description:
                  "Investigated daily, weekly, monthly, and seasonal sales trends using SQL date functions and window functions to uncover purchasing patterns over time.",
              },

            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8">

            <h3 className="text-xl font-semibold text-primary">
              Outcome
            </h3>

            <p className="mt-4 leading-8 text-muted-foreground">
              The SQL analysis converted thousands of raw transaction records into
              meaningful business insights by revealing customer purchasing
              patterns, revenue drivers, product performance, regional trends,
              customer satisfaction metrics, and seasonal sales behaviour. These
              analytical outputs formed the foundation of the interactive Power BI
              dashboard and informed the business recommendations presented later
              in the project.
            </p>

          </div>

        </section>

        {/* POWER BI DASHBOARD */}

        <section className="mb-28">

          <h2 className="text-4xl font-bold">
            Power BI Dashboard
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              Following the SQL analysis, the analytical results were transformed
              into an interactive Power BI dashboard designed to support business
              decision-making. The dashboard provides stakeholders with a clear,
              intuitive, and interactive view of overall business performance,
              enabling users to explore sales trends, customer behaviour, product
              performance, and regional insights without directly querying the
              underlying database.
            </p>

            <p>
              The dashboard was designed with a business audience in mind,
              presenting complex analytical findings through easy-to-understand
              visualisations, KPI cards, and interactive reports.
            </p>

          </div>

        </section>

        {/* OVERVIEW DASHBOARD */}

        <section className="mb-28">

            <h2 className="text-3xl font-bold">
                Executive Overview Dashboard
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">

                The overview dashboard provides a high-level summary of business
                performance through key performance indicators and interactive
                visualisations. Stakeholders can quickly monitor total revenue,
                order volume, customer activity, product performance, and overall
                sales trends from a single screen.

            </p>

            <div className="mt-10 flex justify-center">

                <Image
                    src="/images/case-studies/sales-dashboard/Overview.PNG"
                    alt="Executive Overview Dashboard"
                    width={700}
                    height={450}
                    className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-xl"
                />

            </div>

        </section>

        {/* SALES ANALYSIS */}

        <section className="mb-28">

            <h2 className="text-3xl font-bold">
                Sales Performance Analysis
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">

                This dashboard explores sales performance in greater detail by
                analysing customer demographics, product categories, geographical
                performance, and purchasing trends. Interactive charts allow users
                to compare revenue across customer groups, identify high-performing
                products, and evaluate regional sales performance.

            </p>

            <div className="mt-10 flex justify-center">

                <Image
                    src="/images/case-studies/sales-dashboard/Analysis.PNG"
                    alt="Sales Analysis Dashboard"
                    width={700}
                    height={450}
                    className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-xl"
                />

            </div>

        </section>

        {/* BUSINESS INSIGHTS */}

        <section className="mb-28">

            <h2 className="text-3xl font-bold">
                Business Insights & Recommendations
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">

                The final dashboard consolidates the analytical findings into
                actionable business insights and strategic recommendations.
                Rather than simply presenting data, this report highlights key
                opportunities for improving customer engagement, product
                performance, marketing strategy, and regional growth.

            </p>

            <div className="mt-10 flex justify-center">

                <Image
                    src="/images/case-studies/sales-dashboard/Insights.PNG"
                    alt="Business Insights Dashboard"
                    width={700}
                    height={450}
                    className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-xl"
                />

            </div>

        </section>

        {/* BUSINESS RECOMMENDATIONS */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Business Recommendations
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

                {[
                "Increase visibility and marketing for highly rated products with low sales volume.",
                "Develop targeted campaigns for high-value male clothing customers aged 31–35.",
                "Schedule major promotions on Fridays to maximise peak purchasing activity.",
                "Replicate Sydney's successful sales strategies across lower-performing regions.",
                "Maintain balanced inventory planning due to relatively stable demand across quarters.",
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

        {/* CHALLENGES ENCOUNTERED */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Challenges Encountered
            </h2>

            <div className="mt-10 grid gap-6">

                {[
                {
                    title: "Data Quality Issues",
                    description:
                    "The raw dataset contained duplicate records and inconsistent date formats that required cleaning before any meaningful analysis could be performed. Ensuring data quality was essential to producing reliable SQL queries and accurate dashboard metrics.",
                },
                {
                    title: "Designing Business-Focused Queries",
                    description:
                    "Rather than simply retrieving data, SQL queries needed to answer practical business questions. Structuring analyses around customer behaviour, revenue generation, product performance, and sales trends required careful planning and iterative refinement.",
                },
                {
                    title: "Dashboard Design",
                    description:
                    "Presenting large amounts of analytical information in a clear and intuitive dashboard required balancing visual simplicity with meaningful business insights. The dashboard was refined to improve readability while maintaining interactivity.",
                },
                ].map((item) => (

                <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-card p-7"
                >

                    <h3 className="text-xl font-semibold">
                        {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                        {item.description}
                    </p>

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

                    This project strengthened my understanding of how SQL extends
                    beyond querying data to become a powerful analytical tool for
                    solving real business problems. I gained valuable experience in
                    structuring datasets, developing meaningful business metrics,
                    and translating analytical findings into interactive Power BI
                    dashboards.

                </p>

                <p>

                    More importantly, the project reinforced the importance of
                    presenting technical analysis in a way that supports business
                    decision-making. Building dashboards that communicate clear,
                    actionable insights is just as valuable as writing efficient SQL
                    queries.

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
                Python and machine learning to predict customer spending,
                evaluate multiple regression models, and generate
                data-driven business recommendations.

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